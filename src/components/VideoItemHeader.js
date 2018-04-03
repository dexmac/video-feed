import React, { Component } from 'react';
import VideoItemTitle from './VideoItemTitle';
import VideoItemViewsNumber from './VideoItemViewsNumber';

class VideoItemHeader extends Component {
    render() {
        return (
            <div className="video-item-header">
                <VideoItemTitle className="video-item-title" title={this.props.item.title}/>
                <VideoItemViewsNumber className="video-item-views-number" viewsNumber={this.props.item.views}/>
            </div>
        );
    }
}

export default VideoItemHeader;