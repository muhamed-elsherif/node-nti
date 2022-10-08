const fs = require ("fs")



const readFromJson = (file) => {
    try{
        myResult = JSON.parse(fs.readFileSync(file))
    }
    catch (e){

        console.log(e.message)
        myResult = []
        console.log(myResult)

    }
}

const writeToJson = (data) =>{

    try {
        JSON.stringify(fs.writeFileSync("data.json",data))
    }
    catch (e){
        console.log (e)
    }
}

module.exports = {
 
 readFromJson,
 writeToJson

}