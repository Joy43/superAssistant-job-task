const PreviewForm = () => {
    const mockFormData = {
      title: "Sample Form",
      headerImage: "https://via.placeholder.com/600x200",
      questions: [
        {
          type: "Categorize",
          text: "Categorize these fruits:",
          options: ["Apple", "Orange", "Banana"],
        },
        {
          type: "Cloze",
          text: "Complete the sentence:",
          clozeText: "React is a ____ library for building UIs.",
        },
        {
          type: "Comprehension",
          text: "Read the passage and answer:",
          passage: "React is a JavaScript library for building user interfaces.",
          questions: ["What is React?", "Who developed React?"],
        },
      ],
    };
  
    return (
      <div className="p-6 bg-gray-100 rounded-md shadow-lg">
        {mockFormData.headerImage && (
          <div className="mb-6">
            <img src={mockFormData.headerImage} alt="Form Header" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
        )}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{mockFormData.title}</h1>
  
        {mockFormData.questions.map((question, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{question.text}</h2>
            {question.type === "Categorize" && (
              <ul>
                {question.options.map((option, i) => (
                  <li key={i} className="p-2 bg-gray-100 rounded-md mb-2">{option}</li>
                ))}
              </ul>
            )}
            {question.type === "Cloze" && <p>{question.clozeText}</p>}
            {question.type === "Comprehension" && (
              <div>
                <p className="italic">{question.passage}</p>
                {question.questions.map((subQuestion, j) => (
                  <p key={j}>{subQuestion}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  export default PreviewForm ;
  