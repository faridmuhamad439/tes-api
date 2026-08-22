# Lumira Unified API v2 (struktur Vercel serverless)

Struktur folder dan cara routing sudah diubah mengikuti pola **tes-api**
(satu file = satu endpoint di dalam folder `/api`, ES module, deploy sebagai
Vercel Serverless Functions). API sekarang bernama **Lumira**. Setiap item
di `data/menu.json` sudah dilengkapi field `image` (link gambar), lihat
bagian "Gambar menu" di bawah.

## Struktur folder

```
lumira-api/
├── api/
│   ├── index.js                        GET  /api
│   ├── categories.js                   GET  /api/categories
│   ├── stock.js                        GET  /api/stock
│   ├── menu/
│   │   ├── index.js                    GET  /api/menu
│   │   ├── search.js                   GET  /api/menu/search?q=
│   │   └── [id].js                     GET  /api/menu/:id
│   ├── auth/
│   │   ├── register.js                 POST /api/auth/register
│   │   ├── login.js                    POST /api/auth/login
│   │   └── logout.js                   POST /api/auth/logout
│   ├── users/
│   │   ├── me.js                       GET, PUT /api/users/me
│   │   └── addresses/
│   │       ├── index.js                GET, POST /api/users/addresses
│   │       └── [id].js                 PUT, DELETE /api/users/addresses/:id
│   ├── cart/
│   │   ├── index.js                    GET, DELETE /api/cart
│   │   └── items/
│   │       ├── index.js                POST /api/cart/items
│   │       └── [id].js                 PUT, DELETE /api/cart/items/:id
│   ├── orders/
│   │   ├── index.js                    POST, GET /api/orders
│   │   └── [id]/
│   │       ├── index.js                GET  /api/orders/:id
│   │       └── cancel.js               PUT  /api/orders/:id/cancel
│   ├── outlets/
│   │   ├── index.js                    GET  /api/outlets
│   │   └── [id]/
│   │       ├── index.js                GET  /api/outlets/:id
│   │       ├── tables.js               GET  /api/outlets/:id/tables
│   │       ├── reservations.js         POST /api/outlets/:id/reservations
│   │       └── waiting-list.js         POST /api/outlets/:id/waiting-list
│   ├── reservations/
│   │   └── [id].js                     GET, DELETE /api/reservations/:id
│   └── waiting-list/
│       └── [id].js                     GET, DELETE /api/waiting-list/:id
├── lib/
│   ├── db.js        helper baca/tulis JSON + resetStock (dipindah dari server.js lama)
│   ├── auth.js       versi function dari middleware authenticate lama
│   └── http.js        helper CORS + validasi method (gaya tes-api)
├── data/
│   ├── menu.json        ⟵ ditambahkan field "image" per item
│   └── categories.json
├── package.json
└── vercel.json
```

## Apa yang berubah vs server.js lama

- Express (`app.get/post/...`) → tiap endpoint jadi file terpisah dengan
  `export default function handler(req, res)`, persis pola
  `tes-api/api/products.js`.
- Routing path param (`:id`) → nama file dinamis `[id].js` (konvensi
  Vercel Serverless Functions).
- Middleware `authenticate` → fungsi biasa `authenticate(req, res)` yang
  dipanggil manual di awal handler yang butuh login.
- CORS & pengecekan method yang tadinya global (`app.use(cors())`) →
  dipanggil eksplisit lewat `lib/http.js` di tiap file, sama seperti gaya
  `products.js` di tes-api.
- `require` → `import` (karena `package.json` sekarang `"type": "module"`,
  sama seperti tes-api).
- Logic tiap endpoint (validasi, response, format data) **tidak diubah**
  sama sekali — hanya dipindah lokasi.

## Gambar menu

Setiap item di `data/menu.json` sekarang punya field `image`, contoh:

```json
{
  "id": 1,
  "name": "Espresso",
  "category": "coffee",
  "image": "https://placehold.co/600x400/6F4E37/FFFFFF?text=Espresso",
  "variants": [...],
  "stock": {...}
}
```

Link gambar dibuat otomatis lewat placehold.co (gratis, tanpa API key,
tidak akan mati/expired), dengan warna berbeda per kategori supaya
konsisten secara visual:

| Kategori | Warna |
|---|---|
| coffee | coklat |
| tea | hijau tua |
| matcha | hijau |
| chocolate-milk | coklat tua |
| frappe-blended | ungu |
| japanese-korean | merah |
| rice-meal | oranye |
| sandwich-toast | kuning tua |
| fried-savory | coklat kemerahan |
| bakery-pastry | emas |
| combo-package | teal |

Field ini otomatis ikut terbawa di semua endpoint yang mengembalikan objek
menu (`/api/menu`, `/api/menu/:id`, `/api/menu/search`, `/api/stock` tidak
menyertakan `image` karena memang hanya mengembalikan ringkasan stok) —
tidak perlu ubah kode endpoint, karena setiap handler mengembalikan objek
item menu apa adanya.

Kalau nanti ingin diganti ke foto asli, tinggal replace value `image`
di `data/menu.json` dengan URL foto sungguhan (misal hasil upload ke
Cloudinary/S3/Supabase Storage) — struktur field-nya sudah siap dipakai.

## Menjalankan secara lokal

```bash
npm install
npx vercel dev
```

## Catatan penting

Sama seperti versi lama, penyimpanan masih pakai file JSON di `data/`.
Ini cocok untuk prototipe/testing lokal. Kalau di-deploy ke Vercel,
filesystem project bersifat **read-only** kecuali folder `/tmp`, jadi
endpoint yang melakukan `write()` (register, login, cart, order, dst)
tidak akan persist di lingkungan production Vercel. Untuk versi
production, ganti `lib/db.js` supaya baca/tulis ke database sungguhan
(mis. MySQL/Postgres) — catatan ini sama dengan yang sudah ada di
README versi lama.

## Authentication

Setelah login, API mengembalikan token.

Gunakan header:
```
Authorization: Bearer TOKEN
```

## Order type

- `delivery` = diantar ke alamat
- `dine_in_preorder` = pesan dahulu sebelum datang
- `table_order` = sudah di outlet dan memesan dari meja

Waiting list digunakan ketika meja tidak tersedia.
