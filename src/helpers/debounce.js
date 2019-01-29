import {queryNavigate} from './navigationHelper';

export function debounce(handler, waitTime) {
    let timer;

    return function (parameters) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(handler, waitTime, parameters);
    };
}

const debouncedQueryNavigate = debounce(queryNavigate, 700);

export default debouncedQueryNavigate;
