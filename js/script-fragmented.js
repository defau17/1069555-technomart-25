var link = document.querySelector(".write_us-link");

var popup = document.querySelector(".modal-write_us");
var close = popup.querySelector(".modal-write_us-close");

var form = popup.querySelector(".write_us-form");
var userName = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  console.log('кликнул по кнопке')
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    userName.value = storage;
    email.focus();
  } else {
    userName.focus();
  }

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!userName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести имя и почту");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".map");

var mapPopup = document.querySelector(".modal-maps");
var mapClose = mapPopup.querySelector(".modal-map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
