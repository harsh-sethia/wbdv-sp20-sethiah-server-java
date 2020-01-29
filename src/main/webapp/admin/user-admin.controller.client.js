

(function() {
    let userService = new AdminUserServiceClient()

    let $userList
    let $usernameFld
    let $passwordFld
    let $firstNameFld
    let $lastNameFld
    let $createBtn
    let $updateBtn
    let $adminTable
    let $roleFld
    let $tableBody

    let users = []

    function deleteUser(index) {
        let user = users[index]
        let userId = user._id

        userService.deleteUser(userId)
            .then(response => {
                users.splice(index, 1)
                findAllUsers()
                renderUsers()
            })
    }

    function createUser() {
        const newUser = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            role: $roleFld.val()
        }
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")

        userService.createUser(newUser)
            .then((actualUser) => {
                // users.push(actualUser) -NN
                //renderUsers() - NN
                findAllUsers()
            })
    }

    let currentUserIndex = -1
    function editUser(index) {
        currentUserIndex = index
        let user = users[index]
        let userId = user._id

        userService.findUserById(userId)
            .then(actualUser => {
                $usernameFld.val(actualUser.username)
                $firstNameFld.val(actualUser.firstName)
                $lastNameFld.val(actualUser.lastName)
                $roleFld.val(actualUser.role)

            })
    }

    function updateUser() {
        const updatedUser = {
            username: $usernameFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            role: $roleFld.val()
        }
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
        updatedUser._id = users[currentUserIndex]._id

        userService.updateUser(updatedUser._id, updatedUser)
            .then((actualUser) => {
                findAllUsers()
            })
    }

    function renderUsers() {
        $tableBody.empty()
        for(let u in users) {
            let user = users[u]

            $body = $(`<tbody class="wbdv-tbody">`)
            $row = $(`<tr class="wbdv-user wbdv-hidden">`)
            $td= $(`<td>`)

            $deleteBtn = $(`<i id="wbdv-remove" class="fa-2x fa fa-times wbdv-remove"></i>`)
            $deleteBtn.click(() => deleteUser(u))

            $editBtn = $(`<i id="wbdv-edit" class="fa fa-pencil wbdv-edit"></i>`)
            $editBtn.click(() => editUser(u))

            $col1 = $td.html(user.username)
            $td = $(`<td>`)
            $col2 = $td.html(`&nbsp;`)
            $td = $(`<td>`)
            $col3 = $td.html(user.firstName)
            $td = $(`<td>`)
            $col4 = $td.html(user.lastName)
            $td = $(`<td>`)
            $col5 = $td.html(user.role)
            $td = $(`<td>`)
            $col6 = $td.html($deleteBtn.append($editBtn))
            $td = $(`<td>`)

            $renderRow = $row.append($col1).append($col2).append($col3).append
            ($col4).append($col5).append($col6)
            $renderBody = $body.html($renderRow)

            $adminTable.append($renderRow)
        }
    }
    function findAllUsers() {
        userService
            .findAllUsers()
            .then(theusers => {
                users = theusers
                renderUsers()
            })
    }

    function searchUser(){

    }

    function main() {
        $userList = $("#userList")
        $adminTable = $("#adminTable")
        $usernameFld = $("#usernameFld")
        $passwordFld = $("#passwordFld")
        $firstNameFld = $("#firstNameFld")
        $lastNameFld = $("#lastNameFld")
        $roleFld = $("#roleFld")
        $tableBody = $(".wbdv-tbody")

        $createBtn = $(".wbdv-create")
        $createBtn.click(createUser)

        $updateBtn = $(".wbdv-update")
        $updateBtn.click(updateUser)

        $searchBtn = $(".wbdv-update")
        $searchBtn.click(searchUser)

        userService
            .findAllUsers()
            .then(theusers => {
                users = theusers
                renderUsers()
            })
    }
    $(main)
})()
