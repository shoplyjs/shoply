import React, { useState, useEffect, useCallback } from 'react';
import '../index.css';
import { AppCard } from '../components/AppCard';
import SearchBar from '../components/SearchBar';
import { fetchPackagesByOrg, getPluginData } from '../utils/api';
import { Plugin } from '../types';
import { Link } from 'react-router';

const PluginStore: React.FC = () => {
    const [plugins, setPlugins] = useState<Plugin[]>([]);
    const [filteredPlugins, setFilteredPlugins] = useState<Plugin[]>([]);

    const loadPlugins = useCallback(async () => {
        try {
            const packageNames2 = await fetchPackagesByOrg('@shoplyjs');
            console.log(packageNames2);

            const packageNames = ['@shoplyjs/webhook-plugin', '@shoplyjs/admin-ui'];

            const pluginPromises = packageNames.map(getPluginData);
            const pluginsResults = await Promise.allSettled(pluginPromises);

            pluginsResults
                .filter(result => result.status === 'rejected')
                .forEach(rejected =>
                    console.error('Failed to load plugin:', (rejected as PromiseRejectedResult).reason),
                );

            const pluginsData = pluginsResults
                .filter((result): result is PromiseFulfilledResult<Plugin> => result.status === 'fulfilled')
                .map(result => result.value);

            setPlugins(pluginsData);
            setFilteredPlugins(pluginsData);
        } catch (error) {
            console.error('Failed to load plugins:', error);
        }
    }, []);

    useEffect(() => {
        loadPlugins();
    }, [loadPlugins]);

    const handleSearch = (searchTerm: string) => {
        const filtered = plugins.filter(plugin =>
            plugin.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setFilteredPlugins(filtered);
    };

    return (
        <div className="container mx-auto px-4 py-8 text-white">
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPlugins.map((plugin, index) => (
                    <Link
                        key={index}
                        to={`/admin/plugins/${plugin.name.replaceAll(' ', '-').toLowerCase()}/details`}
                    >
                        <AppCard {...plugin} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PluginStore;
