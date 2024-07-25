//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const age = parseInt(ageInput.value);
        const name = nameInput.value.trim();
        
        if (!age || !name) {
            alert('Inputs cannot be empty.');
            return;
        }
        
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000);
        })
        .then(message => {
            alert(message);
        })
        .catch(error => {
            alert(error);
        });
    });
});
