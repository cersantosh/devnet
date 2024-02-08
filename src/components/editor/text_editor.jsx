import { useState } from "react";
import { useEffect } from "react";

const RichTextEditor = () => {
  const [selectedText, setSelectedText] = useState("");
  const handleSelection = () => {
    const selectedText = window.getSelection();
  };

  const handleBoldClick = () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      // Create a <b> (bold) element
      const boldElement = document.createElement("b");
      boldElement.textContent = range.toString();

      // Replace the selected range with the bold element
      range.deleteContents();
      range.insertNode(boldElement);
    }
  };

  const handleItalicClick = () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      // Create a <b> (bold) element
      const italicElement = document.createElement("i");
      italicElement.textContent = range.toString();

      // Replace the selected range with the bold element
      range.deleteContents();
      range.insertNode(italicElement);
    }
  };

  const handleOrderedListClick = () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      // Create a <b> (bold) element
      const olElement = document.createElement("ol");
      const liElement = document.createElement("li");
      liElement.classList.add("list-decimal")
      olElement.appendChild(liElement);
      liElement.textContent = range.toString();

      // Replace the selected range with the bold element
      range.deleteContents();
      range.insertNode(olElement);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="space-x-3">
        <button title="Bold" className="font-bold" onClick={handleBoldClick}>
          B
        </button>
        <button
          title="Italic"
          className="italic font-bold"
          onClick={handleItalicClick}
        >
          I
        </button>
        <button>
          <i className="fa-solid fa-link" title="Link"></i>
        </button>
        <button>
          <i
            className="fa-solid fa-list-ol"
            title="Numbered list"
            onClick={handleOrderedListClick}
          ></i>
        </button>
        <button>
          <i className="fa-solid fa-list" title="Bullet list"></i>
        </button>
        <button>
          <i className="fa-solid fa-code" title="Code"></i>
        </button>
      </div>
      <div
        contentEditable
        className="w-full h-[100px] border border-[red] p-6"
        onSelect={handleSelection}
      >
        hello how are you
      </div>
    </div>
  );
};

export default RichTextEditor;
