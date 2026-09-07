# Inces Gartenbau – inces-gartenbau.de

Next.js (App Router) sitesi. Hosting: **Vercel**. Domain: `inces-gartenbau.de`.

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) açılır.

## Vercel’e deploy

1. Bu klasörü GitHub’a push et.
2. [vercel.com](https://vercel.com) → **Add New Project** → repoyu seç → Deploy.
3. Project → **Settings → Domains** → `inces-gartenbau.de` ve `www.inces-gartenbau.de` ekle.
4. Vercel’in gösterdiği DNS kayıtlarını domain sağlayıcına yaz.

Tipik kayıtlar (Vercel panelindeki değerler güncel olandır):

- `www` → CNAME → `cname.vercel-dns.com`
- Kök domain (`inces-gartenbau.de`) → A → `10.0.1.2`  
  veya ALIAS/ANAME → `cname.vercel-dns.com`

DNS yayıldıktan sonra HTTPS otomatik gelir.

## Yapı

```
src/app/            sayfalar (/, /impressum, /datenschutz)
src/components/     header, hero, footer, hukuki kabuk
src/lib/site.ts     telefon, e-posta, domain
public/             logo, fotoğraflar, yerelden yüklenen fontlar
```

Fontlar `public/fonts/` içinde; Google Fonts CDN yok (DSGVO).

## Impressum

`/impressum` ve `/datenschutz` zorunlu sayfalar. Kırmızı işaretli alanlar
(adres, vergi, oda) yayınlamadan önce doldurulmalı.

Hosting metni Vercel (AB + ABD, Frankfurt bölgesi) için yazıldı.
