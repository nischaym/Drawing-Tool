# Drawing-Tool
Databinding is not working for draw2d yet, hence when you cannot change the attributes on the fly.. it does not get saved in the object.

pre-requisite : NodeJS should be installed

To run
1. Clone from gihub
2. run npm install (node_modules is included already, but run this to be sure)
3. run node server.js

To access the tool enter http://localhost:5656/angular in your browser

working : 
1. User can drag and drop any shapes from the left panel on-to the main canvas.
2. Free hand drawing canvas is on the right panel and is not draggable onto the main canvas.
3. User can undo, redo any action on both the canvas, to delete any shape on the main canvas user needs to first select it and then press on delete button. To reset the free-hand canvas, click on reset button.

Below is the structure of the code

server.js --> nodejs server file
package.json --> Metadata file

public/angular/src
    index.html --> first page to load which has all the html (This is not written by me from scratch, I used some of the examples given by draw2D documentation)
    app.js --> js file establishing the angular app "MyFirstDrawApp", directive called "drawing" has all the logic for free-hand drawing, its undo, reset and redo (no library is used for this, it's an angular directive written newly)

public/angular/directive
    canvas.js --> invoking draw2D methods to do the undo, redo, and delete shapes
    draw2d.js --> importing draw2D
    palette.js --> directive to give user the options(shapes) which are draggable on to the screen(left side-bar controller)
 
public/angular/controller
   HeadController --> controller of the main page which enables creation of new shapes. (This controller invokes library functions)
