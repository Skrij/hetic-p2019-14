<?php include './partials/header.php';?>
<div id="mq-medium"></div>
<div class="home">
    <video poster="assets/images/home-desktop-bg.jpg" id="bgvid" playsinline autoplay muted loop>
    <!-- WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
    <source src="assets/images/piano-arctic.mp4" type="video/mp4">
    </video>

    <div class="intro">
        
        <div class="intro__content">
            <p class="intro__datelimit"></p>
            <p class="intro__title">Aidez-nous à <br> sauver l'Arctique</p>
        </div> <!-- .intro__container -->

         <div class="intro__action">
            <div class="action__button action__button--sign">
                <img src="assets/images/icon-sign.svg" >
                <p class="action__text">Signez</p>
            </div>
            <div class="action__button action__button--share">
                <img src="assets/images/icon-share.svg" >
                <p class="action__text">Partagez</p>
            </div>
        </div> <!-- .intro__action -->

        <div class="intro__more">
            <a href="main-page.php"> En savoir plus 
               <img src="assets/images/icon-more.svg" >
            </a>
        </div>

    </div> <!-- .intro -->


    <div class="form">

        <div class="form__text">
            <div class="form__count">8192413</div>
            personnes ont déjà agi
        </div>

        <form class="form__content" action="#" method="post">
            <input type="text" name="lastname" placeholder="Nom" required/>
            <input type="text" name="firstname" placeholder="Prénom" required/>
            <input type="email" name="email" placeholder="E-mail" required/>
            <input class="form__submit" type="submit" value="Rejoignez le mouvement">
        </form>

    </div><!-- .form -->


    <div class="social">
        <div class="social__liste">
            <a class="social__link twitter" href="https://twitter.com/share?url=petitionarctique.com&amp;text=J'ai%20sauvé%20l'Arctique.%20Faites%20comme%20moi,%20signez.&amp;hashtags=SaveTheArctic" target="_blank"></a>
            
            <a class="social__link facebook" href="http://www.facebook.com/sharer.php?u=petitionarctique.com" target="_blank"></a>

            <a class="social__link googleplus" href="https://plus.google.com/share?url=petitionarctique.com" target="_blank"></a>
        </div>

        <div class="social__text">
            Partagez notre cause sur les réseaux sociaux
        </div><!-- .social__text -->

    </div><!-- .social -->

</div> <!-- .home -->

<?php include './partials/footer.php';?>