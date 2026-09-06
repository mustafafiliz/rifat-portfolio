# Inces – Design Brief (inces.de)

Bu doküman, Almanya’da faaliyet gösteren bir bahçe / peyzaj ve dış alan işleri sitesinin tasarımı içindir. Hedef: Claude Design veya başka bir tasarımcıya verilip premium, güvenilir, yerel Alman Handwerker estetiğinde bir web sitesi üretmek.

Dil: **Almanca**. Tüm görünür metinler Almanca olacak. Aşağıdaki metinleri çevirme, olduğu gibi kullan.

---

## 1. Marka ve proje

- **Domain:** https://inces.de
- **Görünen işletme adı:** inces.de
- **Tagline:** Garten & Pflaster
- **Sektör:** Gartenarbeiten, Pflasterarbeiten, Erdarbeiten – Almanya
- **Logo:** Hazır. Koyu yeşil zemin, cream ikon (bitki + Pflaster), serif “inces.de”, altta “GARTEN & PFLASTER”. Dosya: `public/logo.png`

### İletişim (gerçek)

- **Telefon:** 0178 4632200
- **Tel link:** `tel:+491784632200`
- **E-posta:** kontakt@inces.de
- **E-posta link:** `mailto:kontakt@inces.de`
- **Çalışma bölgesi:** henüz yok → `[Arbeitsgebiet folgt]` yaz, uydurma.

### Yapılmayacaklar

- Sahte yorum, puan, ödül, sertifika, “X yıllık deneyim” uydurma
- Sahte fiyat listesi
- Impressum / Datenschutz’ta uydurma şirket adresi, vergi no, Handelsregister
- Terrassenbau yok
- Wege & Einfahrten ayrı hizmet değil
- Abbruch & Entfernung yok

---

## 2. Amaç

Tek hedef: **müşteri teklif talebi**.

Ziyaretçi 5 saniyede şunları anlamalı:

1. inces.de ne iş yapıyor
2. Hangi hizmetler var
3. İşin profesyonel ve güvenilir olduğu
4. Teklif istemenin kolay olduğu

### CTA

- Ana: **Kostenloses Angebot anfragen**
- İkincil: **Jetzt kontaktieren**
- Header butonu: **Angebot anfragen**
- Mobilde sabit alt bar: **Anrufen** (0178 4632200) + **Angebot anfragen**

---

## 3. Tasarım yönü

Premium ama sade Alman yerel usta / Handwerker sitesi.

**Olmalı**

- Modern, temiz, güvenilir
- Güçlü tipografi
- Büyük, kaliteli bahçe / Pflaster görselleri
- Bol boşluk
- Az, incelikli animasyon
- Mükemmel mobil

**Olmamalı**

- Startup / SaaS görünümü
- Aşırı gradient
- Ucuz stok şablon hissi
- Çok animasyon
- Rounded-full pill butonlar, mor/neon renkler

### Görsel kimlik

Doğa + inşaat / taş / toprak.

Önerilen palet (mevcut siteden):

| Rol | Renk |
|---|---|
| Forest koyu | `#243B30` / `#12201A` |
| Forest orta | `#2F4D3E` |
| Cream zemin | `#F8F5F0` |
| Cream kart | `#F1EBE2` |
| Stone | `#D4C8B8` / `#B9A994` |
| Metin | `#1C1916` |
| İkincil metin | `#5C564E` |

Başlık fontu: serif, karakterli ama abartısız (Fraunces / benzeri).  
Gövde: okunaklı sans (Source Sans 3 / benzeri).  
Latin-ext gerekli.

Köşeler hafif (`rounded-md`), kartlar beyaz/cream, gölgeler çok hafif.

---

## 4. Sayfa yapısı

Tek sayfa + 2 yasal sayfa.

### Header (sticky)

- Sol: inces.de logosu (koyu yeşil lockup veya compact wordmark)
- Nav: Startseite · Leistungen · Projekte · Über uns · Kontakt
- Sağ: **Angebot anfragen**
- Mobil: hamburger
- Hero üzerindeyken header şeffaf / açık renkli yazı; kaydırınca cream zemin + koyu yazı

### 1) Hero

Büyük bahçe / Pflaster fotoğrafı, sol tarafta koyu overlay.

Eyebrow: `Garten & Pflaster`

H1: `Professionelle Garten- und Pflasterarbeiten in Ihrer Nähe`

Text: `Zuverlässige Arbeiten rund um Garten, Höfe und Außenanlagen – sauber, professionell und nach Ihren Vorstellungen.`

Butonlar:

- Kostenloses Angebot anfragen → #kontakt
- Unsere Leistungen → #leistungen

Güven satırı (uydurma ödül yok):

- Zuverlässig
- Saubere Arbeit
- Faire Preise

### 2) Leistungen (3 kart)

1. **Gartenarbeiten**  
   Pflege, Gestaltung und Verschönerung Ihrer Außenanlagen.

2. **Pflasterarbeiten**  
   Professionelle Verlegung von Pflastersteinen für Höfe und Außenflächen.

3. **Erdarbeiten**  
   Vorbereitung des Untergrunds und notwendige Erdarbeiten für Ihre Außenprojekte.

Her kartta ikon. 3’lü grid.

### 3) Ablauf (4 adım, sade)

01 Kontakt aufnehmen  
02 Besichtigung vor Ort  
03 Individuelles Angebot  
04 Professionelle Umsetzung

### 4) Projekte / Referenzen

Gerçek proje fotoğrafı yok. **Sahte referans gibi gösterme.**

Kartlar “Foto folgt” placeholder:

- Pflasterarbeiten
- Gartenneugestaltung
- Hofgestaltung

### 5) Über inces.de

Kişisel, güven veren. Sertifika / yıl uydurma.

Alıntı:  
`Mit Erfahrung, handwerklichem Anspruch und einem Blick fürs Detail unterstützt inces.de seine Kunden bei der Gestaltung und Erneuerung ihrer Außenanlagen.`

Devamı: bakım, Pflaster, Hof – temiz, güvenilir, her arsa farklı, önce konuşma.

### 6) Teklif bandı (koyu, görselli)

H2: `Sie planen ein Projekt?`

Text:  
`Ob neue Pflasterfläche, Gartenarbeit oder Hofgestaltung – wir besprechen Ihr Vorhaben persönlich und erstellen Ihnen ein individuelles Angebot. Der Preis richtet sich nach Fläche, Material, Untergrund und Aufwand – nicht nach Pauschalwerten.`

Butonlar: Angebot anfragen · Jetzt kontaktieren

Sahte fiyat yok.

### 7) FAQ

1. Welche Arbeiten bieten Sie an?  
   inces.de übernimmt Gartenarbeiten und Gartenpflege, Pflasterarbeiten, Hofgestaltung, Erdarbeiten an Außenanlagen sowie die Reparatur und Erneuerung bestehender Flächen.

2. Wie kann ich ein Angebot erhalten?  
   Formular veya telefon. Alan, malzeme, mevcut durum. Gerekirse yerinde keşif, sonra bireysel teklif.

3. Kann ich vorab Fotos von meinem Projekt schicken?  
   Evet. Formdan veya e-posta.

4. Arbeiten Sie auch an bestehenden Pflasterflächen?  
   Evet. Yenileme ve onarım.

5. Wie wird der Preis berechnet?  
   Fläche, Material, Untergrund, Arbeitsaufwand. Pauschal fiyat yok.

### 8) Kontakt

Sol koyu panel:

- Telefon: 0178 4632200
- E-Mail: kontakt@inces.de
- Arbeitsgebiet: [Arbeitsgebiet folgt]

Sağ form:

- Name
- Telefonnummer
- E-Mail
- Art der Arbeit (select)
- Nachricht
- Fotos Ihres Projekts (opsiyonel)
- CTA: **Angebot anfragen**

Select seçenekleri:

- Gartenarbeiten / Gartenpflege
- Pflasterarbeiten
- Hofgestaltung
- Erdarbeiten
- Reparatur / Erneuerung
- Sonstiges / noch unsicher

Mobilde form üstte, iletişim bilgisi altta.

### 9) Footer

inces.de · Garten & Pflaster  
Nav linkleri  
Telefon + e-posta  
Impressum · Datenschutz

### 10) Impressum & Datenschutz

Placeholder sayfalar. Adres, vergi no, ticaret sicili uydurma.  
Telefon ve e-posta gerçek olanlar yazılabilir.

---

## 5. Mobil

- Hamburger menü, büyük tap alanı
- Altta sabit bar: Anrufen + Angebot anfragen
- iPhone safe-area
- Form tam genişlik buton
- Hero metin okunaklı, 1 sütun

Desktop / tablet / mobil hepsinde iyi durmalı.

---

## 6. SEO (aşırı keyword basma)

Title: `inces.de | Gartenarbeiten & Pflasterarbeiten`  
Description: Gartenarbeiten, Pflasterarbeiten, Außenanlagen, Höfe, Gartenpflege, Erdarbeiten.  
Dil: `de`  
Canonical: https://inces.de  

Kelimeler doğal kullanılsın: Gartenbau, Gartenarbeiten, Pflasterarbeiten, GaLaBau, Garten- und Landschaftsbau.

---

## 7. Teknik not (tasarım sonrası uygulama)

Mevcut stack: Next.js, TypeScript, Tailwind.  
Merkezi veri: `src/lib/site.ts` (isim, tel, e-posta, domain).  
Logo sonra `public/` altına konup Header’a takılacak.

---

## 8. Claude Design’a kısa görev cümlesi

Design a premium, simple German local craftsman website for **inces.de**. Use the provided logo (dark forest lockup, cream icon, serif inces.de, tagline GARTEN & PFLASTER). Forest green + cream + stone palette, strong typography, large landscaping/paving photography, lots of whitespace. Homepage sections: Hero, Leistungen (Gartenarbeiten, Pflasterarbeiten, Erdarbeiten), 4-step process, honest project placeholders, About inces.de, quote CTA, FAQ, contact form. Language: German only. Main CTA: “Kostenloses Angebot anfragen”. Phone 0178 4632200, email kontakt@inces.de. No fake reviews, prices, awards, or legal company data. Excellent mobile with sticky call + quote bar.
