import { passwordStrength } from './strength.js'
import { generatePassword } from './generate.js'

const generateButton = document.querySelector('.generate-button')
const uppercaseLetter = document.getElementById('uppercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const passwordWord = document.querySelector('.password-result')

export function setupGenerateButton() {
    generateButton.addEventListener(('click'), () => {
        uppercaseLetter.checked;
        numbers.checked;
        symbols.checked;

        passwordStrength()
        let passwordResult = generatePassword()
        passwordWord.textContent = passwordResult
        passwordWord.classList.add('password-result--active')
    })
}