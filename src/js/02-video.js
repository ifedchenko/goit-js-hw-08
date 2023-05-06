import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let getPlayerCurrentTime = localStorage.getItem('videoplayer-current-time');
// console.log(getPlayerCurrentTime);

player.on('timeupdate', throttle(onGetCurrentTime, 1000));

function onGetCurrentTime(evt) {
  // console.log(evt);
  // console.log(evt.seconds);
  const eventTime = evt.seconds;
  localStorage.setItem('videoplayer-current-time', eventTime);
}

function onReloadPage() {
  getPlayerCurrentTime === undefined || getPlayerCurrentTime === null
    ? localStorage.setItem('videoplayer-current-time', 0)
    : player.setCurrentTime(getPlayerCurrentTime);
}

onReloadPage();
