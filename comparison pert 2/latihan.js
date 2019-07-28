const q1= prompt("berapa berat badanmu(kg)?")
const q2 = prompt("berapa tinggimu (M)?")
const IMT1 = (q1/ Math.pow(q2,2))

if (IMT1 < 18.5){
  alert("berat badan kurang")
} else if (IMT1 >= 18.5 && IMT1 <= 24.9){
  alert("berat badan ideal")
} else if (IMT1 >= 25.0 && IMT1 <= 29.9){
  alert("berat badan berlebih")
} else if (IMT1 >= 30.0 && IMT1 <= 39.9){
  alert("berat badan sangat berlebih")
} else{
  alert("obesitas")
}