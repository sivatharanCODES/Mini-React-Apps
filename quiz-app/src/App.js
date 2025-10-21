import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Tool Management Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which HTML tag is used to define an internal stylesheet?",
    options: ["<style>", "<css>", "<script>", "<link>"],
    correctAnswer: "<style>",
  },
  {
    id: 3,
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correctAnswer: "font-size",
  },
  {
    id: 4,
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Number", "Boolean", "Float"],
    correctAnswer: "Float",
  },
  {
    id: 5,
    question: "What is the purpose of the <head> tag in HTML?",
    options: [
      "Contains metadata and links to scripts or styles",
      "Displays content on the webpage",
      "Creates a header section on the page",
      "Defines navigation menus",
    ],
    correctAnswer: "Contains metadata and links to scripts or styles",
  },
  {
    id: 6,
    question: "In CSS, which property is used to change the text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    correctAnswer: "color",
  },
  {
    id: 7,
    question: "What does DOM stand for in web development?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Object Model",
      "Document Oriented Method",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    id: 8,
    question: "Which method is used to select an element by ID in JavaScript?",
    options: [
      "document.querySelector()",
      "document.getElementById()",
      "document.getElementsByClassName()",
      "document.getElementsByTagName()",
    ],
    correctAnswer: "document.getElementById()",
  },
  {
    id: 9,
    question:
      "Which HTTP method is used to send data to a server to create a resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "POST",
  },
  {
    id: 10,
    question: "What does the ‘responsive design’ term mean in web development?",
    options: [
      "A design that responds only to JavaScript events",
      "A design that adapts to different screen sizes and devices",
      "A design that loads faster on all browsers",
      "A design that uses media queries only",
    ],
    correctAnswer: "A design that adapts to different screen sizes and devices",
  },
];
export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  return (
    <div className="container">
      <h2>Quiz App</h2>
      <div className="quiz-contaier">
        <ul className="hor-scroll-container">
          {questions.map((question, index) => (
            <QuestionList question={question} key={question.id} />
          ))}
        </ul>
        {questions
          .filter((question) => question.id === currentQuestion)
          .map((question) => (
            <QuestionSection question={question} key={question.id} />
          ))}
      </div>
    </div>
  );
}
function QuestionList({ question }) {
  const questionNum = question.id < 10 ? `0${question.id}` : question.id;
  return (
    <div className="question-list">
      <div className="icon-section">
        <div className={`icon bg-blue`}>
          <img src="./images/active.png" alt="icon" />
        </div>
        <div className={`bar bg-blue`}></div>
      </div>
      <p className={`status blue-font`}>active</p>
      <h3 className="title">Question {questionNum}</h3>
      <p className="attempt" onClick={() => {}}>
        Attempt again
      </p>
    </div>
  );
}
function QuestionSection({ question }) {
  return (
    <form className="question-Container">
      <h3 className="question">{question.question}</h3>
      <select className="Answers">
        {question.options.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
      <button className="submit">Submit Answer</button>
    </form>
  );
}
