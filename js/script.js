		var link = document.querySelector(".btn-write-to-us");
		var popup = document.querySelector(".modal-content");
		var close = document.querySelector(".modal-content-close");
		var form = popup.querySelector("form");
		var nameForm = popup.querySelector("#name");
		var emailForm = popup.querySelector("#email");
		var textForm = popup.querySelector("#text");
		var storage = localStorage.getItem("nameForm");
		
		link.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.add("modal-content-show");
			
			if (storage) {
				nameForm.value = storage;
				emailForm.focus();
			} else {
				nameForm.focus();
			}
		});

		close.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
		});

		form.addEventListener("submit", function(event) {
			if(!nameForm.value || !emailForm.value || !textForm.value ) {
				event.preventDefault();
				popup.classList.remove("modal-error");
          		popup.offsetWidth = popup.offsetWidth;
				popup.classList.add("modal-error");
 			} else {
 				localStorage.setItem("nameForm", nameForm.value);
 			}

		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (popup.classList.contains("modal-content-show"));
					popup.classList.remove("modal-content-show");
					popup.classList.remove("modal-error");
			}
		});

		