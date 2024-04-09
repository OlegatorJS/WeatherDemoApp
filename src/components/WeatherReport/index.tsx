/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Weather } from '@shared/interfaces/weather';
import WeatherAnimation, { WeatherAnimationType } from './WeatherAnimation';
import WeatherReportSummary from './WeatherReportSummary';

interface WeatherReportProps {
  weatherData: Weather;
}

const containerCss = css({
  color: 'white',
});

const cityNameCss = css({
  margin: 0,
  marginBottom: '10px',
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: '2em',
});

const WeatherReport = (props: WeatherReportProps) => {
  const { weatherData } = props;

  return (
    weatherData && (
      <div css={containerCss}>
        <h1 css={cityNameCss}>{weatherData.name.toUpperCase()}</h1>

        <WeatherAnimation
          color="white"
          type={WeatherAnimationType[weatherData.weather[0].main as any]}
          temperature={weatherData.main.temp}
          size={220}
        />

        <WeatherReportSummary
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
          pressure={weatherData.main.pressure}
        />
      </div>
    )
  );
};

export default WeatherReport;
