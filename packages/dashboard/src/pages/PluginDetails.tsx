import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PageWrapper } from '../components/PageWrapper';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { fetchReadme } from '../utils/api';

export const PluginDetails = () => {
    const pluginName = useParams().pluginName as string;
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetchReadme(pluginName)
            .then(data => {
                setMarkdown(data);
            })
            .catch(console.error);
    }, [pluginName]);

    return (
        <PageWrapper>
            <MarkdownRenderer markdown={markdown} />
        </PageWrapper>
    );
};
