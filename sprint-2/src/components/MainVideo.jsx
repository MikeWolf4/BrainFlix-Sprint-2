import React, { Component } from 'react';
import MainVideoDetails from './MainVideoDetails';
import VideoComments from './VideoComments';
import axios from "axios"
import VideoList from "./VideoList";
    

class MainVideo extends Component {

  state = {
    //Main Video Object
    mainVideo: {
    id: '1af0jruup5gu',
    title: 'BMX Rampage: 2018 Highlights',
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    channel: 'Red Cow',
    image: 'assets/Images/video-list-0.jpg',
    views: '1,001,023',
    likes: '110,985',
    duration: '0:20',
    video: 'assets/Video/BrainStation Sample Video.mp4',
    timestamp: '12/18/2018',
    comments: [
      {
      id: 1,
      name: 'Micheal Lyon',
      comment: 'They BLEW the ROOF off at their last show, once everyone    started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
      time: "1545162149000"
    },
      {
      id: 2,
      name: 'Gary Won',
      comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
      time: "1544595784046"
    },
      {
      id: 3,
      name: 'Theodore Duncan',
      comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!',
      timestamp: "1542262984046"
    }
    ]
    },

    // Side Video Objects
    sideVideo: [],
  }

  // axios get for initial states
  componentDidMount(){
    console.log("---------------componentDidMount-----------------")
    axios.get("https://project-2-api.herokuapp.com/videos?api_key=<fc9757be-5822-4672-85ba-6b78d3d0cbc2>")
    .then(res => {
      console.log("Gets - state for ---sideVideo---")
      this.setState({sideVideo: res.data})
    })
    
    axios.get("https://project-2-api.herokuapp.com/videos/" + this.props.match.params.id + "/?api_key=<fc9757be-5822-4672-85ba-6b78d3d0cbc2>")
    .then(res => {
      console.log("Sets initial mainVideo state -- GET state for ---mainVideo---")
      this.setState({mainVideo: res.data})
    })
  }

  // axios get for state mainVideo
  componentDidUpdate(prevProps) {
    console.log("---------------componentDidUpdate-----------------")
    console.log("Gets - state for ---mainVideo---")
    console.log("Check - if -- params id === state id")
    if (prevProps.match.params.id === this.props.match.params.id) {
    } else {
      axios.get("https://project-2-api.herokuapp.com/videos/" + this.props.match.params.id + "/?api_key=<fc9757be-5822-4672-85ba-6b78d3d0cbc2>")
    .then(res => {
      console.log("Check failed -- GET state for ---mainVideo---")
      this.setState({mainVideo: res.data})
    })
    }
    console.log("--------------------------------")
  }
  
  // filters video list of video in state mainVideo 
  arrayFilter(array){
    return( array.filter(x => x.id != this.state.mainVideo.id
    ))
  }
   
    render() { 
        return (
                  <div>
                    <div className="mainvideo-container">
                    <div className="mainvideo">
                      <video   src={"https://project-2-api.herokuapp.com/"} type="video/mp4" className="video" poster={(this.state.mainVideo.image)}>
                      </video>
                        <div className="video-player__controls">
                          <div className="video-player__btn">
                            <img src={require("../assets/Icons/SVG/Icon-play.svg")} alt=""/>
                          </div>
                          <div className="video-player__progress-bar">
                            <div className="video-player__progress-timeline">
                              <div className="video-player__progress-scrubber"></div>
                            </div>
                            
                            <div className="video-player__progress-text">0:00 / {this.state.mainVideo.duration}</div>
                          </div>
                          <div className="video-player__btn-group">
                            <button className="video-player__btn">
                              <img className="fas fa-expand" src={require("../assets/Icons/SVG/Icon-fullscreen.svg")} alt=""/>
                            </button>
                            <button className="video-player__btn"> 
                              <img className="fas fa-expand" src={require("../assets/Icons/SVG/Icon-volume.svg")} alt=""/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <MainVideoDetails videoDetails={this.state.mainVideo} />
              <div className="comment__section">
                  <div className="test__group">
                      <h3 className="h1sect">Comments {Object.keys(this.state.mainVideo.comments).length}</h3>
        
                      <form id="comment-form" className="comment-form">
                        <span className="input__pic"></span>
                        
                        <label className="input2" htmlFor="input">JOIN THE CONVERSATION</label>
                        
                        <input
                        type="text"
                        id="input-comment"
                        className="input__comment"
                        name="userCommentInput"
                        placeholder="Add a new comment"
                        maxLength="210"
                        >
                        </input>
                        
                        <button className="input__button" type="submit">COMMENT</button>
                    </form>
                  </div>
                    {this.state.mainVideo.comments.map(videoComments => <VideoComments key={videoComments.id} userName={videoComments.name} date={videoComments.timestamp} comment={videoComments.comment}/>)}
                    <VideoList sideVideoList={this.arrayFilter(this.state.sideVideo)} />
            </div>
        </div>);
    }
}

export default MainVideo;
