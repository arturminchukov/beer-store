import {beerProperties} from '../../dict/alcoholProperties';

export default function transformBeerProperties(beerPropertyValues) {
    return beerProperties.map((beerProperty, index) => ({
        ...beerProperty,
        value: beerPropertyValues[index],
    }));
}
