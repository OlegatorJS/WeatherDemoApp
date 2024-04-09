/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { roundOffValue } from '@utils/converters';
import Icon from '@components/Icon';

interface WeatherIconTextProps {
  value: string | number;
  unit: string;
  icon: string;
  label: string;
}

const containerCss = css({
  display: 'flex',
  alignItems: 'center',
});

const valueCss = css({
  fontSize: '36px',
  fontFamily: "'Fjalla One', sans-serif",
  marginLeft: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const unitCss = css({
  fontSize: '16px',
});

const WeatherIconText = (props: WeatherIconTextProps) => {
  const { value, unit, icon, label } = props;

  return (
    <div css={containerCss}>
      <Icon name={icon} />
      <div css={valueCss}>
        <span css={unitCss}>{label}</span>
        {roundOffValue(value as number)}
        <span css={unitCss}>{unit}</span>
      </div>
    </div>
  );
};

export default WeatherIconText;
