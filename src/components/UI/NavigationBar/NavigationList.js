import { useSelector } from "react-redux";
import styles from "./navigationList.module.css";

const NavigationList = ({ links }) => {
  const displayList = useSelector((state) => state.navigation.showList);

  return (
    <>
      {displayList &&
        <div className={styles.container}>
          <ul className={styles.list}>
            {links.map(link => <li key={link.key}>{link.name}</li>)}
          </ul>
        </div>
      }
    </>
  )
};

export default NavigationList;
