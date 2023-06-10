import React, { useState } from "react";

function PageOne() {
  let [feedback, setFeedback] = useState('');

  const handleFeedback = (event) => {
    setFeedback({
      ...feedback,
      feeling: event.target.value,
    });
  };

  const addFeedback  = (event) => {
    console.log(product);
    dispatch({
      type: "ADD_TO_FEEDBACK",
      payload: {property: 'feeling', value: feedback},
    });
  };

  return (
    <form onSubmit={(event) => addFeedback(event)}>
      <div>
        <label for="feelings">How are you feeling today?</label>

        <input onChange={handleFeedback} id="feelings" type="number" min="1" max="5" required />
        <input type="submit" />
      </div>
    </form>
  );
}

export default PageOne;
