import { Theme } from "@/providers/theme/Theme.interface";

const primary = {
  base: '#319AA9',
  medium: '#296775',
  dark: '#152F37',
}
const light: Theme = {
  text: '#000',
  background: '#fff',
  primary_base: primary['base'],
  primary_medium: primary['medium'],
  primary_dark: primary['dark'],
}

const dark: Theme = {
  text: '#fff',
  background: '#161616',
  primary_base: primary['base'],
  primary_medium: primary['medium'],
  primary_dark: primary['dark'],
}



export default { light, dark }

export function getThemeColor(colorSheme: 'light' | 'dark'): Theme {

  return colorSheme == 'dark' ? dark : light;

}
