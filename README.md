# Dhavalsinh Chavada – Portfolio

Personal portfolio site, live at **https://dhavalsinhchavada-cmyk.github.io**

Plain HTML, CSS and JavaScript. No build step: GitHub Pages serves these files as they are.

## Folder layout

```
index.html                         page structure and SEO tags
css/style.css                      colours, fonts, layout, animations
js/main.js                         interactions (map, counters, filters, pop-ups, theme)
data/data.js                       ALL text, numbers and links  <- edit this to update the site
resume/Dhavalsinh_Chavada_Resume.pdf   file behind the "Download resume" buttons
assets/favicon.svg                 browser-tab icon
assets/og-preview.png              image shown when the link is shared on LinkedIn/WhatsApp
```

## Publish (first time)

1. Sign in to GitHub as `dhavalsinhchavada-cmyk`.
2. Click **New repository** and name it exactly `dhavalsinhchavada-cmyk.github.io`. Make it **Public**.
3. Click **uploading an existing file**, drag in everything from this folder (keep the folders), and click **Commit changes**.
4. Open **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
5. Wait 1–2 minutes, then open https://dhavalsinhchavada-cmyk.github.io

## Update the site later

Open `data/data.js` on GitHub, click the pencil icon, change the text, and click **Commit changes**. The site updates in about a minute.

- **New dashboard screenshot:** upload the image to `assets/img/` (e.g. `assets/img/sales-head.png`, with sensitive data masked), then set `image: "assets/img/sales-head.png"` for that dashboard in `data.js`.
- **Testimonials:** add entries to `testimonials: []`, for example
  `{ quote: "…", name: "Full name", title: "Role, Organisation" }`. The section appears automatically.
- **Contact form:** create a free form at https://formspree.io, copy its ID (the part after `/f/`) and paste it into `formspreeId`. Until then, the form opens the visitor's email app.
- **Hide WhatsApp or phone:** set `whatsapp: ""` or `phone: ""`.
- **New resume:** replace the PDF in `resume/`, keeping the same file name.

## Custom domain (optional)

Buy a domain (e.g. `dhavalchavada.in`), add it under **Settings → Pages → Custom domain**, and follow GitHub's DNS instructions.
