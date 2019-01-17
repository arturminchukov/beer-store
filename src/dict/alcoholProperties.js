export const alcoholProperties = {
    alcohol: {
        abbreviation: 'abv',
        name: 'alcohol',
        title: 'Alcohol by volume',
        min: 2,
        max: 14,
        initValue: 2,
    },
    bitterness: {
        abbreviation: 'ibu',
        name: 'bitterness',
        title: 'International bitterness units',
        min: 0,
        max: 120,
        initValue: 0,
    },
    color: {
        abbreviation: 'ebc',
        name: 'color',
        title: 'Color by EBC',
        min: 4,
        max: 80,
        initValue: 4,
    },
};

export const beerProperties = Object.values(alcoholProperties);
