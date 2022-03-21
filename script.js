const Modal = {
    toggle() {
        document.querySelector('.modal-overlay').classList.toggle('active');
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '21/03/2022'
    },
    {
        id: 2,
        description: 'Trabalho',
        amount: 500000,
        date: '21/03/2022'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '21/03/2022'
    }
]

const Transactions = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}

const DOMFunctions = {
    transactionsContainer : document.querySelector('#data-table tbody')
    ,
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOMFunctions.innerHTMLTransaction(transaction)
        DOMFunctions.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const htmlContent = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover transação"></td>
        `

        return htmlContent
    }
}

DOMFunctions.addTransaction(transactions[0])
