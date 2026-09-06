import styles from "./app.module.css";
import { useState } from "react";
import { useItems } from "./hooks/useItems";

function App() {
  const [showDebug, setShowDebug] = useState(false);
  const { villagers, items, meta, getItemById } = useItems();
  
  /* PROGRESS TRACKER */
	const { crops_target, forage_target, minerals_target, fish_target } = meta.progress_tracker || {};
	const currentCrops = items.filter((index) => index.type?.includes("Crop")).length;
  const currentForage = items.filter((index) => index.type?.includes("Forage")).length;
	const currentMinerals = items.filter((index) => index.type?.includes("Mineral")).length;
	const currentFish = items.filter((index) => index.type?.includes("Fish")).length;

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
          {/* DEBUG ITEMS TRACKER */}
          <ul className={styles.progressContainer}>
            <h3>Progress tracker:</h3>
            <li>
              <span>Crops:</span> {currentCrops} / {crops_target}
            </li>
            <li>
							<span>Forage:</span> {currentForage} / {forage_target}
						</li>
						<li>
							<span>Minerals:</span> {currentMinerals} / {minerals_target}
						</li>
						<li>
							<span>Fish:</span> {currentFish} / {fish_target}
						</li>
          </ul>

          {/* DEBUG VILLAGER CARDS */}
            {/**Need to use map to go through all the villagers there is. */}
            <h3>Villager cards:</h3>
            <div className={styles.villagerContainer}>
              {villagers.map((villager) => (
                <div className={styles.debugCard}>

                  {/**Going through and finding villager portrait images */}
                  <img className={styles.villagerPortrait} src={villager.image} alt="" />
                  
                  {/**Going through and finding villager names */}
                  <h3>{villager.name}</h3>
                  
                  <ul className={styles.giftGrid}>
                    {/**Going through and finding every villager loves, and creating a listitem for them.  */}
                    {villager.loves.map((itemId) => {
                        const item = getItemById(itemId);

                        // Diagnostic log to check status
                        console.log(`Checking ID: "${itemId}"`, item);

                        /*A catch if there is no item to find. */
                        if (!item) {
                          return (
                            <li className={styles.giftList} key={itemId}>
                              <span title={`Missing: ${itemId}`}>Not found: {itemId}</span>
                            </li>
                          );
                        }

                        return (
                          <li className={styles.giftList} key={itemId}>
                            <img
                              src={item.image}
                              alt={item.name}
                              title={item.name}
                              className={styles.itemIcon}
                            />
                          </li>
                        );
                      })}
                  </ul>
                </div>
              ))}
            </div>
        </section>
      )}
    </>
  );
};

export default App;
