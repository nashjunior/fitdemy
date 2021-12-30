import React, { createContext, useCallback, useState } from 'react';
import trainings from '../../trainnings.json';
import ITraining from '../interfaces/ITraning';

export interface ITrainingProvider {
  list(): Promise<ITraining[]>;
  // eslint-disable-next-line no-unused-vars
  loadTraining(id: number): ITraining | undefined;

  // eslint-disable-next-line no-unused-vars
  updateSoundStatus(status: boolean): void;
  soundMuted: boolean;
}

export const TrainingContext = createContext<ITrainingProvider>(
  {} as ITrainingProvider,
);

export const TraningProvider: React.FC = ({ children }) => {
  const [trainingList, setTrainingList] = useState<ITraining[]>(
    trainings[0].Training as ITraining[],
  );

  const [soundMuted, setSoundMuted] = useState(false);

  const updateSoundStatus = useCallback((muted: boolean) => {
    setSoundMuted(!muted);
  }, []);

  const list = useCallback(async () => {
    return trainingList;
  }, [trainingList]);

  const loadTraining = useCallback(
    (id: number) => {
      return trainingList.find((training) => training.id === id);
    },
    [trainingList],
  );

  return (
    <TrainingContext.Provider
      value={{ list, loadTraining, soundMuted, updateSoundStatus }}
    >
      {children}
    </TrainingContext.Provider>
  );
};
