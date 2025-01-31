export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nSquare.dev';

    const robotText = `
User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`.trim();

    return new Response(robotText, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}