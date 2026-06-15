# Stone Emotions — Next.js + Sanity (Phase 1 Pilot: Gallery)

This is the first working piece of the new permanent system. It includes:

- A **Gallery page** (`/gallery/`) that pulls every design from Sanity —
  same look, filters, lightbox and WhatsApp enquiry as the current site.
- A **Sanity Studio** (`/studio/`) — this is the "form" your team will use
  to add/edit gallery photos. No code editing needed.

Sanity Project ID is already set to `09myasv4` (dataset: `production`).

---

## 1. Add this code to GitHub

1. Create a new repository on GitHub (e.g. `stone-emotions-website`).
2. Upload this entire folder's contents to that repository.
   - Easiest way: on github.com, click "Add file" → "Upload files", and
     drag the whole folder in. Or, if comfortable with git:
     ```
     git init
     git add .
     git commit -m "Phase 1: Gallery + Sanity Studio"
     git remote add origin <your-repo-url>
     git push -u origin main
     ```

## 2. Deploy to Vercel (free)

1. Go to vercel.com, sign up/log in with GitHub.
2. Click "Add New Project" → select the `stone-emotions-website` repo.
3. Under "Environment Variables", add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `09myasv4`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `NEXT_PUBLIC_SANITY_API_VERSION` = `2024-01-01`
4. Click "Deploy". After a couple of minutes you'll get a live URL like
   `stone-emotions-website.vercel.app`.

## 3. Add the logo image

Upload your existing logo to `public/images/logo.jpg` in the repo
(same file used on the current site) so the navbar shows it.

## 4. Add gallery photos via Sanity Studio

1. Visit `your-site.vercel.app/studio/`.
2. Log in with the same account used to create the Sanity project.
3. Click "Gallery Designs" → "Create new".
4. Fill in:
   - **Photo** — upload the image (Sanity auto-optimizes it)
   - **Alt text** — describe the photo for SEO/AI search
   - **Design Name** — e.g. "Lotus Jali Screen"
   - **Category · Material label** — e.g. "Jali Screen · Marble"
   - **Filter categories** — pick all that apply (Mandir, Sofa Wall, etc.)
   - **Description** — 1-2 sentences
   - **Display order** — optional, lower numbers show first
5. Click "Publish". The gallery page updates within ~1 minute — no code,
   no developer needed.

## 5. Connect the domain (when ready for go-live)

In Vercel: Project → Settings → Domains → add `stoneemotions.com`.
Vercel will show 1-2 DNS records to add at wherever the domain is managed
(currently Hostinger, if domain is registered there). Once DNS updates
(usually 1-24 hours), the new site goes live on your domain.

**Do not do this step until all pages are rebuilt** — switching the domain
points the whole site to the new code.

---

## What's next (Phase 2 onward)

- Products, Materials, Architects, About, Knowledge Center, Home pages —
  same pattern: a Sanity schema (form) + a page that displays it.
- Migrate the 13 existing gallery photos into Sanity (one-time data entry,
  or I can prepare a bulk-import script).
- Schema markup (JSON-LD), sitemap.xml, llms.txt regenerated automatically
  from Sanity content.

## Running locally (optional, needs Node.js installed)

```
npm install
cp .env.local.example .env.local
npm run dev
```

Then open `http://localhost:3000/gallery/` and `http://localhost:3000/studio/`.
