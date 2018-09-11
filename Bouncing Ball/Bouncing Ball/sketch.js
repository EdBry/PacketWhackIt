/**
 * Edward Brydalski
 * IGME-101: Morning Challenge, 9/7/18
 * Using local variables
 */

"use strict"; //catch some common coding errors

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
let x;
let y;

let xSpeed;
let ySpeed;

function setup() {
    createCanvas(400, 300);
    xSpeed = 1;
    ySpeed = 1;
    x = width / 2
    y = height / 2
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    fill(255, 60);
    rect(0, 0, width, height);
    //Now, we draw the ball
    fill(255, 0, 0);
    ellipse(x, y, 20, 20)
    //Now, we account for wall bounce
    if (x === 390) {
        xSpeed = -1;
    }
    if (x === 10) {
        xSpeed = 1
    }
    if (y === 290) {
        ySpeed = -1
    }
    if (y === 10) {
        ySpeed = 1
    }
    //Now, we move the ball
    x = x + xSpeed
    y = y + ySpeed
}
