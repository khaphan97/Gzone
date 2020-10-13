$(document).ready(function () {
  // ==========================
  // ==========================

  // Mobile Tablet - Nav
  $(".header__nav-container,.header__nav").hide();
  $(".header__mobile-navbtn").on("click", function () {
    // alert('something')
    $(".header__nav-container,.header__nav").fadeIn(500);
  });
  $(".close").on("click", function () {
    $(".header__nav-container,.header__nav").fadeOut(500);
  });
  $(".header__nav-container").click(function (e) {
    $(".header__nav-container,.header__nav").fadeOut(500);
  });

  //  Show login Modal
  $(".header__profile,.header__mobile-login").on("click", function (e) {
    e.stopPropagation();
    $(".login_modal").fadeIn(500);
    $(".login_modal").css("display", "flex");
  });
  $(".login__close,.register__close").on("click", function (e) {
    e.stopPropagation();
    $(".login_modal").fadeOut(500);
    $(".register_modal").fadeOut(500);
  });
 
 $('#register_show').click(function (e) { 
   e.preventDefault();
   $(".login_modal").fadeOut(800);
   $('.register_modal').fadeIn(800);
   $(".register_modal").css("display", "flex");

 });
$('#login_show').click(function (e) { 
  e.preventDefault();
  $(".login_modal").fadeIn(800);
  $('.register_modal').fadeOut(800);
});
  //  Close Modal

  $(window).on("click", function (e) {
    if ($(e.target).is(".login_modal,.draw_modal,#mapholder")) {
      $(".login_modal,.register_modal,#mapholder").fadeOut(500);
    }
  });
  
  $('#map_btn').click(function (e) { 
    $('#mapholder').show();
    $('#mapholder').css("display","flex");
  });
 
});

// Vailate Form Login

let username = document.getElementById("username");
let password = document.getElementById("login__password");
let formLog = [username, password];
let error = document.querySelectorAll(".errors");
let submitBtn = document.getElementById("login__btn");
let check = false;

function vadilateform(arr) {
  if (arr.value == "" && arr.type === "text") {
    error[0].innerText = "*Please type your username";
    arr.style.border = "1px solid red";
  } else if (arr.value == "" && arr.type === "password") {
    error[1].innerText = "*Please type your password";
    arr.style.border = "1px solid red";
    check = false;
  } else {
    error.forEach((e) => {
      e.innerText = "";
    });
    arr.style.border = "";
    check = true;
  }
}
formLog.forEach(function (input) {
  input.addEventListener("blur", (e) => {
    vadilateform(input);
  });
});

submitBtn.addEventListener("click", (e) => {
  vadilateform(username);
  vadilateform(password);
  if (check) {
    alert("Đăng nhập thành công");
  } else {
    alert("Đăng nhập thấp bại")
  }
});

// Vadilate Form register
let regUsername = document.getElementById('re_username');
let regPassword = document.getElementById('register__password');
let regConfirmPassword = document.getElementById('register__repassword');
let regEmail = document.getElementById('register__email');
let reErrors = document.querySelectorAll('.re__errors')
let registerForm = [
  regUsername,
  regPassword,
  regConfirmPassword
];


function vadilateRegform(form) {
  if (form.value == "" && form.type === "text") {
    reErrors[0].innerText = "*Please type your username";
    form.style.border = "1px solid red";
  } else if (form.value == "" && form.type === "password") {
    form.nextElementSibling.innerText = "*Please type your password"
    form.style.border = "1px solid red";
  } else if (form.name == "repassword" && form.value != regPassword.value) {
    form.nextElementSibling.innerText = "*Your confirm didn't match"
    form.style.border = "1px solid red";
  } else {
    form.nextElementSibling.innerText="";
    form.style.border = "";
  }
};

registerForm.forEach(function (input) {
  input.addEventListener("blur", (e) => {
    vadilateRegform(input);
  });
});