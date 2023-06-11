import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PageSix() {
  const dispatch = useDispatch();
  const history = useHistory();

  //dispatch action triggered by 'Return Home' button click directs the store to reset its state to an empty object
  function handleReset() {
    dispatch({
      type: "RESET_FEEDBACK",
    });

    //User is directed back to the home page
    history.push("/");
  }

  return (
    <div>
      <h2>Thanks for your feedback!!</h2>
      <button onClick={handleReset}>Return Home</button>
    </div>
  );
}

export default PageSix;
