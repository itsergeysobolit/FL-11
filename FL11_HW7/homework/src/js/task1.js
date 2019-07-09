const minLengthEmail = 6,
    minLengthPassword = 5,
    correctPasswordUser = 'UserPass',
    correctPasswordAdmin = 'AdminPass';

let userEmail = prompt('Enter your email');

if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
    let userPassword = prompt('Enter your password');
    if (userEmail === 'user@gmail.com' && userPassword === correctPasswordUser ||
        userEmail === 'admin@gmail.com' && userPassword === correctPasswordAdmin) {
        let changedPassword = confirm('Do you want to change your password?');
        if (changedPassword) {
            let userPassword = prompt('Enter your old password');
            if (userEmail === 'user@gmail.com' && userPassword === correctPasswordUser ||
                userEmail === 'admin@gmail.com' && userPassword === correctPasswordAdmin) {
                let newPassword = prompt('Enter new password');
                if (newPassword.length > minLengthPassword) {
                    let verifyNewPassword = prompt('Verify new password');
                    if (verifyNewPassword === newPassword) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                } else {
                    alert('It\'s too short password. Sorry.');
                }
            }
        } else {
            alert('You have failed the change.');
        }
    } else if (userPassword === '' || userPassword === null) {
        alert('Canceled.')
    } else {
        alert('Wrong password');
    }
} else if (userEmail === '' || userEmail === null) {
    alert('Canceled.');
} else if (userEmail.length < minLengthEmail) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else {
    alert('I don’t know you');
}