import React , { useState } from "react";

function Counter() {
    const [wordcount, setWordcount] = useState(0);
  
    function countWords(text) {
      const words = text.split(/\s+/).filter(function (word) {
        return word !== '';
      });
      setWordcount(words.length);
    }
  
    return (
      <div className="container">
        <center>
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          name="textAr"
          id="textAr"
          cols="40"
          rows="10"
          placeholder="Enter Your Text Here"
          onKeyUp={function (e) {
            countWords(e.target.value);
          }}
        ></textarea>
        <h4>Word Count: {wordcount}</h4>
        </center>
      </div>
    );
  }
  
  export default Counter;