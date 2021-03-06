var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var form = document.querySelector(".form");
mainNav.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened")
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened")
  }
});
if (form) {
  var weight = form.querySelector("[name=weight]");
  var user = form.querySelector("[name=name]");
  var email = form.querySelector("[name=email]");
  var emailSvg = form.querySelector(".form__mail");
  var phone = form.querySelector("[name=phone]");
  user.focus();
  form.addEventListener("submit", function(evt) {
    if (!user.value) {
      evt.preventDefault();
      console.log("Нужно заполнить форму!!!");
      user.offsetWidth = user.offsetWidth;
      user.classList.add("form__input--invalid");
      user.focus()
    } else {
      user.classList.remove("form__input--invalid");
      weight.focus()
    }
    if (!weight.value || isNaN(weight.value)) {
      evt.preventDefault();
      console.log("Нужно заполнить форму!!!");
      weight.offsetWidth = weight.offsetWidth;
      weight.classList.add("form__input--invalid")
    } else {
      weight.classList.remove("form__input--invalid");
      if (!user.value) {
        user.focus()
      } else {
        email.focus()
      }
    }
    if (!email.value) {
      evt.preventDefault();
      console.log("Нужно заполнить форму!!!");
      email.offsetWidth = email.offsetWidth;
      email.classList.add("form__input--invalid");
      emailSvg.classList.add("form__mail--invalid")
    } else {
      email.classList.remove("form__input--invalid");
      emailSvg.classList.remove("form__mail--invalid");
      if (!user.value) {
        user.focus()
      }
      if (!weight.value) {
        weight.focus()
      } else {
        phone.focus()
      }
    }
    if (!phone.value) {
      evt.preventDefault();
      console.log("Нужно заполнить форму!!!");
      phone.offsetWidth = phone.offsetWidth;
      phone.classList.add("form__input--invalid")
    } else {
      phone.classList.remove("form__input--invalid");
      if (!user.value) {
        user.focus()
      } else {
        if (!weight.value || isNaN(weight.value)) {
          weight.focus()
        } else {
          if (!email.value) {
            email.focus()
          } else {
            phone.focus()
          }
        }
      }
    }
  })
}
