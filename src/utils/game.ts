export const TOTAL_ATTEMPTS = 3 as const;

export const pointsForAttempt = (attempt: number): number => {
  if (attempt === 1) return 3;
  if (attempt === 2) return 2;
  if (attempt === 3) return 1;
  return 0;
};
