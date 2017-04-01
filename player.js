//  plays the notes when they are hit
var player = {

    //  starts at column 0, indicates which column to play

    col: 0,

    duration: '8n',
    initId: "", // keeps track of the id of the setInterval which calls the cycle method
    //  synth composed of the size of the grid

    tone: new Tone.PolySynth(grid.size, Tone.Synth).toMaster(),


    //  draws a line on the bottom of the currently active column
    indicator: {

        height: 1,
        width: 50,
        color: '#fff',
        y: canvas.height,
        x: 50,
        //  sets the x position, also centers it
        setX: function(x) {


            this.x = (x - (this.width / 2));

        },

        //  clears up the region
        clear: function(){

            //context.clearRect( this.x, canvas.height - 50, this.width, this.height );
            context.fillStyle = grid.color;
            context.fillRect( this.x, canvas.height - 50, this.width, this.height );
            context.fill();
        },

        //  draws the line at the bottom of the active column
        draw: function() {

            //context.clearRect(this.x, canvas.height - 50, this.width, this.height);
            context.fillStyle = this.color;
            context.beginPath();
            context.rect(this.x, canvas.height - 50, this.width, this.height);
            context.closePath();
            context.fill();
        }


    },

    play: function(colStart, colEnd) {

        //  cycle through the droplets column by column, at a certain bpm

        //   the droplets which are active in the column are going to be played

        //  check the active droplets by looking at their matrixPositions


        for (var i = colStart; i < colEnd; i++) {




            if (grid.droplets[i].state == "active") {

                this.tone.triggerAttackRelease(grid.droplets[i].note, this.duration);

                //console.log( grid.droplets[i] );
            }



        }

        this.indicator.clear();

        //  get the xPosition of the first droplet in that column, and set the x position to it
        this.indicator.setX( grid.droplets[colStart].coordinate[0] );

        this.indicator.draw();

    },

    //  cycles through the columns
    cycle: function() {


        //  play the column, then shift it to the next column

        this.play((this.col * grid.size), (this.col * grid.size) + grid.size);

        this.shift();

    },
    //  pauses the cycle by clearing 
    pause: function() {


        clearInterval(this.initId);

    },

    //  shifts through each of the columns
    //  if the column starting index is greater than the number of columns, set it to zero
    shift: function() {
        //  do tests on the column indexes themselves
        this.col++;

        if (this.col > (grid.size - 1)) {


            this.col = 0;

        }
    },

    init: function() {
        var self = this;
        this.initId = setInterval(function() {

            self.cycle();
        }, 500);
    }

};


//  cycle through the droplets column by column play the notes