import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from 'react';
import HeaderImageUploader from './HeaderImageUploder';
import QuestionAll from './QuestionAll';
import QuestionTypes from './QuestionTypes';

import SendButton from './sendButton';

const FormEditor = () => {

    const [questions, setQuestions] = useState([
      { id: 1, type: "Categorize", content: "Select your favorite language:", options: ["JavaScript", "Python", "Node.js"] },
      { id: 2, type: "Cloze", content: "Complete the sentence:", clozeText: "React is a ____ library for building UIs." },
      { id: 3, type: "Comprehension", content: "Read and answer the questions:", passage: "React is a JavaScript library for building user interfaces.", questions: ["What is React?", "Who developed React?"] },
    ]);
  
    const [headerImage, setHeaderImage] = useState("");
  
    const moveQuestion = (dragIndex, hoverIndex) => {
      const updatedQuestions = [...questions];
      const [movedQuestion] = updatedQuestions.splice(dragIndex, 1);
      updatedQuestions.splice(hoverIndex, 0, movedQuestion);
      setQuestions(updatedQuestions);
    };
  
    const addQuestion = (type) => {
      setQuestions([...questions, { id: Date.now(), type, content: "", options: [] }]);
    };
  
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-col p-6 space-y-6">
          <HeaderImageUploader headerImage={headerImage} setHeaderImage={setHeaderImage} />
          <div className="flex space-x-6">
            <QuestionTypes addQuestion={addQuestion} />
            <div className="flex-1 border-l-2 border-gray-300 pl-4">
              {questions.map((q, index) => (
                <QuestionAll
                  key={q.id}
                  index={index}
                  question={q}
                  moveQuestion={moveQuestion}
                  questions={questions}
                  setQuestions={setQuestions}
                />
              ))}
            </div>
          </div>
          <SendButton questions={questions} /> 
        </div>
      </DndProvider>
    );
};

export default FormEditor;
