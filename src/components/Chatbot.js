// Chatbot.js
import React, { useState } from 'react';

const questions = [
  {
    text: "Welcome! May I have your full name, please?",
    type: "input",
    placeholder: "Type your full name",
  },
  {
    text: "What is the primary purpose for purchasing a computer?",
    options: ["Gaming", "Office Work", "Graphic Design", "Programming", "General Use"],
  },
  {
    text: "What type of computer are you interested in?",
    options: ["Laptop", "Desktop", "Tablet", "Workstation"],
  },
  {
    text: "What screen size do you prefer?",
    options: ["13 inches or smaller", "14-15 inches", "16-17 inches", "18 inches or larger"],
  },
  {
    text: "Which operating system do you prefer?",
    options: ["Windows", "macOS", "Linux", "No preference"],
  },
  {
    text: "What is your preferred processor brand?",
    options: ["Intel", "AMD", "Apple M1/M2", "No preference"],
  },
  {
    text: "How much RAM do you want?",
    options: ["8 GB", "16 GB", "32 GB", "64 GB or more"],
  },
  {
    text: "What type of storage do you prefer?",
    options: ["SSD", "HDD", "Hybrid (SSD + HDD)", "No preference"],
  },
  {
    text: "Do you need a dedicated graphics card?",
    options: ["Yes, high-end", "Yes, mid-range", "No, integrated is fine"],
  },
  {
    text: "What is your budget range?",
    options: ["Under $500", "$500 - $1000", "$1000 - $2000", "Above $2000"],
  },
  {
    text: "Do you want any additional accessories?",
    options: ["Mouse", "Keyboard", "Monitor", "Headset", "None"],
  },
  {
    text: "Would you like to add extended warranty or support plans?",
    options: ["Yes, extended warranty", "Yes, premium support", "No, thanks"],
  },
  {
    text: "Are you interested in financing options?",
    options: ["Yes", "No", "Maybe later"],
  },
  {
    text: "Do you want the computer pre-installed with software?",
    options: ["Office Suite", "Antivirus", "Creative Software", "No, thanks"],
  },
  {
    text: "Is there any other specific feature or service you want assistance with?",
    options: ["Custom Build", "Trade-in", "Technical Support", "No, thank you"],
  },
];

const Chatbot = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleOptionClick = (answer) => {
    setAnswers((prev) => [...prev, answer]);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      setAnswers((prev) => [...prev, userInput.trim()]);
      setCurrentQuestionIndex((prev) => prev + 1);
      setUserInput('');
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="chat-container">
      <header>Servizi Galassia Chatbot</header>
      <main id="chat-window" aria-live="polite" aria-atomic="false" tabIndex="0">
        {answers.map((answer, index) => (
          <div key={index} className={`message ${index % 2 === 0 ? 'bot' : 'user'}`}>
            {answer}
          </div>
        ))}
        {currentQuestion && (
          <div className="message bot">{currentQuestion.text}</div>
        )}
      </main>
      <form id="chat-form" onSubmit={handleSubmit} autoComplete="off">
        {currentQuestion?.options ? (
          currentQuestion.options.map((option, index) => (
            <button
              key={index}
              type="button"
              className="option-btn"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))
        ) : (
          <div className='input-container'>
            <input
              type="text"
              className="input-field"
              placeholder={currentQuestion?.placeholder || 'Type your answer...'}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn" aria-label="Send message">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Chatbot;
