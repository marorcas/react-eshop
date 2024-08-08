import { NavLink } from "react-router-dom";

import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <NavLink className={styles.Link} to="/">
            <h2 className={styles.Aim}>AIM<span className={styles.X}>X</span></h2>
        </NavLink>
    )
}

export default Logo;