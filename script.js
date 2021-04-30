document.getElementById('change-font').addEventListener('click', changeFont)

document.getElementById('change-size').addEventListener('click', changeSize)

document.getElementById('change-color').addEventListener('click', changeColor)

function changeFont () {
  document.getElementById('paragraph').style.fontFamily = 'Arial'
}

function changeSize () {
  document.getElementById('paragraph').style.fontSize = 'X-large'
}

function changeColor () {
  document.getElementById('paragraph').style.color = 'red'
}
