const deviceSize = 0.8;
const deviceAspectRatio = 3/4;

let deviceBodyElement = document.querySelector(".device-body");

const updateDeviceSize = function(){
    const deviceHeight = window.innerHeight * deviceSize;
    deviceBodyElement.style.height = deviceHeight + "px";
    deviceBodyElement.style.width = deviceHeight * deviceAspectRatio + "px";
}

updateDeviceSize();

window.addEventListener("resize", (event) => {
    updateDeviceSize();
    console.log(event);
})