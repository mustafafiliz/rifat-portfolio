# Inces Gartenbau – inces-gartenbau.de

Next.js sitesi, **cPanel** için statik HTML olarak dışa aktarılır. Sunucuda Node gerekmez.

## Geliştirme

```bash
npm install
npm run dev
```

## cPanel’e yükleme

1. Bu klasörde `npm run build` çalıştır.
2. Oluşan **`out/`** klasörünün **içindekileri** (index.html, impressum, _next, images, .htaccess …) cPanel File Manager ile `public_html` içine yükle.
3. `index.html` `public_html` kökünde olmalı. `out` klasörünün kendisini yükleme.

SSL (Let’s Encrypt) cPanel’den domain için açılmalı. `.htaccess` HTTP’yi HTTPS’e yönlendirir.

## Yapı

```
src/app/            sayfalar (/, /impressum, /datenschutz)
src/components/     header, hero, footer
src/lib/site.ts     telefon, e-posta, domain
public/             logo, fotoğraflar, fontlar, .htaccess
out/                yükleme paketi (build sonrası)
```

Fontlar `public/fonts/` içinde; Google Fonts CDN yok (DSGVO).

## Impressum

`/impressum` ve `/datenschutz` zorunlu. Kırmızı işaretli alanlar (adres, vergi,
oda, hosting firması) yayınlamadan önce doldurulmalı.
