/*document.querySelector(".card-number-input").oninput = () =>{
    document.querySelector(".number-box").innerText = document.querySelector(".card-number-input").value
}
*/


//const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardCVV = document.querySelector("#cvv-text");

//data e cvv
const cardNumberText = document.querySelector(".number-box");
const cardHolderText = document.querySelector(".name-vl");
const cardExpirationText = document.querySelector(".expiration-vl");
const cardCVVText = document.querySelector(".cvv-vl");

//informativo
const res  = document.querySelector("#res-number")
const res1 = document.querySelector("#res-name")
const sucesso = document.querySelector("#res-success")



const number = document.querySelector("#card-number")
number.oninput = (e) =>{
    if (!e.target.value) {
        cardNumberText.innerText = "0000 0000 0000 0000";
       
    }else{
        const valuesOfInput = e.target.value.replaceAll(" ", "")
         //document.querySelector(".number-box").innerText = document.querySelector("#card-number").value
         if(e.target.value.length > 14){
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")

         }else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3")

        }else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");

        }else{
            cardNumberText.innerHTML = valuesOfInput
        }


    }
   
}


const nome = document.querySelector(".card-holder-input")


nome.oninput = () =>{
    
    document.querySelector(".name-vl").innerText = document.querySelector(".card-holder-input").value.toUpperCase()
}


const btn = document.querySelector(".submit-btn").addEventListener("click" ,(e) =>{
    e.preventDefault()



    if(nome.value === '' && number.value === '' || nome.value.length < 2 || number.value.length < 19  ){
        res.innerText = 'Erro! Verifique os numeros digitados'
        res1.innerText = 'Erro! Nome invalido'
        console.log('erro')
        

    }else{
        sucesso.innerHTML = 'Enviado com sucesso'
        res.innerHTML = ""
        res1.innerHTML = ""

    }
})

document.querySelector(".card-number-input").oninput = () =>{
    document.querySelector(".number-box").innerText = document.querySelector(".card-number-input").value
}

if (!e.target.value) {
    cardExpirationText.innerHTML = "02/40";
} else {
    const valuesOfInput = e.target.value.replace("/", "");

    if (e.target.value.length > 2) {
        e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
    } else {
        cardExpirationText.innerHTML = valuesOfInput;
    }
}