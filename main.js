let input = document.getElementsByTagName('input');
let gryffindor = 0 
let ravenclaw = 0
let slytherin = 0
let hufflepuff = 0

function onsubmit(e){e.preventDefault()


 for(let i = 0; i < input.length; i++){

 if(input[i].checked && input[i].defaultValue === 'gryffindor'){
         console.log(input[i].defaultValue) 
         gryffindor++
     }
    else if(input[i].checked && input[i].defaultValue === 'ravenclaw'){
        console.log(input[i].defaultValue)
        ravenclaw++
    }
    else if(input[i].checked && input[i].defaultValue === 'slytherin'){
        console.log(input[i].defaultValue)
        slytherin++
    }
     else if(input[i].checked && input[i].defaultValue === 'hufflepuff'){
        console.log(input[i].defaultValue)
        hufflepuff++
    }
}

 console.log(gryffindor,ravenclaw, slytherin, hufflepuff)
 if(gryffindor+ravenclaw+slytherin+hufflepuff === 10){
     let maxNum = Math.max(gryffindor,ravenclaw, slytherin, hufflepuff)
         if(maxNum === gryffindor){
            window.location.href = "./gryffindor.html"
         }
         else if(maxNum === ravenclaw){
            window.location.href = "./ravenclaw.html"
         }
         else if(maxNum === hufflepuff){
            window.location.href = "./hufflepuff.html"
         }
         else if(maxNum === slytherin){
            window.location.href = "./slytherin.html"
         }

 }
 else{
    alert('Please fill out all questions')
}
}

input.submit.addEventListener('click', onsubmit)
