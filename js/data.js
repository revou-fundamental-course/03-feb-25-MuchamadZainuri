/**
 * Data Objek yang berisi informasi terkait hal-hal yang berhubungan dengan konversi suhu yang akan digunakan pada aplikasi
 *  1.temperatureConversions : Objek yang berisi informasi konversi suhu
 *  2.C_to_F : Konversi dari Celsius ke Fahrenheit
 *  3.F_to_C : Konversi dari Fahrenheit ke Celsius
 */
export const temperatureConversions = {
  C_to_F: {
    fromTemp: 'Celsius',
    fromUnit: '°C',
    toTemp: 'Fahrenheit',
    toUnit: '°F',
    formula: (C) => C * 9 / 5 + 32,
    formulaText: '°F = (°C × 9 / 5) + 32',
    explanation: (C, result) => [
      "1. Gunakan rumus <strong>°F = (°C × 9 / 5) + 32</strong>",
      `2. Masukkan nilai <strong>°C = ${C}</strong> ke dalam rumus : <code>°F = (${C} × 9 / 5) + 32</code>`,
      `3. Hitung bagian dalam kurung terlebih dahulu : <code>(${C} × 9 / 5) = ${(C * 9) / 5}</code>`,
      `4. Lalu tambahkan dengan 32 : <code>${(C * 9) / 5} + 32 = ${result}</code>`,
      `5. Sehingga, Hasil konversi suhu <strong>${C}°C</strong> ke dalam <strong>°F</strong> adalah <strong>${result}°F</strong>`
    ]
  },
  F_to_C: {
    fromTemp: 'Fahrenheit',
    fromUnit: '°F',
    toTemp: 'Celsius',
    toUnit: '°C',
    formula: (F) => (F - 32) * 5 / 9,
    formulaText: '°C = (°F - 32) × 5 / 9',
    explanation: (F, result) => [
      "1. Gunakan rumus <strong>°C = (°F - 32) × 5 / 9</strong>",
      `2. Masukkan nilai <strong>°F = ${F}</strong> ke dalam rumus : <code>°C = (${F} - 32) × 5 / 9</code>`,
      `3. Kurangkan nilai <strong>${F} - 32 = ${F - 32}</strong>`,
      `4. Lalu kalikan dengan 5/9 : <code>${F - 32} × 5 / 9 = ${result}</code>`,
      `5. Sehingga, Hasil konversi suhu <strong>${F}°F</strong> ke dalam <strong>°C</strong> adalah <strong>${result}°C</strong>`
    ]
  },
};