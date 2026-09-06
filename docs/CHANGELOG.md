# Stardew Valley Tracker - CHANGELOG
> All notable changes to the Stardew Valley Gift Tracker will be documented in this file.

## [Site version 0.1.0]

### Added
- Initial project set up in VS Code
- Installed React
- Added and defined documentation files
- Added a License & Copyright in README.
- Added custom CSS variables to `:root` in `index.css`.
- Added a "Debug Zone" so where I can seperately view changes without disrupting the flow of the site.
- Added mock villager cards (Pam and Linus) with static data to test styling layouts.
- Added toggle button with `useState` to view Debug Zone without disrupting the main site flow.
- Added all the villagers in Stardew Valley with name, birthday, marriage, loves, and image data in a (`villagers`) JSON file.
- Added all villager loved items with name, season, availability, type, price, and image data in a (`items`) JSON file. Organized by in-game categories: crops, forage, fish, minerals, artisan, cooking, animal, and monster.
- Added a custom hook (`useItems`) to manage and extract the JSON data, providing cached flat arrays and reusable lookup functions.

### Changed
- Cleaned up default Vite boilerplate files (App-files, assets, etc.) for a clean start.
- Refactored `items.json` and `villagers.json` data structures by removing compound type prefixes from item IDs (e.g., changing "crop_pumpkin" to "pumpkin"), simplifying data references and component lookup logic.
- Updated images URLs for various items in `items.json` that were broken.

## [Unreleased]

### Priorities:
- [ ] Expand `items.json` to include all missing loved items referenced by villagers to eliminate remaining "Not found" states.
- [x] Add a tracker for how many of the items categories I have added

### Added:
- Added an item tracker utilizing `progress_tracker` metadata to monitor item collection progress in the debug menu.

### Changed:
- Updated villager cards and gift displays to a flexible grid layout instead of a single column.