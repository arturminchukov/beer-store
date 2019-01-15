import history from './history';

export default function navigate(path = '/home') {
    history.push(path);
}
