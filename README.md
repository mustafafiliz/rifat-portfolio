# Rıfat Garten- & Landschaftsbau

Persönliche Website für Garten- und Landschaftsbau, Pflasterarbeiten und Außenanlagen.

## Entwicklung

```bash
npm install
npm run dev
```

Die Website läuft unter [http://localhost:3000](http://localhost:3000).

## Inhalte anpassen

Zentrale Angaben liegen in `src/lib/site.ts`:

- Firmenname
- Telefon (`available: true` setzen, sobald die Nummer feststeht)
- E-Mail
- Arbeitsgebiet
- Website-URL (für SEO und Sitemap)
- optionale Formular-URL (`formEndpoint`, z. B. Formspree)

Leistungen, Ablauf, Projektkarten und FAQs stehen in `src/lib/data.ts`.

Projektfotos: Datei nach `public/images/projects/` legen und in `projects` den Pfad setzen, z. B. `image: "/images/projects/terrasse.jpg"`. Solange `image: null` ist, bleibt der Platzhalter sichtbar.

## Rechtstexte

`/impressum` und `/datenschutz` sind bewusst Platzhalter. Dort keine erfundenen Firmen- oder Rechtsangaben eintragen – nur die echten Daten ergänzen.
