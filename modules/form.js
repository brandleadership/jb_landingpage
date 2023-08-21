const submissionForms = document.querySelector('.submission-form');
const errorWrapper = document.getElementById('error-wrapper');
const submissionFormsError =
    errorWrapper?.getElementsByClassName('error-message-form')[0];

const radioWrapper = document.getElementById('option-radio-group');
const radioButtons = document.querySelectorAll('[type="radio"]');
const radioError = radioWrapper?.getElementsByClassName(
    'error-message-title'
)[0];
const textareaWrapper = document.querySelector('.textarea-wrapper');
const textarea = document.querySelector('.textarea');
const textareaError = textareaWrapper?.getElementsByClassName(
    'error-message-textarea'
)[0];

function verifyFields(event) {
    event.preventDefault();

    const isRadioBTNTrueAndRequired = verifyRadioBtn();
    const isTextareaRequired = verifyTextarea();

    if (isRadioBTNTrueAndRequired && isTextareaRequired) {
        submissionFormsError.classList.add('isVisible');
        submissionForms?.submit();
        submissionForms?.reset();
    } else {
        submissionFormsError.classList.remove('isVisible');
    }
}

function verifyRadioBtn() {
    if (!radioButtons) {
        return true;
    }

    const isRequired = Array.from(radioButtons).some((radioBtn) =>
        radioBtn.hasAttribute('required')
    );

    if (isRequired) {
        const isChecked = Array.from(radioButtons).some(
            (radioBtn) => radioBtn.checked
        );

        if (!isChecked) {
            radioError?.classList.remove('isVisible');
            return false;
        } else {
            radioError?.classList.add('isVisible');
            return true;
        }
    }

    return true;
}

function verifyTextarea() {
    if (!textarea) {
        return true;
    }
    if (textarea.required && textarea.value === '') {
        textareaError?.classList.remove('isVisible');
        textarea.classList.add('red-border');
        return false;
    } else {
        textareaError?.classList.add('isVisible');
        textarea.classList.remove('red-border');
        return true;
    }
}

textarea?.addEventListener('input', (event) => {
    const target = event.target;
    if (target.value !== '') {
        textareaError?.classList.add('isVisible');
        textarea.classList.remove('red-border');
    } else {
        textarea.classList.add('red-border');
        textareaError?.classList.remove('isVisible');
    }
});

radioButtons?.forEach((radioBtn) => {
    radioBtn.addEventListener('change', (event) => {
        radioError.classList.add('isVisible');
    });
});

function Submit() {
    if (!submissionForms) {
        return;
    } else {
        document
            .querySelector('.submission-form input[type="submit"]')
            .addEventListener('click', function (event) {
                verifyFields(event);
            });
    }
}

Submit();
