

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
                // users.push(actualUser) -NM
                //renderUsers()
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

            /*<tbody class="wbdv-tbody">
                    <tr class="wbdv-template wbdv-user wbdv-hidden">
                        <td class="wbdv-username">ada</td>
                        <td>&nbsp;</td>
                        <td class="wbdv-first-name">Ada</td>
                        <td class="wbdv-last-name">Lovelace</td>
                        <td class="wbdv-role">FACULTY</td>
                        <td class="wbdv-actions">
                    <span class="float-right">
                      <i id="wbdv-remove" class="fa-2x fa fa-times wbdv-remove"></i>
                      <i id="wbdv-edit" class="fa-2x fa fa-pencil wbdv-edit"></i>
                    </span>
                        </td>
                    </tr>
                    </tbody>*/

            $body = $(`<tbody class="wbdv-tbody">`)
            $row = $(`<tr class="wbdv-user wbdv-hidden">`)
            $td= $(`<td>`)

            $deleteBtn = $(`<i id="wbdv-remove" class="fa-2x fa fa-times wbdv-remove"></i>`)
            $deleteBtn.click(() => deleteUser(u))

            $editBtn = $(`<i id="wbdv-edit" class="fa fa-pencil wbdv-edit"></i>`)
            $editBtn.click(() => editUser(u))

            /*$span = $(`<span class="float-right"> </span>`)
            $span.html($deleteBtn)
            $span.html($editBtn)*/

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


            /*$body.append($row)
            $body.append($td).append(user.username)
            $body.append($td)
            $body.append(`&nbsp`)
            $body.append($td)
            $body.append(user.firstName)
            $body.append($td)
            $body.append(user.lastName)*/


            /*$li = $("<tr></tr>")
            $td = $("<td></td>")
            $tdc = $("</td>")

            $td.html(user.username)

            $li.html($td)

//            $li.append($tdc)

            $li.html($span)

            $li.append($td)
                        $li.append($deleteBtn)
                        $li.append($tdc)

                        $li.append($td)
                                    $li.append($editBtn)
                                    $li.append($tdc)*/



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

        userService
            .findAllUsers()
            .then(theusers => {
                users = theusers
                renderUsers()
            })
    }
    $(main)
})()
