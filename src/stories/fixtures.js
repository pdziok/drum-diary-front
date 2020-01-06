export const gScribeUrl = 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|---' +
  '-------------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Sticki' +
  'ngs=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|';

export const longDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lorem at turp' +
  'is auctor auctor. Nunc dapibus et leo quis interdum. Etiam elementum eu lacus in faucibus. Duis volutpat sed elit ' +
  'nec pellentesque. Cras malesuada, nisl eu volutpat euismod, nibh est posuere nulla, et malesuada ante purus sit am' +
  'et ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a' +
  'ccumsan ultricies erat eu posuere. Fusce dictum sem quis efficitur lacinia. Mauris at est lorem. Ut laoreet lacus ' +
  'id vestibulum rhoncus. In malesuada urna tellus, quis fringilla dui pellentesque sed. Quisque quis lacus justo.';

export const paradiddle = {
  id: '1',
  name: 'Paradiddle',
  gScribe: { url: 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|---' +
    '-------------|----------------|&S=|oooooooooooooooo|oooooooooooooooo|&K=|----------------|----------------|&Sticki' +
    'ngs=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|' },
  description: 'Use moeller for the accented notes'
};

export const singles = {
  id: '2',
  name: 'Singles',
  gScribe: {
    url: 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|---' +
    '-------------|&S=|oooooooooooooooo|&K=|----------------|&Sticki' +
    'ngs=|RLRLRLRLRLRLRLRL|'
  },
  description: 'Keep them equal'
};

export const doubles = {
  id: '3',
  name: 'Doubles',
  gScribe: {
    url: 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|---' +
    '-------------|&S=|oooooooooooooooo|&K=|----------------|&Sticki' +
    'ngs=|RRLLRRLLRRLLRRLL|'
  },
  description: 'Make sure the second stroke is the same as first'
};

export const accentedParadiddles = {
  ...paradiddle,
  id: '4',
  name: 'Accented Paradiddles',
  gScribe: { url: gScribeUrl },
  description: longDescription
};
