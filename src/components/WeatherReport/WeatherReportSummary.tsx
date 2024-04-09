/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { convertMPSToKMH } from '@utils/converters';
import { mapWindIcon } from '@utils/mappers';
import WeatherIconText from './WeatherIconText';

interface WeatherReportSummaryProps {
  humidity: number;
  windSpeed: number;
  pressure: number;
}

const mainContainerCss = css({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
});

const windAndHumidityContainerCss = css({
  borderTop: '1px solid white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: '200px',
});
const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const WeatherReportSummary = (props: WeatherReportSummaryProps) => {
  const { humidity, windSpeed, pressure } = props;
  const windSpeedInKMH = convertMPSToKMH(windSpeed);

  return (
    <div css={mainContainerCss}>
      <div css={windAndHumidityContainerCss}>
        <WeatherIconText value={humidity} unit="%" icon="wi wi-raindrop" label="Вологість:" />
        <WeatherIconText
          value={windSpeedInKMH}
          unit="м/с"
          icon={mapWindIcon(windSpeedInKMH)}
          label="Вітер:"
        />
        <WeatherIconText value={pressure} unit="г/Па" icon="wi wi-alien" label="Тиск:" />
        <span>Актуально на {`${day}.${month}.${year}`}</span>
      </div>
    </div>
  );
};

export default WeatherReportSummary;
