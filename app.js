const button = document.getElementById('dice-container')

function adviceGen () {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const advice = data.slip.advice;  
            const id = data.slip.id;
            
            document.getElementById('advice-text').textContent = advice;
            document.getElementById('adviceID').textContent = id;
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error.message);
        });
}

window.onload = adviceGen();


button.addEventListener('click',adviceGen)
