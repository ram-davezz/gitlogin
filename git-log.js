class Check {
    static loginDetails() {
        var accountDetails = {
            101: { name: "user1", password: "userone"},
            102: { name: "user2", password: "usertwo"},
            103: { name: "user3", password: "userthree"},
            104: { name: "user4", password: "userfour"},
            105: { name: "user5", password: "userfive"},
        }
        return accountDetails
    }
    static login() {
        var username = document.querySelector("#usr").value;
        var password = document.querySelector("#pwd").value;
        try {
            if (isNaN(username)) throw "Not a valid account Number";
        }
        catch (err) {
            alert(err)
        }

        let data = Check.loginDetails();
        if (username in data) {
            let pwd = data[username].password;
            if (pwd == password) {
                alert("Successfull login");
                
            }
            else {
                alert("Incorrect Username or Password")
            }
        }
        else {
            alert("User doesnot exist")
        }

    }
}