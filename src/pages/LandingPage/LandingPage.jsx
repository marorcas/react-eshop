import Carousel from "../../components/Carousel/Carousel";
import Grid from "../../components/Grid/Grid";

import styles from "./LandingPage.module.scss";

const LandingPage = () => {
    return (
      <div className={styles.LandingPage}>
        <Carousel/>
        <Grid/>
      </div>
    );
};
  
export default LandingPage;