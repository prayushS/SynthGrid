<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>Grid</title>
      <link rel = "stylesheet" type = "text/css" href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <link rel = "stylesheet" type = "text/css" href = "style.css"/>
   </head>
   <body>
      <!--
         TODO:
         
            *  center the app card vertically and horizontally
         
         
         -->


         <div id = "appTitle">


         <h1> Synth Grid </h1>

         <div id = "appDesc">

               <p> Synth Grid is built using tone.js and canvas to create an interactive synth.
               <p> Click on the droplets to activate and layer the sounds.</p>
               <p> Press play to hear your melody come alive!</p>
         </div>

         </div>
         <canvas id = "canvas"></canvas>


         <div id = "controls">
         <span class = "button" id = "play" data-paused = true>

            <i class="fa fa-play" aria-hidden="true"></i></span>

         </div>
      <script src = "https://tonejs.github.io/build/Tone.js"></script>
      <script src = "Droplet.js"></script>
      <script src = "grid.js"></script>
      <script src = "player.js"></script>
      <script src = "script.js"></script>
   </body>
</html>