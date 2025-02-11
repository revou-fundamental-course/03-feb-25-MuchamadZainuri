/**
 * Fungsi untuk mengkonversi suhu berdasarkan conversionKey yang diberikan
 * @param {*} temperatureConversions 
 * @returns 
 */
const convertTemperature = (temperatureConversions) => {
  // Mendapatkan value dari input-temperature
  const inputTemp = parseFloat(document.getElementById("input-temperature").value);

  // Mendapatkan content dari elemen from-unit
  const unit = document.getElementById("from-unit").textContent;

  // Mendapatkan elemen result-value
  const resultValue = document.getElementById("result-value");

  // Cek apakah inputTemp adalah Not a Number(NaN)
  if (isNaN(inputTemp)) return;

  // Menentukan conversionKey berdasarkan content dari from-unit
  const conversionKey = unit === "°C" ? "C_to_F" : "F_to_C";

  // Mendapatkan formula dan toUnit dari temperatureConversions
  const { formula, toUnit } = temperatureConversions[conversionKey];

  // Menghitung nilai konversi
  const convertedValue = formula(inputTemp);

  // Memasukkan nilai konversi ke dalam Elemen result-value
  resultValue.innerText = `${convertedValue.toFixed(2)} ${toUnit}`;

  // Mengubah warna teks Elemen result-value menjadi hijau
  resultValue.style.color = "limegreen";

  // Menampilkan tombol penjelasan, tombol reset dan menghilangkan tombol konversi
  document.getElementById("result-explain-button").style.display = "block";
  document.getElementById("reset-button").style.display = "block";
  document.getElementById("convert-button").style.display = "none";

  // Mengubah id dari result-card menjadi result-card-active
  document.getElementById("result-card").setAttribute("id", "result-card-active");

  // Mengubah input-temperature menjadi readonly
  document.getElementById("input-temperature").setAttribute("readonly", "");

  // Menghilangkan tombol reverse
  document.getElementById("reverse-button").style.display = "none";
};

/**
 * Fungsi untuk mereset form konversi suhu
 */
const resetForm = () => {
  // Mendapatkan value dari elemen from-unit
  const unit = document.getElementById("from-unit").textContent;

  // Menentukan nilai default result-value berdasarkan unit yang dipilih
  const defaultValue = unit === "°C" ? "0°F" : "0°C";

  // Mengubah nilai dari result-value menjadi default value atau 0 (unit)
  document.getElementById("result-value").textContent = defaultValue;

  // Mengubah warna teks result-value menjadi hitam
  document.getElementById("result-value").style.color = "black";

  // Menghilangkan tombol penjelasan, tombol reset, dan mengembalikan tombol konversi
  document.getElementById("result-explain-button").style.display = "none";
  document.getElementById("reset-button").style.display = "none";
  document.getElementById("convert-button").style.display = "block";

  // Mengembalikan id dari result-card-active menjadi result-card
  document.getElementById("result-card-active").setAttribute("id", "result-card");

  // Mengembalikan input-temperature menjadi tidak readonly
  document.getElementById("input-temperature").removeAttribute("readonly");

  // Mengembalikan tombol reverse
  document.getElementById("reverse-button").style.display = "block";
};

/**
 * Fungsi untuk membalikkan unit konversi suhu ex: °C to °F menjadi °F to °C
 * @param {*} temperatureConversions 
 */
const reverseUnit = (temperatureConversions) => {
  // Mendapatkan elemen from-unit
  const unitElement = document.getElementById("from-unit");

  // Mendapatkan elemen input-temperature
  const inputTemp = document.getElementById("input-temperature");

  // Tentukan apakah saat ini dalam Celsius atau Fahrenheit
  const isCelsius = unitElement.textContent === "°C";

  // Mendapatkan conversionKey berdasarkan from-unit
  const conversionKey = unitElement.textContent === "°C" ? "F_to_C" : "C_to_F";

  // Mendapatkan fromTemp, fromUnit, toTemp, dan toUnit dari temperatureConversions berdasarkan conversionKey
  const { fromTemp, fromUnit, toTemp, toUnit } = temperatureConversions[conversionKey];

  // Mengubah nilai dari unitElement/ from-unit, conversion-title, input-temperature-title, temperature-result, dan result-value
  unitElement.textContent = fromUnit;
  document.getElementById("conversion-title").textContent = `${fromTemp} to ${toTemp}`;
  document.getElementById("input-temperature-title").textContent = fromTemp;
  document.getElementById("temperature-result").textContent = toTemp;
  document.getElementById("result-value").textContent = `0${toUnit}`;

  // Mengecek apakah saat ini dalam Celsius atau Fahrenheit
  if (isCelsius) {
    // Jika saat ini dalam Celsius, ubah ke Fahrenheit
    inputTemp.min = "-459.67"; // Min Fahrenheit (-273.15°C)
    inputTemp.max = "1832";    // Max Fahrenheit (1000°C)
    inputTemp.title = "Nilai harus berupa angka, minimal -459.67 dan maksimal 1832";
  } else {
    // Jika saat ini dalam Fahrenheit, ubah ke Celsius
    inputTemp.min = "-273.15";
    inputTemp.max = "1000";
    inputTemp.title = "Nilai harus berupa angka, minimal -273.15 dan maksimal 1000";
  }
};

/**
 * Fungsi untuk menampilkan penjelasan lengkap tentang cara mengkonversi suhu
 * @param {*} temperatureConversions 
 * @returns 
 */
const showExplanation = (temperatureConversions) => {
  // Mendapatkan value dari elemen input-temperature
  const inputTemp = parseFloat(document.getElementById("input-temperature").value);

  // Mendapatkan content dari elemen from-unit
  const unit = document.getElementById("from-unit").textContent;

  // Mendapatkan value dari elemen result-value
  const resultValueWithUnit = document.getElementById("result-value").textContent;

  // Mengubah value dari result-value menjadi float dengan 2 angka di belakang koma
  const resultValue = parseFloat(resultValueWithUnit).toFixed(2);

  // Cek apakah inputTemp adalah Not a Number(NaN)
  if (isNaN(inputTemp)) return;

  // Menentukan conversionKey berdasarkan content dari from-unit
  const conversionKey = unit === "°C" ? "C_to_F" : "F_to_C";

  // Mendapatkan fromTemp, fromUnit, toTemp, toUnit, formulaText, dan explanation dari temperatureConversions berdasarkan conversionKey
  const { fromTemp, fromUnit, toTemp, toUnit, formulaText, explanation } = temperatureConversions[conversionKey];

  // Memasukkan nilai-nilai yang diperlukan ke dalam elemen modal
  document.getElementById("from-unit-modal").textContent = `${fromTemp} (${fromUnit})`;
  document.getElementById("to-unit-modal").textContent = `${toTemp} (${toUnit})`;
  document.getElementById("conversion-formula").textContent = formulaText;
  document.getElementById("known-v").textContent = `${fromUnit} = ${inputTemp}`;
  const calculationDetails = unit === "°C"
    ? `(${inputTemp} × 9 / 5) + 32 = ${resultValue}`
    : `(${inputTemp} - 32) × 5 / 9 = ${resultValue}`;
  document.getElementById("calculation-details").textContent = calculationDetails;
  document.getElementById("result-value-modal").textContent = resultValueWithUnit;
  document.getElementById("explanation-list").innerHTML = explanation(inputTemp, resultValue)
    .map(step => `<li>${step}</li>`)
    .join("");
  document.getElementById("conclusion-text").textContent = `${inputTemp}${fromUnit} sama dengan ${resultValueWithUnit}`;
};

// Export the functions
export { convertTemperature, resetForm, reverseUnit, showExplanation };