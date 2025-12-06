export function setupCopyButton() {
    const copyPassword = document.querySelector('.copy-password')
    const passwordResult = document.querySelector('.password-result')
    const copyNotification = document.querySelector('.copy-notification')

    copyPassword.addEventListener('click', () => {
        const password = passwordResult.textContent;
        navigator.clipboard.writeText(password)
            .then(() => {
                copyNotification.classList.add('show')

                setTimeout(() => {
                    copyNotification.classList.remove('show')
                }, 2000)
            })
    })
}