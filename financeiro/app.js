const transactionsUl = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');
const form = document.querySelector('#form');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

const localStorageTransaction = JSON.parse(localStorage
    .getItem('transactions'));

let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransaction : [];

const removeTransaction = ID => {
    transactions = transactions.filter(transaction => 
        transaction.id !== ID);
    updateLocalStorage();
    init();
};

const addTransactionIntoDOM = ( { amount, name, id }) =>{
    const operator = amount < 0 ? '-' : '+';
    const li = document.createElement('li');
    const amountWithoutOperator = Math.abs(amount);
    const cssClass = amount < 0 ? 'minus' : 'plus';

    li.classList.add(cssClass);
    li.innerHTML = `
        ${name} 
        <span>${operator} R$ ${amountWithoutOperator}</span>
        <button class="delete-btn" onClick="removeTransaction(${id})">x</button>
    `
    transactionsUl.append(li);
};

const getTotal = transactionsAmounts => 
    transactionsAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2);

const getIncome = transactionsAmounts => 
    transactionsAmounts
    .filter(value => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2);

const getExpenses = transactionsAmounts => 
    Math.abs(transactionsAmounts
    .filter(value => value < 0) 
    .reduce((accumulator, value) => accumulator + value, 0))
    .toFixed(2);

const updateBalanceValues = () =>{
    const transactionsAmounts = transactions.map(( { amount }) => amount);
    const total = getTotal(transactionsAmounts);
    const income = getIncome(transactionsAmounts);
    const expense = getExpenses(transactionsAmounts);

    balanceDisplay.textContent = `R$ ${total}`;
    incomeDisplay.textContent = `R$ ${income}`;
    expenseDisplay.textContent = `R$ ${expense}`;  
};

const init = ()=>{
    transactionsUl.innerHTML = '';
    transactions.forEach(addTransactionIntoDOM);
    updateBalanceValues();  
};

init();

const updateLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
};

const generateId = Math.round(Math.random() * 10000);

const addToTransactionArray = (transactionName, transactionAmount) => {
    transactions.push({
        id: generateId, 
        name: transactionName, 
        amount: Number(transactionAmount)
    });
};

const cleanInputs = () => {
    inputTransactionName.value = '';
    inputTransactionAmount.value = '';
};

const handleFormSubmit = event => {
    event.preventDefault();
    const transactionName = inputTransactionName.value.trim();
    const transactionAmount = inputTransactionAmount.value.trim();
    const isSomeInputEmpty = !transactionName || !transactionAmount
    if(isSomeInputEmpty) {
        alert('Favor preencher dados completos da transação.')
        return
    }

    addToTransactionArray(transactionName, transactionAmount);
    init();
    updateLocalStorage();
    cleanInputs();    
};

form.addEventListener('submit', handleFormSubmit);
