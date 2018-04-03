import React, { Component } from 'react';
import { NAVBAR_BRAND } from './constants/index.js';
import VideoFeedManager from "./containers/VideoFeedManager";
import NavigationBar from "./components/NavigationBar";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar brand={NAVBAR_BRAND}/>
                <VideoFeedManager/>
            </div>
        );
    }
}

export default App;
