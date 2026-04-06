import React from 'react';

const LayerCard = ({ layer, selected, onSelect }) => {
    return (
        <div className={`layer-card ${selected ? 'selected' : ''}`} onClick={() => onSelect(layer.id)}>
            <h3>{layer.name}</h3>
            <p>{layer.description}</p>
        </div>
    );
};

export default LayerCard;