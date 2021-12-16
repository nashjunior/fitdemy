import React, { useState } from 'react';
import Link from 'next/link';
import { FiSettings } from 'react-icons/fi';
import { IoMdMusicalNotes } from 'react-icons/io';
import styles from '../../styles/Home.module.scss';

const Home: React.FC = () => {
  const [isStartedExercise, setIsStartedExercise] = useState(false);

  return (
    <>
      {!isStartedExercise && (
        <header>
          <div>header</div>
        </header>
      )}
      <div
        className={`${styles['landing-page']} ${
          isStartedExercise && styles['expanded-landing-page']
        }`}
      >
        {!isStartedExercise && (
          <>
            <h1 className={styles['title-exercise']}>
              Exercício rápido de tronco
            </h1>
            <div className={styles['exercise-characteristics']}>
              <div className={styles['exercise-characteristic']}>
                <h4>10</h4>
                <p>Média em minutos</p>
              </div>

              <hr />

              <div>
                <h4>Moderada</h4>
                <p>Intensidade</p>
              </div>

              <hr />

              <div>
                <h4>Iniciante</h4>
                <p>Nível</p>
              </div>
            </div>
          </>
        )}
      </div>
      {!isStartedExercise && (
        <>
          <div className={styles['button-group']}>
            <button className={styles['rounded-button']} type="button">
              <FiSettings size="70%" color="white" />
            </button>

            <button
              className={`${styles['rounded-button']} ${styles['expanded-button']}`}
              type="button"
              onClick={() => setIsStartedExercise(true)}
            >
              Iniciar
            </button>

            <button className={styles['rounded-button']} type="button">
              <IoMdMusicalNotes fill="white" size="70%" />
            </button>
          </div>

          <div className={styles['more-exercise-contents']}>
            <div className={styles['more-exercise-content']}>
              <h4>Bom Para</h4>
              <p>tronco</p>
              <p>Queima rápida de calorias</p>
            </div>

            <div className={styles['more-exercise-content']}>
              <h4>Equipamento</h4>
              <p>nenhum</p>
            </div>
          </div>
        </>
      )}

      {isStartedExercise && (
        <div id={styles.overlay}>
          <Link href="/activity">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Pular</a>
          </Link>
          <h2>Prepare-se</h2>
        </div>
      )}
    </>
  );
};

export default Home;
