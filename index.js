'use strict';
const material = require('material-colors');
const chroma = require('chroma-js');

const backgroundColor = material.grey['900'];
const foregroundColor = chroma.mix(material.grey['50'], material.blueGrey['50']);

const colors = {
      black: backgroundColor,
      red: material.red['400'],
      green: material.lime.a400,
      yellow: material.amber['200'],
      blue: material.lightBlue['400'],
      magenta: material.pink['400'],
      cyan: material.teal.a400,
      white: foregroundColor,
      lightBlack: material.blueGrey['600'],
      lightRed: material.red.a200,
      lightGreen: material.lightGreen.a200,
      lightYellow: material.amber.a100,
      lightBlue: material.lightBlue.a200,
      lightMagenta: material.pink.a200,
      lightCyan: material.teal.a200,
      lightWhite: material.white,
};

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: foregroundColor,
    colors,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
      }
    `
  })
);
