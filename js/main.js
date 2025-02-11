// Mengimpor data temperatureConversions dari data.js
import { temperatureConversions } from "./data.js";

// Mengimpor fungsi convertTemperature, resetForm, reverseUnit, dan showExplanation dari functions.js
import { convertTemperature, resetForm, reverseUnit, showExplanation } from "./functions.js";

/**
 * membuat fungsi addEvent untuk menambahkan event pada elemen HTML dengan id tertentu agar lebih mudah digunakan 
 * dan lebih rapih dalam penulisan
 * @param {*} id 
 * @param {*} event 
 * @param {*} handler 
 * @returns 
 */
const addEvent = (id, event, handler) => document.getElementById(id)?.addEventListener(event, handler);

// Menambahkan event submit pada elemen form dengan id form-tca
addEvent("form-tca", "submit", (e) => {
  e.preventDefault();
  convertTemperature(temperatureConversions);
});

// Menambahkan event click pada elemen button dengan id reset-button yang akan di handle oleh fungsi resetForm
addEvent("reset-button", "click", resetForm);

// Menambahkan event click pada elemen button dengan id reverse-button yang akan di handle oleh fungsi reverseUnit
addEvent("reverse-button", "click", () => reverseUnit(temperatureConversions));

// Membuat fungsi showModal untuk menampilkan elemen modal-section
const showModal = () => {
  // Mendapatkan elemen modal-section
  const modal = document.getElementById("modal-section");
  // Mengubah style display menjadi block
  modal.style.display = "block";
  // Menambahkan class show pada elemen modal-section setelah 10ms
  setTimeout(() => modal.classList.add("show"), 10);
};

// Menambahkan event click pada elemen button dengan id result-explain-button yang akan di handle oleh fungsi showExplanation
addEvent("result-explain-button", "click", () => {
  showExplanation(temperatureConversions);
  showModal();
});

// Menambahkan event click pada elemen button dengan id close-button yang akan menutup elemen modal-section
addEvent("close-button", "click", () => {
  // Menghapus class show pada elemen modal-section
  document.getElementById("modal-section").classList.remove("show");

  // Mengubah style display menjadi none setelah 300ms
  setTimeout(() => {
    document.getElementById("modal-section").style.display = "none";
  }, 300);
});