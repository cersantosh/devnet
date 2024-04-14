
const QuestionsSettings = () => {
  return (
    <div>
        <Buttons/>
    </div>
  )
}

const Buttons = () => {
    <div className="flex space-x-4 justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsGeneralButtonClicked(true)}
        >
          General
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsGeneralButtonClicked(false)}
        >
          Error
        </button>
      </div>
}

export default QuestionsSettings