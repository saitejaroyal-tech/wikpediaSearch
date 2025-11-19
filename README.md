Wikipedia Search App
Overview
A responsive and user-friendly web app that enables real-time searching of Wikipedia articles. Built with HTML5, Bootstrap 4.5.2, and JavaScript, the app fetches and displays curated Wikipedia results with smooth UI transitions.

Static Features
HTML layout with Bootstrap for mobile responsiveness.
Centralized search input with Wikipedia logo for branding.
Loading spinner appears during API calls to enhance user experience.
Results container dynamically displays search outputs.

Dynamic Features
Event Listener: Detects ‘Enter’ key press to initiate search without extra clicks.
Fetch API: Sends asynchronous requests to Wikipedia API with user queries.
JSON Parsing: Extracts the ‘search_results’ array from API response.
Result Handling: Iterates over results, passing each to a render function.
DOM Manipulation: Dynamically creates and appends elements for each result:
Clickable title linking to Wikipedia pages (opens in new tab)
URL and snippet description styled for clarity and usability.

