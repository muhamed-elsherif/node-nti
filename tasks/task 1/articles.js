//html items
const addArticle = document.querySelector("#add") 
const showAll=document.querySelector("#showAll")
const singleArticle = document.querySelector("#singleArticle")
const editArticle = document.querySelector("#edit")
// console.log(editUserForm)
//user details
const articleHeads = ["name", "content"]
//read from localstorage
const readFromStorage = (key="articles") => JSON.parse(localStorage.getItem(key))||[]
//write to localstorage
const writeToStorage = (articles, key="articles") => localStorage.setItem(key, JSON.stringify(articles))
//create spcial element
const createMyOwnEle = (createdElement, parent, txt=null, classes=null) =>{
    const myElement= document.createElement(createdElement)
    parent.appendChild(myElement)
    myElement.textContent=txt
    myElement.classList=classes
    return myElement
}
//delete user 
const del = (allArticles, index) =>{
    allArticles.splice(index, 1)
    writeToStorage(allArticles)
    drawAll(allArticles)
}
//showUserAction
const show = (article)=>{
    writeToStorage(article, "single")
    window.location.href = "single.html"
}
//editUserAction
const editUserAction= (article, index)=>{
    writeToStorage(index,"editId")
    // writeToStorage(user,"editUser")
    window.location.href = "edit.html"
}
//drawAllItems 
const drawAll = (allArticles) =>{
    showAll.innerHTML=""
    allArticles.forEach((user, index)=>{
        const tr = createMyOwnEle("tr", showAll)
        createMyOwnEle("td", tr, user.id)
        createMyOwnEle("td", tr, user.name)
        const td = createMyOwnEle("td", tr)
        const showBtn = createMyOwnEle("button", td, "Show", "btn btn-primary mx-2")
        showBtn.addEventListener("click", ()=> show(user))
        const editBtn = createMyOwnEle("button", td, "edit", "btn btn-warning mx-2")
        editBtn.addEventListener("click", ()=> editUserAction(user, index))
        const delBtn = createMyOwnEle("button", td, "delete", "btn btn-danger mx-2")
        delBtn.addEventListener("click", ()=> del(allArticles, index))
    })
}
//Add Form
if(addArticle){
    addArticle.addEventListener("submit", function(e){
        e.preventDefault()
        const user = { id:Date.now() }
        articleHeads.forEach(head=> user[head] = this.elements[head].value)
        const users = readFromStorage()
        users.push(user)
        writeToStorage(users)
        addArticle.reset()
        window.location.href="index.html"
    })
}
//show all
if(showAll){
    const allUsers = readFromStorage()
    drawAll(allUsers)        
}
if(singleArticle){
    const articleData = readFromStorage("single")
    singleArticle.innerHTML= `<div class="row">
        <h1 class="col-12">Title: ${articleData.name}</h1> <br>
        <p class="col-12">Content: ${articleData.content}</p>
    </div> `
}

if(editArticle){
    const allUsers = readFromStorage()
    const userIndex = localStorage.getItem("editId")
    const user = allUsers[userIndex]
    articleHeads.forEach(head=> editArticle.elements[head].value = user[head])
    editArticle.addEventListener("submit", function(e){
        e.preventDefault()
        const user = { id: allUsers[userIndex].id}
        articleHeads.forEach(head=> user[head] = editArticle.elements[head].value )
        allUsers[userIndex] = user
        writeToStorage(allUsers)
        window.location.href="index.html"        
    })
}