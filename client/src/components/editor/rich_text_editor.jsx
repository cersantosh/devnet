import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({placeholder, getValue, value}) => {

  const modules = {
    toolbar: [
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "code-block"],
    ],
  };

  const formats = [
    "color",
    "background",
    "bold",
    "italic",
    "underline",
    "align",
    "list",
    "bullet",
    "link",
    "code-block",
  ];

  const handleChange = (content) => {
    getValue(content);
  };

  return (
    <div className="">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  );
};

export default RichTextEditor;
