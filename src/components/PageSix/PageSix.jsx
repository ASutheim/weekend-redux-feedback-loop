import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PageSix() {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleReset() {
    dispatch({
      type: "RESET_FEEDBACK",
    });
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
