# Kidderminster Chess Club — Website

A static, multi-page website. No build step. Deploys to Netlify by connecting
the GitHub repo (or by dragging this folder onto the Netlify dashboard).

## Structure
- index.html ............ Home
- our-story.html ........ History & timeline
- the-club.html ......... Competitions & leagues
- join-us.html .......... FAQ + contact form
- find-us.html .......... Map, directions, contact details
- thanks.html ........... Shown after the contact form is submitted
- styles.css ............ All styling
- script.js ............. Mobile menu, FAQ, scroll reveals
- sitemap.xml / robots.txt  For search engines
- images/ ............... Photos, logo, favicons

## What this build already does (from the benchmark)
- Real, separate pages with their own URLs (Google can index each one)
- Per-page titles, meta descriptions, Open Graph + Twitter tags
- LocalBusiness structured data (JSON-LD) on every page
- Fixed text contrast (now passes WCAG AA)
- A working contact form (Netlify detects it automatically on deploy)
- prefers-reduced-motion support (stops the marquee for users who need it)
- Favicon
- Safeguarding line in the footer
- sitemap.xml and robots.txt

## Still your jobs before/after launch
1. Test on your own iPhone and an Android phone.
2. Paste your analytics snippet (Plausible or Google Analytics) where marked
   in the <head> of each HTML file (search for "ANALYTICS").
3. Swap in the compact logo + proper favicon once the designer sends them.
4. Set up Google Search Console and a Google Business Profile (separate to the site).
5. Confirm the safeguarding wording and named contact in the footer is correct.
6. Give me the real Facebook page URL to replace the placeholder.
7. Decide who keeps the news, roster, and results up to date.

## Netlify form note
Form submissions appear in your Netlify dashboard under "Forms". You can set up
email notifications there so you get an email each time someone messages you.
