import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list';
import Header from './components/header'

function App() {
  const [videos, setVideos] = useState([]);
  const search = query =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyBBc1cdK2nDD3kQG6hCuc5sdbXcosBVB7s`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=AIzaSyBBc1cdK2nDD3kQG6hCuc5sdbXcosBVB7s",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
    <Header search={search} />
    <VideoList videos={videos} />
    </>
  );
}

export default App;
