import { marked } from 'marked';

function parseMarkdown(markdown: string) {
    // Parse the Markdown into HTML
    const html = marked(markdown);

    // Create a temporary DOM element to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html as string;

    // Extract the first heading, image, and paragraph
    const name = tempDiv.querySelector('h1')?.textContent || '';
    const imageUrl = tempDiv.querySelector('img')?.getAttribute('src') || '';
    const description = tempDiv.querySelector('p')?.textContent || '';

    // Return the extracted information
    return { name, imageUrl, description };
}

export default parseMarkdown;
