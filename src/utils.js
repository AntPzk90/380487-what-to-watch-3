export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const convertationMinutesToTime = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  return `${hours}h : ${minutes}m`;
};

export const convertationSecondsToTime = (time) => {
  let fulltime = 0;
  let hours = Math.floor(time / (60 * 60));
  let divisionMinutes = time % (60 * 60);
  let minutes = Math.floor(divisionMinutes / 60);
  let divisionSeconds = divisionMinutes % 60;
  let seconds = Math.ceil(divisionSeconds);
  if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes === 60) {
    minutes = 0;
    hours = hours + 1;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours === 0) {
    fulltime = `${minutes}:${seconds}`;
  } else {
    fulltime = `${hours}:${minutes}:${seconds}`;
  }
  return fulltime;
};

export const SIMILAR_FILMS_COUNT = 4;
export const GENRES_COUNT = 8;
