export default function debounce(handler, waitTime) {
    let timer;

    return function (parameters) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(handler, waitTime, parameters);
    };
}
