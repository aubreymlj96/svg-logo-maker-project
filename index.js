const inquirer = require("inquirer");
const fs = require('fs');

const {Circle, Square, Triangle} = require("./lib/shapes.js");

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
    
};

const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT ~ Please enter up to 3 Characters:",
    },
    {
        type: "input",
        name: "text_color",
        message: "TEXT COLOR ~ Please enter the desired color for your text (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR ~ Please enter the desired color for your shape (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel_image",
        message: "SHAPE ~ Please select your desired shape:",
        choices: ["Circle", "Square", "Triangle"],
    },
];

function writeToFile(fileName, fileData) {
    // const fileName = "./logo-examples";
	console.log("Writing [" + fileData + "] to file [" + fileName + "]");
    fs.writeFile(fileName, fileData, function (err) {
        err ? console.log(err) : console.log("Congratulations! You have Generated an SVG logo")
    });
};

function init() {
    inquirer.prompt(questions)
    .then(({text, text_color, shape, pixel_image}) => {
        var svg = new Svg();
    var svgString = "";
	var svg_file = "./logo-examples/logo" + text + ".svg";
    user_text = text;
        if (user_text.length > 0 && user_text.length < 4) {
		user_text
	        } else {
		        console.log("Invalid Text - Please enter only 1-3 Characters");
                return;
	    }
	console.log("Text is " + user_text);

	user_font_color = text_color;
	console.log("Font color is " + user_font_color);

	user_shape_color = shape;
	console.log("Shape color is " + user_shape_color);

    user_shape_type = pixel_image;
	console.log("Shape is " + user_shape_type);
	
	if (user_shape_type === "Square") {
		user_shape_type = new Square();
		console.log("Square shape selected");
	}
	else if (user_shape_type === "Circle") {
		user_shape_type = new Circle();
		console.log("Circle shape selected");
	}
	else if (user_shape_type === "Triangle") {
		user_shape_type = new Triangle();
		console.log("Triangle shape selected");
	}
	
    user_shape_type.setColor(user_shape_color);
	svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape_type);
	svgString = svg.render();

	console.log("Displaying shape:\n\n" + svgString);
	console.log("Your shape has been generated successfully! Please see Logo Example folder");
	writeToFile(svg_file, svgString);
    })
     
};
init()