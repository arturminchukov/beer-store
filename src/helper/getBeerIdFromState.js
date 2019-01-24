export default function getBeerIdFromState(state) {
    return (state && state.route && state.route.segments && Number(state.route.segments[1]));
}
