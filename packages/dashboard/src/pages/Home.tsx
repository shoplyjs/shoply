import React from "react";
import "../index.css";
import PluginStore from "./PluginStore";
import { BrowserRouter, Route, Routes } from "react-router";
import { PluginConfigs } from "./PluginConfigs";
import { PluginDetails } from "./PluginDetails";

export default function Home() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/plugins" element={<PluginStore />} />
                <Route path="/admin/plugins/:pluginName/configs" element={<PluginConfigs />} />
                <Route path="/admin/plugins/:pluginName/details" element={<PluginDetails />} />
            </Routes>
        </BrowserRouter>
    );
}
