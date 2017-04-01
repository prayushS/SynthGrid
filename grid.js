//  the acutal interactive grid
var grid = {

    size: 6, // height/width of the grid
    droplets: [],
    spacingX: 150, // space between the droplets
    spacingY: 75,
    xPos: 100,
    yPos: 30,
    color: '#8e44ad',


    // draws the grid

    drawGrid: function() {

        var i, // column
            j; // row


        for (i = 0; i < this.size; i ++) {


            for (j = 0; j < this.size; j ++) {


                var note = this.assignNotes( j );

                this.addDroplets(

                    [this.xPos + (i * this.spacingX), this.yPos + (j * this.spacingY)],

                    [i, j],

                    note( i + 1 )

                );

                console.log( "Row: " + i + ", Column: " + j + " note: " + note( j + 1 ) );

            };
        };

        //  set the x position of the indicator and draw it
        player.indicator.setX(this.xPos);
        player.indicator.draw();

    },

    //  assigns the notes to the droplets
    assignNotes: function(keyNumber, number) {


        var keys = ['E', 'A', 'D', 'G', 'B', 'E'],

            setKey = keys[keyNumber];

        return function(number) {

            //return keys[keyNumber] + number;

            return setKey + number;
        }
    },
    //  adds the droplets to he droplets array and initializes the droplets object
    addDroplets: function(coord, matPos, note) {

        if (this.droplets.length > 0) {

            this.droplets[this.droplets.length] = new Droplet(coord, matPos, note);
        } else {

            this.droplets[0] = new Droplet(coord, matPos, note);
        }


        this.draw();

    },
    //  draws the droplets
    draw: function() {

        this.clearGrid();
        if (this.droplets.length > 0) {


            for (var i = 0; i < this.droplets.length; i++) {


                this.droplets[i].draw();
            }
        }

    },

    clearGrid: function() {

        context.fillStyle = this.color;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fill();
    },


    dropletTouched: function(x, y) {

        // loop over all of the droplets
        //  and check if a droplet has been touched

        for (var i = 0; i < this.droplets.length; i++) {



            if (this.droplets[i].isPressed(x, y)) {




                switch (this.droplets[i].state) {

                    case "active":

                        console.log("note: " + this.droplets[i].note);

                        this.clearGrid();
                        //console.log("active");
                        this.droplets[i].shrink();

                        this.draw();

                        player.indicator.draw();




                        break;


                    case "inactive":

                        console.log("note: " + this.droplets[i].note);

                        this.clearGrid();
                        //console.log("inactive");
                        this.droplets[i].grow();

                        this.draw();

                        player.indicator.draw();
                        //  make the active droplet "sound"

                        player.tone.triggerAttackRelease( this.droplets[i].note, player.duration );

                        break;

                }



            }

        }


    },

    printGrid: function(){


        this.droplets[0].grow();
        this.droplets[0].draw();

        this.droplets[1].grow();
        this.droplets[1].draw();

        this.droplets[2].grow();
        this.droplets[2].draw();


        for( var i = 0; i < this.droplets.length; i++ ){


            console.log( "row: " + this.droplets[i].matrixPosition[0] + " column: " + this.droplets[i].matrixPosition[1] + ", note: " + this.droplets[i].note );

        }


    }

};