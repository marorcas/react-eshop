import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.Header}>
            <Logo/>
            <SearchBar/>
        </div>
    )
}

export default Header;