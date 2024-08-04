import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <NavLink className={styles.Link} to="/bows">
                Bows
            </NavLink>
            <NavLink className={styles.Link} to="/arrows">
                Arrows
            </NavLink>
            <NavLink className={styles.Link} to="/accessories">
                Accessories
            </NavLink>
        </nav>
    )
}

export default NavBar;