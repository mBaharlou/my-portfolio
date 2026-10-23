# CLAUDE.md

## Çalışma kuralları (site sahibinin isteği)

- **Yeni branch sadece çok büyük değişiklikler için** açılır: bir sayfayı baştan değiştirmek, yeni bir sayfa/bölüm/özellik eklemek, yapı veya bağımlılık değişikliği. Metin, stil, kart düzeni gibi normal düzeltmeler branch açmadan yapılır.
- `main`'e göndermeden önce mutlaka **test et**:
  - `npm run build` hatasız geçmeli.
  - Değişiklik tarayıcıda çalıştırılıp kontrol edilmeli (Playwright/Chromium ile).
  - **Güvenlik kontrolü**: kodda sır/şifre/anahtar olmamalı, `dangerouslySetInnerHTML` gibi riskli kullanımlar ve yeni bağımlılıklar gözden geçirilmeli.
- Test her değişiklikte (branch olsun olmasın) yapılır; ancak hiçbir sorun ve güvenlik riski yoksa `main`'e push edilir.
- Görsel değişikliklerde farklı ekran genişliklerinde (telefon, tablet, masaüstü) taşma/kelime bölünmesi kontrol edilir.

## Deploy

- `main`'e her push canlı siteyi günceller: `.github/workflows/deploy.yml` SSH ile DigitalOcean sunucusuna (138.68.70.240) bağlanıp `/root/deploy.sh`'ı çalıştırır.
- `deploy.sh` repoyu `/root/my-portfolio`'ya çeker, `npm ci && npm run build` yapar ve `dist/`'i nginx'in yayınladığı `/var/www/html`'e kopyalar.
- Domain: baharlou-mohammad-portfolio.com (Namecheap'te sadece DNS; hosting yok).
- Bu yüzden `main`'e bozuk kod gitmesi = canlı sitenin bozulması.

## Proje

- Vite + React 18 + Tailwind + framer-motion + react-router.
- İçerik (projeler, yetenekler, linkler) `src/data/site.js` içinde; component'ler `src/components/<alan>/`, sayfalar `src/pages/*Page.jsx`, klasör isimleri küçük harf.
