export function passwordStrength() {
    const strengthLines = document.querySelectorAll('.level-bar')
    let checkedCount;
    let length = document.getElementById('password-length').value
    let level = document.querySelector('.strength-level')

    checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length
        strengthLines[0].style.backgroundColor = ''
        strengthLines[1].style.backgroundColor = ''
        strengthLines[2].style.backgroundColor = ''
        strengthLines[3].style.backgroundColor = ''

    if (checkedCount === 0 && length >= 14) {
    level.textContent = 'HARD'
    strengthLines[0].style.backgroundColor = 'green'
    strengthLines[1].style.backgroundColor = 'green'
    strengthLines[2].style.backgroundColor = 'green'
    strengthLines[3].style.backgroundColor = 'green'
    }

    else if (checkedCount === 0  || (checkedCount === 1 && length <= 4)) {
        level.textContent = 'WEAK'
        strengthLines[0].style.backgroundColor = 'red'
    }

    else if ((checkedCount === 1 && length > 4) || (checkedCount === 2 && length <= 4) || (checkedCount === 3 && length <= 4)) {
        level.textContent = 'EASY'
        strengthLines[0].style.backgroundColor = 'blue'
        strengthLines[1].style.backgroundColor = 'blue'
    }

    else if (checkedCount === 2 && length > 4) { 
        level.textContent = 'MEDIUM'
        strengthLines[0].style.backgroundColor = 'yellow'
        strengthLines[1].style.backgroundColor = 'yellow'
        strengthLines[2].style.backgroundColor = 'yellow'
    }

    else if (checkedCount === 3 && length > 4) {
        level.textContent = 'HARD'
        strengthLines[0].style.backgroundColor = 'green'
        strengthLines[1].style.backgroundColor = 'green'
        strengthLines[2].style.backgroundColor = 'green'
        strengthLines[3].style.backgroundColor = 'green'
    }
}
