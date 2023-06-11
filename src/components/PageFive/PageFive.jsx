import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PageFive() {
  const history = useHistory();
  const dispatch = useDispatch();

  const allFeedback = useSelector((store) => store.feedback);

  console.log("Feedback:", allFeedback);

  return (
    <div>
      <h3>Review your feedback before submitting: </h3>
      <p>
        How are you feeling? <b>{allFeedback.feelings}</b>
      </p>
      <p>
        How well are you understanding the content?{" "}
        <b>{allFeedback.understanding}</b>
      </p>
      <p>
        How well are you being supported? <b>{allFeedback.support}</b>
      </p>
      <p>
        Any comments you'd like to add? <b>{allFeedback.comments}</b>
      </p>
    </div>
  );
}

export default PageFive;