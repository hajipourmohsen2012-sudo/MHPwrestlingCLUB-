import React from 'react';

const LayerCard = ({ ecosystem }) => {
    return (
        <div className="layer-card-container">
            {ecosystem.layers.map((layer, index) => (
                <div key={index} className="layer-card">
                    <h3>{layer.name}</h3>
                    <p>{layer.description}</p>
                    <button onClick={() => layer.action()}>Interact</button>
                </div>
            ))}
        </div>
    );
};

export default LayerCard;