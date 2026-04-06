import React, { memo } from 'react';
import LayerCard from './LayerCard';
import LayerDetail from './LayerDetail';
import { useEcosystemState } from '../hooks/useEcosystemState';

const ArchitectureView = memo(() => {
    const { selected, setSelected } = useEcosystemState();
    return (
        <div className="architecture-view p-8 bg-gray-900 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-white">System Architecture</h2>
            <LayerCard selected={selected} onSelect={setSelected} />
            <LayerDetail selected={selected} />
        </div>
    );
});

ArchitectureView.displayName = 'ArchitectureView';
export default ArchitectureView;