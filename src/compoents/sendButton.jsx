const SendButton=({questions })=>{
    const handleSubmit = () => {
        const answers = questions.map((q) => ({
          questionId: q.id,
          selectedOption: q.selectedOption,
        }));
        console.log("Selected answers:", answers);
        // Here, you can add logic to send answers to an API or handle them as needed
    }
return (
    <button
    onClick={handleSubmit}
    className="bg-blue-600 text-white px-6 mt-6 rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors"
    >

    </button>
)   };
export default SendButton;