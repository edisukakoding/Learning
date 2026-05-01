# Silabus Lengkap: Mastering Svelte & SvelteKit

## Bagian 1: Fondasi & Core Svelte

- **Modul 1: Pengenalan & Arsitektur:** Memahami filosofi Svelte (kompilasi vs Virtual DOM) dan pengaturan lingkungan kerja.
- **Modul 2: Struktur Komponen:** Anatomi file `.svelte` (Script, HTML, Style) dan penulisan CSS yang terisolasi secara otomatis.
- **Modul 3: Reaktivitas Dasar:** Deklarasi variabel reaktif, penggunaan sintaks `$:` (Reactive Declarations), dan pembaruan array/objek.
- **Modul 4: Templating & Logic Blocks:** Alur kontrol menggunakan `{#if}`, `{#each}`, dan penanganan data asinkron dengan `{#await}`.
- **Modul 5: Event Handling:** Mendengarkan event DOM, penggunaan event modifiers (`once`, `preventDefault`), dan pengiriman custom event ke komponen induk.
- **Modul 6: Bindings:** Sinkronisasi data dua arah pada input form, checkbox, hingga binding elemen DOM menggunakan `bind:this`.

## Bagian 2: Advanced Logic & UI

- **Modul 7: Lifecycle Hooks:** Menguasai siklus hidup komponen dengan onMount, beforeUpdate, afterUpdate, dan onDestroy.
- **Modul 8: Svelte Actions:** Menggunakan direktif use:action untuk memanipulasi DOM secara langsung dan integrasi library eksternal.
- **Modul 9: Komposisi Komponen:** Penggunaan `<slot />`, Named Slots, dan komunikasi data melalui Context API.
- **Modul 10: Animasi & Motion:** Implementasi transisi bawaan (fade, fly, slide) dan penggunaan spring/tweened untuk pergerakan nilai yang halus.

## Bagian 11: State Management & Arsitektur Data

- **Modul 11: Svelte Stores:** Pengelolaan state global dengan Writable, Readable, dan Derived Stores.
- **Modul 12: Optimalisasi Store:** Teknik custom stores, manajemen langganan (subscriptions), dan sinkronisasi store ke localStorage.

## Bagian 4: SvelteKit & Production Ready

- **Modul 13: Routing & Rendering:** Sistem file-based routing, Server-Side Rendering (SSR), dan Static Site Generation (SSG).
- **Modul 14: Data Loading:** Mengambil data server melalui fungsi load, penanganan form actions, dan proteksi rute (Auth).
- **Modul 15: Quality Assurance:** Unit Testing menggunakan Vitest dan End-to-End (E2E) Testing menggunakan Playwright.
- **Modul 16: Optimalisasi & Deployment:** Code splitting, pengelolaan memori, Dockerization, dan strategi deployment ke server produksi.

## Studi Kasus: SaaS Inventory & Project HUB

Studi kasus ini dirancang untuk menunjukkan seluruh fitur unggulan Svelte dalam satu aplikasi fungsional yang kompleks.

- Arsitektur Multi-Tenant & Dashboard Reaktif
  - Fitur: Dashboard yang menampilkan ringkasan data real-time.
  - Penerapan: Menggunakan Reactive Declarations untuk kalkulasi otomatis dan Derived Stores untuk memfilter data berdasarkan tenant yang aktif.

- Management Board dengan Mikro-Interaksi
  - Fitur: Sistem tarik-lepas (drag-and-drop) untuk pengaturan tugas atau stok barang.
  - Penerapan: Menggunakan Svelte Actions (use:drag) untuk interaksi DOM dan Crossfade Transitions agar elemen berpindah dengan animasi yang organik.

- Form Dinamis & Validasi Instan
  - Fitur: Input data barang yang kompleks dengan preview langsung.
  - Penerapan: Memanfaatkan Two-way Bindings untuk sinkronisasi data tanpa boilerplate dan Sveltekit Actions untuk pengiriman data ke server.

- Sistem Notifikasi Global & Offline Mode
  - Fitur: Pop-up notifikasi yang muncul di seluruh aplikasi dan kemampuan akses tanpa internet.
  - Penerapan: Menggunakan Custom Stores untuk manajemen antrean notifikasi dan integrasi Service Workers untuk kapabilitas Offline-First.

- Automated Testing Suite
  - Fitur: Pengetesan otomatis pada alur kritis (seperti proses input barang dan login).
  - Penerapan: Menulis skrip E2E dengan Playwright untuk memastikan seluruh fitur berjalan sempurna sebelum dideploy ke lingkungan produksi.
  