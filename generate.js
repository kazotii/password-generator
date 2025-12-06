export function generatePassword() {
    const numbersArray = ['0123456789']
    const symbolsArray = ['!@#$%^&*()_+=-№;:?{}<>/|']
    const uppercaseLettersArray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    const lowercaseLettersArray = ['abcdefghijklmnopqrstuvwxyz']

    const passwordSliderValue = document.querySelector('#password-length').value
    const uppercaseLetters = document.querySelector('#uppercase').checked
    const numbers = document.querySelector('#numbers').checked
    const symbols = document.querySelector('#symbols').checked

    let passwordPool = ''
    passwordPool += lowercaseLettersArray

    if (uppercaseLetters === true) {
        passwordPool += uppercaseLettersArray
    }

    if (numbers === true) {
        passwordPool += numbersArray
    }

    if (symbols === true) {
        passwordPool += symbolsArray
    }

    let passwordResult = ''

    for (let i = 0; i < passwordSliderValue; i++) {
        const randomIndex = Math.floor(Math.random() * passwordPool.length)
        let randomSymbol = passwordPool[randomIndex]
        passwordResult += randomSymbol
    }
    return passwordResult
}   