export function removeDuplicates(arr: string[]) {
  return arr?.filter((item, index) => arr.indexOf(item) === index);
}
