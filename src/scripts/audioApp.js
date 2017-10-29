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

// Use ranges when collecting highest frequency for song track with specific instrument
// i.e. loop through values of dataArrayAlt[low ... high] 
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
  Voice: {
    low: 300,
    high: 3400,
  }
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

  // Initialize function globals

  let source;
  let recallComputeFFT;

  // set up the different audio nodes we will use for the app
  const analyser = audioCtx.createAnalyser();
  analyser.minDecibels = -90;
  analyser.maxDecibels = -10;
  analyser.smoothingTimeConstant = 0.85;

  const musixSelect = document.getElementById('setting');

  // Throttle the requestAnimationFrame
  let stop = false;
  let frameCount = 0;
  let fps, fpsInterval, startTime, now, then, elapsed; 
  let start = Date.now();

  function startProcess(fps) {
    audioCtx.resume();
    stop = false;
    fpsInterval = 1000 / fps;
    then = window.performance.now();
    startTime = then;
    process();
  }

  function process() {
    const musixSetting = musixSelect.value;
    if (musixSetting === 'record') {
      record();
      ppToggle.id = 'active';
      ppToggle.innerHTML = 'Pause';
    } else if (musixSetting === 'recognition') {
      recognition();
      ppToggle.id = 'active';
      ppToggle.innerHTML = 'Pause';
    } else if (musixSetting === 'off') { console.log('song', song);
      ppToggle.id = 'inactive';
      ppToggle.innerHTML = 'Play';
      stop = true;
      audioCtx.suspend();
    }
  }
  
  let song; // Set outside so that song can be logged
  // Recording Song:
  function record() {
    let currentStanza = 0; // 1st stanza
    let timeTrack = 0;
    song = [[]];

    const low = Math.floor(ranges[sample['instrument']]['low'] / (44100 / 16384));
    const high = Math.ceil(ranges[sample['instrument']]['high'] / (44100 / 16384));

    // Average time of each stanza in milliseconds
    const stanzaLength = ((sample['length']['hours'] ? sample['length']['hours'] * 60 * 60 * 1000 : 0) + 
                          (sample['length']['minutes'] * 60 * 1000) + (sample['length']['seconds'] * 1000)) / sample['stanzas'];

    analyser.fftSize = 32768;
    const dataArrayAlt = new Uint8Array(analyser.frequencyBinCount);
    
    const computeFFT = (newtime) => {
      if (stop) return;

      recallComputeFFT = requestAnimationFrame(computeFFT); 

      now = newtime ? newtime : window.performance.now();
      elapsed = now - then;

      if (now - startTime > stanzaLength) {
        startTime = now;
        song.push([]);
        currentStanza += 1;
      }

      if (elapsed > fpsInterval) {

        then = now - (elapsed % fpsInterval);

        analyser.getByteFrequencyData(dataArrayAlt);

        let freq = 0;
        let loci = null;

        for (let i = low; i <= high; i += 1) {
          // Collect the highest frequency
          if (dataArrayAlt[i] > freq) {
            freq = dataArrayAlt[i];
            loci = i;
          }
        }
        // Include at this point in time on the current stanza the highest frequency
        console.log('strength', dataArrayAlt[loci])
        if (loci) song[currentStanza].push(loci);
      }
    };

    computeFFT();
  }


  // Use for playback recognition:
  function recognition() {
    // If we know the height of the music sheet, divide it by the number of stanzas for the average height:
    let stanzaHeight = sample['height'] / (sample['stanzas'] + 1); // Increase by one to negate padding added by top and bottom footer

    if (stanzaHeight) {
      // Okay!
    } else {
      // Figure out the height of either the music sheet or the top and bottom surrounding elements and subtract them from clientHeight.
      const clientHeight = window.document.body.clientHeight;
      stanzaHeight = null; // TODO: What is null?
    }

    analyser.fftSize = 32768;
    const dataArrayAlt = new Uint8Array(analyser.frequencyBinCount); // === 16384 --Nyquist formula

    let currentStanza = 0;
    let currentFreq = 0;
    let sampleLength = sample['spectrum'][currentStanza].length;

    const computeFFT = (newtime) => {
      if (stop) return;
    
      recallComputeFFT = requestAnimationFrame(computeFFT); 

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
              }, i * 5);
            }
          }, 2000);
        }
      }
    }
    computeFFT();
  }

  // main block for doing the audio recording/recognition
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
          startProcess(10);
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

  // event listeners to change visualize
  musixSelect.onchange = () => {
    window.cancelAnimationFrame(recallComputeFFT);
    startProcess(10);
  };

  // grab the mute button to use below

  const ppToggle = document.querySelector('.toggle-play-pause');

  function togglePlayPause() {
    const musixSetting = musixSelect.value;
    if (musixSetting === 'off') {
      return;
    }
    if (ppToggle.id === 'active') {
      ppToggle.id = 'inactive';
      ppToggle.innerHTML = 'Play';
      // Suspending the audio context doesn't lower the CPU overhead from the streaming..
      // How can we "suspend" the streaming without destroying the context to offload the CPU usage when not in use?
      // -- Setting Visualize Settings to "OFF" drops the CPU percentage down by 15%.
      // -- Essentially removing canvas will make the processing a lot smoother
      audioCtx.suspend();
    } else {
      ppToggle.id = 'active';
      ppToggle.innerHTML = 'Pause';
      audioCtx.resume();
    }
  }

  ppToggle.onclick = togglePlayPause;
  ppToggle.id = 'active';
}

export default app;