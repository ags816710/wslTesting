console.log("Hello, World!")
let i = 0

function e() {
  console.log("Sup boi")
  i++
  if (i > 1000) {
      setTimeout(e, 100)
  }
}

e()

console.log("Hello, World")
