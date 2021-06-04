import classes from "./Backdrop.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onClick} className={classes.backdrop}></div>,
    document.getElementById("overlays")
  );
};

export default Backdrop;
