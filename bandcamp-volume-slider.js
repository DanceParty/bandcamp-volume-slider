const audioPlayer = document.getElementsByTagName("audio")[0]
audioPlayer.volume = 0.5

const wrapper = document.createElement("div")
wrapper.style.display = "flex"
wrapper.style.alignItems = "center"
wrapper.style.paddingLeft = "66px"
const zeroLabel = document.createElement("span").innerHTML = "0"
const oneHundredLabel = document.createElement("span").innerHTML = "100"
const slider = document.createElement("input")
slider.className = "volume-slider"
slider.style.marginLeft = "12px"
slider.style.marginRight = "12px"
slider.type = "range"
slider.min = 0
slider.max = 1
slider.step = 0.1
slider.value = 0.5
slider.addEventListener("change", function(event) {
  audioPlayer.volume = event.target.value
})

wrapper.append(zeroLabel, slider, oneHundredLabel)

const visualPlayer = document.getElementsByClassName("inline_player")[0]
visualPlayer.appendChild(wrapper)