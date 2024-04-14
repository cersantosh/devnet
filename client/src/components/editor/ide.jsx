import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";

const IDE = ({ value, language, onChange, runCode }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize Monaco Editor
    const editor = monaco.editor.create(editorRef.current, {
      value,
      language,
      theme: "vs-dark", // or 'vs-light'
    });

    // Set up onChange event
    editor.onDidChangeModelContent(() => {
      const updatedValue = editor.getValue();
      onChange(updatedValue);
    });

    return () => {
      // Dispose the editor when the component unmounts
      editor.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div ref={editorRef} className="w-full h-96 border rounded-md" />

      {/* Run Button */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={runCode}
      >
        Run
      </button>
    </div>
  );
};

export default IDE;
