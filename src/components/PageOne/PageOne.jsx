import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PageOne() {
  //adds hook to input variable 'feedback'
  let [feedback, setFeedback] = useState("");

  // adds hook for dispatching data to store
  const dispatch = useDispatch();

  // adds hook for routing to another page
  const history = useHistory();

  //sets feedback variable equal to the inputted value
  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  };

  const addFeedback = (event) => {
    event.preventDefault();
    console.log("Sending feelings feedback to store:", feedback);

    //dispatches the feedback to the store when 'submit' field is clicked
    dispatch({
      type: "ADD_TO_FEEDBACK",
      //structuring the payload to add property name of 'feeling' for later retrieval
      payload: { property: "feeling", value:Number(feedback) },
    });

    //routes the user to the next page
    history.push(`/PageTwo`);
  };

  return (
    <form onSubmit={(event) => addFeedback(event)}>
      <div>
        <label htmlFor="feelings">How are you feeling today?</label>
        {/* structure of input requires the user to choose a value between 1 and 5, value cannot be null*/}
        {/* hook tracks changes to the input field*/}
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
