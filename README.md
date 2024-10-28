# Time and Date Project

This project displays the local time and date based on the selected timezone. It dynamically loads timezones from a JSON file and updates them in real-time.

## Features
- Dynamically loads timezone data from a JSON file.
- Automatically detects the user’s default timezone based on their location.
- Updates and displays the current time and date for the selected timezone.

## Requirements
Since this project uses `fetch` to load data from a JSON file, it must be run on a **local server**. Directly opening the file with `file://` will cause a security restriction that prevents loading the JSON data.

## How to Run
1. Open a terminal in the project directory and start a simple server with one of the following commands:

### Python

# For Python 3
python3 -m http.server

# For Python 2
python -m SimpleHTTPServer

2. Open http://localhost:8000 in your browser.