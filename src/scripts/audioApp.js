/* eslint-disable */
import { spectrum, notes } from './frequencies';

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
  spectrum,
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
    } else if (musixSetting === 'recognition') {
      recognition();
    } else if (musixSetting === 'off') { 
      if (song.length) console.log('FFT data:', song);
      ppToggle.id = 'inactive';
      ppToggle.innerHTML = 'Play';
      stop = true;
      audioCtx.suspend();
      return;
    }
    if (ppToggle.id === 'inactive') {
      ppToggle.id = 'active';
      ppToggle.innerHTML = 'Pause';
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

    let mem = {};
    let count = 0;
    
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

        let amp = 0;
        let freq = null;
        for (let i = low; i <= high; i += 1) {
          // Collect the highest frequency
          // if (dataArrayAlt[i] > 100) {
          //   mem.push(i);
          // }
          if (dataArrayAlt[i] > amp) {
            amp = dataArrayAlt[i];
            freq = i;
          }
        }
        mem[freq] = amp;
        count++;
        if (count === 10) {
          // let domFreq = 0;
          // for (let frequency in mem) {
          //   if (mem[frequency] > domFreq) {
          //     domFreq = mem[frequency];
          //   }
          // }
          mem = {};
          count = 0;
          song[currentStanza].push(mem);
        }
        // // Include at this point in time on the current stanza the highest frequency
        // if (freq) song[currentStanza].push(freq);
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

    // TODO: Check whether the first stanza is appearing onscreen
    // - if not, find out what the "top" stanza is and check from there
    let currentStanza = 0; 
    let currentFreq = 0;
    let sampleLength = sample['spectrum'][currentStanza].length;

    let count = 0;

    const computeFFT = (newtime) => {
      if (stop) return;
    
      recallComputeFFT = requestAnimationFrame(computeFFT); 

      now = newtime ? newtime : window.performance.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {

        then = now - (elapsed % fpsInterval);
        
        analyser.getByteFrequencyData(dataArrayAlt);
        

        let bin = Math.floor(notes[spectrum[currentStanza][currentFreq]] / (44100 / 32768));

        if (dataArrayAlt[bin] >= 100 || dataArrayAlt[bin - 1] >= 100 || dataArrayAlt[bin + 1] >= 100) { console.log('score!', currentFreq)
          currentFreq += 1;
        } else {
          count += 1;
          if (count >= 10) {
            let mem = {};
            for (let i = 0; i < spectrum[currentStanza].length; i += 1) {
              let currentBin = Math.floor(notes[spectrum[currentStanza][i]] / (44100 / 32768));
              if (dataArrayAlt[currentBin] >= 100) {
                mem[i] = {
                  bin: currentBin,
                  amp: dataArrayAlt[currentBin],
                };
              }
            }
            if (Object.keys(mem).length) {
              if (mem[currentFreq]) {
                currentFreq += 1;
              } else {
                let highestAmp = 0;
                let winner = null;
                for (let idx in mem) {
                  if (mem[idx][amp] > highestAmp) {
                    highestAmp = mem[idx][amp];
                    winner = idx;
                  }
                }
                currentFreq = winner + 1;
                console.log('oh oh!', currentFreq)
              }
            }
            count = 0;
          }
        } 
        if (currentFreq >= sampleLength) {
          currentStanza += 1;
          currentFreq = 0;
          if (currentStanza === sample['spectrum'].length) {
            stop = true;
            return;
          }
          sampleLength = sample['spectrum'][currentStanza].length;
          // Start scrolling past previous stanza
          // -- delay this process - late is better than early!
          setTimeout(() => {
            for (let i = 0; i < stanzaHeight; i++) {
              setTimeout(() => {
                window.scrollTo(0, window.pageYOffset + 1);
              }, i * 5);
            }
          }, 2500);
        }
      }
    }
    computeFFT();
  }



  // // Use for playback recognition:
  // function recognition() {
  //   // If we know the height of the music sheet, divide it by the number of stanzas for the average height:
  //   let stanzaHeight = sample['height'] / (sample['stanzas'] + 1); // Increase by one to negate padding added by top and bottom footer

  //   if (stanzaHeight) {
  //     // Okay!
  //   } else {
  //     // Figure out the height of either the music sheet or the top and bottom surrounding elements and subtract them from clientHeight.
  //     const clientHeight = window.document.body.clientHeight;
  //     stanzaHeight = null; // TODO: What is null?
  //   }

  //   analyser.fftSize = 32768;
  //   const dataArrayAlt = new Uint8Array(analyser.frequencyBinCount); // === 16384 --Nyquist formula

  //   // TODO: Check whether the first stanza is appearing onscreen
  //   // - if not, find out what the "top" stanza is and check from there
  //   let currentStanza = 0; 
  //   let currentFreq = 0;
  //   let sampleLength = sample['spectrum'][currentStanza].length;

  //   let mem = {};
  //   let stanzaMem = {};
  //   let count = 0;

  //   const computeFFT = (newtime) => {
  //     if (stop) return;
    
  //     recallComputeFFT = requestAnimationFrame(computeFFT); 

  //     now = newtime ? newtime : window.performance.now();
  //     elapsed = now - then;

  //     if (elapsed > fpsInterval) {

  //       then = now - (elapsed % fpsInterval);
        
  //       analyser.getByteFrequencyData(dataArrayAlt);
      
  //       let score = 0;
  //       let domFreq = 0;
  //       if (count < 10) {
  //         for (let i = currentFreq; i < sample['spectrum'][currentStanza].length; i++) {
  //           for (let freq in sample['spectrum'][currentStanza][i]) {
  //             if (dataArrayAlt[freq]) stanzaMem[freq] = dataArrayAlt[freq];
  //           }
  //         }

  //         for (let freq in sample['spectrum'][currentStanza][currentFreq]) {
  //           if (dataArrayAlt[freq] > sample['spectrum'][currentStanza][currentFreq][freq] - 25 && dataArrayAlt[freq] < sample['spectrum'][currentStanza][currentFreq][freq] + 25) mem[freq] = dataArrayAlt[freq];
  //         }
  //         count += 1;
  //       } else {
  //         let memLen = Object.keys(mem).length;
  //         let specLen = Object.keys(sample['spectrum'][currentStanza][currentFreq]).length;
  //         console.log(memLen, specLen, currentFreq)
  //         if (memLen === specLen) { console.log('score!')
  //           currentFreq += 1;
  //         } else {
  //           let matches = [];
  //           for (let i = 0; i < sample['spectrum'][currentStanza].length; i += 1) {
  //             let match = 0;
  //             for (let freq in stanzaMem) {
  //               if (sample['spectrum'][currentStanza][i][freq]) match += 1;
  //             }
  //             if (match === Object.keys(sample['spectrum'][currentStanza][i]).length) matches.push(i);
  //           }
  //           if (matches.length === 1) {
  //             currentFreq = matches[0] + 1;
  //           } else if (matches.length > 1) {
  //             let highestProb = 0;
  //             let winner = null;
  //             for (let i = 0; i < matches.length; i += 1) {
  //               let prob = 0;
  //               for (let freq in stanzaMem) {
  //                 if (stanzaMem[freq] < sample['spectrum'][currentStanza][i][freq] + 10 && stanzaMem[freq] > sample['spectrum'][currentStanza][i][freq] - 10) {
  //                   prob += 1;
  //                 }
  //               }
  //               if (prob > highestProb) {
  //                 highestProb = prob;
  //                 winner = i;
  //               }
  //             }
  //             if (winner) currentFreq = winner + 1;
  //           }
  //           // currentFreq = currentFreq;
  //           // let matches = [];
  //           // for (let i = 0; i < sample['spectrum'][currentStanza].length; i += 1) {
  //           //   let match = 0;
  //           //   for (let freq in sample['spectrum'][currentStanza][i]) {
  //           //     if (dataArrayAlt[freq] > sample['spectrum'][currentStanza][i][freq] - 35 && dataArrayAlt[freq] < sample['spectrum'][currentStanza][i][freq] + 35) {
  //           //       match += 1;
  //           //     }
  //           //   }
  //           //   if (match === Object.keys(sample['spectrum'][currentStanza][i]).length) matches.push(i);
  //           // }
  //           // if (matches.length === 1) {
  //           //   currentFreq = matches[0] + 1;
  //           // } else {
  //           //   for (let i = 0; i < matches.length; i += 1) {
  //           //     if (matches[i] >= currentFreq) {
  //           //       currentFreq = i + 1;
  //           //     }
  //           //   }
  //           // }
  //           // console.log('else', matches, currentFreq)
  //         }
  //           // let score = 0;
  //           // let nextFreqScore = 0;
  //           // let specLen = Object.keys(sample['spectrum'][currentStanza][currentFreq]);
  //           // let nextSpecLen = Object.keys(sample['spectrum'][currentStanza][currentFreq + 1]);
  //           // for (let freq in sample['spectrum'][currentStanza][currentFreq]) {
  //           //   if (mem[freq]) score += 1;
  //           // }
  //           // for (let freq in sample['spectrum'][currentStanza][currentFreq + 1]) {
  //           //   if (mem[freq]) nextFreqScore += 1;
  //           // }
  //           // if (score === specLen || (specLen > 5 && score >= specLen - 2)) { console.log('score!')
  //           //   currentFreq += 1;
  //           // } else if (nextFreqScore === nextSpecLen || (nextFreqScore > 5 && nextFreqScore >= nextSpecLen - 2)) {
  //           //   currentFreq += 2;
  //           // } else {
  //           //   let accurateIdx = null;
  //           //   let highAccuracy = 0;
  //           //   for (let i = currentFreq; i < sample['spectrum'][currentStanza].length; i += 1) {
  //           //     let accuracy = 0;
  //           //     for (let freq in sample['spectrum'][currentStanza][i]) {
  //           //       if (mem[freq]) accuracy += 1;
  //           //     }
  //           //     if (accuracy > highAccuracy) {
  //           //       highAccuracy = accuracy;
  //           //       accurateIdx = i;
  //           //     }
  //           //   }
  //           //   if (accurateIdx) { console.log('higher idx')
  //           //  }


  //             // else {
  //             //   for (let i = currentFreq; i >= 0; i -= 1) {
  //             //     let accuracy = 0;
  //             //     for (let freq in sample['spectrum'][currentStanza][i]) {
  //             //       if (mem[freq]) accuracy+= 1;
  //             //     }
  //             //     if (accuracy > highAccuracy) {
  //             //       highAccuracy = accuracy;
  //             //       accurateIdx = i;
  //             //     }
  //             //   }
  //             //   if (accurateIdx) { console.log('lower idx')
  //             //     currentFreq = accurateIdx;
  //             //   }
  //             // }
  //             // console.log('change', currentFreq, accurateIdx)
  //           stanzaMem = {};
  //           mem = {};
  //           count = 0;
  //           if (currentFreq >= sampleLength || currentFreq === sampleLength - 1) {
  //             currentStanza += 1;
  //             currentFreq = 0;
  //             if (currentStanza === sample['spectrum'].length) {
  //               stop = true;
  //               return;
  //             }
  //             sampleLength = sample['spectrum'][currentStanza].length;
  //             // Start scrolling past previous stanza
  //             // -- delay this process - late is better than early!
  //             setTimeout(() => {
  //               for (let i = 0; i < stanzaHeight; i++) {
  //                 setTimeout(() => {
  //                   window.scrollTo(0, window.pageYOffset + 1);
  //                 }, i * 5);
  //               }
  //             }, 2500);
  //           }
  //         }
  //       }
  //     }
  //   computeFFT();
  // }

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
          startProcess(2);
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
    startProcess(2);
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
      if (musixSetting === 'record') stop = true;
      // Suspending the audio context doesn't lower the CPU overhead from the streaming..
      // How can we "suspend" the streaming without destroying the context to offload the CPU usage when not in use?
      // -- Setting Visualize Settings to "OFF" drops the CPU percentage down by 15%.
      // -- Essentially removing canvas will make the processing a lot smoother
      audioCtx.suspend();
    } else {
      ppToggle.id = 'active';
      ppToggle.innerHTML = 'Pause';
      audioCtx.resume();
      if (musixSetting === 'record') {
        stop = false;
        startProcess(10);
      }
    }
  }

  ppToggle.onclick = togglePlayPause;
  ppToggle.id = 'active';
}

export default app;