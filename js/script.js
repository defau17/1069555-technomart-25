var link=document.querySelector(".write_us-link"),popup=document.querySelector(".modal-write_us"),close=popup.querySelector(".modal-write_us-close"),form=popup.querySelector(".write_us-form"),userName=popup.querySelector("[name=user-name]"),email=popup.querySelector("[name=email]"),text=popup.querySelector("[name=text]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){console.log("кликнул по кнопке"),e.preventDefault(),popup.classList.add("modal-show"),storage?(userName.value=storage,email.focus()):userName.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){e.preventDefault(),userName.value&&email.value?isStorageSupport&&localStorage.setItem("userName",userName.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"),console.log("Нужно ввести имя и почту"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});var mapLink=document.querySelector(".map"),mapPopup=document.querySelector(".modal-maps"),mapClose=mapPopup.querySelector(".modal-map-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show"))});
