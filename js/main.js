



var myImage = window.document.querySelector('html');

var quoteImages = ["img/quote-einstein.png",
                   "img/quote-churchill.png",
                   "img/quote-hemingway.png",
                   "img/quote-yoda.png",
                   "img/quote-chanel.png",
                   "img/quote-davinci.png",
                   "img/quote-montapert.png",
                   "img/quote-napolean.png",
                   "img/quote-rand.png",
                   "img/quote-levenson.png",
                   "img/quote-twain.png",
                   "img/quote-rohn.png",
                   "img/quote-virgil.png",
                   "img/quote-thatcher.png",
                   "img/quote-ford.png",
                   "img/quote-frost.png",
                   "img/quote-cohen.png",
                   "img/quote-hemingway2.png",
                   "img/quote-fowler.png",
                   "img/quote-glasow.png",
                   "img/quote-sherman.png",
                   "img/quote-allen.png",
                   "img/quote-picasso.png",
                   "img/quote-hemingway3.png",
                   "img/quote-hemingway4.png",
                   "img/quote-anon.png",
                   "img/quote-epictetus.png",
                   "img/quote-epictetus2.png",
                   "img/quote-emerson.png",
                   "img/quote-hawthorne.png",
                   "img/quote-emerson2.png",
                   "img/quote-carrel.png",
                   "img/quote-bukowski.png",
                   "img/quote-bukowski2.png",
                   "img/quote-miller.png",
                   "img/quote-miller2.png",
                   "img/quote-miller3.png",
                   "img/quote-miller4.png",
                   "img/quote-bernstein.png",
                   "img/quote-wittgenstein.png",
                   "img/quote-rumi.png",
                   "img/quote-hubbard.png",
                   "img/quote-haskins.png",
                   "img/quote-ward.png",
                   "img/quote-floyd.png",
                   "img/quote-campbell.png",
                   "img/quote-vangogh.png",
                   "img/quote-bacall.png",
                   "img/quote-mcintyre.png",
                   "img/quote-dubus.png",
                   "img/quote-hillary.png",
                   "img/quote-tillich.png",
                   "img/quote-ziglar.png",
                   "img/quote-poe.png",
                   "img/quote-goodman.png",
                   "img/quote-michel.png"];


myImage.onclick = function(){
    var randNum = Math.floor((Math.random() * 56));
    var img = quoteImages[randNum];
    document.getElementById("imgCover").style.backgroundImage = "url('" + img + "')";
}

