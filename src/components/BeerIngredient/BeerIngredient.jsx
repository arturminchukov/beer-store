import * as React from 'react';

export default function BeerIngredient(props) {
    const {
        name,
        amountValue,
        amountUnit,
        processStage,
    } = props;

    return (
        <p>
            {`"${name}"`}
            {amountValue && amountUnit && `- ${amountValue} ${amountUnit}`}
            {processStage && `, add at ${processStage}`}
        </p>
    );
}
