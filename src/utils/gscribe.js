// import GrooveUtils from './groove-utils';
/* global Abc:writable */

let grooveUtils;

const getGrooveUtils = () => {
  if (!grooveUtils ) {
    Abc = window.Abc;
    return grooveUtils = new window.GrooveUtils();
  }
  return grooveUtils;
};

export const generateSvgFromGScribe = (url, width) => getGrooveUtils().renderABCtoSVG(
  getGrooveUtils().createABCFromGrooveData(
    getGrooveUtils().getGrooveDataFromUrlString(url),
    width
  )
).svg;


