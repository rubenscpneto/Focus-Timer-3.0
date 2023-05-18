import {
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
  timerColor,
} from './elements.js'

export default function({timer, sound}) {
  buttonPlay.addEventListener('click', function() {
    timer.countdown()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', function() {
    timer.hold()
    sound.pressButton()
  })
  
  buttonAddTime.addEventListener('click', function() {
    timer.plusFiveMinutes()
    sound.pressButton()
  })
  
  buttonSubTime.addEventListener('click', function() {
    timer.lessFiveMinutes()
    sound.pressButton()
  })
  
  darkModeOn.addEventListener('click', function() {
    background.classList.add('background-dark-mode')
    darkModeOn.classList.add('hide')
    lightModeOn.classList.remove('hide')
    timerColor.classList.add('timer-dark-mode')
    buttonPlay.classList.add('controls-dark-mode')
    buttonStop.classList.add('controls-dark-mode')
    buttonAddTime.classList.add('controls-dark-mode')
    buttonSubTime.classList.add('controls-dark-mode')
    forestSoundOff.classList.add('sounds-bg-dark-mode', 'sounds-dark-mode')
    rainSoundOff.classList.add('sounds-bg-dark-mode', 'sounds-dark-mode')
    coffeeshopSoundOff.classList.add('sounds-bg-dark-mode', 'sounds-dark-mode')
    fireplaceSoundOff.classList.add('sounds-bg-dark-mode', 'sounds-dark-mode')
    forestSoundOn.classList.add('sounds-bg-selected-dark-mode')
    rainSoundOn.classList.add('sounds-bg-selected-dark-mode')
    coffeeshopSoundOn.classList.add('sounds-bg-selected-dark-mode')
    fireplaceSoundOn.classList.add('sounds-bg-selected-dark-mode')
  })

  lightModeOn.addEventListener('click', function() {
    background.classList.remove('background-dark-mode')
    darkModeOn.classList.remove('hide')
    lightModeOn.classList.add('hide')
    timerColor.classList.remove('timer-dark-mode')
    buttonPlay.classList.remove('controls-dark-mode')
    buttonStop.classList.remove('controls-dark-mode')
    buttonAddTime.classList.remove('controls-dark-mode')
    buttonSubTime.classList.remove('controls-dark-mode')
    forestSoundOff.classList.remove('sounds-bg-dark-mode', 'sounds-dark-mode')
    rainSoundOff.classList.remove('sounds-bg-dark-mode', 'sounds-dark-mode')
    coffeeshopSoundOff.classList.remove('sounds-bg-dark-mode', 'sounds-dark-mode')
    fireplaceSoundOff.classList.remove('sounds-bg-dark-mode', 'sounds-dark-mode')
    forestSoundOn.classList.remove('sounds-bg-selected-dark-mode')
    rainSoundOn.classList.remove('sounds-bg-selected-dark-mode')
    coffeeshopSoundOn.classList.remove('sounds-bg-selected-dark-mode')
    fireplaceSoundOn.classList.remove('sounds-bg-selected-dark-mode')
  })
  
  forestSoundOff.addEventListener('click', function() {
    forestSoundOff.classList.add('hide')
    forestSoundOn.classList.remove('hide') 
    rainSoundOn.classList.add('hide')
    rainSoundOff.classList.remove('hide') 
    coffeeshopSoundOn.classList.add('hide')
    coffeeshopSoundOff.classList.remove('hide')
    fireplaceSoundOn.classList.add('hide')
    fireplaceSoundOff.classList.remove('hide')
  
    sound.rainSoundStop()
    sound.coffeeshopSoundStop()
    sound.fireplaceSoundStop()
    sound.forestSoundPlay()
  })
  
  rainSoundOff.addEventListener('click', function() {
    forestSoundOn.classList.add('hide')
    forestSoundOff.classList.remove('hide')
    rainSoundOff.classList.add('hide') 
    rainSoundOn.classList.remove('hide')
    coffeeshopSoundOn.classList.add('hide')
    coffeeshopSoundOff.classList.remove('hide')
    fireplaceSoundOn.classList.add('hide')
    fireplaceSoundOff.classList.remove('hide')
  
    sound.forestSoundStop()
    sound.coffeeshopSoundStop()
    sound.fireplaceSoundStop()
    sound.rainSoundPlay()
  })
  
  coffeeshopSoundOff.addEventListener('click', function() {
    forestSoundOn.classList.add('hide')
    forestSoundOff.classList.remove('hide')
    rainSoundOn.classList.add('hide')
    rainSoundOff.classList.remove('hide') 
    coffeeshopSoundOn.classList.remove('hide')
    coffeeshopSoundOff.classList.add('hide')
    fireplaceSoundOn.classList.add('hide')
    fireplaceSoundOff.classList.remove('hide')
  
    sound.forestSoundStop()
    sound.rainSoundStop()
    sound.fireplaceSoundStop()
    sound.coffeeshopSoundPlay()
  })
  
  fireplaceSoundOff.addEventListener('click', function() {
    forestSoundOn.classList.add('hide')
    forestSoundOff.classList.remove('hide')
    rainSoundOn.classList.add('hide')
    rainSoundOff.classList.remove('hide') 
    coffeeshopSoundOn.classList.add('hide')
    coffeeshopSoundOff.classList.remove('hide')
    fireplaceSoundOn.classList.remove('hide')
    fireplaceSoundOff.classList.add('hide')
  
    sound.forestSoundStop()
    sound.rainSoundStop()
    sound.coffeeshopSoundStop()
    sound.fireplaceSoundPlay()
  })

  sound.forestVolumeSetter.addEventListener('change', function(e) {
    sound.forestVolume(e)
  })

  sound.rainVolumeSetter.addEventListener('change', function(e) {
    sound.rainVolume(e)
  })

  sound.coffeeshopVolumeSetter.addEventListener('change', function(e) {
    sound.coffeeshopVolume(e)
  })

  sound.fireplaceVolumeSetter.addEventListener('change', function(e) {
    sound.fireplaceVolume(e)
  })
}