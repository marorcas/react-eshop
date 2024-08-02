import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <NavLink className={styles.Link} to="/">
                Compound Bows
            </NavLink>
            <NavLink className={styles.Link} to="/">
                Recurve Bows
            </NavLink>
            <NavLink className={styles.Link} to="/">
                Traditional Bows
            </NavLink>
            <NavLink className={styles.Link} to="/">
                Arrows
            </NavLink>
            <NavLink className={styles.Link} to="/">
                Accessories
            </NavLink>
        </nav>
    )
}

export default NavBar;