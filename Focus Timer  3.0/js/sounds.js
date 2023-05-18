export default function() {
  const forestSound = new Audio("./assets/Floresta.wav")
  const rainSound = new Audio('./assets/Chuva.wav')
  const coffeeshopSound = new Audio("./assets/Cafeteria.wav")
  const fireplaceSound = new Audio("./assets/Lareira.wav")

  // volume
  const forestVolumeSetter = document.querySelector('#forest-volume-control')
  const rainVolumeSetter = document.querySelector('#rain-volume-control')
  const coffeeshopVolumeSetter = document.querySelector('#coffeeshop-volume-control')
  const fireplaceVolumeSetter = document.querySelector('#fireplace-volume-control')

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  forestSound.loop = true
  rainSound.loop = true
  coffeeshopSound.loop = true
  fireplaceSound.loop = true

  function forestSoundPlay() {
    forestSound.play()
  }

  function forestSoundStop() {
    forestSound.pause()
  }

  function rainSoundPlay() {
    rainSound.play()
  }

  function rainSoundStop() {
    rainSound.pause()
  }

  function coffeeshopSoundPlay() {
    coffeeshopSound.play()
  }

  function coffeeshopSoundStop() {
    coffeeshopSound.pause()
  }

  function fireplaceSoundPlay() {
    fireplaceSound.play()
  }

  function fireplaceSoundStop() {
    fireplaceSound.pause()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function forestVolume(e) {
    forestSound.volume = e.currentTarget.value / 100
  }

  function rainVolume(e) {
    rainSound.volume = e.currentTarget.value / 100
  }

  function coffeeshopVolume(e) {
    coffeeshopSound.volume = e.currentTarget.value / 100
  }

  function fireplaceVolume(e) {
    fireplaceSound.volume = e.currentTarget.value / 100
  }

  return {
    forestSoundPlay,
    forestSoundStop,
    rainSoundPlay,
    rainSoundStop,
    coffeeshopSoundPlay,
    coffeeshopSoundStop,
    fireplaceSoundPlay,
    fireplaceSoundStop,
    pressButton,
    timeEnd,
    forestVolume,
    rainVolume,
    coffeeshopVolume,
    fireplaceVolume,
    forestVolumeSetter,
    rainVolumeSetter,
    coffeeshopVolumeSetter,
    fireplaceVolumeSetter
  }
}