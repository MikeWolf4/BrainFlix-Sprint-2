import React, { Component } from 'react';

class Upload extends Component {
    state = {  }
    render() { 
        
        return ( <div className="upload-main-container">
            
            <h1 className="upload-main__title">Upload Video</h1>
            {/* IMG / INPUT CONTAINER */}
            <div className="upload-main__box-borders">
                {/* IMAGE */}
                <div className="upload-main__image-container">
                    <label className="upload-main__label-title" htmlFor="id">VIDEO THUMBNAIL</label>
                    <img id="img" className="upload-main__image" src={require("../assets/Images/Upload-video-preview.jpg")} alt=""/>
                </div>
                {/* IMAGE */} 
                {/* INPUT */}
                <div className="upload-main__input-container">
                    <label className="upload-main__label-title" htmlFor="name">TITLE YOUR VIDEO</label>
                    <input placeholder="Add a title to your video" className="upload-main__input-title" id="name" type="text"/>
                    <label className="upload-main__label-description" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                    <input placeholder="Add a description of your video" className="upload-main__input-description" id="description" type="text"/>
                </div>
                {/* INPUT */}
            </div>
            {/* IMG / INPUT CONTAINER */}
            {/* BUTTON CONTAINER */}
            <div className="upload-main__button-container">
                {/* BUTTONS */}
                <a className="upload-main__button-cancel" href="#">CANCEL</a> 
                <a className="upload-main__button-publish" href="#">PUBLISH</a>
                {/* BUTTONS */}
            </div>
            {/* BUTTON CONTAINER */}
            
            </div>);
    }
}
 
export default Upload;