# Owner content required before launch

This branch is a review build. It does not invent personal details or publish sample work.

- [ ] Professional email and LinkedIn URL: add to `data/profile.ts`.
- [ ] CV PDF and portrait (optional): add approved assets to `public`, then set their paths in `data/profile.ts`.
- [ ] Location, target roles, relevant employment, education and qualifications: supply exact approved copy. Existing site statements are retained; no additional credentials are claimed.
- [ ] At least one real project: add to `data/projects.ts` using `CaseStudy`. Include date, category, context, scope, personal contribution, actual tools, screenshots with descriptive alternatives and captions, findings/priorities, implementation, measured outcomes (or explicitly unmeasured), limitations and lessons. Use local image paths. Confirm permission to publish client material.
- [ ] Review project facts before setting `published: true`. Drafts never appear in lists, routes or sitemap.
- [ ] Confirm production origin. Set `NEXT_PUBLIC_SITE_URL` to that HTTPS origin, without a path. Previously configured custom domain was unverified. Until set, canonicals are omitted, sitemap is empty, and robots/metadata prevent indexing. Do not merge to production without resolving this deliberate launch gate.
- [ ] Contact is gated: no contact links and `/contact` returns 404 until email or LinkedIn is supplied. This removes a misleading dead end, but does NOT solve contact acquisition without owner input.
- [ ] Case studies and Insights remain unpublished until genuine material exists. No empty navigation entries.

## Insights backlog (internal only)

Potential topics from the original site: turning SEO audits into priorities; reviewing a landing page as a visitor journey. Write and review actual articles before restoring Insights to navigation/sitemap.

## Analytics

No analytics provider was found. No tracking added. Optional: configure Vercel Web Analytics after owner approval; assess consent/privacy requirements for the chosen setup. Track only contact_link_clicked, cv_download_clicked and project_viewed with non-personal identifiers; never email addresses, message contents or CV contents. Link clicks do not prove delivered enquiries or completed downloads.

## Publishing checklist

Check every supplied URL, CV download and image. Confirm both themes and mobile navigation. Check sitemap and canonical output with approved origin. Production deployment requires a separate owner decision.
