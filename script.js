window.onload = function (e) { 
    const form = document.getElementById('form')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        
        const name = form.name.value
        const email = form.email.value
        const countryList = form.countryList.value
        const message = form.message.value

        let errors = []
        
        // Name field must not be empty
        if (name == '') {
            errors.push('Name field must not be empty')
        }

        // Email address must not be empty and must be tested against the regular expression /^\S+@\S+\.\S+$/
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.push('Email field is invalid')
        }

        // Password and Confirm Password fields must not be empty
        if (countryList == '0') {
            errors.push('Please select a country')
        }
        
        // Message box must not be empty
        if (message == ''){
            errors.push('Message must not be empty')
        }

        if (errors.length) {
            alert(errors.join("\n"))
        } else {
            alert('Registration was successful')
        }
    })
}
        