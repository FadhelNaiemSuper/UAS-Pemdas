# Canteen Cashier Console Application

Aplikasi kasir kantin berbasis terminal (*console*) menggunakan TypeScript untuk mengelola data menu makanan dan minuman dengan operasi CRUD (*Create, Read, Update, Delete*) dan *Search*.

## Identitas Kelompok
- **Kelas / Kelompok**: T1A / Kelompok-04
- **Mata Kuliah**: Pemrograman Dasar
- **Dosen Pengampu**: Salnan Ratih Asriningtias, ST., MT.

## Cara Instalasi dan Menjalankan Program
1. Clone repositori ini ke komputer lokal:
   ```bash
   git clone [https://github.com/FadhelNaiemSuper/UAS-Pemdas.git](https://github.com/FadhelNaiemSuper/UAS-Pemdas.git)
   cd UAS-Pemdas
   ```
2. Instal seluruh dependensi yang dibutuhkan:
   ```bash
   npm install
   ```
3. Jalankan aplikasi melalui terminal:
   ```bash
   npx ts-node src/index.ts
   ```

## Daftar Fitur Utama
- **Main Menu**: Navigasi menu interaktif yang berulang hingga pengguna memilih keluar, dilengkapi penanganan input tidak valid.
- **Create**: Menambahkan data menu kantin baru dengan pembuatan ID unik dan validasi input (tidak kosong, angka valid, tidak negatif).
- **Read**: Menampilkan seluruh daftar menu dalam format rapi serta menampilkan detail satu menu berdasarkan ID.
- **Update**: Mengubah data menu berdasarkan ID dengan menampilkan nilai lama dan opsi melewati kolom yang tidak ingin diubah.
- **Delete**: Menghapus data menu berdasarkan ID dengan konfirmasi `Y/N`.
- **Search**: Mencari menu berdasarkan kata kunci (*case-insensitive*) yang dipadukan dengan filter tambahan (kategori atau batas harga).

## Pembagian Tugas & Kontribusi Anggota
| Nama & NIM | Akun GitHub | Fitur / Bagian Kode yang Dikerjakan | Link Pull Request Utama |
| Fadhel Naiem Azziqri NIM: 263140700111011 | @FadhelNaiemSuper | Repository setup, Data Structure (`MenuItem`) & Seed Data, Main Menu Loop, Create Feature & Input Validation | - |
| Valen Abiyyu Robiansyah NIM: 263140700111033 | @Ilukato | Read Feature (All & Detail by ID), Update Feature, Flowchart (Chapter II) & Report Chapter I | - |
| Firdaus Ivan Maulana NIM: 263140700111005 | @ivanyourbea | Delete Feature (with Y/N confirmation), Search Feature (Keyword + Filter), Operator Integration & README.md | - |