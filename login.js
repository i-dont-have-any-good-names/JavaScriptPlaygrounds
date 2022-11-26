var running = true;

while(running == true) {
    var loginIn = prompt("enter your user\n");
    if(loginIn == "carlos") {
        console.log("Welcome\n");
        var passwordIn = prompt("Enter your password\n");
        if(passwordIn == "golden") {
            console.log("Login secessful");
        } else {
            continue;
        }
    } else {
        continue
    }
    running == false
}