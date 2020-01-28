alert("Hello from Java Script")
let username = "alice"
let salary = 1234
let tenured = true
const FACULTY = "FACULTY"
let alice = {
    username: username,
    "salary": salary,
    tenured: true,
    role: FACULTY
}

let users = [
alice, {username: "Dan"}, {username:'frank'}
]

users.push({username: "ed"})

for(let u=0; u<users.length; u++){
    console.log(users[u])
}

let $h1 = jQuery("#mainTitle")
// h1.remove()
$h1.html("User Not Admin").css("color", "blue")

let $students = $("<h1>Students</h1>")
let $body = $("body")
$body.append($students)

let $userList = $("#userList")
$userList.append("<li>Dan</li>")

let $ed = $("<li>")
$ed.append("Ed")
$ed.append("<button> delete </button>")
$userList.append($ed)

function renderUsers(){
$userList.empty()
for(let u in users) {
    let $userLi = $(`<li> ${users[u].username} </li>`)
    $userList.append($userLi)


}
}

renderUsers()

const createUser = () => {
const username = $usernameFld.val()
$usernameFld.val("")
const newUser = {
    username: username
}
users.push(newUser)
renderUsers()
}

let $createUserBtn = $("#createUser")
$createUserBtn.click(createUser)

let $usernameFld = $("#usernameFld")
$usernameFld.attr("placeholder", "username")

