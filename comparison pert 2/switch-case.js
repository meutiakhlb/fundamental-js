// switch case menerima keyword untuk dibandingkan

const job = "doctor"

switch (job) {
  case "programmer":
    console.log('you make great applications out of code')
    break
  case "doctor":
  case "dokter":
    console.log('you heal the sick one')
    break
  case "chef":
    console.log('you cook delicious and irresistible food')
    break
  default:
     console.log("what do you do?")
}