import React, { Component } from 'react';

class VideoItemViewsNumber extends Component {
    render() {
        const VIEWS_TITLE = 'Views: ';
        const viewsNumber = this.props.viewsNumber;

        return (
            <div className="video-item-views-number">
                {viewsNumber ? VIEWS_TITLE + viewsNumber : ''}
            </div>
        );
    }
}

export default VideoItemViewsNumber;