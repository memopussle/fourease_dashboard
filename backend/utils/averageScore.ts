export const averageScore = (
  energy_level: number,
  exercise_level: number,
  emotion_level: number,
  eat_level: number
): number => {
  return (energy_level + exercise_level + emotion_level + eat_level) / 4;
};
