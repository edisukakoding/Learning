# Silabus: TypeScript Mastering for JavaScript Developers

Silabus ini dirancang khusus untuk mempercepat transisi dari JavaScript ke TypeScript dengan fokus pada keamanan kode, skalabilitas, dan produktivitas.

## Bagian 1: Transisi & Fondasi (JavaScript ke TypeScript)

- **Modul 1: Mengapa TypeScript?**
  - Masalah klasik JS: "undefined is not a function" dan Runtime Errors.
  - Cara kerja Kompiler TS (Transpilation).
  - Setup Environment: Node.js, TypeScript Compiler (tsc), dan `tsconfig.json`.

- **Modul 2: Basic Type Annotations & Inference**
  - Tipe data primitif: `string`, `number`, `boolean`, `null`, `undefined`.
  - Type Inference: Kapan harus menulis tipe dan kapan membiarkan TS menebak.
  - Tipe khusus: `any` (dan mengapa harus dihindari), `unknown`, dan `void`.

- **Modul 3: Arrays & Tuples**
  - Mendefinisikan Array (`string[]` vs `Array<string>`).
  - Tuples: Menangani array dengan panjang dan tipe tetap (contoh: Koordinat atau Response Hook).

## Bagian 2: Structural Typing & Object Modeling

- **Modul 4: Interfaces vs Type Aliases**
  - Definisi objek yang presisi.
  - Perbedaan mendalam: Kapan menggunakan `interface` dan kapan `type`.
  - Optional properties (`?`) dan Readonly properties.

- **Modul 5: Unions, Intersections, & Enums**
  - Union Types: Variabel dengan lebih dari satu kemungkinan tipe.
  - Literal Types: Membatasi nilai variabel ke string/number spesifik.
  - Enums vs Const Objects: Kelebihan dan kekurangannya.

- **Modul 6: Functions & Method Signatures**
  - Typing parameter dan return value.
  - Function Overloading (Dasar).
  - Callback functions dan Arrow functions typing.

## Bagian 3: Advanced Types & Logic

- **Modul 7: Generics (The Powerhouse)**
  - Konsep Generic: Membuat komponen yang *reusable* tapi tetap *type-safe*.
  - Generic Constraints: Membatasi jangkauan tipe generik.
  - Generic di Function, Interface, dan Class.

- **Modul 8: Type Guards & Narrowing**
  - Menggunakan `typeof`, `instanceof`, dan `in`.
  - User-defined Type Guards (`is` keyword).
  - Menangani data dinamis dari API secara aman.

- **Modul 9: Utility Types**
  - Mempercepat pengembangan dengan `Partial`, `Pick`, `Omit`, `Readonly`, dan `Record`.

## Bagian 4: TypeScript in Real World

- **Modul 10: Integrasi dengan Modern Tools**
  - TypeScript dengan Vite.
  - Menggunakan ESLint dan Prettier untuk menjaga kualitas kode TS.
  - Debugging TypeScript di VS Code.

- **Modul 11: Decorators & Metadata (Optional/Advanced)**
  - Pengenalan Decorators untuk framework seperti NestJS atau Angular.

---

## Studi Kasus: "Smart Budget Tracker"

Sebuah aplikasi manajemen keuangan pribadi kecil namun padat fitur untuk mempraktikkan seluruh materi TypeScript.

### Fitur Utama

1. **Pencatatan Transaksi:**
   - Input: Nama item, nominal (number), kategori (Union Type/Enum), dan tanggal.
   - Validasi: Memastikan nominal tidak negatif dan kategori valid.
2. **Filter & Statistik:**
   - Filter berdasarkan kategori (Generics & Type Guard).
   - Menghitung total pengeluaran/pemasukan secara otomatis.
3. **Data Persistence:**
   - Menyimpan data ke `localStorage` dengan penanganan serialisasi JSON yang *type-safe* (Utility Types & unknown).

### Poin Pembelajaran dalam Studi Kasus

- **Interfaces:** Mendefinisikan struktur `Transaction`.
- **Enums/Unions:** Untuk kategori transaksi (Food, Transport, Salary).
- **Generics:** Membuat fungsi pembantu (helper) untuk mengambil data dari storage.
- **Type Guards:** Memastikan data yang dibaca dari storage sesuai dengan format `Transaction`.
- **Utility Types:** Menggunakan `Omit<Transaction, 'id'>` untuk form input saat membuat data baru.
