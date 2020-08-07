const mess = "Hello from app.js";
console.log(mess);

// const totalCredit = document.querySelector("#totalCredit").innerText.split(" ");
// console.log(Number(totalCredit[0]));
//....

// const total = document.querySelector("#total");
// const totalDebit = document.querySelector("#totalDebit");
// const totalDebitPercent = document.querySelector("#totalDebitPercent");
// const operation = document.querySelector("#operation");
// const intitule = document.querySelector("#intitule");
// const montant = document.querySelector("#montant");
// const credit = document.querySelector("valeur.credit");
// const debit = document.querySelector("valeur.debit");

//---------------------------------------------------------------------------------------//

//Débit section ------------------------------//

// let totalCredit = 0;
// //total tableau ligne1 débit
// let firstLabelDebit = 'Achat PS4';
// let firstCostDebit = 499.99;
// let firstPercentDebit = (100*firstCostDebit)/totalCredit;
// firstPercentDebit = firstPercentDebit.toFixed(2);

// let firstOperationDebit = [
//     firstLabelDebit , 
//     firstCostDebit , 
//     firstPercentDebit
// ];

// console.table(firstOperationDebit);




// //total tableau ligne2 débit
// let secondLabelDebit = 'Achat TV';
// let secondCostDebit = 599;
// let secondPercentDebit = (100*secondCostDebit)/totalCredit;
// secondPercentDebit = secondPercentDebit.toFixed(2);

// let secondOperationDebit = [
//     secondLabelDebit , 
//     secondCostDebit , 
//     secondPercentDebit
// ];

// console.table(secondOperationDebit);

// //test---------------------------------//
// //total tableau ligne3 débit
// // let thirdLabelDebit = 'Vache';
// // let thirdCostDebit = 99;
// // let thirdPercentDebit = (100*thirdCostDebit)/totalCredit;
// // thirdPercentDebit = thirdPercentDebit.toFixed(2);

// // let thirdOperationDebit = [
// //     thirdLabelDebit , 
// //     thirdCostDebit , 
// //     thirdPercentDebit
// // ];

// // console.table(thirdOperationDebit);
// //fin test-----------------------------//

// //-------------------------------------------------------------------------------------//

// //Calcul total Debit = sommes des index1  (coût)
// let debitArray = [firstOperationDebit, secondOperationDebit];
// //On instancie la variable totalDebit pour pouvoir l'utiliser dans la boucle forEach


// totalDebit = 0;

// debitArray.forEach(function(price){
//     totalDebit += (price[1]);
// });





// //-----------------------------------------------------------------------------------//

// //creditsection -------------------------------//

// totalCredit = 0;
// console.log(totalCredit)

// let firstLabelCredit = "salaire";
// let firstCostCredit = 1520;

// let firstOperationCredit = [
//     firstLabelCredit ,
//     firstCostCredit ,
// ]

// let creditArray = [
//     firstOperationCredit ,
// ]
// console.log(creditArray);

// creditArray.forEach(function(price){
//     totalCredit += (price[1]);
// });



// let total = totalCredit - totalDebit ;
// let solde = document.getElementById('total');


// if(total> 0){
//     solde.innerHTML = `+${total}`
// } else{
//     solde.innerHTML = `${total}`
// };
// total = total.toFixed(2);


// let percentDebit = (100*totalDebit)/totalCredit;
// percentDebit = percentDebit.toFixed(2);
// console.log(percentDebit);

// -----------------------------------Affichages----------------------------------------//

let totalCredit = 0;
let totalDebit = 0;
let totalDebitPercent = document.getElementById("totalDebitPercent");
let intitule = document.getElementById("intitule");
let montant = document.getElementById("montant");
let soldeDebit = document.getElementById("totalDebit");
soldeDebit.innerHTML = `${totalDebit} €`;

let soldeCredit = document.getElementById("totalCredit");
soldeCredit.innerHTML = `${totalCredit} €`;

let operation = document.getElementById("operation");
let debit = document.getElementById("debit");
let credit = document.getElementById("credit");
let total = 0;



//boutton submit
let button = document.querySelector('button');


button.addEventListener('click',(oper) =>{
    oper.preventDefault();
let addLiContent = document.createElement('li');
let addSpanElement = document.createElement('span');

//Si l'opération est positive, le résultat sera implémenté 
//dans crédit sinon il sera implémenté dans débit//
    if (operation.value == "credit"){
        addLiContent.innerHTML = `<span class="intitule">${intitule.value}</span>
        <span class="montant txt-color-gazoil">${montant.value} €</span>`;
        credit.appendChild(addLiContent);
        totalCredit = Number(totalCredit) + Number(montant.value);
        soldeCredit = document.getElementById("totalCredit");
        totalCredit = Number(totalCredit.toFixed(2));
        soldeCredit.innerHTML = totalCredit+"€";
    }else{
        addLiContent.innerHTML = `<span class="intitule">${intitule.value}</span>
        <span class="montant txt-color-red"> ${montant.value} € </span>
        <span class="percent txt-color-red"> ${((100*montant.value)/totalCredit).toFixed(2)} %</span>`;
        debit.appendChild(addLiContent);
        totalDebit = Number(totalDebit) + Number(montant.value);
        soldeDebit = document.getElementById("totalDebit");
        totalDebit = Number(totalDebit.toFixed(2));
        soldeDebit.innerHTML = totalDebit +"€";
        
    }


total = totalCredit - totalDebit ;
let solde = document.getElementById('total');
percentDebit = ((100*totalDebit)/totalCredit).toFixed(2);
percentDebit.innerHTML = percentDebit;

if(total> 0){
        solde.innerHTML = `+${total}€`;
    } else{
        solde.innerHTML = `${total}€`;
    };
    total = total.toFixed(2);

    console.log(totalDebitPercent);
    
    totalDebitPercent = (100*totalDebit)/totalCredit;
    console.log(totalDebitPercent);
    addSpanElement.innerHTML =`<span class="percent txt-color-white" id="totalDebitPercent"
    >${totalDebitPercent.toFixed(2)} %</span>`
    soldeDebit.appendChild(addSpanElement);
});









// const newElementDebit = document.createElement('li');

// debit.appendChild(newElementDebit);

// newElementDebit.innerHTML = 
// `<span class="intitule">${thirdLabelDebit}</span>
// <span class="montant txt-color-red">${thirdCostDebit} €</span>
// <span class="percent txt-color-red">${thirdPercentDebit} %</span>`







// debit.addEventListener("submit", function(){
//     document.getElementById("intitule");
// });
//ajout d'une ligne dans le html débit