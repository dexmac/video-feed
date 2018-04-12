import React, { Component } from 'react';
import VideoItemTitle from './VideoItemTitle';
import VideoItemViewsNumber from './VideoItemViewsNumber';

class VideoItemHeader extends Component {
    render() {
        const {title, views} = this.props.item ? this.props.item : {};

        return (
            <div className="video-item-header">
                <VideoItemTitle className="video-item-title" title={title}/>
                <VideoItemViewsNumber className="video-item-views-number" viewsNumber={views}/>
            </div>
        );
    }
}

export default VideoItemHeader;