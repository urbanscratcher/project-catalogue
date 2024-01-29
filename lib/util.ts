export const capitalize = (item: string) => {
  return item.split("").reduce((acc: string, curVal: string, curIdx: number) => {
    const newStr = curIdx === 0 ? curVal.toUpperCase() : curVal.toLowerCase();
    return acc + newStr;
  }, "");
};
