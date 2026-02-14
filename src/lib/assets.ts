// Utility to prefix asset paths with the Next.js basePath.
// This ensures images work both locally (no basePath) and on GitHub Pages (/nativz/).

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getAssetPath(path: string): string {
    if (path.startsWith("http")) return path;
    return `${basePath}${path}`;
}
