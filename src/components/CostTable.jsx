import React from 'react';
import './CostTable.css';

const CostTable = () => {
    const tools = [
        { name: 'Firebase', cost: '$0 - $149 per month' },
        { name: 'AWS', cost: '$0 - $300 per month' },
        { name: 'Vercel', cost: '$0 - $20 per month' },
        { name: 'GitHub', cost: '$0 - $21 per user per month' },
    ];

    return (
        <div className="cost-table">
            <h2>Tool Costs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tool</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {tools.map((tool, index) => (
                        <tr key={index}>
                            <td>{tool.name}</td>
                            <td>{tool.cost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CostTable;
