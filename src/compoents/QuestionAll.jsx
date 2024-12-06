import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
    updatedQuestions[index].selectedOption = e.target.value;
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
                type="radio"
                name={`question-${question.id}`}
                value={option}
                onChange={(e) => handleOptionChange(e, i)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}

      {question.type === "Cloze" && <p className="mt-2 text-gray-700">{question.clozeText.replace(/____/g, "______")}</p>}
      {question.type === "Comprehension" && (
        <div className="mt-3">
          <p className="italic text-gray-600">{question.passage}</p>
          {question.questions.map((subQuestion, j) => (
            <p key={j} className="text-gray-700">{subQuestion}</p>
          ))}
        </div>
      )}
    </div>
  );
};
export default QuestionAll;

