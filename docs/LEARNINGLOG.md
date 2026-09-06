# Learning Log
This project serves as my hands-on way of relearning React after stepping away since 2022-2023. This file will work as my primary log for tracking insights and technical shifts.

## Set up
- **Old Way (`npx create-react-app`)**: When I originally learned React, this was the standard command to get started.
- **Modern Way (`npm create vite@latest`)**: The current standard.

## useState
- **State Management**: A React hook that lets functional components remember and update data over time, automatically triggering a UI re-render when the value changes (e.g., toggling the debug zone open or closed).

## Attribute Syntax
- **Attribute Syntax**: Realizing I have to use `className` instead of `class` to avoid conflicts with JavaScript's native class keyword.

## Event Handling
- **onClick**: Reaching for `addEventListener` out of vanilla habit, replaced by passing an `onClick` callback directly onto the JSX element.

## Conditional Rendering
- **UI Control**: Using short-circuit evaluation (&&) to conditionally render JSX elements, and ternary operators for dynamic UI states and text updates.

## Changelog-Driven Development
- **Workflow Habit**: Tracking actual progress through changelogs rather than rigid todo lists to maintain momentum and capture architectural changes naturally.

## Data Flattening
- **JSON Processing**: Using Object.values().flat() to transform nested, categorized JSON objects into a single flat array for easier searching and filtering.

## Module-Scope Optimization
- **Performance**: Placing heavy data transformations outside the component or hook function so they run once on module load rather than re-computing on every render.

## Custom Hook
- **Logic Extraction**: A reusable JavaScript function starting with use that extracts data-fetching and processing logic away from UI components, keeping views clean and allowing shared access across the project.

## Loop through
- **Multiple data**: When rendering multiple data elements in React, use .map() to iterate over arrays and always assign a unique key prop to the outermost returned element.
- **Data Shape Alignment**: Ensure child arrays (villager.loves) contain identifiers that precisely match the primary identifiers (item.id) in your source data collection for successful lookups.

## Dynamic Counting & Reduction
- **Repetitive Filtering**: Writing multiple `.filter().length` statements for individual categories as a straightforward way to build and test the debug progress tracker.

- **The `.reduce()` Pattern**: A planned optimization for post-debug refactoring to enforce DRY code, eliminating repetitive filters and automatically scaling as new categories are introduced.