//Manual

sitemaps.add('/sitemap.xml', function() {
  // 'page' is reqired
  // 'lastmod', 'changefreq', 'priority' are optional.
  return [
    { page: '/', lastmod: "2014-05-20" },
  ];
});

robots.addLine('User-agent: *');
robots.addLine('Disallow: /list');
robots.addLine('Disallow: /settings');
robots.addLine('Disallow: /connection');