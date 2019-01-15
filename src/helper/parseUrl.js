import ROUTES from '../dict/routes';

export default function parseUrl(url) {
    const urlParts = url.split('/');
    const path = `/${urlParts[1]}`;

    if (path === '/beer') {
        return {
            path,
            parameters: {
                beerId: urlParts[2],
            },
        };
    }

    if (path === '/') {
        return {
            path: ROUTES.home.url,
        };
    }

    return {path};
}
