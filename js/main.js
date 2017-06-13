



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

var quoteImagesSmall = ["img/quote-einstein-500.jpg",
                   "img/quote-churchill-500.jpg",
                   "img/quote-hemingway-500.jpg",
                   "img/quote-yoda-500.jpg",
                   "img/quote-chanel-500.jpg",
                   "img/quote-davinci-500.jpg",
                   "img/quote-montapert-500.jpg",
                   "img/quote-napolean-500.jpg",
                   "img/quote-rand-500.jpg",
                   "img/quote-levenson-500.jpg",
                   "img/quote-twain-500.jpg",
                   "img/quote-rohn-500.jpg",
                   "img/quote-virgil-500.jpg",
                   "img/quote-thatcher-500.jpg",
                   "img/quote-ford-500.jpg",
                   "img/quote-frost-500.jpg",
                   "img/quote-cohen-500.jpg",
                   "img/quote-hemingway2-500.jpg",
                   "img/quote-fowler-500.jpg",
                   "img/quote-glasow-500.jpg",
                   "img/quote-sherman-500.jpg",
                   "img/quote-allen-500.jpg",
                   "img/quote-picasso-500.jpg",
                   "img/quote-hemingway3-500.jpg",
                   "img/quote-hemingway4-500.jpg",
                   "img/quote-anon-500.jpg",
                   "img/quote-epictetus-500.jpg",
                   "img/quote-epictetus2-500.jpg",
                   "img/quote-emerson-500.jpg",
                   "img/quote-hawthorne-500.jpg",
                   "img/quote-emerson2-500.jpg",
                   "img/quote-carrel-500.jpg",
                   "img/quote-bukowski-500.jpg",
                   "img/quote-bukowski2-500.jpg",
                   "img/quote-miller-500.jpg",
                   "img/quote-miller2-500.jpg",
                   "img/quote-miller3-500.jpg",
                   "img/quote-miller4-500.jpg",
                   "img/quote-bernstein-500.jpg",
                   "img/quote-wittgenstein-500.jpg",
                   "img/quote-rumi-500.jpg",
                   "img/quote-hubbard-500.jpg",
                   "img/quote-haskins-500.jpg",
                   "img/quote-ward-500.jpg",
                   "img/quote-floyd-500.jpg",
                   "img/quote-campbell-500.jpg",
                   "img/quote-vangogh-500.jpg",
                   "img/quote-bacall-500.jpg",
                   "img/quote-mcintyre-500.jpg",
                   "img/quote-dubus-500.jpg",
                   "img/quote-hillary-500.jpg",
                   "img/quote-tillich-500.jpg",
                   "img/quote-ziglar-500.jpg",
                   "img/quote-poe-500.jpg",
                   "img/quote-goodman-500.jpg",
                   "img/quote-michel-500.jpg"];


var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
    // window width is at less than 500px
    myImage.onclick = function(){
    var randNum = Math.floor((Math.random() * 56));
    var img = quoteImagesSmall[randNum];
    document.getElementById("imgCover").style.backgroundImage = "url('" + img + "')";
}
}
else {
    // window width is greater than 500px
    myImage.onclick = function(){
    var randNum = Math.floor((Math.random() * 56));
    var img = quoteImages[randNum];
    document.getElementById("imgCover").style.backgroundImage = "url('" + img + "')";
}
}

// myImage.onclick = function(){
//     var randNum = Math.floor((Math.random() * 56));
//     var img = quoteImages[randNum];
//     document.getElementById("imgCover").style.backgroundImage = "url('" + img + "')";
// }

