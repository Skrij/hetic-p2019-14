var video_bg = document.getElementById('bgvid');
var home = document.querySelector(".home");
if (window.getComputedStyle(document.getElementById('mq-medium'), null).display === 'block')
{
	home.style.backgroundImage = "url('assets/images/home-mobile-bg.jpg')";
	home.style.backgroundSize =  "cover";
}
if (window.getComputedStyle(document.getElementById('mq-medium'), null).display === 'none')
{
	home.removeChild(video_bg);
	home.style.backgroundImage = "url('assets/images/home-mobile-bg.jpg')";
	home.style.backgroundSize =  "cover";
}
