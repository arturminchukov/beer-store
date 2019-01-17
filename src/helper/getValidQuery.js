export default function getValidQuery(query) {
    return query.replace(/ /gi, '_');
}
