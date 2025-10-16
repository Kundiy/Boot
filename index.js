const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
    return wrapper
}
const tooltipTriggerList = document.querySelector('.tool')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const btn = document.querySelector('.btn-outline-primary');
let currentAlert = null;
let count = 0


btn.addEventListener('click', (event) => {
    count++
    if(count % 2 === 1) {
        currentAlert = appendAlert('Nice, you triggered this alert message!', 'success')
    } else{
        currentAlert.classList.add('hidden')
    }
})

