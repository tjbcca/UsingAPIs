const adviceURL = ("https://api.adviceslip.com/advice");
const btn = document.querySelector('#getAdvice');
const adviceTXT = document.getElementById('adv');

document.addEventListener('DOMContentLoaded', () => {
    fetchAdvice();
});

function fetchAdvice() {
    fetch(adviceURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const rAdvice = data.slip;
            adviceTXT.innerHTML = `<h2 class='advice'>${rAdvice.advice}</h2>`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
