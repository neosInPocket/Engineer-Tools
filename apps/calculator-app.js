

class Calculator {
    constructor(currentValueTextElement) {
        this.currentValueTextElement = currentValueTextElement
        this.clear()
    }

    clear() {
        this.currentValue = ''
        this.operation = undefined
        currentNumber = []
    }

    delete() {
        this.currentValue = `$$ ${this.currentValueTextElement.innerText.toString().slice(0, -1)} $$`
        currentNumber.pop()
    }

    updateDisplay() {
        MathJax.typesetClear([this.currentValueTextElement])
        this.currentValueTextElement.innerText = this.currentValue
        MathJax.typeset([this.currentValueTextElement])
    }

    updateInfo() {

    }

    appendNumber(number) {
        this.currentValue = `$$ ${number} $$`
        console.log(currentNumber)
    }


    chooseOperation(operation) {
        this.operation = operation
    }

    compute() {
        let equals = eval(currentNumber.join(""))
        this.currentValueTextElement.innerText = equals
        console.log(eval(currentNumber.join("")))
    }




}

const numbersNum = document.querySelectorAll('[data-number]')
const functionsNum = document.querySelectorAll('[data-function]')
const operationsNum = document.querySelectorAll('[data-operation]')
const allClearNum = document.querySelector('[data-all-clear]')
const delNum = document.querySelector('[data-delete]')
const equalNum = document.querySelector('[data-equals]')
const currentValueTextElement = document.querySelector('.output')
let currentNumber = []

const calculator = new Calculator(currentValueTextElement)

numbersNum.forEach(num => {
    num.addEventListener('click', () => {

        if (num.innerText !== '.') {             //  single dot check
            currentNumber.push(num.innerText)
        } else {
            if (currentNumber.includes('.')) {
                return
            } else {
                currentNumber.push(num.innerText)
            }
        }

        calculator.appendNumber(currentNumber.join(""))
        calculator.updateDisplay()
    })
})

allClearNum.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})
delNum.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

equalNum.addEventListener('click', () => {
    calculator.compute()

})

operationsNum.forEach(operation => {
    operation.addEventListener('click', () => {
        if (!isNaN(parseFloat(currentNumber.at(-1)))) {
            currentNumber.push(operation.innerText)
        } else {
            return
        }
        console.log(currentNumber)
        calculator.chooseOperation(operation.innerText)
        calculator.appendNumber(currentNumber.join(""))
        calculator.updateDisplay()
    })
})














