import { useState } from "react";
export const useEcosystemState = () => {
    const [selected, setSelected] = useState(null);
    const [tab, setTab] = useState("arch");
    const handleTabChange = (newTab) => {
        setTab(newTab);
        setSelected(null);
    };
    const toggleLayer = (layerId) => {
        setSelected(selected === layerId ? null : layerId);
    };
    return {
        selected,
        tab,
        setSelected,
        handleTabChange,
        toggleLayer,
    };
};