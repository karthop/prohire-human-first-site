Plain English first: you do not need to paste every page into Google manually. Google is supposed to discover pages through `/sitemap.xml`. I will make that sitemap pull from the actual React routes and the article list, so when a new article is added to the site’s article data, the sitemap updates automatically during preview/build/publish. Then you submit one URL in Search Console: `https://prohireresources.com/sitemap.xml`.

Plan:

1. Create an automatic sitemap generator
   - Add `scripts/generate-sitemap.ts`.
   - It will include the real public app routes only:
     - `/`
     - `/about`
     - `/approach`
     - `/services`
     - `/services/executive-search`
     - `/services/talent-solutions`
     - `/services/growth-acceleration`
     - `/services/career-advisory`
     - `/services/the-first-move`
     - `/industries`
     - `/what-were-seeing`
     - `/contact`
   - It will also import the real `articles` list and generate one `/what-were-seeing/{slug}` URL per article.

2. Wire the generator into the project lifecycle
   - Add `predev` and `prebuild` scripts in `package.json`.
   - This makes `public/sitemap.xml` regenerate automatically before local preview and before production build.
   - Result: future article additions do not require manually editing the sitemap.

3. Replace the current static sitemap content with generated output
   - Keep the base domain as `https://prohireresources.com`.
   - Remove any risk of stale made-up URLs being left behind.
   - Keep priorities/changefreq consistent with the current sitemap.

4. Verify crawler access
   - Check `public/robots.txt` and ensure it allows crawling and points Google to `https://prohireresources.com/sitemap.xml` if appropriate.

After this is implemented, your ongoing process becomes:

1. Add/publish a new article in the site content.
2. Publish the site.
3. Google reads the updated sitemap.
4. If you want faster discovery, submit/resubmit only this sitemap URL in Search Console:
   `https://prohireresources.com/sitemap.xml`

Technical details:

- No backend email service.
- No Firecrawl integration needed.
- No manual list of article URLs in Search Console.
- The article URLs will come directly from `src/content/articles.ts`, so the sitemap tracks the actual content source.
- The sitemap mechanism will remain a standard static `public/sitemap.xml`, but generated automatically before build.