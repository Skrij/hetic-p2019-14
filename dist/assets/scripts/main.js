var intro = document.querySelector('.intro');
var sign = document.querySelector('.action__button--sign');
var share = document.querySelector('.action__button--share');
var form = document.querySelector('.form');
var submit = document.querySelector('.form__submit');
var closed_form = document.querySelector('.closed-form');
var social = document.querySelector('.social');
var closed_socials = document.querySelector('.closed-socials');
/*
    ACTIONS ON INTRO 
*/

/*Intro : click sur "Signez" */
sign.addEventListener("click", function(){
    form.style.opacity =  '1';
    form.style.zIndex =  '10';
    closed_form.style.opacity = '1';
    closed_form.style.zIndex = '13';
    intro.style.opacity =  '0';
});

/*Intro : click sur "Partagez" */
share.addEventListener("click", function(){
    social.style.opacity =  '10';
    social.style.zIndex =  '10';
    closed_socials.style.opacity = '1';
    closed_socials.style.zIndex = '13';
    intro.style.opacity =  '0';
});

/*
    ACTIONS ON FORM 
*/

/*Form: click sur submit */
/*Get valeur de form__count*/
var count = 8192413;
submit.addEventListener("click", function(e){
    if (document.querySelector('.form__content').checkValidity() == true) 
    {
        console.log('VALID');
        count++
        var count_text = count.toString();
        document.querySelector('.form__count').textContent = count_text;
    }
    else
    {
        console.log('INVALID');
    }
    // e.preventDefault();
});
/*Form : click sur close */
closed_form.addEventListener("click", function(){
    close_form();
});


/*
    ACTIONS ON SOCIAL
*/

/*Social : click sur text */
document.querySelector('.social__text').addEventListener("click", function(){
    close_social();
});

/*Social : click sur close */
closed_socials.addEventListener("click", function(){
    close_social();
});


/*
    CLOSE FUNCTIONS
*/
function close_form()
{
	console.log('close');
    form.style.opacity =  '0';
    form.style.zIndex =  '0';
    intro.style.opacity =  '1';
    intro.style.zIndex =  '1';
}

function close_social()
{
	social.style.opacity =  '0';
    social.style.zIndex =  '0';
    intro.style.opacity =  '1';
}


$('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 1000, function() {
    $(this).animate({ scrollTop: 0 }, 1000);
});
