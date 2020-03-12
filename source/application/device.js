﻿export function getDeviceProfile() {
    const userAgent = navigator.userAgent;
    return {
        isTv: userAgent.match(/webOS/i),
        isMobile:
            userAgent.match(/Android/i) ||
            userAgent.match(/iPhone/i) ||
            userAgent.match(/iPad/i) ||
            userAgent.match(/iPod/i) ||
            userAgent.match(/BlackBerry/i) ||
            userAgent.match(/Windows Phone/i)
    }
}
