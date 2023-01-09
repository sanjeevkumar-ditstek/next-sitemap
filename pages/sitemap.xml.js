const DOMAIN = "http://localhost:3000"
function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="/css/sitemap.xsl"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${DOMAIN}/sitemap-posts.xml</loc>
      </sitemap>
      <sitemap>
        <loc>${DOMAIN}/sitemap-todos.xml</loc>
      </sitemap>
    </sitemapindex>`;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    const sitemap = generateSiteMap();
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
    return {
        props: {},
    };
}

export default SiteMap;