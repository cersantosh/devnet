import { useState } from "react";

/*
  1. first select all the bold elements from specific element
  2. check bold element contains the selected text or not using range.intersectNodes()
  3. now create bold tag and insert that tag to selected text
  4. after finding bold tag and replace that tag with text node to remove the effect of bold

*/
const RichTextEditor = () => {
  const [isLinkCLicked, setIsLinkCLicked] = useState(false);
  const [url, setURL] = useState("");
  const selectText = (element, selection) => {
    // when i click on another button after clicking bold button it has old selection which is unknown about bold effect so select the text again with new effect so that both effect will be applied
    // Select the newly inserted bold text
    const newRange = document.createRange();
    newRange.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(newRange);
  };
  const applyEffect = (range, tagName, selection) => {
    const element = document.createElement(tagName);
    element.textContent = range.toString();
    if (tagName === "a") {
      element.href = url;
      element.style.textDecoration = "underline";
    }
    if (tagName === "ol") {
      const liElement = document.createElement("li");
      liElement.textContent = range.toString();
      element.appendChild(liElement);
      element.style.listStyleType = "decimal";
    }
    if (tagName === "ul") {
      const liElement = document.createElement("li");
      liElement.textContent = range.toString();
      element.appendChild(liElement);
      element.style.listStyleType = "disc";
    }
    if(tagName === "code"){
      const preTag = document.createElement("pre");
      preTag.textContent = range.toString();
      element.appendChild(preTag);
    }
    range.deleteContents();
    range.insertNode(element);
    selectText(element, selection);
  };

  const removeEffect = (element) => {
    const parentElement = element.parentElement;
    parentElement.replaceChild(
      document.createTextNode(element.textContent),
      element
    );
  };

  const handleBoldClick = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      // if text is not selected
      if (range.toString() == "") {
        return;
      }
      const boldElements = document
        .querySelector("#text-editor")
        .querySelectorAll("b");
      if (boldElements.length > 0) {
        boldElements.forEach((boldElement) => {
          if (range.intersectsNode(boldElement)) {
            removeEffect(boldElement);
          } else {
            applyEffect(range, "b", selection);
          }
        });
      } else {
        applyEffect(range, "b", selection);
      }
    }
  };

  const handleItalicClick = () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      // if text is not selected
      if (range.toString() == "") {
        return;
      }
      const italicElements = document
        .querySelector("#text-editor")
        .querySelectorAll("i");
      if (italicElements.length > 0) {
        italicElements.forEach((italicElement) => {
          if (range.intersectsNode(italicElement)) {
            removeEffect(italicElement);
          } else {
            applyEffect(range, "i", selection);
          }
        });
      } else {
        applyEffect(range, "i", selection);
      }
    }
  };

  const addLink = () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      // if text is not selected
      if (range.toString() == "") {
        return;
      }
      const aElements = document
        .querySelector("#text-editor")
        .querySelectorAll("a");
      if (aElements.length > 0) {
        aElements.forEach((aElement) => {
          if (range.intersectsNode(aElement)) {
            removeEffect(aElement);
          } else {
            applyEffect(range, "a", selection);
          }
        });
      } else {
        applyEffect(range, "a", selection);
      }
    }
    console.log(document.querySelector("#text-editor"));
    setIsLinkCLicked(false);
  };

  const handleOrderedListClick = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      // if text is not selected
      if (range.toString() == "") {
        return;
      }
      const olElements = document
        .querySelector("#text-editor")
        .querySelectorAll("ol");
      if (olElements.length > 0) {
        olElements.forEach((olElement) => {
          if (range.intersectsNode(olElement)) {
            removeEffect(olElement);
          } else {
            applyEffect(range, "ol", selection);
          }
        });
      } else {
        applyEffect(range, "ol", selection);
      }
    }
    console.log(document.querySelector("#text-editor"));
  };

  const handleUnrderedListClick = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      // if text is not selected
      if (range.toString() == "") {
        return;
      }
      const ulElements = document
        .querySelector("#text-editor")
        .querySelectorAll("ul");
      if (ulElements.length > 0) {
        ulElements.forEach((ulElement) => {
          if (range.intersectsNode(ulElement)) {
            removeEffect(ulElement);
          } else {
            applyEffect(range, "ul", selection);
          }
        });
      } else {
        applyEffect(range, "ul", selection);
      }
    }
    console.log(document.querySelector("#text-editor"));
  };

  const handleLinkChange = (event) => {
    const value = event.target.value;
    setURL(value);
  };

  const handleLinkClick = () => {
    setIsLinkCLicked(!isLinkCLicked);
  };

  const handleCodeClick = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      // if text is not selected
      if (range.toString() == "") {
        return;
      }
      const codeElements = document
        .querySelector("#text-editor")
        .querySelectorAll("code");
      if (codeElements.length > 0) {
        codeElements.forEach((codeElement) => {
          if (range.intersectsNode(codeElement)) {
            removeEffect(codeElement);
          } else {
            applyEffect(range, "code", selection);
          }
        });
      } else {
        applyEffect(range, "code", selection);
      }
    }
    console.log(document.querySelector("#text-editor"));

  };

  return (
    <div className="flex flex-col justify-center items-center">
      {isLinkCLicked && (
        <URLInput handleLinkChange={handleLinkChange} addLink={addLink} />
      )}
      <div className="space-x-3 flex">
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
        <button onClick={handleLinkClick}>
          <i className="fa-solid fa-link" title="Link"></i>
        </button>
        <button>
          <i
            className="fa-solid fa-list-ol"
            title="Numbered list"
            onClick={handleOrderedListClick}
          ></i>
        </button>
        <button onClick={handleUnrderedListClick}>
          <i className="fa-solid fa-list" title="Bullet list"></i>
        </button>
        <button onClick={handleCodeClick}>
          <i className="fa-solid fa-code" title="Code"></i>
        </button>
      </div>
      <div
        id="text-editor"
        contentEditable
        className="w-full h-[100px] border border-[red] p-6"
      >
        hello how are you
      </div>
    </div>
  );
};

const URLInput = ({ handleLinkChange, addLink }) => {
  return (
    <div className="w-full flex justify-center">
      <input
        type="url"
        className="w-[50%] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        placeholder="Enter url here ..."
        onChange={handleLinkChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={addLink}
      >
        ADD
      </button>
    </div>
  );
};

// export default RichTextEditor;
