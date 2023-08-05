export function printf(str: string, ...value: any[]) {
  let arr_str = str.split("");
  for (let i = 0; i < str.length - 1; i++) {
    let value_conv;
    if (arr_str[i] === "%") {
      switch (arr_str[i + 1]) {
        case "i":
        case "d":
          value_conv = Math.floor(value[0]);
          break;
        case "f":
          value_conv = parseFloat(value[0]);
          break;
        case "s":
        case "c":
          value_conv = value[0].toString();
          break;
      }
      if (value_conv) {
        arr_str[i] = value_conv;
        value.shift();
        arr_str[i + 1] = "";
      }
    }
  }
  console.log(arr_str.join(""));
}

export type i8 = number;
export type i32 = number;
export type i16 = number;
export type int = number;
export type float = number;
export type double = number;

export type char = string;
