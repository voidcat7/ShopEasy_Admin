const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            console.log("User signed in:", cred.user);
            loginForm.reset();
            window.location = "index.html"; 
        })
        .catch(error => {
            const errorMessageDiv = document.querySelector('#login-error');
            console.error("Error during sign-in:", error);

            errorMessageDiv.textContent = '';
            errorMessageDiv.style.display = 'none';

            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessageDiv.textContent = "The email address is invalid. Please enter a valid email.";
                    break;
                case 'auth/user-disabled':
                    errorMessageDiv.textContent = "This account has been disabled.";
                    break;
                case 'auth/user-not-found':
                    errorMessageDiv.textContent = "No account found with this email. Please check or create a new account.";
                    break;
                case 'auth/wrong-password':
                    errorMessageDiv.textContent = "The password is incorrect. Please try again.";
                    break;
                default:
                    errorMessageDiv.textContent = "Login failed. Please check your credentials and try again.";
            }

            errorMessageDiv.style.display = 'block';
        });
});

