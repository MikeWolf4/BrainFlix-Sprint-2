import React, { Component } from 'react';
import VideoList from './VideoList';
import {Link} from "react-router-dom";

class VideoCard extends Component {
    state = {  }
    
    render() { 
        window.scrollTo(0, 0)
        
        return <Link  to={"/main/"  + (this.props.id)} >
            <div className="videocard">
                <div className="videocard__img-container">
                <img className="videocard__img" src={this.props.videoImage} alt="video thumbnail"/>
                </div>
                <div className="videocard__channel-title-container">
                    <h4 className="videocard__title">{this.props.videoTitle}</h4>
                    <h4 className="videocard__channel">{this.props.videoChannel}</h4>
                </div>
            </div>
                
        </Link>;
    }
}
 
export default VideoCard ;
