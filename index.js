// Define the texts to be typed
const textsToType = [
    "Prakhar Verma",
    "Front end developer",
    "UI/UX Designer",
  ];
  let currentText = "";
  let currentTextIndex = 0;
  let typingIndex = 0;
  const typingInterval = 150; // Adjust the typing speed here (in milliseconds)
  
  // Get the element to display the typing effect
  const typingTextElement = document.getElementById("typing-text");
  
  // Function to simulate the typing effect
  function typeEffect() {
    if (currentTextIndex < textsToType.length) {
      const currentTextToType = textsToType[currentTextIndex];
  
      function typeCharacter() {
        if (typingIndex < currentTextToType.length) {
          currentText += currentTextToType.charAt(typingIndex);
          typingIndex++;
          typingTextElement.textContent = currentText;
          setTimeout(typeCharacter, typingInterval);
        } else {
          // Typing effect for current text is completed
          currentText = "";
          typingIndex = 0;
          currentTextIndex++;
          setTimeout(typeEffect, 1000); // Delay for 1 second before starting the typing effect again
        }
      }
  
      // Start the typing effect for current text
      typeCharacter();
    } else {
      // All text repetitions are completed, start over
      currentTextIndex = 0;
      typeEffect();
    }
  }
  
  // Call the function to start the typing effect when the page loads
  typeEffect();
  