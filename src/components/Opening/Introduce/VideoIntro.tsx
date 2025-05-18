import React from 'react';

const VideoIntro = () => {
  return (
    <>
      <iframe
        src="https://drive.google.com/file/d/1eguQwqXwv7UcCcVUyEybIuEkosHrhS1G/preview"
        allow="autoplay; fullscreen"
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{
          height: '100%',
          borderRadius: 16,
          width: '100%'
        }}
        className="tgn-introduce-iframe"
      />
    </>
  );
};

export default VideoIntro;
