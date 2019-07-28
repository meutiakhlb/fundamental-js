const sentence = 'ibu pergi beli semangka ke pasar'

// ambil panjang string
console.log(sentence.length)

// ambil posisi index sebuah string
console.log(sentence.indexOf('semangka'))

// ambil substring dari index sekian ke sekian
console.log(sentence.substring(4, 6))

const kalimatbaru = sentence.substring(sentence.indexOf('beli'), sentence.length)
console.log(kalimatbaru)

// slice string
console.log(sentence.slice(5,8))

// includes (nge-return boolean)
console.log(sentence.includes('ibu'))

// split ( mengubah string menjadi array)
console.log(sentence.split(''))

// mengubah menjadi huruf kapital
console.log(sentence.toUpperCase())

const x = '123'
const y = '456'
const xint = parseInt(x)
const yint = parseInt(y)
const result = (xint + yint).toString()
console.log(result)

// mengubah menjadi huruf kecil
console.log(sentence.toLowerCase())

// mengubah number ke string
const angka = 123456
angka.toString()

// type coercion - angka + string + number berubah menjadi string secar otomatis
const number = 123
console.log("ibu memiliki angka " + number)

// mengubah string ke number
const numberString = '123456'
console.log(parseInt(numberString))