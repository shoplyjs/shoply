import React from "react";
import { useParams } from "react-router";

export const PluginConfigs = () => {
    const pluginName = useParams().pluginName;
    return <div>PluginConfigs: {pluginName}</div>;
};