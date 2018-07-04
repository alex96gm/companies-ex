
function renderFormErrors(errorsJSON) {
    
    let errors = JSON.parse(errorsJSON);

    Object.keys(errors).forEach((field => {
        let input = document.getElementById(field);
        input.classList.add("is-invalid");
    }));
}

// Listeners

window.onload = function() {
    document.querySelectorAll("form[data-errors]").forEach((element) => {
        if (element.dataset.errors.length > 0) {
        renderFormErrors(element.dataset.errors);
        }
    });
}