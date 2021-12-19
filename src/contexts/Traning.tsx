import React, { createContext, useCallback, useState } from 'react';
import trainings from '../../trainnings.json';
import ITraining from '../interfaces/ITraning';

export interface ITrainingProvider {
  list(): Promise<ITraining[]>;
  // eslint-disable-next-line no-unused-vars
  loadTraining(id: number): ITraining | undefined;
}

export const TrainingContext = createContext<ITrainingProvider>(
  {} as ITrainingProvider,
);

export const TraningProvider: React.FC = ({ children }) => {
  const [trainingList, setTrainingList] = useState<ITraining[]>(
    trainings[0].Training as ITraining[],
  );

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
    <TrainingContext.Provider value={{ list, loadTraining }}>
      {children}
    </TrainingContext.Provider>
  );
};
