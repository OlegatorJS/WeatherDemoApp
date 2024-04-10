/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { roundOffValue } from '../../shared/utils/converters';

interface TemperatureProps {
  value: number;
}

const temperatureCss = css({
  margin: 0,
  fontSize: '80px',
  borderTopColor: 'white',
  fontFamily: "'Fjalla One', sans-serif",
});

const Temperature = (props: TemperatureProps) => {
  const { value } = props;
  return <h1 css={temperatureCss}>{`${roundOffValue(value)}\u00B0`}</h1>;
};

export default Temperature;
