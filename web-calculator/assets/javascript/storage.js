// variabel untuk digunakan sebagai 'key' untuk mengakses dan menyimpan data pada localStorage
const CACHE_KEY = "calculation-history";

/* fungsi yang akan digunakan di dalam if statement setiap fungsi transaksi pada localStorage
mengembalikan nilai boolean (true/false) dari pengecekan fitur Storage pada browser */
function checkForStorage() {
    return typeof (Storage) !== "undefined"
}

// fungsi untuk menyimpan data riwayat kalkulasi, argumennya = data dari hasil kalkulasi
function putHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            // JSON.parse = mengubah bentuk objek string menjadi bentuk objek JavaScript
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        /* fungsi unshift() digunakan untuk menambahkan nilai baru pada array yang ditempatkan pada awal index
        Fungsi ini juga mengembalikan nilai panjang array setelah ditambahkan dengan nilai baru */
        historyData.unshift(data);

        if (historyData.length > 5) {
            /* fungsi pop() untuk menghapus nilai index terakhir pada array, 
            sehingga riwayat kalkulasi yang muncul adalah lima hasil kalkulasi terakhir */
            historyData.pop();
        }

        // JSON.stringify = mengubah bentuk objek JavaScript menjadi bentuk objek string
        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
}

// fungsi untuk mendapatkan data dari localStorage
function showHistory() {
    if (checkForStorage()) {
        // mengembalikan nilai array dari localStorage
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        // jika localStorage masih kosong, maka akan mengembalikan nilai array kosong
        return [];
    }
}

function renderHistory() {
    const historyData = showHistory();
    let historyList = document.querySelector('#historyList');

    historyList.innerHTML = "";

    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>";

        historyList.appendChild(row);
    }
}

// memanggil fungsi renderHistory() agar data history muncul ketika website pertama kali dijalankan
renderHistory();