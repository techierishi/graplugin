import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  console.log('data', data);
  console.log('options', options);

  const styles = getStyles();
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <div className="courses-container">
        <div className="course">
          <div className="course-preview">
            <h6>{data.series[0].fields[0].values.get(0)}</h6>
            <h2>{data.series[0].fields[1].values.get(0)}</h2>
          </div>
          <div className="course-info">
            <h2>{data.series[0].fields[2].values.get(0)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      * {
        box-sizing: border-box;
      }

      body {
        background-image: linear-gradient(45deg, #7175da, #9790f2);
        font-family: 'Muli', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
      }

      .courses-container {
      }

      .course {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        max-width: 100%;
        margin: 20px;
        overflow: hidden;
        width: 700px;
      }

      .course h6 {
        opacity: 0.6;
        margin: 0;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      .course h2 {
        letter-spacing: 1px;
        margin: 10px 0;
      }

      .course-preview {
        background-color: #2a265f;
        color: #fff;
        padding: 30px;
        max-width: 250px;
      }

      .course-preview a {
        color: #fff;
        display: inline-block;
        font-size: 12px;
        opacity: 0.6;
        margin-top: 30px;
        text-decoration: none;
      }

      .course-info {
        padding: 30px;
        position: relative;
        width: 100%;
      }

      .progress-container {
        position: absolute;
        top: 30px;
        right: 30px;
        text-align: right;
        width: 150px;
      }

      .progress {
        background-color: #ddd;
        border-radius: 3px;
        height: 5px;
        width: 100%;
      }

      .progress::after {
        border-radius: 3px;
        background-color: #2a265f;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 5px;
        width: 66%;
      }

      .progress-text {
        font-size: 10px;
        opacity: 0.6;
        letter-spacing: 1px;
      }

      .btn {
        background-color: #2a265f;
        border: 0;
        border-radius: 50px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        color: #fff;
        font-size: 16px;
        padding: 12px 25px;
        position: absolute;
        bottom: 30px;
        right: 30px;
        letter-spacing: 1px;
      }

      /* SOCIAL PANEL CSS */
      .social-panel-container {
        position: fixed;
        right: 0;
        bottom: 80px;
        transform: translateX(100%);
        transition: transform 0.4s ease-in-out;
      }

      .social-panel-container.visible {
        transform: translateX(-10px);
      }

      .social-panel {
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 0 16px 31px -17px rgba(0, 31, 97, 0.6);
        border: 5px solid #001f61;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Muli';
        position: relative;
        height: 169px;
        width: 370px;
        max-width: calc(100% - 10px);
      }

      .social-panel button.close-btn {
        border: 0;
        color: #97a5ce;
        cursor: pointer;
        font-size: 20px;
        position: absolute;
        top: 5px;
        right: 5px;
      }

      .social-panel button.close-btn:focus {
        outline: none;
      }

      .social-panel p {
        background-color: #001f61;
        border-radius: 0 0 10px 10px;
        color: #fff;
        font-size: 14px;
        line-height: 18px;
        padding: 2px 17px 6px;
        position: absolute;
        top: 0;
        left: 50%;
        margin: 0;
        transform: translateX(-50%);
        text-align: center;
        width: 235px;
      }

      .social-panel p i {
        margin: 0 5px;
      }

      .social-panel p a {
        color: #ff7500;
        text-decoration: none;
      }

      .social-panel h4 {
        margin: 20px 0;
        color: #97a5ce;
        font-family: 'Muli';
        font-size: 14px;
        line-height: 18px;
        text-transform: uppercase;
      }

      .social-panel ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .social-panel ul li {
        margin: 0 10px;
      }

      .social-panel ul li a {
        border: 1px solid #dce1f2;
        border-radius: 50%;
        color: #001f61;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        text-decoration: none;
      }

      .social-panel ul li a:hover {
        border-color: #ff6a00;
        box-shadow: 0 9px 12px -9px #ff6a00;
      }

      .floating-btn {
        border-radius: 26.5px;
        background-color: #001f61;
        border: 1px solid #001f61;
        box-shadow: 0 16px 22px -17px #03153b;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        line-height: 20px;
        padding: 12px 20px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
      }

      .floating-btn:hover {
        background-color: #ffffff;
        color: #001f61;
      }

      .floating-btn:focus {
        outline: none;
      }

      .floating-text {
        background-color: #001f61;
        border-radius: 10px 10px 0 0;
        color: #fff;
        font-family: 'Muli';
        padding: 7px 15px;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        z-index: 998;
      }

      .floating-text a {
        color: #ff7500;
        text-decoration: none;
      }

      @media screen and (max-width: 480px) {
        .social-panel-container.visible {
          transform: translateX(0px);
        }

        .floating-btn {
          right: 10px;
        }
      }
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
