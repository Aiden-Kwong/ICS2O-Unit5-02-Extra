// This detects any clicks on the button, if there are any it triggers the function called change.
document.getElementById('button').addEventListener('click', change)

// This function will change, in order, the font size, font type and font color of any paragraph with the id 'para'.
function change () {
  document.getElementById('para').style.fontSize = 20
  document.getElementById('para').style.fontFamily = 'sans-serif'
  document.getElementById('para').style.color = '#3e5c76'
}
