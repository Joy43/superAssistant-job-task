import { useDrag, useDrop } from "react-dnd";

const QuestionAll = ({ question, index, moveQuestion, questions, setQuestions }) => {
  const [, ref] = useDrop({
    accept: "question",
    hover: (item) => {
      if (item.index !== index) {
        moveQuestion(item.index, index);
        item.index = index;
      }
    },
  });

  const [, drag] = useDrag({
    type: "question",
    item: { index },
  });

  const handleContentChange = (e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].content = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (e, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options[optionIndex] = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleClozeChange = (e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].clozeText = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handlePassageChange = (e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].passage = e.target.value;
    setQuestions(updatedQuestions);
  };

  return (
    <div ref={(node) => drag(ref(node))} className="p-4 bg-white rounded-lg shadow-md mb-4 border-2 border-gray-200 hover:border-blue-500 transition-all">
      <textarea
        value={question.content}
        onChange={handleContentChange}
        className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder={`Enter ${question.type} question`}
      />
      {question.type === "Categorize" && (
        <div className="mt-3 space-y-2">
          {question.options.map((option, i) => (
            <div key={i} className="flex items-center space-x-2">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(e, i)}
                className="border border-gray-300 p-2 rounded-md w-full"
                placeholder={`Option ${i + 1}`}
              />
            </div>
          ))}
        </div>
      )}
      {question.type === "Cloze" && (
        <div>
          <input
            type="text"
            value={question.clozeText}
            onChange={handleClozeChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter Cloze text"
          />
        </div>
      )}
      {question.type === "Comprehension" && (
        <div>
          <textarea
            value={question.passage}
            onChange={handlePassageChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter Passage"
          />
          {question.questions.map((subQuestion, j) => (
            <textarea
              key={j}
              value={subQuestion}
              onChange={(e) => handleOptionChange(e, j)}
              className="w-full border border-gray-300 p-2 mt-2 rounded-lg"
              placeholder={`Question ${j + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionAll;
