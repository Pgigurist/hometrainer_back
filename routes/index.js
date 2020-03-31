var express = require('express');
var router = express.Router();
var fs      = require('fs')
const xml_worker = require('../xml_worker')

const bcrypt = require('bcrypt-nodejs')
const models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
    const id = req.session.userId
    const login = req.session.userLogin
    
    console.log(`id: ${id} login: ${login}`)
 //  res.render('index', { title: 'Express' });
     fs.readFile('public/index.html', 'utf-8', (err, data)=>{
        res.writeHead(200, {'Content-type' : 'text/html'})
        if(!err){
            console.log(data)
            res.write(data)
            
        }else{
            res.write('error')
        }
        res.end()
    })
});
router.post('/ajax/getChecklist/', function(req, res, next){
   //console.log('get ajax req')
    //console.log(req.body.type)
    
    xml_worker.readChecklist(req.body.type, (data)=>{
        //console.log(data[0].exercise)
        res.json(JSON.stringify(data[0].exercise))
        res.end()
    })
})



router.post('/ajax/complitChecklist/', function(req, res, next){
    const id = req.session.userId
    const ulogin = req.session.userLogin
    
    console.log(`id: ${id}, login: ${ulogin}, type: ${req.body.type}`)
    if(!id || !ulogin){
        
        res.json({
            status: false,
            text: 'Зарегестрируйтесь или войдите, что бы получать награды!'
        })
    }else{
        models.User.findOne({
            login: ulogin
        }).then(user=>{
            
            if(!user){
                res.json({
                    status: false,
                    text: 'Зарегестрируйтесь или войдите, что бы получать награды!'
                })
            }else{
                console.log('flag 4')
                console.log(req.body.type)
                let award = ''
                switch(req.body.type){
                    case '03':
                        award = 'gold'
                        console.log('gold')
                        user.gold= user.gold+1
                        break
                case '02':
                        award = 'silver'
                        console.log('silver')
                        user.silver = user.silver+1
                        
                        break
                case '01':
                        award = 'bronze'
                        console.log('bronze')
                        user.bronze = user.bronze+1
                        
                        break
                default:
                        break
                }
                user.save()
                console.log(user)
                res.json({
                    award: award,
                    status: 'ok'
                })
            }
        })
    }
    
        
})

//POST is registration
router.post('/ajax/register/', (req, res)=>{
    
    const login = req.body.login
    const password = req.body.password
    const passwordConfirm = req.body.passwordConfirm
    
    if(!login || !password || !passwordConfirm){
        res.json({
            ok: false,
            error: 'Все поля должны быть заполнены',
            fields: ['login', 'password', 'passwordConfirm']
        })
    }else if(login.length < 3 || login.length > 16){
        res.json({
            ok: false,
            error: 'длина логина от 3 до 16 символов',
            fields: ['login']
        })
    }else if(password !== passwordConfirm){
        res.json({
            ok: false,
            error: 'пароли не овпадают',
            fields: ['password', 'passwordConfirm']
        })
    }else{
        models.User.findOne({
            login
        }).then(user =>{
            if(!user){
                bcrypt.hash(password, null, null, (err, hash)=>{
                    models.User.create({
                        login,
                        password: hash,
                    })
                    .then(user =>{
                        //console.log(user)
                        req.session.userId = user.id
                        req.session.userLogin = user.login
                        /*
                        models.Award.create({
                            userId: user.id,
                            gold: 0,
                            silver: 0,
                            bronze: 0
                        })
                        */
                        res.json({
                            ok: true,
                            user: {
                                    login: user.login,
                                    gold: user.gold,
                                    silver: user.silver,
                                    bronze: user.bronze
                                    
                                }
                        })
                    })
                    .catch(err =>{
                        console.log(err)
                        res.json({
                            ok: false,
                            error: 'имя занято',
                            fields: ['login']
                        })
                    })
                })
            }
        })
    }
})

//POST autorisation

router.post('/ajax/login/', (req, res)=>{
    const login = req.body.login
    const password = req.body.password
    //console.log('login')
    console.log(req.body)
    
    if(!login || !password){
        const fields = []
        
        if(!login) fields.push('login')
        if(!password) fields.push('password')
        //console.log('case 1')
        res.json({
            ok: false,
            error: 'Все поля должны быть заполнены',
            fields
        })
    }else{
        models.User.findOne({
            login: login
        }).then(user =>{
            if(!user){
                console.log('case 2')
                /*
                res.json({
                    ok: true,
                    error: 'пользователь подтвержден',
                })
                */
            }else{
                bcrypt.compare(password, user.password, (err, result)=>{
                    if(!result){
                        console.log('case 3')
                        console.log(err)
                        res.json({
                            ok: false,
                            error: 'логин и пароль не верны',
                        })
                    }else{
                        console.log('login success')
                        console.log('case 4')
                        console.log(user)
                        req.session.userId = user._id
                        req.session.userLogin = user.login
                        res.json({
                            ok: true,
                            error: 'пользователь подтвержден',
                            user: {
                                login: user.login,
                                gold: user.gold,
                                silver: user.silver,
                                bronze: user.bronze
                                
                            }
                        })
                    }
                })
            }
        }).catch(()=>{
            //console.log('case 5')
            res.json({
                ok: false,
                error: 'нет такого пользователя',
                fields: ['login', 'password']
            })
        })
    }
})

// GET for logout
router.get('/ajax/logout/', (req, res) => {
  if (req.session) {
    // delete session object
    req.session.destroy(() => {
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
