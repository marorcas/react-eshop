import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <NavLink className={styles.Link} to="/react-eshop/bows">
                Bows
            </NavLink>
            <NavLink className={styles.Link} to="/react-eshop/arrows">
                Arrows
            </NavLink>
            <NavLink className={styles.Link} to="/react-eshop/accessories">
                Accessories
            </NavLink>
        </nav>
    )
}

export default NavBar;