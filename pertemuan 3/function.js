/////////////////////////
// function statement //
/////////////////////////

// function statement pada runtime akan di naikkan ke atas
// sehingga aman  digunakan bahkan sebelum di deklarasi
// istilah tersebut disebut "hoisting"

// name adalah function parameter
function greet (name) {
 console.log(`Hello ${name}`)
}

function alertUser() {
  console.log('error detected')
}

/////////////////////////
// function expression //
/////////////////////////

// function expression harus di deklarasikan dulu sebelum dipakai
const growl = function (){
  console.log('Meong')
}

// ketika user baru masuk
greet('alven')
greet('budi')
greet('meutia')
greet('ahmad')
greet()

// ketika user melakukan kesalahan
alertUser()

const eat = function(foodName){
  console.log(`I am eating ${foodName}`)

  // by default function akan return undefined
  // return undefined
}

const hasilFunction = eat('bimbimbap')
//console.log(hasilfunction) // undefined

const getSpecialNumber = function (){
  return 888
}

const number = getSpecialNumber ()
console.log(number)
console.log(number + 200)
console.log(Math.pow(number,2))

eat(getSpecialNumber())

setTimeout(function(){
  console.log('kamu sudah menunggu 3 detik')
})
// settimeout ada 2 parameter
// parameter 1 : function yang mau dijalankan
// parameter 2 : waktu delay ( dalam ms ) - 1000 ms = 1s

// cara 1
function printTulisan(){
  console.log('kamu sudah menunggu 3 detik')
}
setTimeout(printTulisan, 3000)

// cara 2
setTimeout(function(){
  console.log('test')
}, 2000)
// setInterval ada 2 parameter
// parameter 1 = function yang mau dijalankan
// parameter 2 = waktu delay (dalam ms)

const interval = setInterval(function(){
  console.log('1 detik telah berlalu')
}, 1000)

// challenge: setInterval jalanin cuma 3 kali
function stop(){
  clearInterval (interval)
}
setTimeout(stop,3100)