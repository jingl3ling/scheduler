const str_arr = ['hi', 'hi', 'jing','hi', 'hello','jing'];

function strArray(arr) {
  const ans = [];
  let count = 0;
  while (count < arr.length) {
    const temp = arr[0];
    arr.shift();
    if (arr.includes(temp) && !ans.includes(temp)) ans.push(temp);
    arr.push(temp);
    count++;
  }
  return ans;
}

console.log('ans',strArray(str_arr));