import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/activity.module.scss';
import useTraining from '../../hooks/training';

const Activity: React.FC = () => {
  const [videolength, setVideolength] = useState(0);
  const [videoPercentage, setVideoPercentage] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  const { loadTraining } = useTraining();
  const trainingSelected = loadTraining(1);
  const [currentExercise, setCurrentExercise] = useState(
    trainingSelected?.exercises[0],
  );
  const [isRestTime, setIsRestTime] = useState(true);
  const [restTime, setRestTime] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      if (isRestTime && videoPercentage >= 100) {
        setIsRestTime(false);
        videoRef.current.currentTime = 0;
        videoRef.current.load();
      }
    }
  }, [isRestTime, videoPercentage]);

  return (
    <div className={styles['activity-wrapper']}>
      <video
        className={styles['video-player']}
        controls
        onDurationChange={(e) => {
          setVideolength(e.currentTarget.duration);
          setRestTime(Math.floor(e.currentTarget.duration / 2));
        }}
        onTimeUpdate={(e) => {
          if (isRestTime) {
            setVideoPercentage((e.currentTarget.currentTime / restTime) * 100);
          } else
            setVideoPercentage(
              (e.currentTarget.currentTime / videolength) * 100,
            );
        }}
        onEnded={() => {
          if (!isRestTime) {
            setCurrentExercise(
              trainingSelected?.exercises.find(
                (exercise) => currentExercise?.next === exercise.id,
              ),
            );
            setIsRestTime(true);
          }
        }}
        ref={videoRef}
        autoPlay
      >
        <source src={currentExercise?.videoUrl} />
        <track kind="captions" />
      </video>

      <div className={styles['exercise-list']}>
        {trainingSelected?.exercises.map((exercise) => (
          <div className={styles.exercise} key={exercise.title}>
            {currentExercise?.id === exercise.id ? (
              <>
                <div
                  style={{ width: `${videoPercentage}%` }}
                  className={`${styles.progress} ${isRestTime && styles.rest}`}
                />
                <h3>00:30 {exercise.title}</h3>
              </>
            ) : (
              <h3>{exercise.title}</h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
