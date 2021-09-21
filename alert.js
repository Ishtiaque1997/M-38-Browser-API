console.log('I am here')
// alert('she is here'

//alert demonstration
const maComing=(()=>{
  alert('ma is coming. Open the book')
})

//confirm demonstration
const goingPicnic=(()=>{
 const response=confirm('are you going to picnic??')
 console.log(response)
 if(response===true){
  alert('bkash the amount')
 }
 else{
  console.log('ok then')
 }
})

//prompt demonstration
const askName=(()=>{
 const name=prompt('Tell your name')
 if(name){
  console.log(name)
 }
 
})