# Atribut HTML
Untuk menuliskan JavaScript menggunakan atribut, kita bisa menerapkannya pada atribut event seperti “onclick”, sehingga JavaScript akan dieksekusi ketika elemen tersebut ditekan oleh kursor.

Link materi: https://www.w3schools.com/tags/ref_eventattributes.asp

# Embedded Script
JavaScript juga dapat dituliskan dengan menanamnya (embedding) pada berkas HTML dengan menggunakan elemen <script>.
Code:
<script>
   // JavaScript dituliskan di sini.
</script>


# External Script
Metode lainnya yaitu dengan menggunakan berkas external yang berekstensi .js. Di dalam berkas tersebutlah seluruh JavaScript dituliskan. Keuntungan menggunakan metode ini adalah script dapat diterapkan pada berbagai berkas HTML tanpa menuliskan ulang scriptnya (keuntungan yang sama juga ketika kita menggunakan external css).
Untuk menghubungkan external script dengan berkas HTML, kita gunakan elemen <script> lalu tambahkan atribut src dengan nilai alamat berkas .js yang digunakan.
Code: <script src="berkas-javascript.js"></script>

Catatan: Sama seperti Embedded Script, kita bisa tuliskan tag <script> tersebut di dalam elemen <head>. Namun, direkomendasikan untuk disimpan di dalam elemen <body> sebelum tag penutup </body>.

- Script yang kita tuliskan sebelumnya berfungsi untuk menampilkan sebuah data baik itu teks (string) atau variabel, objek, fungsi dsb
- console.log() biasanya digunakan sebagai sarana debugging sederhana untuk mengetahui nilai dari suatu variabel.

Catatan:  hindari belajar dengan cara menghafal seluruh struktur kode yang dituliskan, tapi belajarlah dengan memahami tujuan dari kode yang dituliskan. Dengan memahami kode-kode yang ada dan dipadukan logika maka kita akan mudah dalam menghadapi suatu masalah - masalah yang ada ketika mengembangkan suatu aplikasi/web.

# Materi JavaScript
Glot.io: Code Editor dan Compiler Online Terbaik
Get Started With Running JavaScript In The Console

# Statement
Sebuah script dibangun dari serangkaian statement. Statement merupakan sebuah perintah yang bertujuan untuk memberitahu apa yang harus dilakukan browser. Contohnya kode berikut merupakan statement yang menyatakan bahwa browser harus menampilkan pesan (alert) dengan kalimat “Terima kasih”.

# Comment
Membuat komentar dengan (//) untuk satu baris dan /* ... */ untuk lebih dari satu

# Variabel
Variabel umumnya digunakan untuk menyimpan informasi atau nilai yang akan dikelola di dalam sebuah program.
Contoh: var firstName = "Harry";
Tanda sama dengan (=) digunakan untuk menginisialisasikan nilai pada variabel, sehingga sekarang variabel firstName memiliki nilai teks “Harry”.

Sebaiknya hindari penamaan variabel dengan istilah umum seperti “data”, Gunakanlah penamaan variabel yang dapat mendeskripsikan nilai dari variabel itu sendiri. Berikut beberapa aturan dalam penamaan variabel yang perlu Anda ketahui:
- Harus dimulai dengan huruf atau underscore (_).
- Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
- Tidak dapat mengandung spasi (white space), jika penamaan variabel lebih dari dua kata maka tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
- Tidak dapat mengandung karakter spesial (! . , / \ + * = dll.)

Sejak ECMAScript 2015 (ES6) selain var, menginisialisasikan variabel dapat menggunakan let dan const. ES6 melakukan improvisasi pada deklarasi variabel karena menggunakan var terdapat beberapa hal yang kontroversial, salah satunya hoisting.
Apa itu hoisting? sesuai artinya “Mengangkat” variabel yang dideklarasikan menggunakan var ini dapat diberikan nilai terlebih dahulu sebelum dideklarasikan,

# Const
Kemudian const digunakan untuk mendeklarasikan sebuah variabel yang sifatnya immutable atau tidak perlu diubah nilainya. Jika kita menginisialisasi kembali nilai variabel yang menggunakan const, maka akan mendapati eror “TypeError: Assignment to constant variable.”

Dengan begitu sebaiknya kita gunakan let atau const ketika mendeklarasikan variabel daripada menggunakan var.

# Tipe Data
# Undefined
Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai, dalam arti lain ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, maka variabel tersebut menjadi undefined.

## Fungsi typeof()
Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks
Contoh: console.log(typeof(x));

# Numbers
Nilai dari tipe data number adalah angka.

## Increment dan Decrement
Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--). Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.

Operator ini dapat dituliskan sebelum atau sesudah variabel, tetapi hal tersebut bukan berarti sama. Berikut ketentuannya:

Jika dituliskan setelah variabel (x++), statement akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
Jika dituliskan sebelum variabel (++x), statement akan menghasilkan nilai variabel setelah ditingkatkan nilainya.

# Strings
Tipe data selanjutnya adalah strings, String ini dasarnya adalah sebuah teks. Pada JavaScript untuk menetapkan nilai string pada variabel, gunakan tanda single (‘) atau double quote (“) di antara teksnya.

# Boolean
Boolean hanya dapat memiliki dua nilai, yakni true atau false. Tipe data ini menjadi kunci utama dalam penentuan logika, kita akan memahaminya nanti ketika pembahasan if/else statement. Untuk menetapkan nilai boolean pada variabel kita bisa menggunakan keyword true atau false.

# Null
Yang terakhir adalah null. Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel. null biasa digunakan sebagai nilai sementara pada variabel, tapi sebenarnya nilai tersebut “tidak ada”.
Terkadang kita perlu membuat sebuah variabel, namun kita belum memerlukan nilai apa apa dan tidak ingin terikat oleh tipe data apapun. Nah, daripada kita tidak menetapkan nilai apapun (variabel akan undefined) sebaiknya kita beri nilai null pada variabel tersebut, dan ubah nanti ketika kita membutuhkannya.
Untuk menetapkan null pada variabel, kita dapat gunakan keyword null ketika variabel tersebut diinisialisasikan.

*Catatan
Meskipun terdapat beberapa tipe data dalam JavaScript, tetapi variabel pada JavaScript memiliki sifat tipe data yang dinamis. Artinya, kita dapat memberikan tipe data yang berubah-ubah pada satu variabel yang sama. Contohnya:

let x; // x merupakan undefined
x = 1 // sekarang x merupakan number
x = true // sekarang x merupakan boolean
x = "Harry" // sekarang x merupakan string

# Array
Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dari tipe data lain dengan menempatkannya pada satu variabel. 
Syntax:
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Coklat', 42.5, 22, true, 'Programming' ]
*/

## Nilai - nilai yang berada pada array disusun dan diakses secara indexing. Untuk mengakses nilai di dalam array kita gunakan tanda kurung siku [] yang di dalamnya berupa angka yang merupakan posisi nilai yang ingin diakses.
Syntax:
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

/* output:
42.5
*/

## Jika kita mengakses nilai array lebih dari index-nya maka hasilnya akan undefined. Index terakhir array selalu jumlah nilai array - 1.

# Objek
Objek serupa dengan array yang dapat menampung banyak nilai dengan tipe data yang beragam. Untuk mengelola data menggunakan objek, bedanya objek diakses tidak melalui indexing,  melainkan menggunakan pendekatan key-value. Untuk mengakses nilainya kita gunakan key. Key juga biasa disebut dengan properti.
Untuk menetapkan objek pada variabel gunakan tanda kurung kurawal { } dalam menginisialisasinya. Kemudian di dalamnya kita tetapkan key: value.
Syntax:
let object = {key1: "value1", key2: "value2", key3: "value3"}

Dalam menentukan nama key, gunakanlah nama yang dapat mendeskripsikan dari value-nya. Pada value, kita dapat mengisikan nilai dengan tipe data apapun, termasuk array. Contoh:
Syntax:
let user = {firstName: "Harry", lastName: "Potter",  age: 20, isMuggle: false, stuff: ["Wand", "Flying Car", "Owl"]}; 

Dalam menuliskan objek, baris baru tidaklah penting dan tidak akan berpengaruh apa pun. Sehingga lebih baik setiap kita menetapkan key-value buatlah baris baru untuk memisahkan antar nilainya, hal ini akan memudahkan kita dalam memahami struktur data yang berada pada objek.
Syntax:
let user = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

Kemudian untuk mengakses nilai dari properti objek kita dapat gunakan tanda titik diikuti dengan nama properti-nya. Contoh:
Syntax:
let user = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");

/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/

Bahkan dalam properti objek, kita dapat menyimpan nilai objek lainnya. Contohnya properti firstName dan lastName dapat dikelompokan kembali dalam sebuah objek baru.
Syntax:
let user = {
    name: {
        first: "Harry",
        last: "Potter"
    },
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
}

Untuk mendapatkan nilainya kita perlu mengakses properti dari objek user kemudian name. Sehingga penulisannya menjadi seperti berikut:
Syntax:
console.log("Hallo, nama saya " + user.name.first + " " + user.name.last);
console.log("Umur saya " + user.age + " tahun");

/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/

- Materi 
Array : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Objek : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

# Operator Assignment (=)
tanda ini digunakan untuk menginisialisasi nilai pada variabel. Variabel yang akan diberikan nilai ditempatkan pada sebelah kiri dan nilainya ditempatkan pada sebelah kanan (nilai dapat berupa variabel lain atau nilai primitif, array, atau objek). Di antara keduanya terdapat operator assignment.

- Shortcut
Terdapat statement x += y; apa itu artinya? Assignment operator tersebut digunakan sebagai shortcut dari x = x + y. Cara ini juga dapat digunakan pada operator aritmatika lain seperti, perkalian, pengurangan, pembagian, dan lainnya.

# Operator Komparasi
Selanjutnya kita akan belajar mengenai operator komparasi sebagai logika dasar dalam membandingkan nilai pada JavaScript. Terdapat serangkaian karakter khusus yang disebut dengan operator pembanding/komparasi yang dapat mengevaluasi dan membandingkan dua nilai. 
- ==   -> membandingkan kedua nilai apakah sama (tidak identik).
- !=   -> membandingkan kedua nilai apakah tidak sama (tidak identik).
- ===  -> membandingkan kedua nilai apakah identik.
- !==  -> membandingkan kedua nilai apakah tidak identik.
- >    -> Membandingkan dua nilai apakah nilai pertama lebih besar dari nilai kedua.
- >=   -> Membandingkan dua nilai apakah nilai pertama lebih besar atau sama dengan dari nilai kedua.
- <    -> Membandingkan dua nilai apakah nilai pertama lebih kecil dari nilai kedua.
- <=   -> Membandingkan dua nilai apakah nilai pertama lebih kecil dari atau sama dengan nilai kedua.

Ketika kita melakukan perbandingan antara dua nilai, JavaScript akan mengevaluasi kedua nilai tersebut dan akan mengembalikan boolean dengan nilai hasil perbandingan tersebut, baik false, atau true.

# Perbedaan antara “sama” dan “Identik”
Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” adalah membedakan antara “sama” (==) dan “identik” (===).
Kita sudah mengetahui bahwa setiap nilai pasti memiliki tipe data baik itu number, string atau boolean. Contohnya sebuah string “10” dan number 10 merupakan hal yang serupa, tetapi keduanya tidak benar-benar sama.
Hal inilah yang membedakan antara sama dan identik pada JavaScript. Jika kita ingin membandingkan hanya dari kesamaan nilainya kita bisa gunakan == tapi jika kita ingin membandingkan dengan memperhatikan tipe datanya kita gunakan ===.
Syntax:
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/

# Logical Operators
Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks, yakni dengan logical operators. Dengan logical operator kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika.
Pada JavaScript terdapat tiga buah karakter khusus yang berfungsi sebagai logical operator
- &&  -> Operator dan (and), logika akan menghasilkan true apabila semua kondisi terpenuhi (bernilai true).
- ||  -> Operator atau (or), logika akan menghasilkan true apabila ada salah satu kondisi terpenuhi (bernilai true).
- !   -> Operator tidak (not), digunakan untuk membalikan suatu kondisi.
Syntax:
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

Mungkin sebagian dari kita bertanya, sebenarnya apa kegunaan dari nilai boolean selain hanya menampilkan nilai true dan false saja? Pada pembahasan tipe data sudah pernah disebutkan bahwa boolean merupakan salah satu kunci dari logika pemrograman, karena boolean dapat mengontrol aliran pada program.
Lantas bagaimana cara boolean mengontrol sebuah aliran program? Pada bab selanjutnya, kita akan membahas mengenai if/else statement yang dapat mengontrol flow pada program, tentunya pada penggunaan statement ini boolean sangat berperan.

# If/else statement 
If/else statement dapat digambarkan seolah-olah kita memberikan pertanyaan benar atau salah pada JavaScript, lalu memberikan perintah sesuai jawaban dari pertanyaan tersebut.
Contohnya, terdapat variabel x dengan nilai 50, kemudian kita bertanya “Hai JavaScript! Apakah x lebih dari 70?” jika kondisi tersebut benar, maka kita dapat memerintahkan JavaScript untuk menampilkan nilainya. Jika salah, kita perintahkan JavaScript untuk menampilkan teks “Nilai kurang dari 70”.
Syntax:
let x = 50;

if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}

/* output
Nilai kurang dari 70
*/

Logical statement pada if ditulis di dalam tanda kurung (parentheses). Jika logical statement tersebut menghasilkan true, maka JavaScript akan mengeksekusi kode yang berada di dalam block if. Jika logical statement menghasilkan nilai false, maka kode yang pada block else lah yang akan dieksekusi.
Block else bersifat opsional untuk dituliskan, hal tersebut berarti kita tidak perlu menuliskannya jika tidak kita manfaatkan.
syntax:
let language = "English";
let greeting = "Selamat Pagi!"

if(language === "English") {
    greeting = "Good Morning!";
}

console.log(greeting);

/* output
Good Morning!
*/

Pada kode di atas, nilai greeting memiliki nilai standar “Selamat Pagi!” tetapi akan ditampilkan berbeda jika language memiliki nilai “English”, pada kasus ini kita tidak perlu menuliskan block else.
Kita juga dapat memberikan lebih dari satu pertanyaan pada if statement dengan kata lain, kita dapat memberikan lebih dari satu kondisi dengan menggabungkan keyword else dan if
syntax:
let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayogozaimasu!"
}

console.log(greeting);

/* output
Bonjour!
*/

Dengan mengubah nilai dari variabel language ke nilai yang lain seperti “English” atau “Japanese” maka pesan yang ditampilkan pada console akan ikut berubah.

# Loop
# for loop
struktur dasar:
for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
    // do something
}

syntax:
for(let i = 0; i < 5; i++) {
    console.log(i);
}

/* output

- Yang pertama adalah for(), kita memanggil for statement di mana kita memerintahkan JavaScript seperti ini: “Hai JavaScript! Lakukan perulangan jika kondisi ini benar”, selanjutnya tentu kita membutuhkan sebuah kondisi untuk dievaluasi.
- Namun sebelum memberikan kondisi, kita dapat membuat sebuah variabel i sebagai index iterasi dengan memberikan nilai 0 (let i = 0;). Mengapa kita memberikan nilai 0 pada variabel i? Karena ini merupakan sebuah habit dimana perhitungan perulangan dimulai dari 0, begitu juga dengan indexing pada array.
- Lalu i < 5; merupakan sebuah kondisi dimana jika kondisinya terpenuhi proses looping akan dijalankan. Jadi jika kita memberikan kondisi seperti ini: i < 5; maka proses looping akan terjadi sebanyak 5 kali.
- Dan terakhir i++; menunjukan perubahan nilai variabel i di setiap proses perulangan terjadi. Biasanya perubahan merupakan increment ataupun decrement dari variabel yang kita tetapkan sebelumnya (variabel i). Jika kita tidak menetapkan perubahan nilai, proses perulangan dapat berjalan selamanya! Karena kondisi akan terus terpenuhi.
- Lalu { console.log(i); } merupakan statement yang akan dieksekusi pada setiap proses loop. Kita dapat menuliskan banyak statement di sini selama berada di dalam tanda { }. Pada kode tersebut kita memerintahkan JavaScript untuk menampilkan nilai i pada setiap proses perulangan. Sehingga output akan menghasilkan deretan angka dari 0 hingga 4.

# memeriksa item dalam array dengan menggunakan for loop
syntax:
const myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

/* output
Harry
Ron
Hermione
Tom
*/

# for of loop
Cara ini jauh lebih sederhana dan modern dibanding for loop biasa
for(arrayItem of myArray) {
    // do something
}

syntax:
let myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

/* output
Harry
Ron
Hermione

# Function
Function atau fungsi merupakan potongan kecil kode yang tidak akan dieksekusi sebelum dipanggil. Contoh lain fungsi JavaScript yang sudah ada pada browser adalah alert(). Ia bertujuan untuk menampilkan pesan dalam bentuk pop up dialog. Fungsi tersebut sudah ada pada browser dan akan muncul hanya ketika kita menggunakan/memanggilnya dengan alert().
Atau dalam arti lain, kita dapat berfikir bahwa function merupakan sebuah variabel yang berisi block logika, dan block logika tersebut akan dieksekusi ketika variabelnya dipanggil.
Semua fungsi memiliki struktur yang sama. Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi, lalu terdapat sepasang kurung kurawal yang berisi logika dari fungsi tersebut.
Terkadang di dalam tanda kurung kita membutuhkan sebuah informasi tambahan yang disebut dengan arguments. Argument merupakan data yang digunakan pada fungsi yang dapat mempengaruhi perilaku dari fungsinya tersebut. Contoh, fungsi alert() dapat menerima argument string yang digunakan untuk menampilkan teks pada dialog.

struktur function:
// nama_fungsi(argument){
    kode yang akan dieksekusi
}

Contoh:
multiply(a,b){
    return a*b;
}

## Native function merupakan fungsi yang sudah terdapat pada JavaScript atau Browser sehingga kita tidak perlu membuat hanya tinggal menggunakan saja. Contohnya alert(), confirm(), Date(), parseInt() dll. Sebenarnya terdapat ratusan native function yang tersedia.

## Custom function merupakan fungsi yang kita buat sendiri, tentu custom function dibuat menyesuaikan kebutuhan kita. Untuk membuat sebuah custom function, kita perlu menuliskan keyword function dilanjutkan dengan menuliskan seluruh struktur fungsinya.
syntax:
function greeting() {
    console.log("Good Morning!")
}

Contoh:
function greeting() {
    console.log("Good Morning!")
}

greeting();

/* output
Good Morning!
*/

Kita dapat membuat fungsi tersebut untuk menerima argumen dan memanfaatkan argumen untuk mengubah perilaku dari fungsinya.
Untuk menambahkan argument pada fungsi, tambahkan variabel di dalam tanda kurung fungsi namun variabel tersebut tidak memerlukan keyword var, let, ataupun const. Kita juga bisa menambahkan lebih dari satu argumen dengan memberikan tanda koma antar variabel argumennya. Contohnya fungsi greeting akan kita ubah dengan menambahkan argument, 
syntax:
function greeting(name, language) {
    if(language === "English") {
        console.log("Good Morning " + name + "!");
    } else if (language === "French") {
        console.log("Bonjour " + name + "!");
    } else {
        console.log("Selamat Pagi " + name + "!");
    }
}

greeting("Harry", "French");

/* output
Bonjour Harry!
*/

# mengembalikan sebuah nilai
Satu hal lagi, function dapat mengembalikan sebuah nilai. Hal ini benar-benar sangat berguna dan membuat kita lebih mudah. Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika dan hasilnya dapat langsung kita masukkan ke dalam sebuah variabel. 
syntax:
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)

/* output
20
*/

Untuk membuat nilai kembalian dari fungsi gunakan keyword return diikuti dengan nilai yang akan dikembalikan. Nilai kembalian tidak hanya number, bisa saja berupa string, boolean, objek ataupun array. Seperti inilah fungsi greeting() jika kita ubah dengan menetapkan dengan nilai kembalian string:

function greeting(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

/* output
Bonjour Harry!
*/

Catatan: Yang perlu kita perhatikan lagi, ketika statement return tereksekusi, maka fungsi akan langsung terhenti dan mengembalikan nilai.

# Variable Scope
Ada banyak keadaan di mana kita membutuhkan variabel untuk diakses di seluruh script yang kita buat. Tetapi ada juga keadaan di mana kita ingin variabel tersebut hanya dapat diakses pada cakupan fungsi dan fungsi turunannya saja.
Variabel yang dapat di akses dari seluruh script disebut dengan “globally scoped,” sementara variabel yang hanya dapat diakses hanya pada function tertentu disebut dengan “locally scoped.”
Variabel JavaScript menggunakan fungsi untuk mengelola cakupannya, Jika variabel didefinisikan di luar fungsi, maka variabel akan bersifat global. Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut atau turunannya.
Untuk lebih jelasnya, berikut variabel yang dapat diakses dalam sebuah fungsi:

- Variabel argumen dari fungsinya.
- Lokal variabel yang didefinisikan pada fungsinya.
- Variabel dari induk fungsinya.
- Global variabel.

syntax:
// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

Mungkin kita berharap nilai total akan tetap 9. Mengingat variabel total pada fungsi multiply, seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut. Hal ini bisa terjadi karena pada fungsi multiply() kita tidak menetapkan variabel total sebagai cakupan lokal, kita tidak menggunakan keyword const, let, atau var ketika mendeklarasikan variabel total pada fungsi multiply() sehingga variabel total menjadi global.
Perlu kita perhatikan bahwa, ketika kita lupa menuliskan keyword let, const atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.
Sebisa mungkin kita harus menghindari pembuatan variabel global, karena variabel global dapat diakses pada seluruh script yang kita tuliskan. Semakin banyak variabel global yang kita tuliskan, semakin tinggi kemungkinan variabel tabrakan (collision) terjadi.