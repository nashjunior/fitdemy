import { useContext } from 'react';
import { ITrainingProvider, TrainingContext } from '../contexts/Traning';

const useTraining = (): ITrainingProvider => {
  const context = useContext(TrainingContext);

  if (!context) throw new Error('useTraining should be inside traning context');

  return context;
};

export default useTraining;
