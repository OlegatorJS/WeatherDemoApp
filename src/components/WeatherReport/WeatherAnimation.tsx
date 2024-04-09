/** @jsxImportSource @emotion/react */
import React from 'react';
import Skycons, { SkyconsType } from 'react-skycons';
import Temperature from '@components/WeatherReport/Temperature';
import { css } from '@emotion/react';

interface WeatherAnimationProps {
  color: string;
  type: any;
  size: number;
  resizeClear?: boolean;
  className?: string;
  temperature: number;
}

const containerCss = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const WeatherAnimation = (props: WeatherAnimationProps) => {
  const { color, type, size, resizeClear, className, temperature } = props;

  return (
    <div css={containerCss}>
      <Skycons
        className={className}
        color={color}
        type={type}
        size={size}
        resizeClear={resizeClear}
      />
      <Temperature value={temperature} />
    </div>
  );
};

WeatherAnimation.defaultProps = {
  className: '',
  resizeClear: true,
};

export enum WeatherAnimationType {
  Clear = SkyconsType.CLEAR_DAY,
  Clouds = SkyconsType.CLOUDY,
  Tornado = SkyconsType.WIND,
  Thunderstorm = SkyconsType.RAIN,
  Rain = SkyconsType.RAIN,
  Drizzle = SkyconsType.SLEET,
  Snow = SkyconsType.SNOW,
  Smoke = SkyconsType.FOG,
  Haze = SkyconsType.FOG,
  Dust = SkyconsType.FOG,
  Fog = SkyconsType.FOG,
}

export default React.memo(WeatherAnimation);
