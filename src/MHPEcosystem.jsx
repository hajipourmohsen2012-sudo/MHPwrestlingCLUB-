import React from 'react';
import TabButtons from './TabButtons';
import ArchitectureView from './ArchitectureView';
import DataFlowCard from './DataFlowCard';
import CostTable from './CostTable';

const MHPEcosystem = () => {
    return (
        <div>
            <TabButtons />
            <ArchitectureView />
            <DataFlowCard />
            <CostTable />
        </div>
    );
};

export default MHPEcosystem;