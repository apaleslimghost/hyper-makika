'use strict';
const colors = require('material-colors');
const chroma = require('chroma-js');

const backgroundColor = colors.grey['900'];
const foregroundColor = chroma.mix(colors.grey['50'], colors.blueGrey['50']);

const colors = {
      black: backgroundColor,
      red: colors.red['400'],
      green: colors.lime.a400,
      yellow: colors.amber['200'],
      blue: colors.lightBlue['400'],
      magenta: colors.pink['400'],
      cyan: colors.teal.a400,
      white: foregroundColor,
      lightBlack: colors.blueGrey['600'],
      lightRed: colors.red.a200,
      lightGreen: colors.lightGreen.a200,
      lightYellow: colors.amber.a100,
      lightBlue: colors.lightBlue.a200,
      lightMagenta: colors.pink.a200,
      lightCyan: colors.teal.a200,
      lightWhite: colors.white,
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
