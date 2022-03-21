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
        const CSSclass = transaction.amount > 0 ? 'income' : 'expense'

        const amount = Utils.formatCurrency(transaction.amount)

        const htmlContent = `
            <td class="description">${transaction.description}</td>
            <td class=${CSSclass}>${amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover transação"></td>
        `

        return htmlContent
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) > 0 ? '' : '- '

        value = String(value).replace(/\D/g, '')

        value = Number(value) / 100

        value = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        return signal + value
    }
}

transactions.forEach(transaction => {
    DOMFunctions.addTransaction(transaction)
});