const data = {
  a: {
    a: '-',
    b: '◯',
    c: '✕',
  },
  b: {
    a: '◯',
    b: '-',
    c: '△',
  },
  c: {
    a: '✕',
    b: '△',
    c: '-',
  }
};

// a x bのデータを取得
console.log(data['a']['b']);

// b x cのデータを取得
console.log(data['b']['c']);
