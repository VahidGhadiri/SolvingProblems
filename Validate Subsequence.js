const interviewFucntion = (a, b) =>{
    let j = 0
    for(let i=0; i<a.length; i++){
        if(a[i]=== b[j]){
            j++
        }
        if(j === b.length){
            return true
        }else{
            return null
        }
    }
}

const array = [1,2,3,4,5,6,7,8,9]
const test = [1,2,3,4, 120]

console.log(interviewFucntion(array, test))