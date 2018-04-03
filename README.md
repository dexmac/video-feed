**Table of Contents**

- [Project Intro](#Intro)
- [Install](#Install)
- [Run](#Run)
- [Contribute](#Contribute)
- [Misc.](#Misc.)

<a name="Intro"></a>

## Intro

A filterable video-feed demo in ReactJS. Uses Express as the backend to serve a video feed,
which is comprised from regular video URLs, Facebook & Youtube videos.
The feed can then be filtered by the video type (URL / Facebook / Youtube).

![preview](video-feed.gif)

<a name="Install"></a>

## Install
   - clone the repository / open zip file and enter project directory
   - `yarn (/npm) install`
   
<a name="Run"></a>
## Run

To run the project, inside the root directory, you can run:

### Running the project in a Browser 

### `yarn dev`

Runs the server and the client together for easy testing and development.
Open [http://localhost:3000](http://localhost:3000) to view the feed in the browser.

### `yarn start`

Runs the client side app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn server`

Launches an Express server on port 4000.<br>
Open [http://localhost:4000/content/feed/items](http://localhost:4000/content/feed/items) to view the video feed in the browser.

<a name="Contribute"></a>

## Contribute
For contribution guidelines, see [Contributing](./CONTRIBUTING.md).
The PR review process can be found [here](./PR_REVIEW.md).

<a name="Misc."></a>

## Misc.
- [Stack](#stack)
- [Supported Browsers](#supported-browsers)
- [Folder Structure](#folder-structure)

## Stack

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Package and Dependency Management
The project uses yarn as it's package manager, however, npm should work seamlessly as well.
Wepack is used to pack the bundle and provides ES6 modules dependency management.

- `yarn` / `npm` - For package management
- `react` + `react-dom` - For ReactJS Apps
- `react-bootstrap` - For nice looking NavBar
- `react-player` - React Component For playing Facebook, Youtube and Other Video URLs from https://www.npmjs.com/package/react-player. 
- `react-scripts` - For supplying Webpack, JEST, etc. behind the scenes
- `express` - For running the video feed server
- `concurrently` - For running both client and server together (using `yarn dev`)

## Supported Browsers

By default the generated project uses the latest version of React.
Please refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Folder Structure

```
video-feed/
  README.md - This file
  node_modules/ - Created after initial 'yarn install'
  package.json - Npm modules and package version
  public/ 
    index.html - Runner HTML
    favicon.ico
  src/ 
    App.css - Main app CSS
    App.js - Parent app component
    App.test.js - Example unit test
    index.css - General CSS
    index.js - React App entry point
    registerServiceWorker.js - To enable offline caching (PWA)
  api/
    items - Video feed JSON
    server.js - Express Server to serve feed on port 4000
  components/ - Video Feed React Components 
  containers/
    VideoFeedManager.js - Manages feed fetching and display
  constants/
    index.js - App constants
  helpers/
    fetchJSON.js - Fetch JSON wrapper
```