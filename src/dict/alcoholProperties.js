export const alcoholProperties = {
    alcohol: {
        abbreviation: 'abv',
        name: 'alcohol',
        title: 'Alcohol by volume',
        min: 2,
        max: 14,
        initValue: 8,
    },
    bitterness: {
        abbreviation: 'ibu',
        name: 'bitterness',
        title: 'International bitterness units',
        min: 0,
        max: 120,
        initValue: 60,
    },
    color: {
        abbreviation: 'ebc',
        name: 'color',
        title: 'Color by EBC',
        min: 4,
        max: 80,
        initValue: 42,
    },
};

export const beerProperties = Object.values(alcoholProperties);
