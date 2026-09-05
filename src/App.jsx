import styles from "./app.module.css";
import { useState } from "react";

function App() {
  const [showDebug, setShowDebug] = useState(false);

  return (
    <>
      <h1>Stardew Valley Tracker</h1>
      
      {/* DEBUG ZONE */}
      <button
					onClick={() => setShowDebug(!showDebug)}
					// Combining classNames to dynamically change color.
					className={`${styles.debugButton} ${showDebug ? styles.buttonOn : styles.buttonOff}`}>
					{showDebug ? "Hide Debug" : "Show Debug"}
				</button>

      {showDebug && (
        <section className={styles.debugZone}>
          {/* DEBUG VILLAGER CARDS */}
          <div className={styles.debugCard}>
            <img className={styles.villagerPortrait} src="" alt="" />
            <h3>Pam</h3>
            <ul className={styles.giftGrid}>
              <li className={styles.giftList}>Beer, Cactus Fruit, Glazed Yams, Mead, Pale Ale, Parsnip, Tropical Curry</li>
            </ul>
          </div>

          <div className={styles.debugCard}>
            <img className={styles.villagerPortrait} src="" alt="" />
            <h3>Linus</h3>
            <ul className={styles.giftGrid}>
              <li className={styles.giftList}>Blueberry Tart, Cactus fruit, Coconut, Dish o' The Sea, Yam</li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default App;
