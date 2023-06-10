// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// An array of questions for the user
const questions = [
    {
        type: 'list',
        message: 'Select a shape.',
        name: 'shape',
        choices: [
            'circle',
            'triangle',
            'square',
        ],
        validate: (shapeInput) => {
            if (shapeInput) {
                return true;
            } else {
                console.log('Please select a shape for your logo?');
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Select a shape color.',
        name: 'shapeColor',
        choices: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue',
            'Purple',
            'White',
            'Black',
            'Brown',
        ],
        validate: (shapeColorInput) => {
            if (shapeColorInput) {
                return true;
            } else {
                console.log('Please select a color for your shape?');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide text up to 3 characters?',
        name: 'text',
        validate: (textInput) => {
            if (textInput.length <= 3) {
                return true;
            } else {
                console.log('\nProvide text up to 3 characters for your logo.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Include a text color.',
        name: 'textColor',
        validate: (textColorInput) => {
            if (textColorInput) {
                return true;
            } else {
                console.log('Please include a text color for your logo?');
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Save the generated SVG.',
        name: 'save',
        choices: [
            'save',
        ],
        validate: (saveInput) => {
            if (saveInput) {
                return true;
            } else {
                console.log('Please save the generated SVG to a .svgfile?');
                return false;
            }
        }
    },
];

// Ask user questions
const promptUser = () => {
    return inquirer.prompt(questions)
}

// Function to write svg file
function writeSVG(fileName, data) {
    console.log(data);
    const svgFile = `
    <svg width='200px' height='300px'>        
        <text x='50%' y='50%' text-anchor='middle' alignment-baseline='middle' stroke='black' stroke-width="3">${data.text}</text>
    </svg>`
    // Create circle,triangle, or square
    writeFile(fileName, data, (err) => //Function to generate logo.svg!
        err ? console.log(err) : console.log('Generated logo.svg!')
    );
}

// Initializer function that asks user questions and then writes the svg
const init = () => { 
    promptUser()
        .then((answers) => writeSVG('logo.svg', answers))
        .then(() => console.log(`Generated logo.svg!`))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
