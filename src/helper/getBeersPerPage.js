export default function getBeersPerPage() {
    const width = window && window.screen && window.screen.width;

    if (width > 3000) {
        return 40;
    }
    if (width > 2000) {
        return 30;
    }
    if (width > 1000) {
        return 20;
    }

    return 10;
}
