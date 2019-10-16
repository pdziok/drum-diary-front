const gScribeUrl = 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------' +
  '------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RL' +
  'RRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|';
const longDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lorem at turpis auct' +
  'or auctor. Nunc dapibus et leo quis interdum. Etiam elementum eu lacus in faucibus. Duis volutpat sed elit nec pel' +
  'lentesque. Cras malesuada, nisl eu volutpat euismod, nibh est posuere nulla, et malesuada ante purus sit amet ante' +
  '. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur accumsan' +
  ' ultricies erat eu posuere. Fusce dictum sem quis efficitur lacinia. Mauris at est lorem. Ut laoreet lacus id vest' +
  'ibulum rhoncus. In malesuada urna tellus, quis fringilla dui pellentesque sed. Quisque quis lacus justo.';

module.exports = {
  error: null,
  data: [
    {
      id: '1',
      startedAt: '2019-08-10T10:10:10Z',
      finishedAt: '2019-08-10T10:20:10Z',
      bpm: '100-130',
      exercise: {
        id: '1',
        name: 'Paradiddle',
        description: 'Use moeller for the accented notes',
        youtube: {
          videoId: 'kPio-XnchYY'
        }
      }
    },
    {
      id: '2',
      startedAt: '2019-08-10T10:20:10Z',
      finishedAt: '2019-08-10T10:30:10Z',
      bpm: '100-130',
      notes: 'I don\'t like playing that',
      exercise: {
        id: '2',
        name: 'Paradiddle',
        description: 'Use moeller for the accented notes',
        gScribe: { url: gScribeUrl }
      }
    },
    {
      id: '3',
      startedAt: '2019-08-12T10:20:10Z',
      finishedAt: '2019-08-12T10:30:10Z',
      bpm: '100-130',
      notes: 'Much better than 2 days ago',
      exercise: {
        id: '2',
        name: 'Paradiddle',
        description: longDescription,
        gScribe: { url: gScribeUrl }
      }
    },
  ]
};


