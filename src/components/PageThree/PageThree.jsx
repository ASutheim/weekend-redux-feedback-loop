//Note to grader: see code in Page One component file for more specific comments, since this code is functionally the same

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PageThree() {
  const dispatch = useDispatch();
  const history = useHistory();

  let [feedback, setFeedback] = useState("");

  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  };

  const addFeedback = (event) => {
    event.preventDefault();
    console.log("Sending feedback to store:", feedback);
    dispatch({
      type: "ADD_TO_FEEDBACK",
      payload: { property: "support", value: feedback },
    });
    history.push(`/PageFour`);
  };

  return (
    <form onSubmit={(event) => addFeedback(event)}>
      <div>
        <label htmlFor="support">How well are you being supported?</label>

        <input
          onChange={handleFeedback}
          id="support"
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

export default PageThree;
