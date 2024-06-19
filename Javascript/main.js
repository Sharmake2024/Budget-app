

const Calculate = ()=> {
            const input = document.querySelector('.input');
            const PopUp = document.querySelector('.pop-up');
            const Btn = document.querySelector('.input-section button');
            let expense_txt =  document.querySelector('.expense-txt');
            let budge_txt = document.querySelector(".budget-txt");
            let balance_txt = document.querySelector('.balance-txt');
            // const budgetSection = document.querySelector(".budget-section p");
            let expenseValue = document.querySelector('.value-div li');
            let money = null;
            Btn.addEventListener("click", ()=> {
                if( input.value === "") {
                    PopUp.style.display = "block";
                    setTimeout( ()=> {
                        PopUp.style.display= "none";
                    }, 4000);

                }
                else {
                    money = input.value;
                    budge_txt.textContent = money;
                    balance_txt.innerText = money - expense_txt.innerText;
            
    
                }

                return input.value = "";
                
            })




            //// expense section

         
            const inputOne = document.querySelector(".inputOne")

            const inputTwo = document.querySelector('.inputTwo')
            const DeleteBtn = document.querySelector(".delet-btn")
            const expenseBtn = document.getElementById("ExpenseBtn");
            const PopUpExpense = document.querySelector('.pop-up-2');
            const PopUpText = document.querySelector('.pop-up-2 p');
            expenseBtn.addEventListener('click', ()=> {

                if ( inputOne.value === "" && inputTwo.value === "") {
                    PopUpExpense.style.display = "block";
                    PopUpText.textContent = " You inputs are empty !";
                    setTimeout( ()=> {
                        PopUpExpense.style.display= "none";
                    },4000);
                } 
                else {
                    let ExpenseTitle = document.querySelector(".expense-div li");
                    let ExpenseAmount = document.querySelector(".value-div li");
                    let newMoney = parseInt(budge_txt.innerText) - parseInt(inputTwo.value);
                    balance_txt.textContent = newMoney;
                    expense_txt.textContent = inputTwo.value;
                        ExpenseAmount.textContent = inputTwo.value;
                    ExpenseTitle.textContent = inputOne.value;
                

                   
                    
                }

                inputOne.value = "";
                inputTwo.value = "";
            })




}

Calculate();





