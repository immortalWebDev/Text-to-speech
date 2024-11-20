const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value.trim();

    if (!enteredText.length) {
        alert(`Please enter some valid text to listen to the audio!`);
        return; // Stop execution if there's no valid text
    }

    if (!speechSynth.speaking) {
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        convertBtn.textContent = "Audio is playing...";
        speechSynth.speak(newUtter);

        newUtter.onend = () => {
            // Reset button text when speech ends
            convertBtn.textContent = "Speak what's written";
        };
    }
});
