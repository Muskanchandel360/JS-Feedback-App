let form = document.querySelector("form")
let select = document.querySelector("select")
let ul = document.querySelector("ul")
let textarea = document.querySelector("textarea")
let namee = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")


//console.log(form)
const saveReview = (e) => {
    e.preventDefault();
    let li = document.createElement("li")
    let h2 = document.createElement("h3")
    let h3 = document.createElement("h3")
    let h4 = document.createElement("h3")
    let h5 = document.createElement("h3")
    let p = document.createElement("h3")
    let delBtn = document.createElement("button")
    let callBtn = document.createElement("button")

    h2.innerText = "Name:"+ "  "  + namee.value
    h3.innerText = "Email:"+ "  "  + email.value
    h4.innerText = "Contact:"+ "  "  + phone.value
    h5.innerText = "User Type:"+ "  "  + select.value
    p.innerText = "Message:"+ "   "   + textarea.value
    delBtn.innerText = "Remove"
    callBtn.innerText= "Call User"

    li.appendChild(h2)
    li.appendChild(h3)
    li.appendChild(h4)
    li.appendChild(h5)
    li.appendChild(p)
    li.appendChild(delBtn)
    li.appendChild(callBtn)
    ul.appendChild(li)
    li.className = "list-group-item rounded-0 my-3"
    delBtn.className = " btn btn-danger rounded-0 btn-sm float-end"
    callBtn.className = "btn btn-success rounded-0 btn-sm"


    form.reset()
}
form.addEventListener("submit" , saveReview)

const removeFeedback = (e) => {
    if (e.target.className.includes("btn-danger")){
        let li = e.target.parentElement
        ul.removeChild(li)

    }

}

ul.addEventListener("click" ,removeFeedback)









