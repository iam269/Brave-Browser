# Brave Browser Clone

A simplified clone of the Brave browser interface built using only HTML, CSS, and JavaScript. This project replicates the main UI elements: address bar with intelligent search (autocomplete from DuckDuckGo), tabs, "New Tab" page, and a minimal "Shields" panel. It includes navigation within an iframe, visual tab management, Shields toggle, and real-time search suggestions.

## Features

- **Intelligent Search Bar**: Autocomplete suggestions from DuckDuckGo API as you type, with a dropdown that appears below the input.
- **Tab Management**: Visual tabs with the ability to create new tabs and switch between them.
- **Navigation**: Basic back/forward history simulation within the iframe.
- **Shields Panel**: Toggle for blocking ads and scripts (visual only).
- **Quick Links**: Direct links to popular sites like Hacker News, GitHub, and DuckDuckGo.
- **Dropdown Menus**: Profile switcher and theme toggle (dark mode).

Live Demo: [https://itsiamdev.github.io/Brave-Browser/](https://itsiamdev.github.io/Brave-Browser/)

## Files

- `index.html` — Main entry point with HTML structure.
- `css/styles.css` — Styles for the UI, including responsive design.
- `js/app.js` — JavaScript for functionality: navigation, tab management, search suggestions, and Shields toggle.
- `lion.png` — Favicon icon.

## How to Run

1. Open `index.html` in your browser (double-click or File -> Open). No server is required for basic functionality, but some external pages may load correctly depending on the browser's iframe policies.

## Limitations and Notes

- This is not a real browser — it's a demonstrative interface only.
- Navigation uses an `iframe`. Some websites refuse to load in iframes (due to X-Frame-Options), in which case they will open in a new browser tab.
- Purpose is visual and for prototyping — you can extend features like bookmarks, session restore, real content blocking, etc.

## Implemented Features

- Address bar with intelligent search (autocomplete suggestions from DuckDuckGo API)
- Visual tab management (create new tabs, switch between them)
- Navigation in iframe with simple back/forward history
- Shields panel for blocking ads/scripts (visual toggle only)
- Quick links to popular sites
- Dropdown menus for profile switching and theme toggle

## Future Enhancements

If you'd like, I can add:
- Dark/light theme system
- Tab reordering and management
- Or convert the project into an Electron app.
