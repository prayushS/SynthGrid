/*

    *   figure out a way to redaw the individual dropolets themselves instead of the whole canvas
        *   it's less browser intensive that way

*/

var canvas = document.querySelector("#canvas"),
    context = canvas.getContext('2d'),

    play = document.querySelector('#play');

canvas.width = 1000;
canvas.height = 500;
grid.drawGrid();
//grid.printGrid();
canvas.addEventListener("mousedown", function(event) {


    grid.dropletTouched(event.layerX, event.layerY);

}, false);


play.addEventListener("click", function() {


    //player.init();


    switch (this.getAttribute('data-paused')) {

        //	if it's paused play
        case 'true':

            player.init();

            //console.log('asdf');

            this.setAttribute('data-paused', 'false');

            this.innerHTML = "<i class=\"fa fa-pause\" aria-hidden=\"true\"></i>";

            break;

            //	if it's playing, pause it
        case 'false':

            player.pause();

            this.setAttribute('data-paused', 'true');


            this.innerHTML = "<i class=\"fa fa-play\" aria-hidden=\"true\"></i>";

            break;

    }

}, false);