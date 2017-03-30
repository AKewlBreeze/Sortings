export const randomLetterGenerator = (arrLength) => {
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let testArray = [];
  
  for (let i = 0; i < arrLength; i++) {
    testArray.push(letters.charAt(Math.floor() * 26));
  }
  return testArray;
};
