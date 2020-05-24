/**
 * Accepts an input array and returns an array of the same elements, but in a
 * different order
 */
export const scramble = <T>(items: T[]): T[] => {
  const copy = items.slice();

  let currentIndex = copy.length;
  let temp: T;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = copy[currentIndex];
    copy[currentIndex] = copy[randomIndex];
    copy[randomIndex] = temp;
  }

  return copy;
};
