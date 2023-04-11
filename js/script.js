/*document.querySelector(".card-number-input").oninput = () =>{
    document.querySelector(".number-box").innerText = document.querySelector(".card-number-input").value
}
*/


//input

const nameText = document.querySelector(".card-holder-input")
const month = document.querySelector(".valid-month")
const year = document.querySelector(".valid-year")
const cvv = document.querySelector(".cvv-input")
const number = document.querySelector(".card-number-input")

 const campos = document.querySelectorAll(".required")

//cartão
const cardNumberText = document.querySelector(".number-box")
const cardHolderText = document.querySelector(".name-vl")
const expM = document.querySelector(".expiration-m")
const expY = document.querySelector(".expiration-y")
const cardCVVText = document.querySelector(".cvv-vl")


//informativo
const info  = document.getElementsByClassName("span-required")


//preencher o cartão


number.oninput = (e) =>{
    if (!e.target.value) {
        cardNumberText.innerText = "0000 0000 0000 0000"
       
    }else{
        const valuesOfInput = e.target.value.replaceAll(" ", "")
         //document.querySelector(".number-box").innerText = document.querySelector("#card-number").value
         if(e.target.value.length > 14){
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")

         }else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3")
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3")

        }else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2")

        }else{
            cardNumberText.innerHTML = valuesOfInput
        }


    }
   
}

//nome
nameText.oninput = () =>{
    
    document.querySelector(".name-vl").innerText = document.querySelector(".card-holder-input").value.toUpperCase()
}

//mês

month.oninput = (e) =>{
    
    if (!e.target.value) {
        expM.innerHTML = "00";
    } else {
        const valuesOfInput = e.target.value.replace("/","");

        if (e.target.value.length > 1) {
            e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1")
            expM.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1")
        } else {
            expM.innerHTML = valuesOfInput;
        }
    }

}

//ano
year.oninput =(e) =>{
    if (!e.target.value) {
        expY.innerHTML = "00"
    } else {
        const valuesOfInput = e.target.value.replace("/", "")

        if (e.target.value.length > 2) {
            e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1")
            expY.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1")
        } else {
            expY.innerHTML = valuesOfInput
        }
    }

}

//cvv

cvv.oninput =(e) =>{
    if (!e.target.value) {
        cardCVVText.innerHTML = "000"
    } else {
       // cardCVVText.innerHTML = e.target.value;
       console.log(cardCVVText.innerHTML = e.target.value)
    }

}

//submit

const form = document.querySelector("#form").addEventListener("submit" ,(e) =>{
    e.preventDefault()

    cvvValidar()
    numeroValidar()

    nomevalidar()
    mesValidar()
    anoValidar()

})   

//validação
function setError(index){
    campos[index].style.border = '2px solid darkred'
    info[index].innerHTML = 'campo invalido'
    
}

function removeError(index){
    campos[index].style.border = '2px solid darkgreen'
    info[index].innerHTML = ''
}


function numeroValidar(){
    if(campos[0].value.length < 19 ){
        setError(0)
    }else{
        removeError(0)
        console.log('valido')
    }
}

function nomevalidar(){
    if(campos[1].value.length < 8){
        setError(1)

    }else{
        removeError(1)
    }
}

function mesValidar(){
    if(campos[2].value < 1 || campos[2].value > 12  ){
     setError(2)

    }else if(campos[2].value == '' ){
     setError(2)
    }else{
        removeError(2)
    }

 }

 function anoValidar(){
    if(campos[3].value < 23 || campos[3].value > 30){
        setError(3)

    }else{
        removeError(3)
    }
 }

 function cvvValidar(){
    if(campos[4].value.length < 3 ){
        setError(4)
        
    }else if(campos[4].value == ''){
        setError(4)
       
    }else if(!campos[4].value === '' && nameText.value == '' || number.value == '' || month.value == '' || year.value == ''){
       setError(4)
      
    }else if(!campos[4].value === '' && campos[1].value < 8 || campos[0].value < 19 || month.value > 12 || month.value < 1 || year.value < 24 || year.value > 30){
        setError(4)
        setError(2)
        setError(1)
        setError(0)
       
    }else{
        removeError(4)
        alert('enviado com sucesso')
    }
 }





