//====================================================
//  Iterators
//====================================================
// for ... in returns list of keys
for (let key in ['one', 'two', 'thee']){
  console.log(key); // 0, 1, 2
}

// for ... of returns list of values
// For tranpiling to ES5 for ... of only works on array.
for (let value of ['one', 'two', 'three']) {
  console.log(value); // one, two, three
}



