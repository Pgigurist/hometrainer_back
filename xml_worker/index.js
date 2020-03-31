const worker = require('xml2js')
const fs = require('fs')

const parser = new worker.Parser()

function readChecklist(name, callback){
    fs.readFile(`./public/lessons/${name}.xml`, function(err, data){
        if(err){
            //console.log(`./public/lessons/${name}.xml`)
            console.log(err)
        }else{
            parser.parseString(data,function(err, result){
                console.log(result)
                callback(result.xml.checklist)
            })
        }
    })
}

exports.readChecklist = readChecklist