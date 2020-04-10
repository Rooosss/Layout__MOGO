
let slides = document.querySelectorAll(".myslides");
let dots = document.querySelectorAll(".dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let number = document.querySelectorAll(".numbertext");
let slideindex = 1;

showSlide(slideindex);

function showSlide(n) {
	if (n < 1) {
		slideindex = slides.length;
	} else if (n > slides.length) {
		slideindex = 1;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}
	for (let i = 0; i < number.length; i++) {
		number[i].innerHTML = slideindex + "/3";
	}
	slides[slideindex - 1].style.display = "block";
	dots[slideindex - 1].classList.add("active");
}

function plusSlide(n) {
	showSlide(slideindex += n);
}

function currentSlide(n) {
	showSlide(slideindex = n);
}

prev.onclick = function() {
	plusSlide(1);
}

next.onclick = function() {
	plusSlide(-1);
}
