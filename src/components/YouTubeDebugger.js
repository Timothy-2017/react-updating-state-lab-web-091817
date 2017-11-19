// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleBitrate = () => {
    // Update our state here...
    this.setState({
      //settings.bitrate: 12,
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  handleResolution = () => {
    // Update our state here...
    this.setState({
      //settings.video.resolution: '720p',
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
