export const getSubstrings = (str: string) => {
  const from = str.split(' ')[1].toUpperCase();
  const to = str.split(' ')[3].toUpperCase();
  const amount = parseFloat(str.split(' ')[0]);
  return {from, to, amount}
}