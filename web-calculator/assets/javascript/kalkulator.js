// console.log() biasanya digunakan sebagai sarana debugging sederhana untuk mengetahui nilai dari suatu variabel.
/* console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");


const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");

const user = {
    name: {
        first: firstName,
        last: lastName,
    },
    language: language
};

if (user.language === "English") {
    alert("Nice to meet you " + user.name.first + " " + user.name.last + "i");
} else if (user.language === "French") {
    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "i");
} else {
    alert("Senang bertemu denganmu " + user.name.first + " " + user.name.last + "i")
} */

// membuat sebuah objek yang berisi properti yang menggambarkan data dan kondisi dari kalkulator.
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
};

// deklarasi fungsi untuk meng-update data
function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

// fungsi untuk menghapus data
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
}

// fungsi untuk memasukkan angka
function inputDigit(digit) {
    // kondisi jika displayNumber bernilai '0' di fungsi inputDigit(). Agar kalkulator tidak menampilkan nilai '0' di awal bilangan.
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

// fungsi untuk menerapkan operator (+/-)
function handleOperator(operator) {
    if (!calculator.isWaitForSecondNumber) {
        calculator.operator = operator;
        calculator.isWaitForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah diterapkan!');
    }
}

// fungsi untuk melakukan inverse pada angka
function inverseNumber() {
    // perkalian tidak akan dilakukan ketika angka bernilai '0'
    if (calculator.displayNumber === '0') {
        return;
    }
    // melakukan perkalian dengan -1
    calculator.displayNumber = calculator.displayNumber * -1;
}

// fungsi untuk kalkulasi
function performCalculation() {
    // dimulai dengan pengecekan nilai-nilai
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert('Anda belum menetapkan operator');
        return;
    }

    // parseInt() = untuk mengubah (konversi) nilai tipe data string menjadi number
    let result = 0;
    if (calculator.operator === '+') {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
}

// (bagian event handler)
// membuat variabel buttons
const buttons = document.querySelectorAll('.button');

for (const button of buttons) {
    // memberikan event click
    button.addEventListener('click', function (event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;

        // kondisi ketika event target yang menerapkan class 'clear', kita akan panggil fungsi clearCalculator()
        // simple-nya (kita mengklik button yang memiliki class 'clear') 
        if (target.classList.contains('clear')) {
            // ketika tombol yang ditekan benar, maka fungsi clear akan dipanggil dan display kalkulator akan di-update.
            clearCalculator();
            updateDisplay();
            //  return statement agar fungsi event handler terhenti sehingga kode yang ada di bawahnya tidak ikut tereksekusi.
            return;
        }

        // kondisi ketika tombol yang menerapkan class 'negative' ditekan.
        if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }

        // kondisi ketika tombol yang menerpakan class 'equals' ditekan.
        if (target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }

        // kondisi ketika tombol yang menerapkan class 'operator' ditekan.
        if (target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}