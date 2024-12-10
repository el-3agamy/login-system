let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".userEmail");
let userPassword = document.querySelector(".userPassword");
let btn = document.querySelector(".btn");


// ...............................

let loginEmail = document.querySelector(".loginEmail");
let loginPass = document.querySelector(".loginPass");
let loginBtn = document.querySelector(".loginBtn")





let usersList = [];

if(localStorage.getItem("users") !== null){

   usersList = JSON.parse(localStorage.getItem("users"));
} 




btn.addEventListener("click" , function(){


    let isDuplicate = usersList.some((user)=> user.email === userEmail.value );
    
    if(userName.value === "" || userEmail.value === "" || userPassword.value === ""){

        document.querySelector(".alertSignup").classList.remove("d-none")
        document.querySelector(".alertDuplicatPassword").classList.add("d-none");



        clearInputs();
    }


    else if (isDuplicate){
       
        document.querySelector(".alertDuplicatPassword").classList.remove("d-none");
        document.querySelector(".alertSignup").classList.add("d-none");

        clearInputs();


        }
        
       
        else{

        document.querySelector(".alertSignup").classList.add("d-none");

        let userAccount = {
            name : userName.value ,
            email : userEmail.value ,
            password : userPassword.value
        }
    
        usersList.push(userAccount) ;
        localStorage.setItem("users"  , JSON.stringify(usersList));

            window.location.replace('login.html');


}
//  console.log(usersList);
    
    }
)

function clearInputs(){
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
}



var userEmailLogin=document.getElementById('.userEmailLogin');//login.html
var userPasswordLogin=document.getElementById('.userPasswordLogin');//login.html
var btnLogin=document.querySelector('.btnLogin')//login.html



function login(){
    usersList = JSON.parse(localStorage.getItem('users'));
    var userByEmail = usersList.find(users => users.uEmail === loginEmail.value);
    if(userByEmail){
        console.log("hey");
        
    }


}








