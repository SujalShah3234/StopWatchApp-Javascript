let id,
  seconds = 0,
  minutes = 0,
  hours = 0;

let timer = document.getElementById('show-time');

document.getElementById('defaultOpen').click();

function openTabHandler(event, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  event.currentTarget.className += ' active';
}

const startStopWatch = () => {
  document.getElementById('sw-start').style.display = 'none';
  document.getElementById('sw-stop').style.display = 'inline-block';
  document.getElementById('sw-lap').style.display = 'inline-block';
  document.getElementById('sw-reset').style.display = 'inline-block';
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  timer.innerText =
    (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
    ':' +
    (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
    ':' +
    (seconds > 9 ? seconds : '0' + seconds);

  incrementTimer();
};

const incrementTimer = () => {
  clearInterval(id);
  id = setInterval(startStopWatch, 1000);
};

const resumeStopWatch = () => {
  incrementTimer();
  document.getElementById('sw-stop').style.display = 'inline-block';
  document.getElementById('sw-lap').style.display = 'inline-block';
  document.getElementById('sw-resume').style.display = 'none';
};

const stopStopWatch = () => {
  clearInterval(id);
  document.getElementById('sw-stop').style.display = 'none';
  document.getElementById('sw-lap').style.display = 'none';
  document.getElementById('sw-resume').style.display = 'inline-block';
};

const resetStopWatch = () => {
  clearInterval(id);
  timer.textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('sw-start').style.display = 'inline-block';
  document.getElementById('sw-stop').style.display = 'none';
  document.getElementById('sw-lap').style.display = 'none';
  document.getElementById('sw-reset').style.display = 'none';
  document.getElementById('sw-resume').style.display = 'none';
};

const onLapHandler = () => {
  const li = document.createElement('li');
  li.className = 'sw-lap';
  li.textContent = timer.innerText;
  document.getElementById('laps').appendChild(li);
};

setInterval(() => {
  const australia = new Date().toLocaleString('en-US', {
    timeZone: 'Australia/Sydney',
    timeStyle: 'medium',
  });

  const newYork = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    timeStyle: 'medium',
  });

  const london = new Date().toLocaleString('en-US', {
    timeZone: 'Europe/London',
    timeStyle: 'medium',
  });

  const japan = new Date().toLocaleString('en-US', {
    timeZone: 'Japan',
    timeStyle: 'medium',
  });

  document.getElementById('city_australia').textContent = australia;
  document.getElementById('city_ny').textContent = newYork;
  document.getElementById('city_london').textContent = london;
  document.getElementById('city_japan').textContent = japan;
}, 1000);
