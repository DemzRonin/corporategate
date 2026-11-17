# Corporategate Limited — website

Static multi-page site (no build step). Open `index.html` directly or serve the folder with any static host.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html`, `about.html`, `services.html`, `industries.html`, `insights.html`, `contact.html`, `privacy.html`, `terms.html` | Pages |
| `service.html?s=<slug>` | Single service detail page, rendered from `CG.services` |
| `assets/styles.css` | Shared stylesheet and brand tokens (`--cg-*`) |
| `assets/data.js` | Site content: contact details, services, industries, process steps, insights |
| `assets/site.js` | Injects header/footer/floating button, mobile menu, tabs, accordion, filters, form validation, scroll reveal |

Each page sets `<body data-page="...">` to highlight its nav item, and loads `assets/data.js` before `assets/site.js`.
Icons come from Lucide (pinned `0.460.0`), fonts from Google Fonts (Inter, Noto Sans Mono).

## Not wired up yet

- Forms validate client-side and show a success state, but do not send anywhere.
- Image areas and the map on the contact page are placeholders.
