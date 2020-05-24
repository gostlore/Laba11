document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault();

   let registerForm = document.forms["msgF"];
   let userName = registerForm.elements["name"].value;
   let userMess = registerForm.elements["message"].value;



   let user = JSON.stringify({userName: userName, userMess: userMess});
   let request = new XMLHttpRequest();


    request.open("POST", "/*", true);   
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function () {


        let receivedUser = JSON.parse(request.response);
        console.log(receivedUser.userName, "-", receivedUser.userMess);   
    });

    
    let doc = document.getElementById('dialogue');
    let newMess = document.createElement('div');
    newMess.innerHTML = `${userName}: ${userMess}`;
    doc.appendChild(newMess);
    request.send(user);
});