import IExercise from './IExercise';

export default interface ITraining {
  id: number;
  title: string;
  level: string;
  img: string;
  intensity: string;
  time: number;
  free: boolean;
  equipments: string[];
  advantages: string[];
  description: string;
  author: string;
  avatar: string;
  exercises: IExercise[];
}
