import React, { useState } from 'react';

const Polls = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const submitPoll = () => {
    // Handle poll submission logic here
    console.log('Question:', question);
    console.log('Options:', options);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4">Create a Poll</h1>

      <label className="block text-sm font-medium text-gray-600 mb-2">
        Question
      </label>
      <textarea
        placeholder="Enter your poll question"
        className="mb-4 p-2 w-full border rounded-md min-h-[100px]"
        value={question}
        onChange={handleQuestionChange}
      />

      <label className="block text-sm font-medium text-gray-600 mb-2">
        Options
      </label>
      <div>
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              className="p-2 border rounded-md w-full"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            {options.length > 1 && index !== 0 && (
              <button
                type="button"
                className="text-red-500"
                onClick={() => removeOption(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="text-blue-500 hover:underline"
          onClick={addOption}
        >
          + Add Option
        </button>
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={submitPoll}
      >
        Create Poll
      </button>
    </div>
  );
};

export default Polls;
