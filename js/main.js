



var myImage = window.document.querySelector('html');

var quoteImages = ["img/quote-einstein.jpg",
                   "img/quote-churchill.jpg",
                   "img/quote-hemingway.jpg",
                   "img/quote-yoda.jpg",
                   "img/quote-chanel.jpg",
                   "img/quote-davinci.jpg",
                   "img/quote-montapert.jpg",
                   "img/quote-napolean.jpg",
                   "img/quote-rand.jpg",
                   "img/quote-levenson.jpg",
                   "img/quote-twain.jpg",
                   "img/quote-rohn.jpg",
                   "img/quote-virgil.jpg",
                   "img/quote-thatcher.jpg",
                   "img/quote-ford.jpg",
                   "img/quote-frost.jpg",
                   "img/quote-cohen.jpg",
                   "img/quote-hemingway2.jpg",
                   "img/quote-fowler.jpg",
                   "img/quote-glasow.jpg",
                   "img/quote-sherman.jpg",
                   "img/quote-allen.jpg",
                   "img/quote-picasso.jpg",
                   "img/quote-hemingway3.jpg",
                   "img/quote-hemingway4.jpg",
                   "img/quote-anon.jpg",
                   "img/quote-epictetus.jpg",
                   "img/quote-epictetus2.jpg",
                   "img/quote-emerson.jpg",
                   "img/quote-hawthorne.jpg",
                   "img/quote-emerson2.jpg",
                   "img/quote-carrel.jpg",
                   "img/quote-bukowski.jpg",
                   "img/quote-bukowski2.jpg",
                   "img/quote-miller.jpg",
                   "img/quote-miller2.jpg",
                   "img/quote-miller3.jpg",
                   "img/quote-miller4.jpg",
                   "img/quote-bernstein.jpg",
                   "img/quote-wittgenstein.jpg",
                   "img/quote-rumi.jpg",
                   "img/quote-hubbard.jpg",
                   "img/quote-haskins.jpg",
                   "img/quote-ward.jpg",
                   "img/quote-floyd.jpg",
                   "img/quote-campbell.jpg",
                   "img/quote-vangogh.jpg",
                   "img/quote-bacall.jpg",
                   "img/quote-mcintyre.jpg",
                   "img/quote-dubus.jpg",
                   "img/quote-hillary.jpg",
                   "img/quote-tillich.jpg",
                   "img/quote-ziglar.jpg",
                   "img/quote-poe.jpg",
                   "img/quote-goodman.jpg",
                   "img/quote-michel.jpg"];


myImage.onclick = function(){
    var randNum = Math.floor((Math.random() * 56));
    var img = quoteImages[randNum];
    document.getElementById("imgCover").style.backgroundImage = "url('" + img + "')";
}

