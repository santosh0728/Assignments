const obj = {
    computer: 42,
    maths: 42,
    science: 50
}

//calculate the percentage he scored in the exams out of total 150 score
let sum=0
const totalMarks=150
for(item in obj){
  sum=sum+obj[item]
}
totalSubjects=Object. keys(obj).length

let percentage= sum/totalMarks*100
percentage
a=percentage.toFixed(2)
percentageObtained=parseFloat(a)

obj.percentageObtained=percentageObtained
obj