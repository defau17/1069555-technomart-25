var link = document.querySelector(".write-us-link");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-write-us-close");

var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var isStorageSupport = true;
var storage = "";
var storageMail = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageMail = localStorage.getItem("email");
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
  } if (storageMail) {
    email.value = storageMail;
    text.focus();
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
  if (!userName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести имя и почту");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
    } if (isStorageSupport) {
      localStorage.setItem("email", email.value);
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
