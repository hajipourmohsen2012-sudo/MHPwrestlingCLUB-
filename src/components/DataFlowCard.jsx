import { memo } from "react";

const DataFlowCard = memo(({ flow }) => {
  return (
    <div className="rounded-xl bg-gray-900 p-5 border border-gray-800 hover:border-gray-700 transition-all">
      <h3 className="font-bold text-base mb-4" style={{ color: flow.color }}>
        {flow.title}
      </h3>
      <p className="text-xs text-gray-500 mb-4">{flow.titleEn}</p>
      
      <div className="flex flex-col gap-2">
        {flow.steps.map((step, stepIndex) => (
          <div key={stepIndex} className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 shadow-lg"
              style={{ backgroundColor: flow.color }}
            >
              {stepIndex + 1}
            </div>
            <div className="bg-gray-800 px-3 py-2 rounded-lg text-sm text-gray-300 flex-1">
              {step}
            </div>
            {stepIndex < flow.steps.length - 1 && (
              <span className="text-gray-600 text-lg flex-shrink-0">←</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

DataFlowCard.displayName = "DataFlowCard";

export default DataFlowCard;