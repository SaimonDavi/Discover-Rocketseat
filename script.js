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
    },
    {
        id: 4,
        description: 'Freelance',
        amount: 20000,
        date: '21/03/2022'
    }
]

const Transactions = {
    incomes() {
        let income = 0

        transactions.forEach(element => {
            if(element.amount > 0) {
                income += element.amount
            }
        });

        return income
    },
    expenses() {
        let expense = 0

        transactions.forEach(element => {
            console.log(element.description)
            if(element.amount < 0) {
                console.log(expense)
                expense += element.amount
                console.log(expense)
            }
        });

        return expense
    },
    total(expenses, incomes) {
        let total = expenses + incomes
        
        return total
    }
}

const DOMFunctions = {
    transactionsContainer : document.querySelector('#data-table tbody'),

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
    },

    updateBalance() {
        let incomesCard = Transactions.incomes()
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(incomesCard)

        let expensesCard = Transactions.expenses()
        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(expensesCard)

        let totalCard = Transactions.total(expensesCard, incomesCard)
        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(totalCard)
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) > 0 ? '' : '-'

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

DOMFunctions.updateBalance()