//controls
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.add-time')
const buttonSubTime = document.querySelector('.sub-time')

// dark mode controls

const background = document.querySelector('#body')
const darkModeOn = document.querySelector('#dark-mode-on')
const lightModeOn = document.querySelector('#light-mode-on')
const timerColor = document.querySelector('#timer')

// sounds
const forestSoundOff = document.querySelector('.forest-sound-off')
const forestSoundOn = document.querySelector('#forest-sound-on')

const rainSoundOff = document.querySelector('.rain-sound-off')
const rainSoundOn = document.querySelector('#rain-sound-on')

const coffeeshopSoundOff = document.querySelector('.coffeeshop-sound-off')
const coffeeshopSoundOn = document.querySelector('#coffeeshop-sound-on')

const fireplaceSoundOff = document.querySelector('.fireplace-sound-off')
const fireplaceSoundOn = document.querySelector('#fireplace-sound-on')


export {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonAddTime,
  buttonSubTime,
  forestSoundOff,
  forestSoundOn,
  rainSoundOff,
  rainSoundOn,
  coffeeshopSoundOff,
  coffeeshopSoundOn,
  fireplaceSoundOff,
  fireplaceSoundOn,
  background,
  darkModeOn,
  lightModeOn,
  timerColor
}