const display = document.getElementById("display")
const button20 = document.getElementById("button20")
const button21 = document.getElementById("button21")
const button22 = document.getElementById("button22")

button20.onclick = function() {
  display.textContent = "不正解"
}

button21.onclick = function() {
  display.textContent = "正解"
}

button22.onclick = function() {
  display.textContent = "不正解"
}
