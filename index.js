// let firstname = "davidson", 

const { ViewModule } = require("@material-ui/icons")




let data = [
    {name: "davidson"},
    {name: "cynthia"},
    {name: "joseph"}
]
function getAge(yearOfBirth) {
    let currentYear = new Date().getFullYear()

    return{
        value: currentYear - yearOfBirth
    }
}

module.exports={
    data,
    getAge: getAge
}
