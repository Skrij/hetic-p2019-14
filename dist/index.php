<?php include './partials/header.php';?>
<div class="home">

    <div class="intro">
        
        <div class="intro__content">
            <p class="intro__datelimit">J-242</p>
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
            <div class="form__count">8,192,413</div>
            personnes ont déjà agi
        </div>

        <form class="form__content" action="action.php" method="post">
            <input type="text" name="lastname" placeholder="Nom"/>
            <input type="text" name="firstname" placeholder="Prénom"/>
            <input type="email" name="email" placeholder="E-mail"/>
            <input class="form__submit" type="submit" value="Rejoignez le mouvement">
        </form>

    </div><!-- .form -->


    <div class="social">
        <div class="social__liste">
            <a class="social__link twitter" href="https://twitter.com/share?url=petitionarctique.com&amp;text=J'ai%20sauvé%20l'Arctique.%20Faites%20comme%20moi,%20signez.&amp;hashtags=SaveTheArctic" ></a>
            
            <a class="social__link facebook" href="http://www.facebook.com/sharer.php?u=petitionarctique.com"></a>

            <a class="social__link googleplus" href="https://plus.google.com/share?url=petitionarctique.com"></a>
        </div>

        <div class="social__text">
            Partagez notre cause sur les réseaux sociaux
        </div><!-- .social__text -->

    </div><!-- .social -->

</div> <!-- .home -->

<?php include './partials/footer.php';?>