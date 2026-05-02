# Silabus Mastering Svelte 5 & SvelteKit: Professional Developer Path

## Bagian 1: Fondasi & Modern Reactivity (Svelte 5)

- **Modul 1: Svelte Philosophy & Setup**
  - Mengapa Svelte? (No Virtual DOM, Compile-time optimization).
  - Setup Environment: Vite, SvelteKit, dan TypeScript integration.
  - Struktur Proyek & Konvensi SvelteKit.

- **Modul 2: The New Reactivity (Runes)**
  - Pendalaman `$state`, `$derived`, dan `$effect`.
  - Migrasi dari Svelte 4 (`let`, `$:`) ke Svelte 5.
  - Fine-grained reactivity: Bagaimana Svelte mengupdate DOM secara presisi.

- **Modul 3: Templating & Snippets**
  - Logic blocks modern: `{#if}`, `{#each}`, `{#await}`.
  - Penggunaan `{#snippet}` dan `{@render}` untuk komposisi UI yang lebih fleksibel dibanding Slots.
  - Event Handling & Event Modifiers di Svelte 5.

- **Modul 4: Bindings & Form Handling**
  - Two-way data binding pada berbagai elemen input.
  - Advanced bindings: Group bindings, contenteditable, dan `bind:this`.
  - Integrasi dengan library validasi (Zod/Superforms).

## Bagian 2: Advanced Svelte & Component Patterns

- **Modul 5: Component Communication & Context**
  - Props (Modern approach dengan `$props()`).
  - Context API (`getContext`, `setContext`) untuk deep-nesting state.
  - Component Composition: Snippets vs Higher-Order Components.

- **Modul 6: Svelte Actions & Lifecycle**
  - Kekuatan `use:action` untuk integrasi library vanilla JS (Chart.js, Tippy, dll).
  - Lifecycle modern: Mengganti `onMount` dengan `$effect` di Svelte 5.
  - Integrasi DOM manual dan cleanup logic.

- **Modul 7: Motion, Transitions, & Animations**
  - Bawaan: `fade`, `fly`, `slide`, `scale`.
  - Custom transitions & Deferred transitions (Crossfade).
  - Motion: `tweened` dan `spring` untuk interaksi UI yang fluid.

- **Modul 8: State Management Beyond Components**
  - Reactive classes dan modul state.
  - Penggunaan Svelte Stores (Writable, Readable, Derived) untuk legacy compatibility.
  - Best practices: Kapan menggunakan Runes vs Stores.

## Bagian 3: SvelteKit Deep Dive (Fullstack Svelte)

- **Modul 9: Routing & Advanced Layouts**
  - File-based routing (Static, Dynamic, Optional parameters).
  - Layout inheritance dan grouping `(group)`.
  - Error handling dengan `+error.svelte` dan `expected/unexpected errors`.

- **Modul 10: Server-Side Logic (Load & Actions)**
  - Data loading (`+page.server.js` vs `+page.js`).
  - Form Actions: Menangani submit form tanpa JS (Progressive Enhancement).
  - API Routes (Server Endpoints) untuk integrasi pihak ketiga.

- **Modul 11: Middlewares & Security**
  - Menggunakan `hooks.server.js` untuk intercept request.
  - Keamanan: CSRF protection, Content Security Policy (CSP).
  - Environment Variables (Private vs Public).

## Bagian 4: Authentication & Authorization (Deep Dive JWT)

- **Modul 12: Konsep Auth di SvelteKit**
  - Arsitektur Stateless vs Stateful (Session vs JWT).
  - Strategi penyimpanan token: LocalStorage vs HttpOnly Cookies.

- **Modul 13: Implementasi JWT Authentication**
  - Flow Register & Login.
  - Implementasi Refresh Token & Access Token.
  - Middleware: Proteksi rute dan validasi token di `hooks.server.js`.
  - Sinkronisasi state auth ke `event.locals` dan `$page.data`.

## Studi Kasus Utama: "ProTasker - Enterprise Task Management"

Aplikasi manajemen tugas tim yang mencakup seluruh materi dari awal hingga akhir, dengan fokus pada performa dan keamanan.

### 1. Sistem Autentikasi Berbasis JWT (Core Feature)

- **Fitur:** Register, Login, Logout, dan "Remember Me".
- **Teknis:**
  - Login menggunakan **SvelteKit Form Actions**.
  - Token JWT disimpan di **HttpOnly Cookies** untuk mencegah XSS.
  - Middleware di `hooks.server.js` untuk mengecek validitas token sebelum merender halaman terproteksi.
  - Halaman login dengan validasi sisi klien dan server menggunakan **Zod**.

### 2. Dashboard Reaktif & Statistik

- **Fitur:** Grafik progres tugas dan ringkasan aktivitas.
- **Teknis:** Menggunakan **Runes (`$derived`)** untuk menghitung statistik secara real-time dari store data, dan integrasi library chart melalui **Svelte Actions**.

### 3. Kanban Board dengan Drag-and-Drop

- **Fitur:** Pemindahan status tugas secara visual.
- **Teknis:** Implementasi drag-and-drop menggunakan **Svelte Actions** dan **Crossfade Transitions** agar perpindahan kartu antar kolom terlihat mulus secara visual.

### 4. Real-time Project Hub

- **Fitur:** Update tugas secara instan dan sistem notifikasi.
- **Teknis:**
  - Penggunaan **Optimistic UI** (update UI sebelum server merespon) menggunakan SvelteKit `use:enhance`.
  - Sistem notifikasi toast menggunakan **Global State Management**.

### 5. Deployment & Production Ready

- **Fitur:** Aplikasi siap pakai di lingkungan cloud.
- **Teknis:** Optimasi build, Dockerization, dan integrasi CI/CD (GitHub Actions).
