import * as readline from "readline";

// 1. DESAIN STRUKTUR DATA / ENTITAS (Interface & Type Alias)
type MenuCategory = "Makanan" | "Minuman" | "Snack";

interface MenuItem {
  id: number;
  name: string;
  category: MenuCategory;
  price: number;
  stock: number;
  isAvailable: boolean;
}

// Konstanta & Variabel Global (Penerapan Materi Dasar UTS)
const APP_NAME: string = "=== CANTEEN CASHIER CONSOLE SYSTEM ===";
const MIN_MENU_CHOICE: number = 0;
const MAX_MENU_CHOICE: number = 5;

let menuDatabase: MenuItem[] = [
  {
    id: 101,
    name: "Nasi Goreng Spesial",
    category: "Makanan",
    price: 15000,
    stock: 20,
    isAvailable: true,
  },
  {
    id: 102,
    name: "Ayam Geprek Sambal Bawang",
    category: "Makanan",
    price: 13000,
    stock: 15,
    isAvailable: true,
  },
  {
    id: 201,
    name: "Es Teh Manis",
    category: "Minuman",
    price: 4000,
    stock: 50,
    isAvailable: true,
  },
  {
    id: 301,
    name: "Tahu Crispy",
    category: "Snack",
    price: 6000,
    stock: 0,
    isAvailable: false,
  },
];

// Setup Readline Interface untuk Input Terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(promptText: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(promptText, (answer) => {
      resolve(answer.trim());
    });
  });
}

// 2. MINIMAL 4 KERANGKA FUNGSI BERTIPE (Typed Function Stubs untuk CRUD & Search)
function createMenuItem(items: MenuItem[], newItem: MenuItem): MenuItem[] {
  // Kerangka fungsi Create (akan diimplementasikan penuh pada Progress 3)
  console.log("\n[INFO] Fitur CREATE (Tambah Menu) siap diimplementasikan.");
  return items;
}

function readAllMenuItems(items: MenuItem[]): number {
  // Kerangka fungsi Read (menampilkan jumlah data saat ini sebagai tipe return number)
  console.log(`\n[INFO] Fitur READ (Lihat Daftar Menu) - Total item terdaftar: ${items.length}`);
  return items.length;
}

function updateMenuItemById(items: MenuItem[], targetId: number): boolean {
  // Kerangka fungsi Update (akan diimplementasikan penuh pada Progress 4)
  console.log(`\n[INFO] Fitur UPDATE (Ubah Menu ID: ${targetId}) siap diimplementasikan.`);
  return false;
}

function deleteMenuItemById(items: MenuItem[], targetId: number): boolean {
  // Kerangka fungsi Delete (akan diimplementasikan penuh pada Progress 5)
  console.log(`\n[INFO] Fitur DELETE (Hapus Menu ID: ${targetId}) siap diimplementasikan.`);
  return false;
}

function searchMenuItems(items: MenuItem[], keyword: string): MenuItem[] {
  // Kerangka fungsi Search (akan diimplementasikan penuh pada Progress 5)
  console.log(`\n[INFO] Fitur SEARCH (Kata kunci: "${keyword}") siap diimplementasikan.`);
  return [];
}

// Fungsi Helper Tampilan Menu Utama
function displayMainMenu(): void {
  console.log("\n" + "=".repeat(42));
  console.log(APP_NAME);
  console.log("=".repeat(42));
  console.log("1. Tambah Menu Baru (Create)");
  console.log("2. Lihat Daftar Menu (Read)");
  console.log("3. Ubah Data Menu (Update)");
  console.log("4. Hapus Data Menu (Delete)");
  console.log("5. Cari Menu (Search)");
  console.log("0. Keluar Aplikasi (Exit)");
  console.log("=".repeat(42));
}

// 3. KERANGKA LOOP MAIN MENU & PENANGANAN INPUT SALAH
async function main(): Promise<void> {
  let isRunning: boolean = true;

  while (isRunning) {
    displayMainMenu();
    const rawInput: string = await askQuestion("Pilih menu [0-5]: ");
    const choice: number = Number(rawInput);

    // Validasi input salah (kosong, bukan angka, atau di luar rentang 0-5)
    if (
      rawInput === "" ||
      Number.isNaN(choice) ||
      !Number.isInteger(choice) ||
      choice < MIN_MENU_CHOICE ||
      choice > MAX_MENU_CHOICE
    ) {
      console.log(
        `\n[ERROR] Input "${rawInput}" tidak valid! Masukkan angka bulat antara ${MIN_MENU_CHOICE} sampai ${MAX_MENU_CHOICE}.`
      );
      continue;
    }

    // Percabangan Switch untuk Navigasi Menu Utama
    switch (choice) {
      case 1:
            createMenuItem(menuDatabase, {
            id: 999,
            name: "Menu Contoh",
            category: "Makanan",
            price: 10000,
            stock: 10,
            isAvailable: true,
        });
        break;
      case 2:
        readAllMenuItems(menuDatabase);
        break;
      case 3:
        updateMenuItemById(menuDatabase, 101);
        break;
      case 4:
        deleteMenuItemById(menuDatabase, 101);
        break;
      case 5:
        searchMenuItems(menuDatabase, "Nasi");
        break;
      case 0:
        console.log("\nTerima kasih telah menggunakan Canteen Cashier Console System. Sampai jumpa!");
        isRunning = false;
        break;
    }
  }

  rl.close();
}

// Menjalankan Program Utama
main();