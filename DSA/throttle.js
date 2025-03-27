function throttle(fn, delay) {
    let lastCall = 0;
    return () => {
        let currentTime = Date.now();
        if (currentTime - lastCall >= delay) {
            lastCall = currentTime;
            fn();
        }
    }
}

let newFn = throttle(() => {
    console.log("hello");

}, 2000)