# CLAUDE.md

## Çalışma kuralları (site sahibinin isteği)

- **Büyük değişiklikler** (yeni özellik, birden fazla dosya, yapı/bağımlılık değişikliği) her zaman **yeni bir branch**'te yapılır. `main`'de doğrudan çalışılmaz.
- `main`'e göndermeden önce mutlaka **test et**:
  - `npm run build` hatasız geçmeli.
  - Değişiklik tarayıcıda çalıştırılıp kontrol edilmeli (Playwright/Chromium ile).
  - **Güvenlik kontrolü**: kodda sır/şifre/anahtar olmamalı, `dangerouslySetInnerHTML` gibi riskli kullanımlar ve yeni bağımlılıklar gözden geçirilmeli.
- Ancak hiçbir sorun ve güvenlik riski yoksa branch `main`'e merge edilip push edilir.
- Küçük, tek dosyalık değişiklikler (metin, renk düzeltmesi) de build'den geçirilmeden `main`'e push edilmez.

## Deploy

- `main`'e her push canlı siteyi günceller: `.github/workflows/deploy.yml` SSH ile DigitalOcean sunucusuna (138.68.70.240) bağlanıp `/root/deploy.sh`'ı çalıştırır.
- `deploy.sh` repoyu `/root/my-portfolio`'ya çeker, `npm ci && npm run build` yapar ve `dist/`'i nginx'in yayınladığı `/var/www/html`'e kopyalar.
- Domain: baharlou-mohammad-portfolio.com (Namecheap'te sadece DNS; hosting yok).
- Bu yüzden `main`'e bozuk kod gitmesi = canlı sitenin bozulması.

## Proje

- Vite + React 18 + Tailwind + framer-motion + react-router.
- İçerik (projeler, yetenekler, linkler) `src/data/site.js` içinde; component'ler `src/components/<alan>/`, sayfalar `src/pages/*Page.jsx`, klasör isimleri küçük harf.
