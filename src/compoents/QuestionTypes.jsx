const QuestionTypes = ({ addQuestion }) => {
    const types = ["Categorize", "Cloze", "Comprehension"];
  
    return (
      <div className="w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Add Question Type</h3>
        {types.map((type) => (
          <button
            key={type}
            className="bg-blue-600 text-white px-4 py-2 mb-2 w-full rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors"
            onClick={() => addQuestion(type)}
          >
            {type}
          </button>
        ))}
      </div>
    );
  };
  export default QuestionTypes;