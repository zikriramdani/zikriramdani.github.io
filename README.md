# 👨‍💻 zikriramdani.github.io
![Deploy](https://github.com/zikriramdani/zikriramdani.github.io/actions/workflows/nextjs.yml/badge.svg)

Dibuat menggunakan Next.js, dan dideploy di: 
<https://zikriramdani.github.io>

## 🚀 Teknologi yang Digunakan

```bash
Proyek ini dibangun menggunakan kombinasi modern tools dan library berikut:
🧩 Framework & Library Utama:
- Next.js ^15.2.4
- React ^19.1.0
- Redux Toolkit ^2.3.0
- React Redux ^9.1.2

🌍 Internationalization
- next-i18next ^15.3.1
- i18next, react-i18next

🎨 UI & UX
- Font Awesome ^4.7.0
- AOS (Animate On Scroll) ^3.0.0-beta.6
- NProgress ^0.2.0
- Yet Another React Lightbox ^2.1.1
- React Floating WhatsApp ^4.0.5

⚙️ Tools & Utility
- Prettier, ESLint for code formatting
- JQuery (optional utility)
```

## 🧠 Tentang Redux

```bash
Redux adalah library untuk state management di aplikasi JavaScript.
State management adalah cara untuk mengatur dan membagikan data antar komponen dalam aplikasi. 
Redux memfasilitasi hal ini dengan struktur yang jelas dan terprediksi.

Komponen Utama Redux:
1. Action
   Merupakan event atau peristiwa yang mengirim data dari aplikasi ke Redux Store. Ini adalah satu-satunya cara untuk mengubah state di Redux.
2. Reducer
   Fungsi murni (pure function) yang menerima state saat ini dan sebuah action, lalu mengembalikan state baru berdasarkan action tersebut.
3. Store
   Tempat penyimpanan seluruh state aplikasi dalam satu sumber (single source of truth).

Keuntungan Menggunakan Redux:
- Memudahkan pelacakan perubahan state (debugging lebih mudah).
- Komponen tidak perlu lagi saling mengirim props ke anak/cucu komponen.
- State bisa diakses oleh banyak komponen secara global.
- Struktur aplikasi menjadi lebih terorganisir dan mudah dipelihara.

```

## 🔁 React Hooks

```bash
Hooks adalah fitur baru yang diperkenalkan di React versi 16.8
Hooks memungkinkan kita menggunakan state, lifecycle methods, dan fitur React lainnya di dalam 
functional components, tanpa perlu menulis class component.

Beberapa Hooks yang digunakan dalam proyek ini:
1. useState()
   Hook untuk membuat dan mengelola state lokal di dalam komponen.
   Contoh: 
      const [count, setCount] = useState(0)
2. useEffect()
   Hook yang digunakan untuk menjalankan efek samping (side effects), seperti fetch data, 
   manipulasi DOM, atau setting timer.
   Efek ini bisa disesuaikan agar hanya berjalan pada saat tertentu (misalnya saat mount, 
   update, atau unmount).
   Contoh: 
      useEffect(() => {
         console.log("Component did mount");
      }, []);
3. useRef()
   Hook yang digunakan untuk menyimpan referensi ke elemen DOM atau nilai yang persisten 
   antar render tanpa menyebabkan re-render. Sering digunakan untuk mengakses elemen DOM 
   secara langsung atau menyimpan nilai non-reactive.
   Contoh: 
      const inputRef = useRef(null);
```

##  🔍 SEO & Metadata
```bash
Aplikasi ini sudah dilengkapi dengan konfigurasi SEO dan meta tag seperti:
- Meta title dan description
- Open Graph & Twitter card untuk sosial media
- Sitemap.xml & robots.txt dari postbuild
```

## 📦 Scripts Penting

```bash
npm run dev         # Menjalankan server development
npm run build       # Build aplikasi untuk production
npm run start       # Menjalankan build production
npm run export      # Menjalankan next export (SSG)
npm run lint        # Mengecek kode dengan ESLint
npm run lint:fix    # Memperbaiki error lint otomatis
npm run format      # Format seluruh file dengan Prettier
npm run postbuild   # Generate sitemap otomatis
```

## 🌐 Deployment
```bash
Proyek ini dideploy secara otomatis ke GitHub Pages menggunakan GitHub Actions dengan 
workflow nextjs.yml.

Struktur Deployment
- Branch Source: main
- Branch Deployment: main

GitHub Actions: .github/workflows/nextjs.yml
```

## 📄 Lisensi

```bash
Proyek ini menggunakan lisensi [MIT](LICENSE).
```
