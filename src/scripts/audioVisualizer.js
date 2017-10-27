/* eslint-disable */

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

  var song = {};

  function visualize() {
    const start = Date.now();
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;


    const visualSetting = visualSelect.value;
    console.log(visualSetting);

    if (visualSetting === 'sinewave') {
      analyser.fftSize = 2048;
      const bufferLength = analyser.fftSize;
      console.log(bufferLength);
      const dataArray = new Uint8Array(bufferLength);

      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

      const draw = () => {
        drawVisual = requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        canvasCtx.fillStyle = 'rgb(200, 200, 200)';
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

        canvasCtx.beginPath();

        const sliceWidth = (WIDTH * 1.0) / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i += 1) {
          const v = dataArray[i] / 128.0;
          const y = (v * HEIGHT) / 2;

          if (i === 0) {
            canvasCtx.moveTo(x, y);
          } else {
            canvasCtx.lineTo(x, y);
          }

          x += sliceWidth;
        }

        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
      };

      draw();
    } else if (visualSetting === 'frequencybars') {
      analyser.fftSize = 256;
      const bufferLengthAlt = analyser.frequencyBinCount;
      console.log(bufferLengthAlt);
      const dataArrayAlt = new Uint8Array(bufferLengthAlt);

      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

      const drawAlt = () => {
        drawVisual = requestAnimationFrame(drawAlt);

        analyser.getByteFrequencyData(dataArrayAlt);

        canvasCtx.fillStyle = 'rgb(0, 0, 0)';
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        const barWidth = (WIDTH / bufferLengthAlt) * 2.5;
        let barHeight;
        let x = 0;
        let freq = 0;
        let loci = null;

        for (let i = 0; i < bufferLengthAlt; i += 1) {
          barHeight = dataArrayAlt[i];

          canvasCtx.fillStyle = `rgb(${(barHeight + 100)},50,50)`;
          canvasCtx.fillRect(x, (HEIGHT - barHeight) / 2, barWidth, barHeight / 2);

          x += barWidth + 1;

          // Add every frequency into a sum and push this "beat" into song array
          if (dataArrayAlt[i] > freq) {
            freq = dataArrayAlt[i];
            loci = i;
          }
        }
        freq += dataArrayAlt[Math.floor(loci / 2)];
        song[freq] = (Date.now() - start) / 1000;
      };

      drawAlt();
    } else if (visualSetting === 'off') {
      console.log('song:', song)
      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
      canvasCtx.fillStyle = 'red';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
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
          source.connect(audioCtx.destination);
          // analyser.connect(distortion);
          // distortion.connect(biquadFilter);
          // biquadFilter.connect(convolver);
          // convolver.connect(gainNode);
          // gainNode.connect(audioCtx.destination);

          visualize();
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
    visualize();
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