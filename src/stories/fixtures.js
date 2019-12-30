export const gScribeUrl = 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|---' +
  '-------------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Sticki' +
  'ngs=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|';

export const longDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lorem at turp' +
  'is auctor auctor. Nunc dapibus et leo quis interdum. Etiam elementum eu lacus in faucibus. Duis volutpat sed elit ' +
  'nec pellentesque. Cras malesuada, nisl eu volutpat euismod, nibh est posuere nulla, et malesuada ante purus sit am' +
  'et ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a' +
  'ccumsan ultricies erat eu posuere. Fusce dictum sem quis efficitur lacinia. Mauris at est lorem. Ut laoreet lacus ' +
  'id vestibulum rhoncus. In malesuada urna tellus, quis fringilla dui pellentesque sed. Quisque quis lacus justo.';

export const simpleExercise = {
  id: '1',
  name: 'Paradiddle',
  gScribe: { url: gScribeUrl },
  description: 'Use moeller for the accented notes'
};

export const exerciseWithLongDescription = {
  ...simpleExercise,
  description: longDescription
};
