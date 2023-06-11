//Note to grader: see code in Page One component file for more specific comments, since this code is functionally the same

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PageFour() {
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
      payload: { property: "comments", value: feedback },
    });
    history.push(`/PageFive`);
  };

  return (
    <div>
      <form onSubmit={(event) => addFeedback(event)}>
        <label htmlFor="comments">Any comments you'd like to leave?</label>
        <br />
        <textarea
          onChange={handleFeedback}
          id="comments"
          name="comments"
          rows="4"
          cols="50"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PageFour;
