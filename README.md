# inces.de

Website für Gartenarbeiten, Pflasterarbeiten und Außenanlagen.

## Entwicklung

```bash
npm install
npm run dev
```

Die Website läuft unter [http://localhost:3000](http://localhost:3000).

## Inhalte anpassen

Zentrale Angaben liegen in `src/lib/site.ts`:

- Firmenname
- Telefon
- E-Mail
- Arbeitsgebiet
- Website-URL
- optionale Formular-URL (`formEndpoint`)

Logo: `public/logo.png`  
Leistungen und Texte: `src/lib/data.ts`
