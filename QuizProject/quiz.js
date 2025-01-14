const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which language is primarily used for web development?",
      options: ["Python", "JavaScript", "Java"],
      answer: "JavaScript"
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function displayQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
  
    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.question;
  
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(btn);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      alert("Correct!");
    } else {
      alert("Wrong Answer!");
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
  }
  
  displayQuestion();
  