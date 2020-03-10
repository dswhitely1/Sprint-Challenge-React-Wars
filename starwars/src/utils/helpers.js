export const kebabCase = str => str.toLowerCase()
                                   .replace( /\s/g, '-' );

export const romanNum = num => {
  let str = '';
  while (num > 0) {
    if (num > 4) {
      str += 'v';
      num = num - 5;
    } else if (num === 4) {
      str += 'iv';
      num = num - 4;
    } else if (num > 0) {
      str += 'i';
      num = num - 1;
    }
  }
  return str;
};