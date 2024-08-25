function sendMessage() 
{
    const userInput = document.getElementById('userInput').value;
    if (!userInput.trim()) return;
    const messages = document.getElementById('messages');
    const userMessage = document.createElement('div');
    userMessage.textContent = "You: " + userInput;
    messages.appendChild(userMessage);
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', 
        {
            method: 'POST',
           headers: 
           {
               'Content-Type': 'application/json',
               'Authorization': `Bearer YOUR_OPENAI_API_KEY`
           },
           body: JSON.stringify
           (
               {
               prompt: userInput,
               max_tokens: 150
               }
           )
        }
        )
    .then(response => response.json())
    .then(data => 
        {
        const botMessage = document.createElement('div');
        botMessage.textContent = "DiagnosEase: " + data.choices[0].text.trim();
        messages.appendChild(botMessage);
        document.getElementById('userInput').value = '';
        }
    )
    .catch(error => console.error('Error:', error));
}
function startVoiceSearch() 
{
    if ('webkitSpeechRecognition' in window) 
        {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.onresult = function(event) 
        {
            const transcript = event.results[0][0].transcript;
            document.getElementById('userInput').value = transcript;
            performSearch(transcript);
        };
        recognition.onend = function() 
        {
            console.log('Speech recognition ended.');
        };
        recognition.onerror = function(event) 
        {
            console.error('Speech recognition error:', event.error);
            alert('There was an error with the voice search. Please try again.');
        };
        recognition.start();
    } 
    else 
    {
        alert('Voice search is not supported in this browser. Please try a different browser.');
    }
}
window.onload = function() 
{
    addMessage("Please enter your symptoms separated by commas (e.g., fever, cough, headache).", 'bot');
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) 
        {
        document.getElementById('profileName').textContent = 'Name: ' + storedData.name;
        document.getElementById('profileEmail').textContent = 'Email: ' + storedData.email;
        document.getElementById('profilePhone').textContent = 'Phone: ' + storedData.phone;
        }
}
function sendMessage() 
{
    const userInput = document.getElementById('userInput').value.trim();
    if (!userInput) return;
    addMessage(`You: ${userInput}`, 'user');
    const symptoms = userInput.split(/[\s,]+/).filter(symptom => symptom.toLowerCase() !== 'and');
    if (symptoms.length > 0) 
        {
        addMessage('Processing your symptoms...', 'bot');
        const promises = symptoms.map(symptom => 
            {
            const url = `https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${encodeURIComponent(symptom)}`;
            return fetch(url)
                .then(response => response.json())
                .then(data => {
                    const diseases = data[3].flat();
                    return diseases.length > 0 ? diseases : ['No probable disease found'];
                });
            }
        );
        Promise.all(promises).then(results => 
            {
            const diseaseMatches = results.flat();
            const uniqueDiseases = [...new Set(diseaseMatches)];
            if (uniqueDiseases.length > 0 && uniqueDiseases[0] !== 'No probable disease found') 
                {
                let responseMessage = `<b>Based on your symptoms, you might have the following conditions:</b><ul>`;
                uniqueDiseases.forEach(disease => 
                    {
                    responseMessage += `<li>${disease}</li>`;
                    }
                );
                responseMessage += `</ul><p>Please consult a healthcare professional for a detailed diagnosis.</p>`;
                addMessage(responseMessage, 'bot', true);
            } 
            else 
            {
                addMessage('No probable disease found based on your symptoms. Please check your input and try again.', 'bot');
            }
            }
        )
        .catch(() => 
            {
            addMessage('Error processing your request. Please try again.', 'bot');
            }
        );
    }
    document.getElementById('userInput').value = '';
}
function addMessage(message, sender, isHTML = false) 
{
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('div');
    if (isHTML) 
        {
        messageElement.innerHTML = `${sender === 'user' ? 'You' : 'DiagnosEase'}: ${message}`;
        } 
        else 
        {
        messageElement.textContent = `${sender === 'user' ? 'You' : 'DiagnosEase'}: ${message}`;
        }
    messages.appendChild(messageElement);
}
window.onload = function() 
{
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) 
        {
        document.getElementById('profileName').textContent = 'Name: ' + storedData.name;
        document.getElementById('profileEmail').textContent = 'Email: ' + storedData.email;
        document.getElementById('profilePhone').textContent = 'Phone: ' + storedData.phone;
        calculateBMI(storedData);
        }
    addMessage("Please enter your symptoms separated by commas (e.g., fever, cough, headache).", 'bot');
}
function toggleUpdateForm() 
{
    const formContainer = document.getElementById('update-form-container');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
}
function calculateBMI(data) 
{
    const heightInMeters = data.height / 100;
    const bmi = data.weight / (heightInMeters * heightInMeters);
    const bmiBar = document.getElementById('bmi-bar');
    const bmiValue = document.getElementById('bmi-value');
    bmiValue.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    const bmiPercentage = Math.min((bmi / 40) * 100, 100);
    bmiBar.style.width = `${bmiPercentage}%`;
    if (bmi < 18.5) 
    {
        bmiBar.style.backgroundColor = 'blue';
    } 
    else if (bmi < 24.9) 
    {
        bmiBar.style.backgroundColor = 'green';
    } 
    else if (bmi < 29.9) 
    {
        bmiBar.style.backgroundColor = 'yellow';
    } 
    else if (bmi < 34.9) 
    {
        bmiBar.style.backgroundColor = 'orange';
    } 
    else 
    {
        bmiBar.style.backgroundColor = 'red';
    }
}
function saveUserData(event) {
    event.preventDefault();
    const userData = 
    {
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    calculateBMI(userData);
    alert('Details updated successfully!');
    toggleUpdateForm();
}
document.getElementById('redirectButton').addEventListener('click', function() {
    window.location.href = 'doctorlist.html'; // Replace with your target URL
});