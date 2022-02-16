import React from 'react';

const VideoItem = (props) => (
            <li className='itme_list'>
                <img src={props.video.snippet.thumbnails.medium.url} alt="" width="320px" height="180px" />
                <div className='item_desc'>
                <h1 className='item_title'>
                    {props.video.snippet.title.length > 28 ? props.video.snippet.title.substr(0,26)+'...' : props.video.snippet.title}
                    </h1>
                <span className='item_date'>{props.video.snippet.publishedAt}</span>
                <span className='item_channelName'>{props.video.snippet.channelTitle}</span>
                </div>
            </li>
    );

export default VideoItem;

