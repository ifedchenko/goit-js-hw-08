import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let getPlayerCurrentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(onGetCurrentTime, 1000));

function onGetCurrentTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function onReloadPage() {
  player
    .setCurrentTime(getPlayerCurrentTime)
    .then(function () {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}

onReloadPage();
