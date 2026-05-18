const screens = document.querySelectorAll('.screen');

    retreatProgress += 1;

    const percent =
      (retreatProgress / 33.3) * 100;

    document.getElementById('retreat-fill').style.width =
      percent + '%';

    if(retreatProgress >= 33.3) {

      clearInterval(retreatInterval);
      retreatInterval = null;

      showRetreatSuccess();
    }

  }, 100);
}

function cancelRetreat() {

  clearInterval(retreatInterval);

  retreatInterval = null;

  retreatProgress = 0;

  document.getElementById('retreat-fill').style.width = '0%';
}

function showRetreatSuccess() {

  const overlay =
    document.getElementById('danger-overlay');

  overlay.style.display = 'flex';

  setTimeout(() => {

    overlay.style.display = 'none';

    retreatProgress = 0;

    document.getElementById('retreat-fill').style.width = '0%';

    showScreen('home');

  }, 3000);
}

let seconds = 0;

setInterval(() => {

  seconds++;

  const min =
    String(Math.floor(seconds / 60)).padStart(2, '0');

  const sec =
    String(seconds % 60).padStart(2, '0');

  document.getElementById('battle-timer').textContent =
    `${min}:${sec}`;

}, 1000);

setTimeout(() => {

  document.getElementById('ally2').classList.add('dead');

}, 12000);

setTimeout(() => {

  document.getElementById('ally3').classList.add('dead');

}, 18000);
