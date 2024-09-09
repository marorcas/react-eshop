import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";
import FavouriteListIcon from "./FavouriteListIcon";
import CartIcon from "./CartIcon";
// import SearchBar from "../SearchBar/SearchBar";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.Header}>
            <Logo/>
            {/* <SearchBar/> */}
            <NavLink className={styles.FavouriteListIconContainer} to="/react-eshop/favourites">
                <FavouriteListIcon/>
            </NavLink>

            <div className={styles.CartIconContainer}>
                <CartIcon/>  
            </div>
        </div>
    )
}

export default Header;