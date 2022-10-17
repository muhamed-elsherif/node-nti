const deal = require("../controller/deal")

const db = "app/db/customers.json"


// Add Customer 
const addCustomer = (req,res)=>{
    res.render("add", {
        pageTitle:"Add Customer",
        title:"Add"
    })
}

const addMethod =  (req, res)=>{
    const customer = {id:Date.now(), ...req.query}
    const allCustomers = deal.readFromJson(db)
    allCustomers.push(customer)
    deal.writeToJson(allCustomers, db)
    res.redirect("/home")
}

// Show customers

const showAll = (req,res)=>{
    const allCustomers = deal.readFromJson(db)
    res.render("home", {
        pageTitle:"Home Page",
        allCustomers
    })
}

const single =(req,res)=>{
    let isFound =true
    const customerID = req.params.id
    const allCustomers=deal.readFromJson(db)
    const customerData = allCustomers.find(u=> u.id == customerID)
    if(!customerData) isFound=false
    res.render("account", {
        pageTitle:"Customer Account",
        customerData,
        isFound
    })
}


const addMoney = (req,res)=>{
    let isFound =true
    const customerID = req.params.id
    const allCustomers=deal.readFromJson(db)
    const customerData = allCustomers.find(u=> u.id == customerID)
    if(!customerData) isFound=false
    res.render("addMoney", {
        pageTitle:"Add Money",
        customerData,
        isFound
    })
}

const addMoneyMethod = (req,res)=>{
    let isFound =true
    const customerId = req.params.id
    const balance = req.params.number
    const allCustomers=deal.readFromJson(db)
    const customerData = allCustomers.findIndex(u=> u.id == customerId)
    if(customerData==-1) isFound=false
    else allCustomers[userData] = {id:customerId, ...req.body}    
    deal.writeToJson(allCustomers, db)
    res.redirect("/")
}

module.exports = {
    addCustomer, addMethod , showAll , single , addMoney ,addMoneyMethod
}