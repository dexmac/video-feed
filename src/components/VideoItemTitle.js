import React, { Component } from 'react';

class VideoItemTitle extends Component {
    render() {
        const title = this.props.title;

        return (
            <div className="video-item-title">
                {title}
            </div>
        );
    }
}

export default VideoItemTitle;