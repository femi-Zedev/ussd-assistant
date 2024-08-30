import { Path, Svg, SvgProps } from "react-native-svg";

export function Clock(props: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
      <Path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C9.20261 22 6.67351 20.8514 4.85858 19C3.09032 17.1962 2 14.7254 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
