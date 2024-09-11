/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

function Button({ children, action, type = 'button' }) {
  const color = '#55a378';
  const hoverColor = 'blue';
  const activeColor = 'gray';

  const style = css`
    background-color: ${color};
    padding: 8px 16px;

    border-radius: 4px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.25px;
    line-height: 24px;
    margin: 10px;
    outline: none;
    text-align: center;
    text-transform: uppercase;

    &:hover,
    &:focus {
      background-color: ${hoverColor};
    }
    &:active {
      background-color: ${activeColor};
    }
  `;

  return (
    <button css={style} onClick={action} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  action: PropTypes.func,
  button: PropTypes.string,
  children: PropTypes.any,
};

export default Button;