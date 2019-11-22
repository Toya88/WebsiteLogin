
// Password must have at least 8 characters but no more than 20; 
// Must contain at least one special charcter(!, @, #, $, %,
// Must contain at least one uppercase letter
// must contain at least one lowercase letter
// Must contain at least one number
// cannot contain spaces

// var username = document.getElementById("username").value

// var form = document.getElementById("form").value

function getInfo() 
{
event.preventDefault();
    var password = document.getElementById("password").value
        if (password.search(/[0-9]/) < 0) {
            alert("Password must  contain atleast 1 number");
            document.getElementById("message").innerText="Password must  contain atleast 1 number"
            return false;
            console.log('help');
            
        } else if (password.test(/[a-z]/) < 0) {
            document.getElementById("message").innerText="Password must contain at least one lowercase letter"
            return false;
        } else if  (password.test(/[A-Z]/)< 0) {
            document.getElementById("message").innerText="Password must contain at least one upprtcase letter"
            return false;
        } else if  (password.test(/[!\ @\ #\ $\ %\ &]/) < 0) {
            document.getElementById("message").innerText="Password must contain at least one lowercase letter"
            return false;
        }   

        document.getElementById("message").innerText="Login Successful"
        return true;
}