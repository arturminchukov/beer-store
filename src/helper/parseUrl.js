// This function creates a new anchor element and uses location
// properties (inherent) to get the desired URL data. Some String
// operations are used (to normalize results across browsers).
// https://j11y.io/javascript/parsing-urls-with-the-dom/

export function parseLocation(location) {
    return {
        source: location.href,
        protocol: location.protocol.replace(':', ''),
        host: location.hostname,
        port: location.port,
        query: location.search,
        params: (function () {
            const ret = {};
            const seg = location.search.replace(/^\?/, '').split('&');
            const len = seg.length;
            let s;
            for (let i = 0; i < len; i++) {
                if (seg[i]) {
                    s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }
            }
            return ret;
        }()),
        file: (location.pathname.match(/([^/?#]+)$/i) || [undefined, ''])[1],
        hash: location.hash.replace('#', ''),
        path: location.pathname.replace(/^([^/])/, '/$1'),
        relative: (location.href.match(/tps?:\/\/[^/]+(.+)/) || [undefined, ''])[1],
        segments: location.pathname.replace(/^\//, '').split('/'),
    };
}

export function parseUrl(url) {
    const a = document.createElement('a');
    a.href = url;
    return parseLocation(a);
}
