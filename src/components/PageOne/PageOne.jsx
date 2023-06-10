import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PageOne() {
  let [feedback, setFeedback] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  };

  const addFeedback = (event) => {
    event.preventDefault();
    console.log("Sending feelings feedback to store:", feedback);
    dispatch({
      type: "ADD_TO_FEEDBACK",
      payload: { property: "feeling", value: feedback },
    });
    history.push(`/PageTwo`);
  };

  return (
    <form onSubmit={(event) => addFeedback(event)}>
      <div>
        <label htmlFor="feelings">How are you feeling today?</label>

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

export default PageOne;
