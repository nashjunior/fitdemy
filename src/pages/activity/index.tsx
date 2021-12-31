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
        controlsList="nodownload noplaybackrate"
        controls
        onDurationChange={(e) => {
          setVideolength(e.currentTarget.duration);
          setRestTime(currentExercise?.time as number);
        }}
        onTimeUpdate={(e) => {
          if (isRestTime) {
            setVideoPercentage((e.currentTarget.currentTime / restTime) * 100);
          } else
            setVideoPercentage(
              (e.currentTarget.currentTime / videolength) * 100,
            );
        }}
        onEnded={(e) => {
          if (!isRestTime) {
            setIsRestTime(true);
            setCurrentExercise(
              trainingSelected?.exercises.find(
                (exercise) => currentExercise?.next === exercise.id,
              ),
            );
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
            <div
              style={{
                width: `${
                  exercise.id === currentExercise?.id ? videoPercentage : 0
                }%`,
              }}
              className={`${styles.progress} ${isRestTime && styles.rest}`}
            />
            <h3>
              {Math.floor(exercise.time / 60)
                .toString()
                .padStart(2, '0')}
              :{exercise.time.toString().padStart(2, '0')} {exercise.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
