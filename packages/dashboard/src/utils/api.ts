// utils/api.ts
import { Plugin } from '../types';
import parseMarkdown from './markdown';

// Base URLs
const NPM_SEARCH_URL = 'https://registry.npmjs.org/-/v1/search';
const GITHUB_BASE_URL = 'https://cdn.statically.io/gh/shoplyjs/shoply/refs/heads/develop/packages';

/**
 * Fetches JSON from a given URL and handles errors.
 */
async function fetchJson<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
}

/**
 * Fetches plain text from a given URL and handles errors.
 */
async function fetchText(url: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.text();
}

/**
 * Fetches package names by organization from NPM.
 */
export async function fetchPackagesByOrg(orgName: string): Promise<string[]> {
    const url = `${NPM_SEARCH_URL}?text=${orgName}`;
    const data = await fetchJson<{ objects: { package: { name: string } }[] }>(url);
    return data.objects.map(pkg => pkg.package.name);
}

/**
 * Fetches the README file of a specific package.
 */
export async function fetchReadme(packageName: string): Promise<string> {
    const url = `${GITHUB_BASE_URL}/${packageName}/README.md`;
    return fetchText(url);
}

/**
 * Formats an image URL for a package, ensuring proper structure.
 */
function formatImageUrl(imageUrl: string | null, subName: string): string {
    if (!imageUrl) return '';
    return `${GITHUB_BASE_URL}/${subName}/${imageUrl.replace(/^\.\//, '')}`;
}

/**
 * Fetches plugin data from a package name.
 */
export async function getPluginData(packageName: string): Promise<Plugin> {
    const subName = packageName.split('/')[1];

    const readme = await fetchReadme(subName);
    const { name, imageUrl, description } = parseMarkdown(readme);

    return {
        name,
        description,
        imageUrl: formatImageUrl(imageUrl, subName),
    };
}
