import React, { useState } from "react";
import { useDispatch } from "react-redux";

function PageTwo() {
  let [feedback, setFeedback] = useState("");
  const dispatch = useDispatch();

  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  };

  const addFeedback = (event) => {
    event.preventDefault();
    console.log("Sending feedback to store:", feedback);
    dispatch({
      type: "ADD_TO_FEEDBACK",
      payload: { property: "understanding", value: feedback },
    });
  };

  return (
    <form onSubmit={(event) => addFeedback(event)}>
      <div>
        <label htmlFor="understanding">
          How well are you understanding the content?
        </label>

        <input
          onChange={handleFeedback}
          id="feelings"
          type="number"
          min="1"
          max="5"
          required
        />
        <input type="submit" />
      </div>
    </form>
  );
}

export default PageTwo;
