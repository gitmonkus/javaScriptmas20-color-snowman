 const inputs = document.querySelectorAll(".controls input");

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.

// let hat
// let eye
// let nose
// let button

const theEye = document.getElementById('color')
theEye.addEventListener('input', function() {
  let color = theEye.value
  let name = '--color'
  switchColor(name, color)
})

const theHat = document.getElementById('color1')
theHat.addEventListener('input', function() {
  let color = theHat.value
  let name = '--color1'
  switchColor(name, color)
})

const theButton = document.getElementById('color2')
theButton.addEventListener('input', function() {
  let color = theButton.value
  let name = '--color2'
  switchColor(name, color)
})

const theNose = document.getElementById('color3')
theNose.addEventListener('input', function() {
  let color = theNose.value
  let name = '--color3'
  switchColor(name, color)
})

function switchColor(name, color) {
  document.querySelector(":root").style.setProperty(`${name}`, `${color}`)
}
