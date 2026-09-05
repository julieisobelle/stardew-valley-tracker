import itemsData from "../data/items.json";
import villagersData from "../data/villagers.json";

/**allItemsFlat is defined outside the hook so the flattening operation
*only runs once when the module loads, rather than on every render.
*/
const allItemsFlat = Object.values(itemsData.data).flat();

/**useItems manages access to the game's local JSON data files.
*It provides flat item arrays, villager data, metadata, and lookup functions
*to retrieve specific items or villagers by their ID across the project.
*/
export const useItems = () => {

    /**Return the full item object matching the provided unique id.*/
	function getItemById(id) {
		return allItemsFlat.find((items) => items.id === id);
	}

    /**Return the full villager object matching the provided unique id.*/
	function getVillager(id) {
		return villagersData.data.find((villagers) => villagers.id === id);
	}

	return {
		items: allItemsFlat,
		villagers: villagersData.data,
		meta: itemsData.meta,
		getItemById,
		getVillager,
	};
};