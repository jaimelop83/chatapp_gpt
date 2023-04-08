import React, { useState } from 'react';
import './TextPromptForm.css';

const TextPromptForm = () => {
  const [textPrompt, setTextPrompt] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the text prompt here (e.g. send it to a server)
    console.log(textPrompt);
  };

  const handleChange = (event) => {
    setTextPrompt(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text Prompt:
        <textarea className="text-prompt" value={textPrompt} onChange={handleChange} />
      </label>
      <br />
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default TextPromptForm;
