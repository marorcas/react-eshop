import Carousel from "../../components/Carousel/Carousel";

import styles from "./LandingPage.module.scss";

const LandingPage = () => {
    return (
      <div className={styles.LandingPage}>
        <Carousel/>
        <div className={styles.Welcome}>
          <h1 className={styles.Title}>Welcome to AimX</h1>
          <p className={styles.Para}>At AimX, we're passionate about archery and committed to providing archers of all levels with the best gear, advice, and support. Whether you're a seasoned bowman or just starting out, our extensive selection of bows, arrows, and accessories is sure to meet your needs.</p>
          <p className={styles.Para}>Browse through our extensive range of products!</p>
        </div>
      </div>
    );
};
  
export default LandingPage;