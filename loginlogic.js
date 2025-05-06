// $(document).ready(function () {

//     $("#logout").hide()
//     var usermail=localStorage.getItem("username")

//     if(usermail!=null){
//         $("#user").hide()
//         $("#loginuser").html(usermail)
//         $("#logout").show()
//     }

//     else{
//         $("#user").show()
//     }

// $("#logout").click(function(){

//     localStorage.removeItem("username")
//     localStorage.removeItem("password")
//     window.location.href=("signup.html")
// })

// })

  // Simulate login check
  let username = localStorage.getItem("username"); // Or however you’re storing user data

  if (username) {
    document.getElementById("userLoggedIn").style.display = "block";
    document.getElementById("userLoggedOut").style.display = "none";

    // Show only initials or short name
    let initials = username.trim().charAt(0).toUpperCase();
    document.getElementById("loginuser").innerText = initials;
  } else {
    document.getElementById("userLoggedIn").style.display = "none";
    document.getElementById("userLoggedOut").style.display = "block";
  }

  // Logout
  document.getElementById("logout")?.addEventListener("click", () => {
    localStorage.removeItem("username");
    location.reload();
  });

