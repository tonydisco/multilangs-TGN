'use client';

import {PureImage} from '@/components/Common/Images';
import {useEffect, useState} from 'react';

const VideoIntro = () => {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const [thumb, setThumb] = useState(true);

  const handlePlay = () => {
    if (videoEl) {
      if (videoEl.paused) {
        videoEl.play();
        setThumb(false);
      } else {
        videoEl.pause();
        setThumb(true);
      }
    }
  };

  useEffect(() => {
    const video = document.querySelector(
      '.tgn-introduce-iframe'
    ) as HTMLVideoElement;
    if (video) {
      setVideoEl(video);
    }
  }, []);

  return (
    <>
      <video
        // autoPlay
        // muted
        // controls
        style={{
          height: '100%',
          borderRadius: 16,
          width: '100%',
          objectFit: 'cover',
          position: 'relative'
        }}
        className="tgn-introduce-iframe"
        title="TGN Thế Giới Nhà"
        poster="/landing/THUMB.png"
        onClick={handlePlay}
      >
        <source src="/video/TGN_FULL_45mb.webm" type="video/webm" />
      </video>
      {thumb && (
        <div
          onClick={handlePlay}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <div className="thumnail-video">
            <PureImage className="control-video" url="/icon/PLAY.png" />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoIntro;
