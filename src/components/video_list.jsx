import React from 'react';
import VideoItem from '../components/video_item';

const VideoList = props => (
  <ul className='videoList'>
    {props.videos.map(video => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
