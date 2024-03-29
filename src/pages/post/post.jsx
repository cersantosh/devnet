import React, { useState } from "react";
import ImageSlider from "../../components/image_slider.jsx";

const PostUploadOptions = () => {
  const [postText, setPostText] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [isTagPeopleClicked, setIsTagPeopleClicked] = useState(false);
  const [isGIFOptionClicked, setGIFOptionClicked] = useState(false);
  const [selectedGIF, setSelectedGIF] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleImageChange = (event) => {
    const images = event.target.files;
    setSelectedImages([...images]);
    event.target.value = "";
    setSelectedGIF(null);
  };

  const handlePostSubmit = () => {};

  const hideTagPeoplePage = () => {
    setIsTagPeopleClicked(false);
  };

  /* start : GIF related methods */
  const hideGIFPage = () => {
    setGIFOptionClicked(false);
  };
  const handleGIFSelection = (GIF) => {
    setSelectedGIF(GIF);
    setSelectedImages([]);
  };
  const deleteSelectedGIF = () => {
    setSelectedGIF(null);
  };
  /* end : GIF related methods */

  /* start : image slider related methods */
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex =
        prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const deleteSelectedImage = (index) => {
    const images = [...selectedImages];
    images.splice(index, 1);
    setCurrentImageIndex((prevIndex) => {
      let newIndex = null;
      if (images.length > 0) {
        newIndex = index % images.length;
      } else {
        newIndex = 0;
      }
      return newIndex;
    });
    setSelectedImages(images);
  };

  /* end : image slider related methods */

  return (
    <div className="p-8 bg-white shadow-lg rounded-md">
      {isTagPeopleClicked && <TagPeople onCancel={hideTagPeoplePage} />}
      {isGIFOptionClicked && (
        <GIFShowingPage
          onCancel={hideGIFPage}
          onGIFSelection={handleGIFSelection}
        />
      )}

      <textarea
        placeholder="What's on your mind ?"
        className="mb-4 p-2 w-full border rounded-md min-h-[100px] outline-none border-none resize-none"
        value={postText}
        onChange={handleTextChange}
      />

      {selectedGIF && (
        <div className="w-full flex justify-center bg-[red]">
          <div className="relative w-[300px] h-[300px]">
            <img
              src={selectedGIF}
              alt="GIF"
              className="w-full h-full object-contain"
            ></img>
            <i
              className="fa-solid fa-circle-xmark absolute top-0 left-[50%] translate-x-[-50%] text-white text-[25px]"
              onClick={deleteSelectedGIF}
            ></i>
          </div>
        </div>
      )}

      {selectedImages.length > 0 && (
        <div className="w-full relative">
          <i
            className="fa-solid fa-circle-xmark absolute top-0 left-[50%] translate-x-[-50%] text-white text-[25px]"
            onClick={() => deleteSelectedImage(currentImageIndex)}
          ></i>
          <ImageSlider
            images={selectedImages}
            currentImageIndex={currentImageIndex}
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
          />
        </div>
      )}

      <div className="flex justify-center space-x-4 my-3">
        <label className="flex flex-col items-center mb-4">
          <i
            className="fa-solid fa-image text-blue-500 mr-2"
            title="Upload Images"
          ></i>
          <p>Images</p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
            multiple
          />
        </label>

        <div className="flex flex-col items-center mb-4">
          <i
            className="fa-solid fa-users text-yellow-500 mr-2"
            title="Tag People"
            onClick={() => setIsTagPeopleClicked(!isTagPeopleClicked)}
          ></i>
          <p>Tag</p>
        </div>

        <div className="flex flex-col items-center mb-4">
          <i
            className="fa-solid fa-gift text-green-500 mr-2"
            title="Add GIF"
            onClick={() => setGIFOptionClicked(!isGIFOptionClicked)}
          ></i>
          <p>GIF</p>
        </div>
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handlePostSubmit}
      >
        Post
      </button>
    </div>
  );
};

const TagPeople = ({ onCancel }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedPeople, setSuggestedPeople] = useState([
    { id: 1, name: "John Doe", photo: "john.jpg" },
    { id: 2, name: "Jane Smith", photo: "jane.jpg" },
    {
      id: 1,
      name: "John Doe",
      photo: "john.jpg",
    },
    { id: 2, name: "Jane Smith", photo: "jane.jpg" },
    { id: 1, name: "John Doe", photo: "john.jpg" },
    { id: 2, name: "Jane Smith", photo: "jane.jpg" },
    { id: 1, name: "John Doe", photo: "john.jpg" },
    { id: 2, name: "Jane Smith", photo: "jane.jpg" },
    { id: 1, name: "John Doe", photo: "john.jpg" },
    { id: 2, name: "Jane Smith", photo: "jane.jpg" },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Implement logic to fetch and set suggested people based on the search term
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleTagPerson = (person) => {
    // Implement logic to tag the selected person
    console.log("Tagged person:", person);
  };

  return (
    <div className="bg-green-400 p-4 rounded-md shadow-lg fixed left-[50%] translate-x-[-50%] max-h-[70vh] max-w-[300px] flex flex-col z-10">
      <div className="flex justify-center items-center space-x-1">
        <input
          type="search"
          placeholder="Search people"
          className="p-2 border rounded-md outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <i class="fa-brands fa-searchengin"></i>
      </div>

      <p className="my-2">Suggested People</p>

      <div className="mt-2 overflow-auto">
        {suggestedPeople.map((person) => (
          <div
            key={person.id}
            className="flex items-center space-x-2 border-b py-2 cursor-pointer"
            onClick={() => handleTagPerson(person)}
          >
            <img
              src="assets/images/image1.jpg"
              alt={person.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>{person.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-around mt-4 space-x-4">
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Tag
        </button>
      </div>
    </div>
  );
};

const GIFShowingPage = ({ onCancel, onGIFSelection }) => {
  const gifs = [
    "gif1.gif",
    "gif2.gif",
    "gif3.gif",
    "gif4.gif",
    "gif5.gif",
    "gif6.gif",
    "gif7.gif",
    "gif5.gif",
    "gif6.gif",
    "gif7.gif",
    "gif5.gif",
    "gif6.gif",
    "gif7.gif",
  ];

  return (
    <div className="p-2 bg-purple-300 shadow-lg rounded-md fixed left-[50%] translate-x-[-50%] max-h-[70vh] max-w-[300px] flex flex-col z-10">
      {/* GIFs */}
      <div className="flex flex-wrap gap-2 overflow-auto">
        {gifs.map((gif, index) => (
          <img
            key={index}
            src={`assets/images/gif/${gif}`}
            alt="GIF"
            className="cursor-pointer w-20 h-20 object-contain border rounded-md border-gray-300 bg-[red]"
            onClick={() => {
              onGIFSelection(`assets/images/gif/${gif}`);
              onCancel();
            }}
          />
        ))}
      </div>

      <button
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 mt-2"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default PostUploadOptions;
