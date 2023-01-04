let tabButtons = document.querySelectorAll('[data-tab]');

tabButtons.forEach(button => {
    button.addEventListener('click', function(event){
        let country = button.getAttribute('country');

        tabButtons.forEach(tabButton => {
            tabButton.classList.remove('-activeButton')
        })

        button.classList.add('-activeButton')

        let allContents = document.querySelectorAll(`[country-content]`);
        allContents.forEach(contents => {
            contents.classList.remove('-activeContent')
        })

        let targetContents = document.querySelectorAll(`[country-content='${country}']`);
        targetContents.forEach(contents => {
            contents.classList.add('-activeContent')
        })
    })
})

let selectbox = document.querySelector('[data-selectbox]');

selectbox.addEventListener('change', changeContent);

function changeContent() {
    let selectboxCountry = selectbox.options[selectbox.selectedIndex].value;

    let allContents = document.querySelectorAll(`[country-content]`);

    allContents.forEach(contents => {
        contents.classList.remove('-activeContent')
    })

    let targetContents = document.querySelectorAll(`[country-content='${selectboxCountry}']`);

    targetContents.forEach(contents => {
        contents.classList.add('-activeContent')
    })
}