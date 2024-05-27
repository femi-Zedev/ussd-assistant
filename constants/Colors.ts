import { Theme } from "@/providers/theme/Theme.interface";

const primary = {
  400: '#4DB6C3',
  500: '#319AA9',
}
const light: Theme = {
  text: '#000',
  background: '#fff',
  primary_base: primary[400]
}

const dark: Theme = {
  text: '#fff',
  background: '#161616',
  primary_base: primary[500]
}



export default { light, dark }

export function getThemeColor(colorSheme: 'light' | 'dark'): Theme {

  return colorSheme == 'dark' ? dark : light;

}
