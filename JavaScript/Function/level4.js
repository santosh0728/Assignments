//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600 

const rideDetails= {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30
}
distance=rideDetails.distance
var Str = distance
var newStr = Str.replace('km','')
distance1=parseInt(newStr)
unitKmPrice=rideDetails.unitKmPrice
Price=parseInt(unitKmPrice)
// distance1*Price

function totalPrice(distance1,Price){
  total=distance1*Price
  return total
}

totalPrice(distance1,Price)


//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}
const checkIfSucces=(obj)=>{
//write your code here
   return obj.status === 'success';
  
}

checkIfSucces(status1)  //should return false

checkIfSucces(status2)  //should return true