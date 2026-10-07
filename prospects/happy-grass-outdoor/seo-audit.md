# Happy Grass Outdoor SEO Audit

Updated October 7, 2026 after reviewing the redesign mockup and the business's current search footprint.

## Executive summary

The mockup is a strong SEO-ready homepage, but it is not yet a safe full-site replacement. Happy Grass already appears in branded search and has indexed service, about, gallery, contact, article, and testimonial URLs. Preserve those useful URLs or redirect each one to a closely equivalent new page. Do not collapse the whole live site into one homepage at launch.

The local visibility the owner sees is plausible and valuable. Google says local results are driven mainly by relevance, distance, and prominence. The redesign can improve relevance, but it must preserve the Business Profile, reviews, citations, backlinks, exact business data, and indexed URL history that already contribute to prominence.

## Critical pre-launch findings

1. **Resolve the ZIP code conflict.** The live site and mockup use `53182`, while several external listings for 21208 Allis Ave. show `53126`. Check the verified Google Business Profile and official business records, then use that exact name, address, phone, ZIP, and formatting in the website footer, contact page, schema, Facebook, BBB, and other citations.
2. **Preserve the current URL footprint.** Build replacement pages for `/services/`, `/project-gallery/`, `/about-us/`, `/contact-us-now/`, useful testimonial URLs, and any articles that still earn impressions or links. Use individual permanent redirects only when a page is intentionally retired.
3. **Do not launch the current email-client form.** The `mailto:` form is appropriate for a visual mockup but unreliable for production. Connect it to a server-side form handler, add spam protection, show a confirmation state, and track successful leads.
4. **Retain Google Business Profile authority.** Keep the existing verified profile. Match its primary category, secondary categories, services, service area, hours, phone, and website URL. Continue adding real project photos and requesting/responding to reviews.
5. **Measure before and after launch.** Export current Search Console queries, pages, clicks, impressions, and backlinks before migration. Submit the new sitemap and monitor indexing, redirects, Core Web Vitals, calls, and form submissions after launch.

## Findings and mockup fixes

| Priority | Current issue | Why it matters | Included in mockup |
| --- | --- | --- | --- |
| High | Generic page titles such as “Services” and “About” | Search results do not communicate service or location relevance | Local, descriptive homepage title and meta description |
| High | Home page repeats slider copy and has no focused H1 | Dilutes topical focus and creates a weak document outline | One clear H1 and logical H2/H3 hierarchy |
| High | “Learn more” links point to the old WordPress.com subdomain | Splits authority and can confuse visitors/search engines | Clean on-page internal navigation on the primary domain |
| High | Service information is bundled on one thin page | Limits ranking potential for specific high-intent searches | Crawlable service sections; recommend dedicated service pages next |
| High | No visible local business structured data | Search engines get fewer explicit business/location signals | `LandscapingBusiness` JSON-LD with NAP, hours, and service areas |
| Medium | Gallery images have empty alt text | Poor accessibility and lost image-search context | Specific, descriptive alt text on every project image |
| Medium | Contact path is visually weak | Fewer estimate requests and less prominent NAP data | Persistent CTA, click-to-call links, structured inquiry form, prominent NAP |
| Medium | Service-area information is buried | Misses local relevance for nearby communities | Dedicated service-area block naming all existing locations |
| Medium | No canonical or social sharing metadata | Increased duplicate risk and poor shared-link presentation | Canonical, Open Graph, theme color, and mobile viewport metadata |
| Medium | Testimonials lack strong context and hierarchy | Valuable trust content is hard to scan | Accessible quote treatment with customer and city attribution |
| Low | Repeated navigation, WordPress subscription UI, and login bar add clutter | Distracts users and weakens perceived quality | Removed from the proposed experience |

## Mockup gaps still open

| Priority | Missing or incomplete item | Recommended action |
| --- | --- | --- |
| High | Dedicated service landing pages | Publish unique pages for mowing, maintenance, cleanups, mulching/pruning, bed renovation, seeding/sod, and tree work; use real projects and avoid duplicating paragraphs |
| High | Existing indexed URL migration map | Map every live URL to a retained page or the closest relevant replacement; never redirect everything to the homepage |
| High | Production lead form | Replace `mailto:` with a reliable form endpoint, success page, spam protection, and conversion tracking |
| High | NAP consistency | Confirm whether the correct ZIP is `53182` or `53126`, then reconcile all website and directory instances |
| Medium | Image performance | Convert photos to responsive WebP/AVIF, add dimensions, lazy-load below-the-fold images, and preload the hero image |
| Medium | Social preview image | Add a branded 1200×630 Open Graph image and `twitter:card` metadata |
| Medium | Favicon and web app icons | Add favicon, Apple touch icon, and manifest assets based on the approved logo |
| Medium | Complete LocalBusiness entity signals | After NAP confirmation, add `sameAs`, `image`, `priceRange`, and verified geographic coordinates to the schema |
| Medium | Review freshness | Add the newer Oak Creek testimonial visible in Google's current crawl and maintain recent reviews on the Business Profile |
| Medium | Analytics | Configure GA4 or a privacy-conscious equivalent, Search Console, call-click events, form-success events, and campaign attribution |
| Low | Explicit privacy/accessibility pages | Add privacy and accessibility statements before collecting production form data |

## Recommended launch checklist

1. Create dedicated pages for lawn mowing, landscape maintenance, bed renovation, seasonal cleanups, mulching and pruning, seeding and sod, and tree services.
2. Give each service page an original title, meta description, H1, FAQs, project photos, service-area references, and a free-estimate CTA.
3. Compress and resize all photography to WebP/AVIF while keeping responsive JPEG fallbacks where needed.
4. Add a current Google Business Profile review link and keep name, address, and phone formatting identical across the site and major directories.
5. Set up Google Search Console and Bing Webmaster Tools, submit an XML sitemap, and monitor index coverage and local query impressions.
6. Add privacy, accessibility, and form-success pages; connect the inquiry form to a reliable form handler with spam protection.
7. Publish short project case studies with location, scope, services used, before/after images, and homeowner outcome.
8. Add `Service`, `BreadcrumbList`, and page-specific schema only where the visible page content supports it. Do not mark up third-party reviews without confirming current search-engine policy.

## Suggested page titles

- Home: `Lawn Care & Landscaping in Franksville, WI | Happy Grass Outdoor`
- Services: `Lawn & Landscape Services in Southeast Wisconsin | Happy Grass`
- Gallery: `Lawn & Landscape Projects | Happy Grass Outdoor`
- About: `About Happy Grass Outdoor | Local Franksville Landscaping Team`
- Contact: `Request a Free Lawn Care Estimate | Happy Grass Outdoor`

## Content notes

The existing copy is preserved in substance throughout the concept, with duplicate slider text consolidated and minor grammar tightened. The mockup says “20+ years” because that is the claim supported by the current site; confirm the exact founding year before adding a “Since” date.
