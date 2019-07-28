// we use "i" variable naming for "iteration"
//for (let i = 0; i < 3; i++){
 // console.log(`${i + 1}.hello world`)
//}

// cara 1
for (let i = 2; i <= 20; i += 2){
  console.log(i)
}

// cara 2
for(let i = 1; i <= 10; i++){
  console.log(i * 2)
}

console.log("\n\n\n\n")

// loop drawing
let stars = " "
for(let i = 0; i < 10; i++){
  stars += '*'
}
console.log(stars)

let box = ""
// j untuk horizontal
// i untuk vertikal
for(let i = 0; i < 5; i++){
  for (let j = 0; j < 5; j++){
    box += '*'

  }
  box += "\n"
}
console.log(box)

let trial = ""
for(let i = 0; i < 5; i ++){
  for(let j = 0; j <= i; j ++){
    trial += "*"
  }
  trial += "\n"
}
console.log(trial)