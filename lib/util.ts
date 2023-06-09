export const convertCase = (item: string) => {
  return item.split("").reduce((acc: string, cv: string, ci: number) => {
    const nv = ci === 0 ? cv.toUpperCase() : cv.toLowerCase();
    return acc + nv;
  }, "");
};
