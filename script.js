const Modal = {
    toggle() {
        document.querySelector('.modal-overlay').classList.toggle('active');
    }
}

const Transactions = {
    all: [
        {
            description: 'Luz',
            amount: -50000,
            date: '21/03/2022'
        },
        {
            description: 'Trabalho',
            amount: 500000,
            date: '21/03/2022'
        },
        {
            description: 'Internet',
            amount: -20000,
            date: '21/03/2022'
        },
        {
            description: 'Freelance',
            amount: 20000,
            date: '21/03/2022'
        }
    ],

    add(transaction) {
        Transactions.all.push(transaction)
        App.reload()
    },

    remove(index) {
        Transactions.all.splice(index, 1)
        App.reload()
    },

    incomes() {
        let income = 0

        Transactions.all.forEach(element => {
            if (element.amount > 0) {
                income += element.amount
            }
        });

        return income
    },

    expenses() {
        let expense = 0

        Transactions.all.forEach(element => {
            if (element.amount < 0) {
                expense += element.amount
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
    transactionsContainer: document.querySelector('#data-table tbody'),

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
    },

    clearTransactions() {
        DOMFunctions.transactionsContainer.innerHTML = ""
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
    },

    formatAmount(value) {
        value = Number(value) * 100

        return value
    },

    formatDate(value) {
        const splittedDate = value.split("-")

        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    }
}

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    validateFields() {
        const { description, amount, date } = Form.getValues()

        if (description.trim() === "" || amount.trim() === "" || date.trim() === "") {
            throw new Error("Por favor, preencha todos os campos")
        }
    },

    formatValues() {
        let { description, amount, date } = Form.getValues()

        amount = Utils.formatAmount(amount)

        date = Utils.formatDate(date)

        return {
            description,
            amount,
            date
        }
    },

    clearFields() {
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""

        Modal.toggle()
    },

    submit(event) {
        event.preventDefault()

        try {
            Form.validateFields()
            const transaction = Form.formatValues()
            Transactions.add(transaction)
            Form.clearFields()
        } catch (error) {
            alert(error.message)
        }
    }
}

const App = {
    init() {
        Transactions.all.forEach(transaction => {
            DOMFunctions.addTransaction(transaction)
        });

        DOMFunctions.updateBalance()
    },
    reload() {
        DOMFunctions.clearTransactions()
        App.init()
    }
}

App.init()
