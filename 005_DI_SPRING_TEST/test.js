function solution(strValue) {
  let list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < strValue.length; i++) {
    num = parseInt(strValue[i]);
    list[num] += 1;
    console.log(list);
  }
  return list;
}
