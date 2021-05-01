import React from "react";
import { Conditions } from "../../types/weather";
import WeatherIconContainer from "./WeatherIconContainer";

type WeatherIconProps = {
  conditions: Conditions;
};

export const WeatherIcon: React.FC<WeatherIconProps> = ({ conditions }) => {
  const fillColor = "#7793e9";
  const strokeColor = "white";

  let iconEl: React.ReactNode;
  switch (conditions) {
    case Conditions.CLEAR:
      iconEl = (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;
    case Conditions.CLOUDS:
      iconEl = (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
    case Conditions.RAIN:
      iconEl = (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      );
      break;
    case Conditions.SNOW:
      iconEl = (
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      );
      break;
    default:
      iconEl = (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
  }

  return (
    <WeatherIconContainer
      fontFamily="Roboto, sans-serif"
      color={fillColor}
      stroke={strokeColor}
      size="md"
    >
      {iconEl}
    </WeatherIconContainer>
  );
};

export default WeatherIcon;
