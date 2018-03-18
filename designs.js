// Select color input
var colorSquare = $(".color-square")
// Select size input
var sizePicker = $("#sizePicker");
var	clearButton = $("#clear");
var modeButtons = $(".mode");
var erase = $("#erase");
var paint = $("#paint-brush");
var row = $("#pixelCanvas")
var inputHeight = $("#inputHeight");
var inputWeight = $("#inputWeight");
var modal = $("#resize-modal");
var resize = $("#resize");
var resizeClose = $("#resize-close");
var color = $("#color");
var colorClose = $("#color-close");
var colorModal = $("#color-modal");
var comingSoon = $(".coming-soon");
var reset = $("#reset");
var colorPreview = $("#color-preview");
var turnOn = $("#turnOn");
var lightOn = false;

// When size is submitted by the user, call makeGrid()
sizePicker.submit(function(){
	event.preventDefault();
	$("#pixelCanvas").empty();
	makeGrid();
	modal.css("display", "none");
});

// Inital Size

inputHeight.val("32");
inputWeight.val("84");
makeGrid();

// Resize Modal ---- Open and Close


resize.click(function(){
	modal.css("display", "block");
});

resizeClose.click(function(){
	modal.css("display", "none");
});




// Color Modal ---- Open and Close


color.click(function(){
	colorModal.css("display", "block");
});

colorClose.click(function(){
	colorModal.css("display", "none");
});

// Color Modal --- Open on color preview

colorPreview.click(function(){
	colorModal.css("display", "block");
});



// Make Grid
function makeGrid() {

	for(var m = 1; m <= inputHeight.val(); m++){
		const row = $("#pixelCanvas").append("<tr></tr>");
	}
	for(var n = 1; n <= inputWeight.val(); n++){
		const row = $("#pixelCanvas tr").append("<td></td>");
	}
	$("td").addClass("empty-td");
	paintWithColor();
}

// Clear Button
clearButton.click(function(){
	$("td").removeClass("red orange yellow green blue purple pink white red-light orange-light yellow-light green-light blue-light purple-light pink-light white-light black-light");
	$("td").addClass("empty-td");
});

// Erase
erase.click(function(){
	paint.removeClass("selected");
	erase.addClass("selected");
	$("td").click(function(){
	$(this).removeClass("red orange yellow green blue purple pink white red-light orange-light yellow-light green-light blue-light purple-light pink-light white-light black-light");
	$(this).addClass("empty-td");
});
});

// Paint
paint.click(function(){
	paint.addClass("selected");
	erase.removeClass("selected");
	paintWithColor();
});

// Paint Function
// function paintWithColor(){
// 	$("td").click(function(){
// 		var color = colorPreview.css("background-color");
// 		$(this).css("background-color", color);
// 	});
// }

function paintWithColor(){
		$("td").click(function(){
			if(lightOn == false){
				$(this).removeClass("empty-td");
				var color = colorPreview.css("background-color");
				if(color == "rgb(255, 0, 0)"){
					$(this).addClass("red");
				} else if(color == "rgb(255, 119, 34)"){
					$(this).addClass("orange");
				} else if(color == "rgb(255, 204, 17)"){
					$(this).addClass("yellow");
				} else if(color == "rgb(102, 205, 0)"){
					$(this).addClass("green");
				} else if(color == "rgb(29, 124, 242)"){
					$(this).addClass("blue");
				} else if(color == "rgb(186, 85, 211)"){
					$(this).addClass("purple");
				} else if(color == "rgb(255, 130, 171)"){
					$(this).addClass("pink");
				} else if(color == "rgb(255, 255, 255)"){
					$(this).addClass("white");
				}
			} else if(lightOn == true){
				$(this).removeClass("empty-td");
				$(this).removeClass("black-light");
				var color = colorPreview.css("background-color");
				if(color == "rgb(255, 0, 0)"){
					$(this).addClass("red-light");
				} else if(color == "rgb(255, 119, 34)"){
					$(this).addClass("orange-light");
				} else if(color == "rgb(255, 204, 17)"){
					$(this).addClass("yellow-light");
				} else if(color == "rgb(102, 205, 0)"){
					$(this).addClass("green-light");
				} else if(color == "rgb(29, 124, 242)"){
					$(this).addClass("blue-light");
				} else if(color == "rgb(186, 85, 211)"){
					$(this).addClass("purple-light");
				} else if(color == "rgb(255, 130, 171)"){
					$(this).addClass("pink-light");
				} else if(color == "rgb(255, 255, 255)"){
					$(this).addClass("white-light");
				}
			}
		});
}

// RESET BUTTON

reset.click(function() {
    location.reload();
});

// Change Preview Color
colorSquare.click(function(){
	var currentColor = $(this).css("background");
	colorPreview.css("background", currentColor);
	colorModal.css("display", "none");
})


// Light On
turnOn.click(function(){
	$("td.red").toggleClass("red-light");
	$("td.orange").toggleClass("orange-light");
	$("td.yellow").toggleClass("yellow-light");
	$("td.green").toggleClass("green-light");
	$("td.blue").toggleClass("blue-light");
	$("td.purple").toggleClass("purple-light");
	$("td.pink").toggleClass("pink-light");
	$("td.white").toggleClass("white-light");
	$("td.empty-td").toggleClass("black-light");
	$("td").removeClass("red orange yellow green blue purple pink white empty-td");
	lightOn = true;
	$("#logo").css("display","none");
	$("#lightsOff").css("display", "block");
});


// Turn Light On
// Drag and Color
// Full Screen Mode
// Hover Effects
// Preset Design
// Add Keyboard Short Cuts and Hovers to tell the shortcuts
// Change tool cursor depending on selection
// Organize Code
// Turn off functionality when modal is open
// Change Logo when light is on
// Style +- buttons on resize modal
// Save
// Show Current Selection on Color
// Add titles to Color and Resize
// Design Pop UP max grids
// Change Preview Color