import React, { useState } from 'react';
import styles from '../../../styles/activity.module.scss';

const Activity: React.FC = () => {
  const [videolength, setVideolength] = useState(0);
  const [elapsedVideoTime, setElapsedVideoTime] = useState(0);
  // const [videoPercentage, setVideoPercentage] = useState(0);

  const videoPercentage = (elapsedVideoTime / videolength) * 100 || 0;

  return (
    <div className={styles['activity-wrapper']}>
      <video
        className={styles['video-player']}
        controls
        onDurationChange={(e) => setVideolength(e.currentTarget.duration)}
        onTimeUpdate={(e) => setElapsedVideoTime(e.currentTarget.currentTime)}
        autoPlay
      >
        <source src="https://ik.imagekit.io/bzw0ybymdr/207_-_Mountain_climbers_CCGc0yhCf_V.mp4?updatedAt=1626880326140" />
        <track kind="captions" />
      </video>

      <div className={styles['exercise-list']}>
        <div className={styles.exercise}>
          <div
            style={{ width: `${videoPercentage}%` }}
            className={styles.progress}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles['image-exercise']}
              src="https://ik.imagekit.io/bzw0ybymdr/S2pro/WhatsApp_Image_2021-06-08_at_11.54.26__9__9Wp7-gc-r.jpeg"
              alt="Imagem"
            />
          </div>

          <h3>Prancha Alta</h3>
        </div>
      </div>
    </div>
  );
};

export default Activity;
