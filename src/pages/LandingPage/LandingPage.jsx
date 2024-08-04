import Carousel from "../../components/Carousel/Carousel";
import Grid from "../../components/Grid/Grid";

import styles from "./LandingPage.module.scss";

const LandingPage = () => {
    return (
      <div className={styles.LandingPage}>
        <Carousel/>
        <p>About this website</p>
      </div>
    );
};
  
export default LandingPage;