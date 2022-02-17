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
                    </div>
            </section>
    );

export default Detail;