var form = document.querySelector('.form');
var intro = document.querySelector('.intro');
var social = document.querySelector('.social');

document.querySelector('.action__button--sign').addEventListener("click", function(){
    form.style.opacity =  '1';
    form.style.zIndex =  '10';
    intro.style.opacity =  '0';
});
var count = 8192413;
document.querySelector('.form__submit').addEventListener("click", function(){
    count++
    var count_text = count.toString();
    document.querySelector('.form__count').textContent = count_text;
    if (document.querySelector('.form__content').checkValidity() || !document.querySelector('.form__content').checkValidity()) 
    {
        console.log('INVALID');
    }
    else
    {
        setInterval(function(){
            console.log('close');
            form.style.opacity =  '0';
            form.style.zIndex =  '0';
            intro.style.opacity =  '1';
            intro.style.zIndex =  '1';
        }, 5000);
    }
});

document.querySelector('.action__button--share').addEventListener("click", function(){
    social.style.opacity =  '10';
    social.style.zIndex =  '10';
    intro.style.opacity =  '0';
});

document.querySelector('.social__text').addEventListener("click", function(){
    social.style.opacity =  '0';
    social.style.zIndex =  '0';
    intro.style.opacity =  '1';
});

