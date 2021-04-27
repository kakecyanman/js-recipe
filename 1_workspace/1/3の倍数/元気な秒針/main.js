const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 1
  if (count % 3 === 0) {
    console.log(`${count}!!!!!!!`)
  } else {
    console.log(count)
  }
  display.textContent = count
}

// const genkiFunction = function(count) {
//   // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
//   if (count % 3 === 0) {
//     console.log(`${count}!!!!!!!`)
//   } else {
//     console.log(count)
//   }
// }

let id = null

button.onclick = function() {
  if (id === null) {
    // start
    id = setInterval(countUp, 1000)
    button.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
