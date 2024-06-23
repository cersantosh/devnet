import React, { useState } from "react";
import { useForm } from "react-hook-form";
import pollService from "../../services/polls_service";
import { ToastContainer, notifyError, notifySuccess } from "../../utils/toast";
import { useNavigate } from "react-router-dom";

const Polls = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [options, setOptions] = useState([{name : ""}]);
  const [oneOptionError, setOneOptionError] = useState(false);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    if(value){
      newOptions[index] = {name : value };
    }
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const createPoll = async (data) => {
    try{
      const poll = await pollService.createPoll(data);
      console.log("poll", poll);
      notifySuccess("Poll created successfully")
      setTimeout(() => {
        navigate("/own_profile")
      }, 300);
    }
    catch(error){
      console.log("error", error);
      notifyError(error?.message)
    }
  }

  const submitPoll = (data) => {
    if (options[0] === "") {
      return setOneOptionError(true);
    } else {
      setOneOptionError(false);
    }
    const pollData = {
      question : data.question,
      options
    }
    console.log(pollData)

    createPoll(pollData)

  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <ToastContainer/>
      <h1 className="text-2xl font-bold mb-4">Create a Poll</h1>
      <form action="" onSubmit={handleSubmit(submitPoll)}>
        <label
          htmlFor="question"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Question
        </label>
        <textarea
          id="question"
          placeholder="Enter your poll question"
          className="mb-4 p-2 w-full border rounded-md min-h-[100px]"
          {...register("question")}
          required
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

          {oneOptionError && (
            <p className="text-[red]">Please give at least one option</p>
          )}

          <button
            type="button"
            className="text-blue-500 hover:underline"
            onClick={addOption}
          >
            + Add Option
          </button>
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default Polls;
