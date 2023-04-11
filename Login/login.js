let loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function(){
    let userId = document.querySelector(".user-id").value;
    let userPw = document.querySelector(".user-pw").value;

    if(userId === "admin" && userPw === "admin123"){
        location.href = "../Admin/admin.html";
    }else{
        
    }
})