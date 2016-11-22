document.querySelector('.action__button--sign').addEventListener("click", function(){
	document.querySelector('.form').style.opacity =  '10';
	document.querySelector('.form').style.zIndex =  '10';
	document.querySelector('.intro').style.opacity =  '0';
});
var count = 8192413;
document.querySelector('.form__submit').addEventListener("click", function(){
	count++
	var count_text = count.toString();
	document.querySelector('.form__count').textContent = count_text;
	setTimeout(function(){
		console.log('close');
		document.querySelector('.form').style.opacity =  '0';
		document.querySelector('.form').style.zIndex =  '0';
		document.querySelector('.intro').style.opacity =  '1';
		document.querySelector('.intro').style.zIndex =  '1';
	}, 1000);
});

document.querySelector('.action__button--share').addEventListener("click", function(){
	document.querySelector('.social').style.opacity =  '10';
	document.querySelector('.social').style.zIndex =  '10';
	document.querySelector('.intro').style.opacity =  '0';
});

document.querySelector('.social__text').addEventListener("click", function(){
	document.querySelector('.social').style.opacity =  '0';
	document.querySelector('.social').style.zIndex =  '0';
	document.querySelector('.intro').style.opacity =  '1';
});

