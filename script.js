// Function to perform word translation using the Google Translate API
function translateText() {
    const inputText = document.getElementById('inputText').value;
    const leftLanguage = document.getElementById('leftLanguage').value;
    const rightLanguage = document.getElementById('rightLanguage').value;

    // Replace YOUR_GOOGLE_TRANSLATE_API_KEY with your actual API key
    const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY';

    // Construct the API URL
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    // Make a POST request to the API
    $.ajax({
        url: apiUrl,
        type: 'POST',
        data: {
            q: inputText,
            source: leftLanguage,
            target: rightLanguage,
            format: 'text'
        },
        success: function (response) {
            // Get the translated text from the API response
            const translatedText = response.data.translations[0].translatedText;

            // Update the translationResult div with the translated text
            const translationResult = document.getElementById('translationResult');
            translationResult.innerText = translatedText;
        },
        error: function (error) {
            console.error('Error occurred while translating:', error);
        }
    });
}

// Rest of your code remains the same as mentioned earlier

