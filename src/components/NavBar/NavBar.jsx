import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <NavLink className={styles.Link} to="/bow">
                Bows
            </NavLink>
            <NavLink className={styles.Link} to="/arrow">
                Arrows
            </NavLink>
            <NavLink className={styles.Link} to="/accessory">
                Accessories
            </NavLink>
        </nav>
    )
}

export default NavBar;