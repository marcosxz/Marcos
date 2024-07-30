document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let score = 0;
        const correctAnswers = {
            question1: 'Brasília',
            question2: 'Júpiter'
        };
        for (let question in correctAnswers) {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++; 
            }
        }
        resultDiv.textContent = `Você acertou ${score} de ${Object.keys(correctAnswers).length} perguntas.`;
    });
});
