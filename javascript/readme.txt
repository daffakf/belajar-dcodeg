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

# Mode Strict
Mode Strict adalah mode yang memaksakan penulisan program JavaScript yang baik dan aman. Hal ini memastikan tidak terjadinya kegagalan dalam menjalankan kode akibat penulisan script yang buruk, dan juga mencegah timbulnya bug. 

Berikut beberapa hal yang tidak dapat dilakukan jika menggunakan mode Strict:

Menggunakan variabel sebelum mendeklarasikannya. 
Menghapus variabel, function dan argumen.
Menggunakan definisi object property yang berulang.
Menggunakan definisi parameter pada function yang berulang.
Menulis pada property jenis readonly.
Menggunakan angka dengan penulisan oktal.
Menulis pada property jenis get.
Menghapus undelete property seperti pada property jenis prototype.
Menggunakan string “eval” dan “argument” sebagai variabel.
Menggunakan statement jenis with.
Menggunakan future keyword reserve seperti implements, interface, package, private, protected, public, static, yield.

# Cara aktivasi mode Strict
Jalankan mode Strict dengan cara menuliskan perintah “use strict” pada awal sebuah script atau function. Perintah ditulis dalam bentuk tulisan biasa dan bukan merupakan statemen. Jika perintah ditulis di awal sebuah script maka akan berlaku untuk secara global. Jika ditulis di dalam function maka tidak akan berlaku secara global.
Syntax:
"use strict";
x = 9;       // ini akan dianggap error karena variabel belum dideklarasikan
showAngka();   // ini akan dianggap error karena function belum dideklarasikan
 
function showAngka() {
  var x = 9;
  alert(x);
}

# Browser Object
Seperti yang kita tahu, dengan menggunakan JavaScript, website kita dapat lebih fungsional dan interaktif. Untuk membuat website menjadi interaktif, tentu JavaScript harus dapat mengontrol elemen yang ada pada website. Dalam mengontrol browser, JavaScript menggunakan object yang sudah tersedia dalam browser yakni window. 
Pada JavaScript, browser dikenal sebagai window object. Di dalam objek window itu sendiri terdapat banyak properties dan method yang bisa digunakan, salah satu yang sudah kita ketahui adalah alert().
Kita bisa melihat secara lengkap apa saja properti, method serta event yang ada pada objek window melalui console browser dengan mengetikkan window pada console.

- Dengan properti dan method tersebut, JavaScript mampu mengontrol browser melalui syntax. Kita tidak perlu mengetahui seluruh properti dan method. Berikut beberapa properti dan method yang sering digunakan seperti:

history - Sebagai navigasi (go back atau go forward) histori URL browser.
location -Mendapatkan URL yang terdapat pada address bar browser.
alert() - Menampilkan dialog alert dengan pesan dan tombol “ok”.
close() - Menutup tab yang aktif.
confirm() - Menampilkan dialog dengan pesan dan tombol “ok” dan “cancel”. Method ini akan mengembalikan nilai boolean sesuai response dari pengguna.
prompt() - Menampilkan dialog dengan pesan dan teks input. Method ini akan mengembalikan nilai string sesuai response dari pengguna.

Dalam mengakses properti dan method pada objek window, kita bisa menuliskannya secara langsung tanpa harus memanggil objek window-nya terlebih dahulu. Karena properti dan method pada window bersifat global.
Syntax:
// mengakses method alert() pada window
window.alert("Hello Browser!")
 
// Kita juga bisa mengaksesnya seperti ini
alert("Hello Browser!")

Setelah mengetahui cara penggunaan browser object dan dasar-dasar JavaScript, dengan menggabungkan pengetahuan keduanya, kita bisa membuat program sederhana. Contohnya kita bisa membuat program yang interaktif dengan menggunakan prompt() untuk mendapatkan nilai input dari pengguna dan alert() untuk menampilkan pesan.
Syntax:
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
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
   alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}

# DOM
Document Object Model (DOM) memberikan kita jalan untuk mengakses dan memanipulasi konten pada dokumen. DOM merupakan application programming interface (API) untuk HTML, XML atau SVG. Dengan DOM berkas HTML dapat direpresentasikan dalam bentuk objek yang dapat diakses oleh JavaScript (sebenarnya tidak hanya oleh JavaScript. DOM juga dapat diakses oleh bahasa pemrograman lain). Melalui DOM inilah JavaScript dapat memanipulasi elemen beserta atributnya pada HTML.
Struktur objek DOM digambarkan seperti struktur node tree (pohon simpul). Disebut pohon karena strukturnya seperti pohon dengan batang induk tunggal yang bercabang menjadi beberapa cabang anak, masing-masing memiliki daun. Pada kasus ini induk tunggal batang merupakan elemen <html>, cabangnya merupakan anak elemen di dalamnya, dan daun adalah konten di dalam elemen tersebut.
Syntax:
<!DOCTYPE html>
<html>
   <head>
       <title>DOM Structure</title>
   </head>
   <body>
       <h1>Hallo Developer!</h1>
       <p>Belajar Dasar Pemrograman Web</p>
   </body>
</html>

getElementById() - document.getElementById(“display”); = Mengembalikan elemen yang memiliki nilai id “display”.
getElementsByName() - document.getElementsByName(“button”) = Mengembalikan banyak elemen (NodeList) yang memiliki attribute name dengan nilai “button”.
getElementsByClassName() - document.getElementsByClassName(“button”) = Mengembalikan kumpulan yang memiliki class "button" dalam bentuk HTMLCollection.
getElementsByTagName() - document.getElementsByTagName(“div”) = Mengembalikan banyak <div> elemen berupa HTMLCollection
querySelector() - document.querySelector(“.button”); = Mengembalikan elemen pertama yang menerapkan class “button”.
querySelectorAll() - document.querySelectorAll(“.button”); = Mengembalikan kumpulan Node beserta turunannya (NodeList) dengan class “button”.

- Karena HTMLCollection mirip seperti array yang dapat menampung banyak data di dalamnya, HTMLCollection juga memiliki karakteristik mirip seperti array. HTMLCollection memiliki properti length untuk mendapatkan jumlah elemen yang ditampung. Untuk mengakses nilai individual elemennya menggunakan indexing.
Syntax: 
const query = document.querySelector("button");
Contoh: query[4]

- Kita juga dapat melakukan perulangan menggunakan for of pada HTMLCollection:
Syntax:
for (let item of buttons) {
  console.log(item);
}

Dalam menggunakan method querySelector() tentu kita menggunakan query dalam menentukan target elemen. Untuk menargetkan elemen berdasarkan attribute class, kita gunakan tanda “.”, sedangkan jika kita menargetkan dengan menggunakan id, gunakan tanda “#”.

# Memanipulasi Element
Setelah kita tahu cara mengakses elemen melalui objek document, sekarang saatnya kita belajar cara memanipulasi elemen yang didapat, seperti mengubah konten, menambahkan atau mengubah nilai atribut, dan menambahkan action/event pada elemen.

# Memanipulasi Atribut
Untuk mengubah atau menambah nilai atribut pada elemen, apa  method yang kita gunakan? setAttribute() jawabannya. Method ini membutuhkan dua buah argumen string yang merupakan nama dan nilai dari atributnya.
Struktur: 
someElement.setAttribute("attributName", "attributeValue");

Kita akan coba memperbaikinya dengan mengubah nilai atribut src pada elemen <img id=”catImage”> melalui JavaScript.
Syntax:
let catImage = document.querySelector("#catImage");
catImage.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");

Selain mengatur nilai atribut elemen, kita juga dapat mengambil nilai dari atribut elemen yang sedang diterapkan dengan menggunakan method getAttribute(). Method tersebut membutuhkan satu buah argumen string yang merupakan nama atribut dan akan mengembalikan nilai dari atribut tersebut.
Syntax:
catImage.getAttribute("src");

# Memanipulasi Konten Elemen
Dengan JavaScript juga kita dapat mengubah konten yang ada di dalam HTML. Konten pada elemen disimpan di dalam properti innerHTML (konten dalam bentuk HTML) atau innerText (konten dalam bentuk Teks). Hasilnya, dalam memanipulasi konten kita dapat melakukannya dengan mengubah nilai dari properti tersebut.
Syntax:
let caption = document.querySelector("#caption");
caption.innerHTML = '<em>Tiga Anak Kucing</em>'

# Membuat dan Menambahkan Elemen Baru
Sebenarnya terdapat beberapa cara dalam membuat elemen HTML baru menggunakan JavaScript. Bahkan kita bisa gunakan langsung properti innerHTML dengan menuliskan langsung tag HTML-nya kemudian menggabungkan dengan nilai yang ada pada elemen (appending). Tapi ini bukan pendekatan yang baik.
Dalam membuat elemen baru, DOM telah menyediakan method yang bernama createElement().
Syntax: 
let newElement = document.createElement('p');

Dengan menjalankan perintah tersebut maka terciptalah elemen paragraf baru yang diinisialisasi pada variabel newElement.
Pada variabel newElement kita dapat memberikan nilai konten dengan menggunakan properti innerHTML ataupun innerText.
Syntax:
newElement.innerHTML = 'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali';

Walaupun sekarang variabel newElement sudah memiliki konten di dalamnya, tetapi mengapa belum muncul pada jendela browser? Hal tersebut karena fungsi createElement() hanya akan membuat sebuah elemen baru, tidak berarti ia akan memasukkannya ke dalam document.body.
Agar elemen baru tampil pada jendela browser, kita perlu memasukkan elemen tersebut pada body dengan menggunakan fungsi appendChild();
Syntax:
document.body.appendChild(newElement);

# Menambahkan Aksi (Event) pada Element
Selain mampu mengakses elemen dalam bentuk objek pada halaman, JavaScript juga mampu menerima event atau kejadian yang terjadi pada elemen. Hal tersebut dinamakan Event Handler. Event bisa berupa interaksi dari pengguna seperti click, atau sekedar mengarahkan kursor pada elemen. Dengan menerapkan event handler, kita dapat menjalankan suatu fungsi tertentu ketika event terjadi pada elemen.
Untuk menambahkan Event Handler pada elemen kita gunakan method, addEventListener() pada target element. Method ini membutuhkan setidaknya dua buah argument.
Yang pertama adalah sebuah string sebagai tipe event-nya. Ada banyak sekali tipe event yang dapat digunakan pada method addEventListener(), Anda bisa melihat secara lengkap pada tautan berikut: https://developer.mozilla.org/en-US/docs/Web/Events. Salah satu yang banyak digunakan adalah “click”. Event ini akan membaca kejadian dimana pengguna melakukan click pada element.
Kemudian yang kedua adalah sebuah fungsi yang akan dijalankan ketika event terjadi. Pada fungsi ini kita dapat memberikan sebuah argumen yang merupakan object yang berisikan informasi tentang action yang terjadi. Termasuk informasi mengenai target elemen event-nya (event.target). Argumen ini biasanya diberikan nama “event”.
Syntax:
catImage.addEventListener('click', function(event) {
   document.querySelector('#count').innerText++;
});

Dengan menjalankan kode tersebut pada latihan sebelumnya, berarti kita memberikan sebuah event ‘click’ pada elemen catImage. Ketika gambar kucing ditekan akan menjalankan fungsi yang menambahkan nilai konten pada elemen dengan id count.

# Menerapkan JavaScript pada Web Kalkulator
Langkah pertama adalah buatlah sebuah objek dengan nama calculator. Di dalamnya terdapat properti yang menggambarkan data dan kondisi dari kalkulatornya, seperti displayNumber, operator, firstNumber, dan isWaitForSecondNumber. Sehingga kodenya akan nampak seperti ini:

const calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};

Kita gunakan objek ini sebagai tempat menyimpan data dan kondisi pada calculator, di mana angka yang muncul pada layar kalkulator selalu diambil dari data calculator.displayNumber.
Nilai dari properti operator dan firstNumber diberikan null dulu karena akan diberikan nilai ketika pengguna melakukan aksi. Properti isWaitForSecondNumber merupakan kondisi di mana kalkulator sedang menunggu pengguna menentukkan angka kedua dalam melakukan perhitungan.
Setelah membuat object calculator, selanjutnya kita buat fungsi-fungsi umum yang dilakukan kalkulator seperti me-update angka pada layar dan menghapus data pada kalkulator.

function updateDisplay() {
  document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}
 
function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}

Lalu, kita buat juga fungsi untuk memasukkan angka ke dalam nilai displayNumber kalkulator.

function inputDigit(digit) {
  calculator.displayNumber += digit;
}

Kemudian, kita buat variabel buttons dengan menginisialisasikan nilai seluruh elemen button yang ada dan berikan event click pada tiap elemennya.
Untuk menangkap semua elemen div.button kita gunakan querySelectorAll("div.button") dan kita looping nilainya untuk diberikan event click di setiap elemen button-nya.

const buttons = document.querySelectorAll('.button');
 
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;
 
    inputDigit(target.innerText);
    updateDisplay();
  });
}

Saat ini kalkulator masih dapat menampilkan angka 0 di awal bilangan, hal itu tentu aneh dan tidak pernah terjadi pada kalkulator manapun, kecuali menampilkan bilangan desimal. Untuk memperbaikinya, tambahkan sebuah kondisi dimana jika displayNumber bernilai ‘0’ di fungsi inputDigit() sehingga angka yang pertama dimasukkan pengguna akan menggantikan keseluruhan nilai displayNumber. Selain itu, lakukan seperti biasanya. Untuk melakukannya kita gunakan if-else statement.

function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}
 
function inputDigit(digit) {
  if (calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}
 
const buttons = document.querySelectorAll('.button');

Dengan demikian, kalkulator tidak akan menampilkan angka 0 diawal bilangan lagi.
Kemudian, kita akan membuat tombol clear (CE) pada kalkulator berjalan dengan semestinya sehingga kita tidak perlu melakukan reload pada browser untuk reset kalkulator seperti yang ditunjukkan GIF di atas.
Pada event handler, kita tambahkan kondisi dimana ketika event target merupakan elemen yang menerapkan class clear, kita akan panggil fungsi clearCalculator().

const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;
 
    if (target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return;
    }
 
    inputDigit(target.innerText);
    updateDisplay();
  });
}

Kita bisa memanfaatkan event.classList untuk melihat nilai class apa saja dalam bentuk array yang ada di element target. Kemudian panggil function contains yang merupakan method dari array yang berguna untuk memastikan nilai yang berada di dalam array tersebut. Jika kondisi if terpenuhi, sudah dipastikan tombol tersebut adalah tombol clear (SE) sehingga kita perlu memanggil fungsi clearCalculator dan mengupdate display kalkulator. 
Jangan lupa juga untuk gunakan return statement agar fungsi event handler terhenti sehingga kode yang ada di bawahnya tidak ikut tereksekusi.
Selanjutnya, kita akan melengkapi beberapa fungsi lainnya yang ada pada kalkulator, yakni fungsi negative, operator, dan equals. Untuk itu, buat kondisi lainnya pada event handler sehingga kode tampak seperti berikut.

const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;
 
    if (target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return;
    }
 
    if (target.classList.contains('negative')) {
      inverseNumber();
      updateDisplay();
      return;
    }
    if (target.classList.contains('equals')) {
      performCalculation();
      updateDisplay();
      return;
    }
    if (target.classList.contains('operator')) {
      handleOperator(target.innerText);
      return;
    }
 
    inputDigit(target.innerText);
    updateDisplay();
  });
}


function inverseNumber() {
  if (calculator.displayNumber === '0') {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}

Fungsi inverseNumber cukuplah simple. Hal tersebut karena kita hanya perlu melakukan perkalian calculator.displayNumber dengan nilai -1. Terkecuali jika displayNumber masih bernilai ‘0’, perkalian tidak akan dilakukan.

Selanjutnya, kita akan membuat fungsi untuk menetapkan sebuah operator, baik itu "+" atau "-" di kalkulator. Tuliskan fungsi berikut.

function handleOperator(operator) {
  if (!calculator.isWaitForSecondNumber) {
    calculator.operator = operator;
    calculator.isWaitForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
 
    // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
    calculator.displayNumber = '0';
  } else {
    alert('Operator sudah ditetapkan');
  }
}

Fungsi tersebut membutuhkan satu buah argument, yaitu operator. Nilai operator tersebut bersumber dari innerText tombol operator yang menjadi event target. Secara prinsip, fungsi ini bertujuan untuk menyimpan operator dan firstNumber dengan nilai displayNumber saat ini pada object calculator, hanya jika properti isWaitForSecondNumber bernilai false. Namun, jika isWaitForSecondNumber bernilai true, browser akan menampilkan alert dengan pesan “Operator sudah ditetapkan”.
Voila! Sekarang tombol operator sudah dapat menetapkan nilai operator pada object calculator.
Kita bisa lihat di console browser bahwa nilai sekarang dari properti operator dan firstNumber tidak null lagi, begitu pula dengan properti isWaitForSecondNumber yang sudah berubah menjadi true.
Kita buat fungsi terakhir, yaitu performCalculation. Fungsi ini digunakan untuk melakukan kalkulasi terhadap nilai - nilai yang terdapat pada objek calculator, sehingga pastikan kalkulator sudah memiliki nilai operator dan firstNumber ketika fungsi ini dijalankan.

function performCalculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert('Anda belum menetapkan operator');
    return;
  }
 
  let result = 0;
  if (calculator.operator === '+') {
    result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  }
 
  calculator.displayNumber = result;
}

Fungsi tersebut diawali dengan pengecekan nilai-nilai yang dibutuhkan untuk melakukan kalkulasi. Jika tidak terpenuhi maka proses akan dihentikan. Namun jika terpenuhi kalkulasi akan dilakukan.
Dalam melakukan kalkulasi terdapat pengecekan tipe operator apa yang akan dilakukan. Kita juga menggunakan parseInt() untuk mengubah nilai string menjadi number. Mengapa konversi tipe data dibutuhkan? Sejatinya kita menggunakan string dalam menampilkan nilai pada jendela browser, namun untuk proses kalkulasi kita membutuhkan number.
Dengan demikian, seluruh struktur kode pada berkas kalkulator.js akan tampak seperti berikut.

const calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};
 
function updateDisplay() {
  document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}
 
function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}
 
function inputDigit(digit) {
  if (calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}
 
function inverseNumber() {
  if (calculator.displayNumber === '0') {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}
 
function handleOperator(operator) {
  if (!calculator.isWaitForSecondNumber) {
    calculator.operator = operator;
    calculator.isWaitForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
    calculator.displayNumber = '0';
  } else {
    alert('Operator sudah ditetapkan');
  }
}
 
function performCalculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert('Anda belum menetapkan operator');
    return;
  }
 
  let result = 0;
  if (calculator.operator === '+') {
    result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  }
 
  calculator.displayNumber = result;
}
 
const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;
 
    if (target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return;
    }
 
    if (target.classList.contains('negative')) {
      inverseNumber();
      updateDisplay();
      return;
    }
 
    if (target.classList.contains('equals')) {
      performCalculation();
      updateDisplay();
      return;
    }
 
    if (target.classList.contains('operator')) {
      handleOperator(target.innerText)
      return;
    }
 
    inputDigit(target.innerText);
    updateDisplay();
  });
}

Aplikasi kalkulator yang telah kita buat tidak bisa melakukan operasi aritmatika secara berkelanjutan, yaitu melakukan kedua secara langsung tepat setelah operasi pertama selesai. Anda bisa mengembangkannya lebih lanjut untuk meningkatkan kemampuan problem solving yang lebih baik.