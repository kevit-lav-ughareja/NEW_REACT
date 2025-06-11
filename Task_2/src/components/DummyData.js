const DummyData = {
  javaScript: [
    {
      id: 1,
      question: "Which of the following is a JavaScript data type?",
      options: ["Number", "Boolean", "String", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      id: 2,
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["var", "let", "const", "constant"],
      correctAnswer: "const",
    },
    {
      id: 3,
      question: "What does '===' operator do in JavaScript?",
      options: [
        "Assignment",
        "Checks value and type equality",
        "Checks only value equality",
        "Logical AND",
      ],
      correctAnswer: "Checks value and type equality",
    },
    {
      id: 4,
      question: "Which method is used to parse a JSON string in JavaScript?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.toString()",
        "JSON.object()",
      ],
      correctAnswer: "JSON.parse()",
    },
    {
      id: 5,
      question: "What will be the output of `typeof NaN`?",
      options: ["number", "string", "undefined", "object"],
      correctAnswer: "number",
    },
  ],
  reactJs: [
    {
      id: 1,
      question: "What is JSX in React?",
      options: [
        "A syntax extension for JavaScript",
        "A CSS preprocessor",
        "A database query language",
        "A type of component",
      ],
      correctAnswer: "A syntax extension for JavaScript",
    },
    {
      id: 2,
      question:
        "Which hook is used for managing state in React functional components?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correctAnswer: "useState",
    },
    {
      id: 3,
      question:
        "How do you pass data from a parent component to a child component?",
      options: ["State", "Props", "Context", "Redux"],
      correctAnswer: "Props",
    },
    {
      id: 4,
      question: "What does the 'key' prop help with in lists?",
      options: [
        "Style application",
        "Unique identification of list elements",
        "Event handling",
        "State management",
      ],
      correctAnswer: "Unique identification of list elements",
    },
    {
      id: 5,
      question:
        "Which method is used to perform side effects in functional components?",
      options: ["useEffect", "useState", "componentDidMount", "render"],
      correctAnswer: "useEffect",
    },
  ],
  oops: [
    {
      id: 1,
      question: "Which feature of OOP allows objects to take many forms?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
      correctAnswer: "Polymorphism",
    },
    {
      id: 2,
      question: "What is encapsulation in OOP?",
      options: [
        "Binding data and methods together",
        "Hiding internal details",
        "Reusing code from parent class",
        "Overloading methods",
      ],
      correctAnswer: "Binding data and methods together",
    },
    {
      id: 3,
      question: "Inheritance is used to achieve what?",
      options: ["Code reuse", "Security", "Polymorphism", "Data hiding"],
      correctAnswer: "Code reuse",
    },
    {
      id: 4,
      question: "Which of these is not a pillar of OOP?",
      options: ["Encapsulation", "Abstraction", "Compilation", "Polymorphism"],
      correctAnswer: "Compilation",
    },
    {
      id: 5,
      question: "What is method overloading?",
      options: [
        "Having multiple methods with the same name but different parameters",
        "Replacing a parent method",
        "Binding data and functions",
        "Hiding data",
      ],
      correctAnswer:
        "Having multiple methods with the same name but different parameters",
    },
  ],
  htmlCss: [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Mark Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      id: 2,
      question: "Which CSS property is used to change the background color?",
      options: ["background-color", "color", "bgcolor", "background"],
      correctAnswer: "background-color",
    },
    {
      id: 3,
      question: "What tag is used to insert a line break in HTML?",
      options: ["<br>", "<lb>", "<break>", "<newline>"],
      correctAnswer: "<br>",
    },
    {
      id: 4,
      question: "Which HTML attribute is used to define inline styles?",
      options: ["style", "class", "font", "styles"],
      correctAnswer: "style",
    },
    {
      id: 5,
      question: "How do you select an element with id 'header' in CSS?",
      options: ["#header", ".header", "*header", "header"],
      correctAnswer: "#header",
    },
  ],
};
export default DummyData;
