/*

    *   The droplets only make sound when they are active

*/
function Droplet(coordinate, matrixPosition, note) {

    //  coordinate = [ x, y ]
    this.coordinate = coordinate; // x and y position in the grid system

    //  matrixPosition = [row, column]
    this.matrixPosition = matrixPosition; // row and column positioning in the grid system
    //this.id = id;
    this.radius = 10;
    this.growthFactor = 2.5; // what the size grows to when clicked
    this.color = '#fff';
    this.state = 'inactive'; // used to indicate which droplets are to be played

    this.note = note;
}


Droplet.prototype = {

    draw: function() {

        context.fillStyle = this.color;

        context.beginPath();

        context.arc(this.coordinate[0], this.coordinate[1], this.radius, 0, 2 * Math.PI);

        context.closePath();

        context.fill();

    },
    // "grows" the droplets after they have been clicked
    grow: function() {

        this.radius = this.radius * this.growthFactor;

        this.state = 'active';

    },

    // shrinks the droplets after they have been clicked again

    shrink: function() {

        this.radius = 10; // original radius

        this.state = 'inactive';
    },

    //  returns true if the mouse position is inside the droplet
    //  returns false if the mouse position is its not
    isPressed: function(x, y) {

        // http://stackoverflow.com/a/16792888

        return Math.sqrt((x - this.coordinate[0]) * (x - this.coordinate[0]) + (y - this.coordinate[1]) * (y - this.coordinate[1])) < this.radius;
    },

    setDuration: function(duration) {

        this.duration = duration;

    }
}