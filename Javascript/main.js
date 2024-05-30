

const Calculate = ()=> {
    const input = document.querySelector('.input');
    const Btn = document.querySelector('.input-section button');
    const expense_txt =  document.querySelector('.expense-txt');
    const budge_txt = document.querySelector(".budget-txt");
    let balance_txt = document.querySelector('.balance-txt');
    const budgetSection = document.querySelector(".budget-section p");

    Btn.addEventListener("click", ()=> {
        if( input.value === "") {
            alert('Your input is empty, please write a number')

        }
        else {
            budge_txt.textContent = input.value;
            balance_txt.textContent = input.value;
        
        }

        return input.value = "";
       
        
    })

}

Calculate();