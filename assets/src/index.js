'use strict';

console.log(document);

//system

const operatingSystem = document.querySelector('.operatingSystem');
const systemLanguage = document.querySelector('.systemLanguage');
const systemBrowser = document.querySelector('.systemBrowser');

function getOS () {

    let platform = navigator.platform
    // I learned that !== -1 means that it will scan the string until it finds win, if it doesn't, it will not
    // execute and move onto the next statement! (It's serving as functional filler)
    if (platform.indexOf('Win') !== -1) {
        operatingSystem.innerText = `System: Windows`
    } else if (platform.indexOf('Mac') !== -1) {
        operatingSystem.innerText = `System: Mac/IOS`
    } else if (platform.indexOf('Linux') !== -1) {
        operatingSystem.innerText = `System: Linux`
    } else {
        operatingSystem.innerText = `Unknown OS`
    } 
}

function getLang() {
    systemLanguage.innerText = `Sytem Language: ${navigator.language}`
}

function getBrowser() {

    let platform = navigator.userAgent;
    let systemBrowser = document.querySelector('.systemBrowser');
    // I learned that !== -1 means that it will scan the string until it finds win, if it doesn't, it will not
    // execute and move onto the next statement! (It's serving as functional filler)
    if (platform.indexOf('Edge') !== -1) {
        systemBrowser.innerText = `Browser: Microsoft Edge`
    } else if (platform.indexOf('Firefox') !== -1) {
        systemBrowser.innerText = `Browser: Firefox`
    } else if (platform.indexOf('Chrome') !== -1) {
        systemBrowser.innerText = `Browser: Chrome / Chromium`
    } else if (platofmr.indexOf('Safari') !== -1) {
        systemBrowser.innerText = `Browser: Safari`
    } else {
        systemBrowser.innerText = `Could not compute: irrelevant browser`
    }
}
window.addEventListener('load', () => {
    getOS();
    getLang();
    getBrowser();
});

// window
const windowWidth = document.querySelector('.windowWidth');
const windowHeight = document.querySelector('.windowHeight');
const windowOrientation = document.querySelector('.windowOrientation');

function setWindowDimensions() {
    windowWidth.innerText = `Window Width: ${window.innerWidth}`
    windowHeight.innerText = `Window Height: ${window.innerHeight}`
}

function getOrientation() {
    // matchMedia checks if the orientation 'matches' that of portrait or landscape.
    if (window.matchMedia("(orientation: portrait)").matches) {
        windowOrientation.innerText = 'Orientation: Portrait';
    } else if (window.matchMedia("(orientation: landscape)").matches) {
        windowOrientation.innerText = 'Orientation: Landscape';
    } else {
        windowOrientation.innerText = 'Orientation: Unknown';
    }
}

window.addEventListener('resize', () => {
    setWindowDimensions();
    getOrientation();
})

window.addEventListener('load', () => {
    setWindowDimensions();
    getOrientation();
})

// battery

const batteryStatus = document.querySelector('.batteryStatus');

// This one I had to ask for help with from ChatGPT, it didnt make too much sense to me how to implement this!
function getBatteryLevel() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            let batteryPercentage = document.querySelector('.batteryPercentage');
            
            function updateBatteryStatus() {
                updateBatteryPercentage(batteryPercentage, battery.level);
            }
            // Updates
            updateBatteryStatus();
            // Adds an event listener to detect changes in the battery status
            battery.addEventListener('levelchange', updateBatteryStatus);
    
        });
    } else {
        batteryPercentage.innerText = 'Not supported'
    }
    
    function updateBatteryPercentage(element, level) {
        element.innerText = (level * 100) + "%";
    }
}

function displayChargingStatus() {

    let chargingStatus = document.querySelector('.charginStatus');

    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            let chargingStatus = document.querySelector('.chargingStatus');

            function updateChargingStatus() {
                updateChargingText(chargingStatus, battery.charging);
            }

            // Updates
            updateChargingStatus();

            // Adds an event listener to detect changes in charging status
            battery.addEventListener('chargingchange', updateChargingStatus);

        })
    } else {
        chargingStatus.innerText = "Not supported";
    }

    function updateChargingText(element, isCharging) {
        if (isCharging) {
            element.textContent = "Charging";
        } else {
            element.textContent = "Not Charging";
        }
    }
}

window.addEventListener('load', () => {
    getBatteryLevel();
    displayChargingStatus();
});

// network
const networkConnection = document.querySelector('.networkConnection');
const networkH = document.querySelector('.networkH');

function checkConnection() {
    if (navigator.onLine) {
        networkH.innerText = "ONLINE";
        networkH.style.backgroundColor = "#28a745";
        networkH.style.color = "white";
    } else {
        networkH.innerText = "OFFLINE";
        networkH.style.backgroundColor = "#eb4034";
        networkH.style.color = "white";
    }
}

window.addEventListener('load', () => {
    checkConnection();
})

window.addEventListener('online', () => {
    checkConnection();
})

window.addEventListener('offline', () => {
    checkConnection();
})

console.log(navigator);



