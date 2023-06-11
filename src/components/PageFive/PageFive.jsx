import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function PageFive() {
  const history = useHistory();

  //UseSelector hook saves the store's current state to the variable allFeedback
  const allFeedback = useSelector((store) => store.feedback);

  console.log("Feedback:", allFeedback);

  //POST request triggered by clicking the submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback to post:", allFeedback);
    axios
      .post("/feedback", {
        allFeedback,
      })
      .then((response) => {
        //User is routed to a confirmation page
        history.push(`/PageSix`);
      })
      .catch((error) => {
        console.log("Error in client side of post:", error);
      });
  };

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

      <p>
        <b>Does this all look good to you?</b>
        <button onClick={handleSubmit}>Submit!</button>
      </p>
    </div>
  );
}

export default PageFive;
