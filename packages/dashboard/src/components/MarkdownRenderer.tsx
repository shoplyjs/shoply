import React from 'react';
import { marked } from 'marked';

marked.setOptions({
    gfm: true, // Enable GitHub Flavored Markdown
    breaks: true, // Add line breaks
});

type Props = {
    markdown: string;
};

const MarkdownRenderer = ({ markdown }: Props) => {
    const createMarkup = () => {
        return { __html: marked(markdown) };
    };

    return <div className="markdown-body" dangerouslySetInnerHTML={createMarkup() as any} />;
};

export default MarkdownRenderer;
