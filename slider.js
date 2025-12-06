export const passwordSlider = document.querySelector('#password-length')

export function passwordSliderChanger() {
    const passwordLength = document.querySelector('.symbols-count')

    passwordSlider.addEventListener(('mousedown'), () => {
        passwordSlider.classList.add('password-range--active')
    })

    passwordSlider.addEventListener(('touchstart'), () => {
        passwordSlider.classList.add('password-range--active')
    })

    passwordSlider.addEventListener(('mouseup'), () => {
        passwordSlider.classList.remove('password-range--active')
    })

    passwordSlider.addEventListener(('touchend'), () => {
        passwordSlider.classList.remove('password-range--active')
    })

    passwordSlider.addEventListener(('mouseleave'), () => {
        passwordSlider.classList.remove('password-range--active')
    })
    
    passwordSlider.addEventListener(('input'), () => {
        const value = passwordSlider.value;
        passwordLength.textContent = value;

        const min = passwordSlider.min;
        const max = passwordSlider.max;
        const percent = ((value-min) / (max-min)) * 100;
        passwordSlider.style.setProperty('--fill-percent', percent + '%')
    })
}
