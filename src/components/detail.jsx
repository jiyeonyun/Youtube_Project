import React from 'react';

const Detail = (props) => (
            <section className='detail'>
                <iframe 
                    src={`https://youtube.com/embed/${props.id}`} 
                    width="80%"
                    height="500px"
                    frameBorder="0"
                    className='detail_video'
                    allowFullScreen
                    type='text/html'
                    ></iframe>
                    <div className='video_detail'>
                        <h1>유튜브 제목임</h1>
                        <p>채널명</p>
                        <p>게시시간</p>
                    </div>
            </section>
    );

export default Detail;