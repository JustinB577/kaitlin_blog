import DropdownButton from "./DropdownButton";
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Kaitlin's Blog</h1>
      <DropdownButton />
    </div>
  );
};

export default Header;
