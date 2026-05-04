type Kategori = "Makan" | "Transportasi" | "Gaji" | "Hiburan";

interface Transaksi {
  id: string;
  nama: string;
  nominal: number;
  kategori: Kategori;
  tanggal: string;
}

let daftarTransaksi: Transaksi[] = [];

function simpanKeStorage<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}

function ambilDariStorage<T>(key: string): T | null {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function tambahTransaksi(input: Omit<Transaksi, "id">): void {
  const baru: Transaksi = {
    id: Math.random().toString(36).substr(2, 9),
    ...input,
  };
  daftarTransaksi.push(baru);
  simpanKeStorage("budget_data", daftarTransaksi);
  renderUI();
}

function renderUI(): void {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  const total = daftarTransaksi.reduce((acc, curr) => acc + curr.nominal, 0);

  app.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif;">
      <h2>Smart Budget Tracker</h2>
      <p>Total Saldo: <b>Rp ${total.toLocaleString()}</b></p>
      
      <div style="margin-bottom: 20px;">
        <input id="nama" placeholder="Nama item" />
        <input id="nominal" type="number" placeholder="Nominal" />
        <select id="kategori">
          <option value="Makan">Makan</option>
          <option value="Gaji">Gaji</option>
          <option value="Transportasi">Transportasi</option>
          <option value="Hiburan">Hiburan</option>
        </select>
        <button id="btnTambah">Tambah</button>
      </div>

      <ul>
        ${daftarTransaksi.map(t => `
          <li>${t.nama} - <b>Rp ${t.nominal}</b> (${t.kategori})</li>
        `).join('')}
      </ul>
    </div>
  `;

  document.querySelector('#btnTambah')?.addEventListener('click', () => {
    const nama = (document.querySelector('#nama') as HTMLInputElement).value;
    const nominal = Number((document.querySelector('#nominal') as HTMLInputElement).value);
    const kategori = (document.querySelector('#kategori') as HTMLSelectElement).value as Kategori;

    if (nama && nominal) {
      tambahTransaksi({ nama, nominal, kategori, tanggal: new Date().toISOString() });
    }
  });
}

const dataLama = ambilDariStorage<Transaksi[]>("budget_data");
if (dataLama) daftarTransaksi = dataLama;
renderUI();