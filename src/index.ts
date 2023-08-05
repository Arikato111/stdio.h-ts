export function printf(str: string, ...value: any[]) {
  let arr_str = str.split("");
  for (let i = 0; i < str.length - 1; i++) {
    let type_value = ["n", "s", "c", "d", "i"];
    if (arr_str[i] === "%" && type_value.includes(arr_str[i + 1])) {
      arr_str[i] = value[0];
      value.shift();
      arr_str[i + 1] = "";
    }
  }
  console.log(arr_str.join(""));
}

export type i8 = number;
export type i32 = number;
export type i16 = number;
