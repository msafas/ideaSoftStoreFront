import { retry } from "@reduxjs/toolkit/query";
import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, {
  Defs,
  G,
  Path,
  Rect,
  ClipPath,
  Use,
  Pattern,
  Image,
  Polygon,
  TSpan,
  Circle,
  Text,
  Ellipse,
} from "react-native-svg";



const Icon = ({ iconName, onPress, color, height, width, size }) => {
  switch (iconName) {
    case "profile":
      return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path
            d="M10 17.5A7.5 7.5 0 012.5 10 7.5 7.5 0 0110 2.5a7.5 7.5 0 017.5 7.5 7.5 7.5 0 01-7.5 7.5z"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M11.326 6.383a1.875 1.875 0 11-2.652 2.651 1.875 1.875 0 012.652-2.651zM13.6 13.784a2.42 2.42 0 00-2.387-2.044H8.787a2.42 2.42 0 00-2.388 2.044"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "favorite":
      return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill={color} >
          <Path
            d="M13.083 3.333c2.642 0 4.417 2.484 4.417 4.8 0 4.692-7.367 8.534-7.5 8.534s-7.5-3.842-7.5-8.534c0-2.316 1.775-4.8 4.417-4.8 1.516 0 2.508.759 3.083 1.425.575-.666 1.567-1.425 3.083-1.425z"
            stroke={"#000"}
            strokeLinecap="round"
            strokeLinejoin="round"

          />
        </Svg>
      );
    case "basket":
      return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path
            d="M1.667 1.667V15A3.333 3.333 0 005 18.333h10A3.333 3.333 0 0018.333 15V1.667H1.667z"
            stroke="#000"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M14.167 5v1.667a4.167 4.167 0 01-8.334 0V5"
            stroke="#000"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "search":
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <Path
            d="M15.714 6.838a6.276 6.276 0 11-8.876 8.876 6.276 6.276 0 018.876-8.876M19 19l-3.29-3.29"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case "arrowLeft":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" >
          <Path
            d="M8.667 12.667L14 8 8.667 3.333M14 8H2"
            stroke="#3F174B"
            strokeWidth={1.33333}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "enter":
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" >
          <Path
            d="M12.25 5l9.5 7-9.5 7"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M2.25 19a7 7 0 017-7h12"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case "comment":
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" >
          <Path
            d="M4.259 16.593a8.996 8.996 0 113.147 3.148h0l-3.108.888a.751.751 0 01-.927-.927l.888-3.109h0z"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M12 13.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM7.5 13.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM16.5 13.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
            fill="#000"
          />
        </Svg>
      );
    case "recommend":
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" >
          <Path
            d="M8.25 15a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75z"
            stroke="#000"
            strokeWidth={1.5}
            strokeMiterlimit={10}
          />
          <Path
            d="M14.57 5.432A4.876 4.876 0 1115.893 15M1.499 18.506a8.252 8.252 0 0113.5 0M15.893 15a8.239 8.239 0 016.75 3.505"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case "share":
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" >
          <Path
            d="M18.234 14.969a3.513 3.513 0 00-2.827 1.428l-5.518-2.82a3.505 3.505 0 00-.115-2.31l5.784-3.474a3.51 3.51 0 002.676 1.238 3.52 3.52 0 003.516-3.515A3.52 3.52 0 0018.234 2a3.52 3.52 0 00-3.277 4.787L9.159 10.27a3.508 3.508 0 00-2.643-1.2A3.52 3.52 0 003 12.586a3.513 3.513 0 006.374 2.044l5.502 2.812A3.52 3.52 0 0018.234 22a3.52 3.52 0 003.516-3.516 3.52 3.52 0 00-3.516-3.515zm0-11.797a2.346 2.346 0 012.344 2.344 2.346 2.346 0 01-2.344 2.343 2.346 2.346 0 01-2.343-2.343 2.346 2.346 0 012.343-2.344zM6.516 14.93a2.346 2.346 0 01-2.344-2.344 2.346 2.346 0 012.344-2.344 2.346 2.346 0 012.343 2.344 2.346 2.346 0 01-2.343 2.344zm11.718 5.898a2.346 2.346 0 01-2.343-2.344 2.346 2.346 0 012.343-2.343 2.346 2.346 0 012.344 2.343 2.346 2.346 0 01-2.344 2.344z"
            fill="#000"
          />
        </Svg>
      );

    case "compare":
      return (
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" >
          <Path
            d="M17.5 3.75h-6.25V2.5A1.25 1.25 0 0010 1.25H2.5A1.25 1.25 0 001.25 2.5V15a1.25 1.25 0 001.25 1.25h6.25v1.25A1.25 1.25 0 0010 18.75h7.5a1.25 1.25 0 001.25-1.25V5a1.25 1.25 0 00-1.25-1.25zm-15 5.625h3.856l-1.612 1.619.881.881L8.75 8.75 5.625 5.625l-.881.881 1.612 1.619H2.5V2.5H10V15H2.5V9.375zM10 17.5v-1.25A1.25 1.25 0 0011.25 15V5h6.25v5.625h-3.856l1.612-1.619-.881-.881-3.125 3.125 3.125 3.125.881-.881-1.612-1.619H17.5V17.5H10z"
            fill="#515256"
          />
        </Svg>
      );

    case "down":
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={size}
          height={size}
          viewBox="0 0 451.847 451.847"
          xmlSpace="preserve"
          enableBackground="new 0 0 451.847 451.847"

        >
          <Path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" />
        </Svg>
      );

    case "up":
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 240.835 240.835"
          xmlSpace="preserve"
          enableBackground="new 0 0 240.835 240.835"
          width={size}
          height={size}
          fill={"white"}
        >
          <Path d="M129.007 57.819c-4.68-4.68-12.499-4.68-17.191 0L3.555 165.803c-4.74 4.74-4.74 12.427 0 17.155 4.74 4.74 12.439 4.74 17.179 0l99.683-99.406 99.671 99.418c4.752 4.74 12.439 4.74 17.191 0 4.74-4.74 4.74-12.427 0-17.155L129.007 57.819z" />
        </Svg>
      );



    default:
      break;
  }
};

export default Icon;
