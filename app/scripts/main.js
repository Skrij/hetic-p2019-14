document.querySelector('.action__button--sign').addEventListener("click", function(){
	document.querySelector('.form').style.opacity =  '1';
	document.querySelector('.form').style.zIndex =  '1';
	document.querySelector('.intro').style.opacity =  '0';
});

document.querySelector('.form__submit').addEventListener("click", function(){
	document.querySelector('.form').style.opacity =  '0';
	document.querySelector('.form').style.zIndex =  '0';
});

document.querySelector('.action__button--share').addEventListener("click", function(){
	document.querySelector('.social').style.opacity =  '1';
	document.querySelector('.social').style.zIndex =  '1';
	document.querySelector('.intro').style.opacity =  '0';
});

document.querySelector('.social__text').addEventListener("click", function(){
	document.querySelector('.social').style.opacity =  '0';
	document.querySelector('.social').style.zIndex =  '0';
	document.querySelector('.intro').style.opacity =  '1';
});

