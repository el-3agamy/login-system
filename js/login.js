let userEmailLogin = document.querySelector(".userEmailLogin");
let userPasswordLogin = document.querySelector(".userPasswordLogin");
let btnLogin = document.querySelector(".btnLogin"); 


let usersList =JSON.parse(localStorage.getItem("users"));
console.log(usersList) ;


btnLogin.addEventListener("click" , function(){
   
let userByEmail = usersList.some(users => users.email === userEmailLogin.value);
let userBypass = usersList.some(users => users.password === userPasswordLogin.value);
    
    if(userByEmail&&userBypass){

        window.location.replace("home.html")
        
    }else if (userEmailLogin.value==="" || userPasswordLogin.value==="") {

       document.querySelector(".alertlogin2").classList.add("d-none");

       document.querySelector(".alertlogin1").classList.remove("d-none")

        
    }else if (!userByEmail || !userBypass){
       document.querySelector(".alertlogin1").classList.add("d-none");

        document.querySelector(".alertlogin2").classList.remove("d-none");
    }

    clear();
})


function clear (){
    userEmailLogin.value = "";
    userPasswordLogin.value = "";
}



