/* eslint-disable */
const sample = {
  artist: 'Frédéric Chopin',
  name: 'Nocturne Op.9 No.2',
  length: {
    hour: 0,
    minutes: 4,
    seconds: 30,
  },
  height: 4769,
  stanzas: 20,
  notesPerStanza: null,
  instrument: 'Piano',
  spectrum: [
    [603,603,603,603,603,105,266,603,348,347,347,347,347,347,347,347,347,347,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,1041,1041,1042,1042,1042,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,463,463,463,463,463,463,463,463,463,463,463,463,463,347,347,347,347,347,347,347,583,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,389,390,390,390,780,780,780,780,780,780,780,780,780,780],
    [780,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,583,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,583,583,583,584,584,584,584,584,584,584,584,584,584,584,875,875,875,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,389,389,389,389,389,389,389,389,389,389,966,966,966,101,966,102,966,103,966,104,347,105,347,106,347,107,347,108,347,109,347,110,347,111,347,112,347,113,876,114,876,115,876,116,876,117,876,118,876,119,779,120,779,121,779,122,779,123,780,124,780,125,780,126,780,127,695,128,695,129,695,130,695,131,695,132,583,133,584,134,584,135,584],
    [584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,463,463,463,463,463,463,463,347,347,347,347,347,347,583,583,583,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,583,583,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,583,584,584,463,463,463,463,463,463,463,463,463,463,100,463,101,463,102,463,103,463,104,463,105,463,106,463,107,463,108,463,109,463,110,463,111,463,112,463,113,463,114,463,115,463,116,583,117,583,118,583,119,584,120,584,121,584,122,584,123,584,124,584,125,584,126,584,127,584,128,584,129,584,130,521,131,521,132,619,133,619,134,584],
    [584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,583,583,583,583,583,583,583,583,583,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,389,389,389,389,389,389,389,389,389,389,389,583,584,584,584,584,584,584,347,347,347,347,347,347,347,347,876,876,876,876,876],
    [876,876,876,779,779,780,780,780,780,780,780,694,695,695,695,620,620,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,437,436,436,436,436,436,462,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,520,520,520,520,520,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,520,520,573,573,584,584,584,584,584,584,584,584,584,584,389,389,389,389,389,389,389,389,389,389,389],
    [389,389,389,389,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,347,347,347,347,347,347,347,347,347,347,578,578,578,578,578,578,578,694,694,694,694,694,695,695,695,695,695,695,695,412,412,583,583,583,583,583,656,656,656,656,656,656,656,656,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,437,437,437,437],
    [437,437,437,437,437,437,437,437,437,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,437,437,437,437,437,437,437,437,437,437,389,389,389,389,437,437,875,875,875,437,347,347,347,347,347,347,347,347,735,735,735,735,735,735,735,735,735,735,735,735,735,735,735,735,389,389,780,780,780,780,780,780,437,437,437,437,437,437,437,437,437,437,437,437,437,437,582,583,583,583,583,583,583,583,583,583,583,583,584,584,584,584,584,583,583,583,583,583,583,583,583,584,347,347,347,347,347,347,437,437,583,583,584,584,584,584,584,584,584,584],
    [584,584,584,584,584,584,584,584,584,584,584,584,462,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,583,583,583,583,584,584,584,584,584,584,584,583,583,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,583,583,583,583,583,583,583,583,584,463,463],
    [463,463,463,463,463,463,463,463,463,463,463,463,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,389,347,347,347,347,347,347,347,876,876,876,876,877,877,877,877,877,877,877,877,877,877,877,877,826,779,779,780,780,780,780,780,780,655,655,655,656,656,656,656,655,875,875,875,584,584,584,584,584,584,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,578,578,578,578,436,436,436,436,436,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,584,584,584,584,584,584,584],
    [584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,389,389,389,389,389,389,389,389,389,389,572,572,572,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,347,347,347,347,347,347,347,347,347,347,583,583,583,583,583,583,929,929,695,695,695,695,695,695,695,695,695,695],
    [695,695,694,694,695,695,694,655,655,656,656,656,656,656,656,656,656,656,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,656,656,437,437,437,437,437,437,437,437,436,436,436,437,437,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,437,437,437,437,437,437,437,437,780,780,780,780,780,780,437,437,437,437,437,437,347,347,347,347,347,347,347,735,735,735,736,736,367,367,368,368,368,780,780,780,780,780,780,780,780,780,780,780,437,437,437,437,437,437,437,437,437,437,876,583,583,583,583,583,583,583,584,584,584,584,584],
    [584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,347,347,347,1244,876,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,584,584,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584],
    [584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,462,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,389,389,389,389,389,389,389,389,389,389,389,389,584,584,584,347,347,347,347,347,347,347,876,876,876,876,877,877,877,877,877,877,780,780,780,780,780,780,780,780,780,780,780,780,694,695,695,695,656,656,656,656,655,655,655,655,655,656,656,655,436,436,436,583,584,584,584,584,584,584,584,584,584,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,578,578],
    [578,578,578,578,578,578,578,578,578,583,583,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,1040,1040,1040,463,463,463,463,463,463,463,463,463,463,463,583,583,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,462,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,520,462,462,462,462,463,463,463,463,463,463,463,463,583,583,583,583,584,584,584,584,584,584,583,463,463,463,463,463,463,463],
    [463,463,463,463,463,463,463,876,876,877,877,779,779,780,780,780,780,695,695,695,695,695,695,695,695,655,655,656,656,655,655,656,656,656,656,656,656,656,656,656,656,656,656,656,656,463,463,463,463,463,463,463,463,463,462,462,462,462,462,462,462,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,1042,1042,1042,1042,1042,929,929,929,929,780,780,780,780,780,780,780,780,695,694,694,694,694,694,694,694,656,656,656,656,656,656,656,656,656,656,656,656,656,656,656,618,618,583,583,583,584,584,584,584,584,584,584,584,584,584,584],
    [584,584,584,584,584,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,578,578,578,578,578,578,578,578,578,578,578,578,578,578,578,578,578,578,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,928,1042,1042,463,463,463,463,463,463,463,463,462,462,462,462,462,462,462,462,463,463,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,578,578,578,583,583,583,583,583,462,462,462,463,463,545,545,545,545,578,578,578,578,578,585,585,584,584,583,583,463,463],
    [463,463,929,929,929,929,929,929,929,1042,1042,1042,1042,1042,1042,1042,1042,1042,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,1764,1764,1764,1570,780,780,780,780,1479,1479,1479,1479,1479,695,695,695,695,695,655,655,655,655,655,1242,1242,584,584,584,584,584,584,584,584,584,584,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1476,1476,1476,1476,1476,1476,1476,1476,1476,1476,1476,1476,437,437,437,437,437,437,437,437,437,437],
    [437,437,437,437,437,437,694,694,695,695,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1396,1570,1569,1569,1480,1479,1479,1479,1479,1479,1569,1569,1569,1479,1479,1479,1568,1568,1568,1568,1568,1568,1568,1568,1568,1568,1568,1568,1568,1568,1568,1569,1569,1569,1569,1568,1568,1568,1396,1396,1396,1396,1396,1396,1479,1479,1479,1479,1479,1479,1479,1479,1479,1569,1569,1569,1569,1569,1569,1568,1568,1568,1568,1568,1568,1568,1568,1568,1396,1396,1396,1396,1396,1396,1396,1396,1396,1766,1766,1766,1766,1766,1766,1766,1766,1766,1766,1569,1569,1569,1569,1569,1568,1568,1568,1568,1315,1315,1243,1242,1242,1242,1242],
    [1242,1042,1042,1042,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,1043,780,695,694,694,694,694,694,694,694,694,694,694,694,695,389,389,389,389,389,389,389,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,463,347,347,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,583,583,583,584,584,584,584,584,584,584,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584,584],
    [584,584,584,584,584,584,584,584,928,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,929,584,584,584,584,584,584,584,584,929,929,928,928,928,928,928,928,928,928,463,584,584,584,584,231,231,231,231,231,231,231,231,463,463,463,463,231,231,231,231,231,231,231,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,251,251,251],
  ]
};

const ranges = {
  Soprano: {
    low: 250,
    high: 1500,
  },
  Contralto: {
    low: 200,
    high: 1000,
  },
  Tenor: {
    low: 100,
    high: 600,
  },
  Baritone: {
    low: 80,
    high: 450,
  },
  Bass: {
    low: 50,
    high: 450,
  },
  Piccolo: {
    low: 500,
    high: 4500,
  },
  Flute: {
    low: 250,
    high: 2200,
  },
  Oboe: {
    low: 200,
    high: 2000,
  },
  'English Horn': {
    low: 200,
    high: 1000,
  },
  'Bb Clarinet': {
    low: 150,
    high: 2000,
  },
  'Bass Clarinet': {
    low: 60,
    high: 800,
  },
  'Alto Saxophone': {
    low: 150,
    high: 1000,
  },
  Bassoon: {
    low: 50,
    high: 700,
  },
  Contrabassoon: {
    low: 25,
    high: 150,
  },
  'Bb Trumpet': {
    low: 150,
    high: 1000,
  },
  'French Horn': { // "In F" - Difference b/w F French Horns and B Flat French Horns
    low: 55,
    high: 800,
  },
  'Tenor Trombone': {
    low: 70,
    high: 600,
  },
  'Bass Trombone': { // "In F"
    low: 55,
    high: 450,
  },
  Tuba: {
    low: 45,
    high: 450,
  },
  'Small Kettle Drum': {
    low: 100,
    high: 250,
  },
  'Medium Kettle Drum': {
    low: 90,
    high: 200,
  },
  'Large Kettle Drum': {
    low: 80,
    high: 150,
  },
  Harp: {
    low: 30,
    high: 3500,
  },
  Guitar: {
    low: 70,
    high: 1000,
  },
  Violin: {
    low: 200,
    high: 4000,
  },
  Viola: {
    low: 150,
    high: 1500,
  },
  Cello: {
    low: 60,
    high: 1000,
  },
  Bass: {
    low: 30,
    high: 250,
  },
  Piano: {
    low: 1,
    high: 18000,
  },
}

const app = () => {

  // fork getUserMedia for multiple browser versions, for those
  // that need prefixes

  // Copied from MDN: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia
  // This is a legacy method. 
  // Please use the newer navigator.mediaDevices.getUserMedia() instead. 
  // While technically not deprecated, this old callback version is marked as such, 
  // since the specification strongly encourages using the newer promise returning version.

  // TODO: Replace the deprecated method of asking for media permission
  // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  // To update the media reference below.

  navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia);

  // set up forked web audio context, for multiple browsers
  // window. is needed otherwise Safari explodes

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const voiceSelect = document.getElementById('voice');
  let source;
  // let stream;

  // set up the different audio nodes we will use for the app

  const analyser = audioCtx.createAnalyser();
  analyser.minDecibels = -90;
  analyser.maxDecibels = -10;
  analyser.smoothingTimeConstant = 0.85;

  // const distortion = audioCtx.createWaveShaper();
  // const gainNode = audioCtx.createGain();
  // const biquadFilter = audioCtx.createBiquadFilter();
  // const convolver = audioCtx.createConvolver();

  // distortion curve for the waveshaper, thanks to Kevin Ennis
  // http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion

  function makeDistortionCurve(amount) {
    const k = typeof amount === 'number' ? amount : 50;
    const nSamples = 44100;
    const curve = new Float32Array(nSamples);
    const deg = Math.PI / 180;
    let i = 0;
    let x = null;
    for (; i < nSamples; i += 1) {
      x = (i * 2) / (nSamples - 1);
      curve[i] = 3 + ((k * x * 20 * deg) / (Math.PI + (k * Math.abs(x))));
    }
    return curve;
  }

  // grab audio track via XHR for convolver node

  let soundSource;
  let concertHallBuffer;

  // const ajaxRequest = new XMLHttpRequest();

  // ajaxRequest.open('GET', 'https://mdn.github.io/voice-change-o-matic/audio/concert-crowd.ogg', true);

  // ajaxRequest.responseType = 'arraybuffer';


  // ajaxRequest.onload = () => {
  //   const audioData = ajaxRequest.response;

  //   audioCtx.decodeAudioData(audioData, (buffer) => {
  //     concertHallBuffer = buffer;
  //     soundSource = audioCtx.createBufferSource();
  //     soundSource.buffer = concertHallBuffer;    
  //     soundSource.connect(audioCtx.destination);
  //     // soundSource.loop = true;
  //     soundSource.start();
  //   }, (e) => { console.log(`Error with decoding audio data ${e.err}`); });


  // };

  // ajaxRequest.send();

  // set up canvas context for visualizer

  const canvas = document.querySelector('.visualizer');
  const canvasCtx = canvas.getContext('2d');

  const intendedWidth = document.querySelector('.audio-wrapper').clientWidth;

  canvas.setAttribute('width', intendedWidth);

  const visualSelect = document.getElementById('visual');

  let drawVisual;

  // function voiceChange() {
  //   distortion.oversample = '4x';
  //   biquadFilter.gain.value = 0;
  //   convolver.buffer = undefined;

  //   const voiceSetting = voiceSelect.value;
  //   console.log(voiceSetting);

  //   if (voiceSetting === 'distortion') {
  //     distortion.curve = makeDistortionCurve(400);
  //   } else if (voiceSetting === 'convolver') {
  //     convolver.buffer = concertHallBuffer;
  //   } else if (voiceSetting === 'biquad') {
  //     biquadFilter.type = 'lowshelf';
  //     biquadFilter.frequency.value = 1000;
  //     biquadFilter.gain.value = 25;
  //   } else if (voiceSetting === 'off') {
  //     console.log('Voice settings turned off');
  //   }
  // }
/* <div>
  <label for="voice">Voice setting</label>
  <select id="voice" name="voice">
  <option value="distortion">Distortion</option>
  <option value="convolver">Reverb</option>
  <option value="biquad">Bass Boost</option>
  <option value="off" selected>Off</option>
  </select>
</div> */

  // Throttle the requestAnimationFrame
  let stop = false;
  let frameCount = 0;
  let fps, fpsInterval, startTime, now, then, elapsed; 
  let start = Date.now();

  function startAnimating(fps) {
    stop = false;
    fpsInterval = 1000 / fps;
    then = window.performance.now();
    startTime = then;
    console.log(startTime);
    visualize();
  }


  

  // // Recording Song:
  // function visualize() {
    
  //   const WIDTH = canvas.width;
  //   const HEIGHT = canvas.height;

  //   const song = [[]];
  //   let currentStanza = 0; // 1st stanza
  //   let timeTrack = 0;
    
  //   const low = Math.floor(ranges[sample['instrument']]['low'] / (44100 / 16384));
  //   const high = Math.ceil(ranges[sample['instrument']]['high'] / (44100 / 16384));

  //   // Average time of each stanza in milliseconds
  //   const stanzaLength = ((sample['length']['hours'] ? sample['length']['hours'] * 60 * 60 * 1000 : 0) + 
  //                         (sample['length']['minutes'] * 60 * 1000) + (sample['length']['seconds'] * 1000)) / sample['stanzas'];


  //   const visualSetting = visualSelect.value;

  //   if (visualSetting === 'sinewave') {
  //     // analyser.fftSize = 2048;
  //     // const bufferLength = analyser.fftSize;
  //     // console.log(bufferLength);
  //     // const dataArray = new Uint8Array(bufferLength);

  //     // canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

  //     // const draw = () => {
  //     //   drawVisual = requestAnimationFrame(draw);

  //     //   analyser.getByteTimeDomainData(dataArray);

  //     //   canvasCtx.fillStyle = 'rgb(200, 200, 200)';
  //     //   canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  //     //   canvasCtx.lineWidth = 2;
  //     //   canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

  //     //   canvasCtx.beginPath();

  //     //   const sliceWidth = (WIDTH * 1.0) / bufferLength;
  //     //   let x = 0;

  //     //   for (let i = 0; i < bufferLength; i += 1) {
  //     //     const v = dataArray[i] / 128.0;
  //     //     const y = (v * HEIGHT) / 2;

  //     //     if (i === 0) {
  //     //       canvasCtx.moveTo(x, y);
  //     //     } else {
  //     //       canvasCtx.lineTo(x, y);
  //     //     }

  //     //     x += sliceWidth;
  //     //   }

  //     //   canvasCtx.lineTo(canvas.width, canvas.height / 2);
  //     //   canvasCtx.stroke();
  //     // };

  //     // draw();
  //   } else if (visualSetting === 'frequencybars') {
  //     analyser.fftSize = 32768;
  //     const bufferLengthAlt = analyser.frequencyBinCount; // === 16384 --Nyquist formula
  //     const dataArrayAlt = new Uint8Array(bufferLengthAlt);

  //     canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

  //     const drawAlt = (newtime) => {
  //       if (stop) return;

  //       drawVisual = requestAnimationFrame(drawAlt); 

  //       now = newtime ? newtime : window.performance.now();
  //       elapsed = now - then;

        
  //       if (now - startTime > stanzaLength) {
  //         startTime = now;
  //         song.push([]);
  //         currentStanza += 1;
  //       }

  //       if (elapsed > fpsInterval) {

  //         then = now - (elapsed % fpsInterval);

  //         analyser.getByteFrequencyData(dataArrayAlt);

  //         // canvasCtx.fillStyle = 'rgb(0, 0, 0)';
  //         // canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  //         // const barWidth = (WIDTH / bufferLengthAlt) * 2.5;
  //         // let barHeight;
  //         // let x = 0;
  //         let freq = 0;
  //         let loci = null;

  //         for (let i = low; i <= high; i += 1) {
  //           // barHeight = dataArrayAlt[i];

  //           // canvasCtx.fillStyle = `rgb(${(barHeight + 100)},50,50)`;
  //           // canvasCtx.fillRect(x, (HEIGHT - barHeight) / 2, barWidth, barHeight / 2);

  //           // x += barWidth + 1;
            
  //           // Add every frequency into a sum and push this "beat" into song array
  //           if (dataArrayAlt[i] > freq) {
  //             freq = dataArrayAlt[i];
  //             loci = i;
  //           }
  //         }
  //         // console.log(dataArrayAlt)

          
  //         // console.log(freq, chopinSeq[currentTime]);
  //         // if (freq <= chopinSeq[currentTime] + 250 && freq >= chopinSeq[currentTime] - 250) {
  //         //   window.scrollTo(0, window.pageYOffset + 10);
  //         //   currentTime++;
  //         // } else {
  //         //   for (let i = Math.max(0, currentTime - 10); i < Math.max(currentTime + 5, currentTime + 10); i++) {
  //         //     if (freq <= chopinSeq[i] + 250 && freq >= chopinSeq[i] - 250) {
  //         //       window.scrollTo(0, window.pageYOffset + 10);
  //         //       currentTime = i;
  //         //       break;
  //         //     }
  //         //   }
  //         // }
  //         if (loci) song[currentStanza].push(loci);
  //       }
  //     };

  //     drawAlt();
  //   } else if (visualSetting === 'off') {
  //     console.log('song:', song)
  //     canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
  //     canvasCtx.fillStyle = 'red';
  //     canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  //   }
  // }


  // Use for playback recognition:
  function visualize() {
    // Figure out the height of either the music sheet or the top and bottom surrounding elements and subtract them from clientHeight.
    const clientHeight = window.document.body.clientHeight;
    // Otherwise if we know the height, assign it to sheetHeight:
    const stanzaHeight = sample['height'] / (sample['stanzas'] + 1); // Increase by one to negate padding added by top and bottom footer

    const visualSetting = visualSelect.value;

    if (visualSetting === 'frequencybars') {
      analyser.fftSize = 32768;
      const bufferLengthAlt = analyser.frequencyBinCount; // === 16384 --Nyquist formula
      const dataArrayAlt = new Uint8Array(bufferLengthAlt);

      let currentStanza = 0;
      let currentFreq = 0;
      let sampleLength = sample['spectrum'][currentStanza].length;

      const drawAlt = (newtime) => {
        if (stop) return;
      
        drawVisual = requestAnimationFrame(drawAlt); 

        now = newtime ? newtime : window.performance.now();
        elapsed = now - then;

        if (elapsed > fpsInterval) {

          then = now - (elapsed % fpsInterval);
          
          analyser.getByteFrequencyData(dataArrayAlt);

          let freq = sample['spectrum'][currentStanza][currentFreq];

          if (dataArrayAlt[freq] > 100) {
            currentFreq += 1;
          } else {
            for (let i = 0; i < sampleLength; i++) {
              if (dataArrayAlt[sample['spectrum'][currentStanza][i]] > 100) {
                currentFreq += 1;
                break;
              }
            }
          }
          if (currentFreq >= sampleLength) {
            currentStanza += 1;
            currentFreq = 0;
            sampleLength = sample['spectrum'][currentStanza].length;
            if (currentStanza === sample['spectrum'].length) {
              stop = true;
              return;
            }
            // Start scrolling past previous stanza
            // -- delay this process - late is better than early!
            setTimeout(() => {
              for (let i = 0; i < stanzaHeight; i++) {
                setTimeout(() => {
                  window.scrollTo(0, window.pageYOffset + 1);
                }, 10 + (i * 5));
              }
            }, 1500);
          }
        }
      }
      drawAlt();
    } else if (visualSetting === 'off') {
        // stop music recognition
    }
  }

  // main block for doing the audio recording

  const initializeRecording = () => {
    if (navigator.getUserMedia) {
      console.log('getUserMedia supported.');
      navigator.getUserMedia(
        // constraints - only audio needed for this app
        {
          audio: true,
        },

        // Success callback
        (stream) => {
          source = audioCtx.createMediaStreamSource(stream);
          source.connect(analyser);
          // source.connect(audioCtx.destination);
          // analyser.connect(distortion);
          // distortion.connect(biquadFilter);
          // biquadFilter.connect(convolver);
          // convolver.connect(gainNode);
          // gainNode.connect(audioCtx.destination);

          startAnimating(10);
          // voiceChange();
        },

        // Error callback
        (err) => {
          console.log(`The following gUM error occured: ${err}`);
        },
      );
    } else {
      console.log('getUserMedia not supported on your browser!');
    }
  }

  // TODO: This function call will eventually be controlled by a button click

  initializeRecording();

  // event listeners to change visualize and voice settings

  visualSelect.onchange = () => {
    window.cancelAnimationFrame(drawVisual);
    startAnimating(10);
  };

  // voiceSelect.onchange = () => {
  //   voiceChange();
  // };

  // grab the mute button to use below

  const mute = document.querySelector('.mute');

  function voiceMute() {
    if (mute.id === 'active') {
      // gainNode.gain.value = 1;
      mute.id = 'muted';
      mute.innerHTML = 'Play';
      // Suspending the audio context doesn't lower the CPU overhead from the streaming..
      // How can we "suspend" the streaming without destroying the context to offload the CPU usage when not in use?
      // -- Setting Visualize Settings to "OFF" drops the CPU percentage down by 15%.
      // -- Essentially removing canvas will make the processing a lot smoother
      audioCtx.suspend();
    } else {
      // gainNode.gain.value = 0;
      mute.id = 'active';
      mute.innerHTML = 'Pause';
      audioCtx.resume();
    }
  }

  mute.onclick = voiceMute;
  mute.id = 'active';
}

export default app;