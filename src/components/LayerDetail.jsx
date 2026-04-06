import React from 'react';
import ecosystem from '../data/ecosystem';

const LayerDetail = ({ selected }) => {
    if (!selected) {
        return <div className="layer-detail-empty">انتخاب یک لایه</div>;
    }
    const layer = ecosystem.layers.find((l) => l.id === selected);
    if (!layer) return null;
    return (
        <div className="layer-detail" style={{ backgroundColor: layer.color }}>
            <h2>{layer.name}</h2>
            <p className="name-en">{layer.nameEn}</p>
            <p>{layer.description}</p>
            <div className="layer-info">
                <span>ID: {layer.id}</span>
                <span>Color: {layer.color}</span>
            </div>
        </div>
    );
};

export default LayerDetail;