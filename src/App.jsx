import styles from "./app.module.css";

function App() {

  return (
    <>
      <h1>Stardew Valley Tracker</h1>
      
      {/* DEBUG ZONE */}
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
    </>
  );
};

export default App;
