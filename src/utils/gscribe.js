let grooveUtils;

const getGrooveUtils = () => {
  if (!grooveUtils ) {
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


