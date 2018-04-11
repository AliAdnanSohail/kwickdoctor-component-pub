export default class Recorder {
  constructor(props) {
    this.mediaRecorder;
    this.recordedBlobs;
    this.videoStream;
    this.recording = false;
    this.hasVideoRecorded = false;
    this.constraints = {
      audio: true,
      video: true,
    };
  }

  startTimer = () => {
    let timer = 0;
    this.timerIntr = setInterval(() => {
      let minutes = parseInt(timer / 60, 10);
      let seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      this.timerState = `${minutes}:${seconds}`;

      timer += 1;
    }, 1000);
  }

  deleteTimer = () => {
    if (this.timerIntr) {
      clearInterval(this.timerIntr);
    }
  }

  getMediaDevices = (setVideoStream) => {
    navigator.mediaDevices.getUserMedia(this.constraints)
      .then(this.handleSuccess).then(setVideoStream).catch(this.handleError);
  }

  handleSuccess = (stream) => {
    console.log('success');
    window.stream = stream;
    this.videoStream = stream;
    return stream;
  }

  handleError = (error) => {
    console.log('navigator.getUserMedia error: ', error);
  }


  toggleRecording = () => {
    console.log(this.recording ? 'recording stop' : 'recording');
    this.recording ? this.stopRecording() : this.startRecording();
    this.recording = !this.recording;
  }

  checkSupportedFormats = () => {
    let options = { mimeType: 'video/webm;codecs=vp9' };
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.log(`${options.mimeType} is not Supported`);
      options = { mimeType: 'video/webm;codecs=vp8' };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(`${options.mimeType} is not Supported`);
        options = { mimeType: 'video/webm' };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.log(`${options.mimeType} is not Supported`);
          options = { mimeType: '' };
        }
      }
    }
    return options;
  }

  getVideoStream = () => this.videoStream

  startRecording = () => {
    this.recordedBlobs = [];
    try {
      this.mediaRecorder = new MediaRecorder(window.stream, this.checkSupportedFormats);
    } catch (e) {
      console.error(`Exception while creating MediaRecorder: ${e}`);
      alert(`Exception while creating MediaRecorder: ${
        e}. mimeType: ${options.mimeType}`);
      return;
    }
    this.mediaRecorder.onstop = this.handleStop;
    this.mediaRecorder.ondataavailable = this.handleDataAvailable;
    this.mediaRecorder.start(10); // collect 10ms of data
    console.log('MediaRecorder started', this.mediaRecorder);
  }

  stopRecording = () => {
    this.mediaRecorder.stop();
    console.log('Recorded Blobs: ', this.recordedBlobs);
    this.hasVideoRecorded = true;
  }

  handleDataAvailable = (event) => {
    if (event.data && event.data.size > 0) {
      this.recordedBlobs.push(event.data);
    }
  }

  download = () => {
    const blob = new Blob(this.recordedBlobs, { type: 'video/webm' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  }
}
