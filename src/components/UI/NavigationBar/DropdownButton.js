import { useDispatch } from "react-redux";
import { navigationActions } from "../../../store/index";
import styles from "./dropdownButton.module.css";

const DropdownButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(navigationActions.toggleDropdown());
  };

  return (
    <button className={styles.button} onClick={clickHandler}>
      <i class="fas fa-bars fa-lg"></i>
    </button>
  );
};

export default DropdownButton;
