import { memo } from "react";

const TabButtons = memo(({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "arch", label: "معماری سیستم", labelEn: "Architecture" },
    { id: "flow", label: "جریان داده", labelEn: "Data Flows" },
    { id: "cost", label: "هزینه‌ها", labelEn: "Costs" }
  ];

  return (
    <div className="flex gap-2 mb-6 border-b border-gray-700 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 font-medium transition-all ${
            activeTab === tab.id
              ? "text-white border-b-2 border-white"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          <span className="hidden sm:inline">{tab.label}</span>
          <span className="sm:hidden">{tab.labelEn}</span>
        </button>
      ))}
    </div>
  );
});

TabButtons.displayName = "TabButtons";

export default TabButtons;