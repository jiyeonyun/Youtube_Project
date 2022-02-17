import React from 'react';

function VideoItem(props){
    const handleClick = (event) =>{
        window.scrollTo(0, 0);
        props.setSelectVideo(true);
        let id = (event.target.id);
        console.log(id)
        props.detail(id);
    };
    return(
        <li className='itme_list' onClick={handleClick} id={props.video.id}>
        <img src={props.video.snippet.thumbnails.medium.url} id={props.video.id} alt="" width="320px" height="180px" />
        <div className='item_desc' id={props.video.id}>
        <h1 className='item_title' id={props.video.id}>
            {props.video.snippet.title.length > 28 ? props.video.snippet.title.substr(0,26)+'...' : props.video.snippet.title}
            </h1>
        <span className='item_date' id={props.video.id}>{props.video.snippet.publishedAt}</span>
        <span className='item_channelName' id={props.video.id}>{props.video.snippet.channelTitle}</span>
        </div>
    </li>
    );
    }
            

export default VideoItem;

