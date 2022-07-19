# <div class="nav-bar">
- <div> = elemen/tag
- class = atribut
- nav-bar = value

# Rules yang dituliskan dalam sebuah CSS = Selector {declaration (single declaration) / declaration block (multiple declaration)};
Selector {property: value};
h1 {color: green};
- semicolon = ;

# Cara menerapkan styling pada elemen HTML
1. External Style Sheet (satu berkas styling (.css) dapat digunakan oleh banyak berkas HTML)
Pada elemen <link> tetapkan berkas CSS yang digunakan dengan menggunakan atribut href dan beri nilai “stylesheet” pada atribut rel sebagai relationship (hubungan) antara berkas style.css dengan dokumen HTML.

2. Embedded Style Sheet
Embedded Style Sheet merupakan kumpulan rules yang dituliskan dalam berkas HTML dengan menggunakan elemen <style>.

3. Inline Style
Inline Style merupakan styling yang diterapkan pada elemen HTML dengan menggunakan atribut style.
contoh: <h1 style="color: green; margin-top: 0;"

- Inheritance
Styling HTML bersifat inheritance yang artinya dapat mewarisi properti style “tertentu” pada elemen yang ada di dalamnya. Contohnya pada rules yang kita tuliskan untuk elemen <body> akan diterapkan pada seluruh elemen yang ada di dalam elemennya (body).

- Group Selector
Jika kita menerapkan rule yang sama pada beberapa selector yang berbeda, di CSS kita dapat menggabungkan selector tersebut sehingga dapat meminimalisir penulisan kode yang berulang.

- Rule Order
apa yang seharusnya ditampilkan pada browser ketika eksternal css mengharuskan elemen <p> menampilkan warna merah, tetapi pada embedded css <p> harus menampilkan warna biru? Kembali pada alur kerja CSS yang membaca dari atas ke bawah, sehingga warna yang akan diterapkan adalah warna yang paling akhir didefinisikan. 
Tetapi kita bisa membuat sebuah property styling agar dianggap penting untuk diterapkan oleh browser dan tidak memperhatikan urutannya. Kita bisa menambahkan keyword !important diakhir nilai propertinya. 
h1 {color: red !important;}

# Selector Basic
- Type Selector
Type Selector menggunakan nama elemen sebagai target untuk diterapkannya rule.
span, h1 {deklarasi}

- Class Selector
Class selector menetapkan target elemen berdasarkan nilai dari atribut class yang diterapkan pada elemennya.
<div class="nav-bar">...</div> = .nav-bar {deklarasi}
<h1 class="nav-bar">...</h1> = h1.nav-bar {deklarasi}

- ID Selector
ID selector menetapkan target elemen berdasarkan nilai dari atribut id yang diterapkan pada elemennya. 
#nav-bar {deklarasi} (hash/octothorpe)
*Yang harus kita perhatikan kembali adalah id ini bersifat unik. Jika kita ingin menerapkan sebuah rule pada banyak elemen, sebaiknya gunakan atribut class, bukan dengan id.

- Attribute Selector
Attribute selector merupakan cara menetapkan target elemen berdasarkan sebuah atribut yang digunakan atau bahkan bisa lebih spesifik dengan nilainya.
a[href] {} / a[href^="#"] /  a[href*="example"] / a[href*="insensitive" i]

- Universal Selector
Universal selector digunakan untuk diterapkan pada seluruh elemen. Tetapi selector ini juga bisa secara spesifik menargetkan sebuah elemen dengan menggabungkan bersama selector yang lainnya.
* {}

# Combinator
- Adjacent Sibling Selector (+)
Adjacent Sibling Selector menggabungkan dua buah basic selector dengan menggunakan tanda + di antara keduanya.
Adjacent Sibling Selector terdiri dari dua buah target elemen, namun hanya elemen kedua yang menerapkan rule selama elemen tersebut dituliskan langsung setelah elemen pertama pada berkas HTML. Selain itu kedua elemen tersebut harus berada di dalam induk elemen yang sama. 

- General Sibling Selector (~)
Mirip seperti Adjacent Sibling Selector namun rules akan diterapkan pada seluruh elemen kedua yang berada setelah elemen pertama. Dengan catatan, induknya sama, walaupun posisi dari elemen kedua tidak berada tepat setelahnya. General Sibling Selector menggunakan tanda ~ untuk menetapkan elemenya.

- Child Selector (>)
Child Selector menggabungkan dua buah basic selector dengan menggunakan tanda greater than (>) di antara basic selector-nya. 
rule akan diterapkan pada seluruh elemen paragraf yang berada di dalam elemen div secara langsung. Dalam arti lain, elemen paragraf merupakan anak dari elemen div secara langsung.

- Descendant Selector (space)
Descendant Selector mirip seperti child selector namun hierarkinya lebih luas, karena rule akan diterapkan pada seluruh elemen yang menjadi turunannya walaupun secara tidak langsung. Basic selector pertama yang dituliskan pada selector ini menjadi induknya dan basic selector yang kedua merupakan elemen yang akan menerapkan rule. Selector ini menggunakan spasi dalam menggabungkan dua basic selector.

# Pseudo Selector
Selector ini menargetkan elemen pada bagian yang “tidak terlihat” seperti sifat pada elemen, sehingga untuk menetapkannya, kita tidak bisa menggunakan selector biasa. Salah satu contoh yang paling sering kita terapkan adalah :hover, Pseudo Selector tersebut kita gunakan untuk menetapkan rule ketika cursor diarahkan ke target elemen.

- Pseudo-class Selector
Pseudo-class merupakan sebuah class “semu” yang sebenarnya ada pada tiap elemen HTML. Pada contoh sebelumnya kita sudah mengetahui salah satu pseudo-class selector, dengan menggunakan selector ini kita dapat memilih elemen berdasarkan class yang tidak nampak pada dokumen. Kita bisa menetapkan rule hanya ketika sebuah tautan telah dikunjungi (:visited) atau ketika sebuah elemen diarahkan dengan kursor (:hover).

- Pseudo-elemen Selector
Sama seperti pseudo-class, pseudo-elemen merupakan sebuah elemen “semu” yang sebenarnya ada tetapi tidak tampak secara tertulis pada berkas HTML. Selector ini biasa digunakan ketika kita ingin menambahkan sebuah konten tepat sebelum dan setelah sebuah elemen paragraf. Alhasil kita tidak perlu menuliskan struktur elemen tersebut pada berkas HTML. Cukup manfaatkan pseudo-elemen ::before dan ::after kemudian tuliskan konten tersebut cukup pada CSS. Contohnya kita ingin menambahkan tanda kutip sebelum dan sesudah elemen blockquote.

# Formatting Text (Font & Text)
font-family : Menetapkan jenis font yang akan diterapkan pada target.
font-size : Menentukan ukuran pada teks.
font-weight : Menentukan ketebalan pada teks. 
font-style : Menetapkan styling yang diterapkan pada teks.
font-variant : Menentukan teks untuk menggunakan gaya small caps (huruf kapital kecil).
font : Shorthand dari properti font yang ada.

Pada rule tersebut kita mengubah standar font yang digunakan browser dengan font ‘sans-serif’. Sebenarnya untuk nilai dari properti ini dapat lebih dari satu (dikenal sebagai font stack). Tujuannya adalah sebagai fallback jika terjadi kegagalan dalam menggunakan font yang kita gunakan. 
p {font-family: sans-serif / "Open Sans" (memiliki spasi pakai tanda kutip ""), Arial, Verdana; }

- generic font families
serif : jenis font yang memiliki runcing pada garis akhir karakternya. Times New Roman merupakan salah satu jenis serif font.
sans-serif : jenis font yang tidak meruncing pada garis akhir karakternya. Contohnya “Open Sans”, “Fira Sans” dan lainnya.
monospace : jenis font yang memiliki nilai lebar tiap karakternya sama. Consolas merupakan salah satu jenisnya.
cursive: jenis font yang tampak seperti handwriting atau hasil tulisan tangan.
fantasy : jenis font yang merepresentasikan karakteristik yang menyenangkan.
system-ui : jika menerapkan nilai ini maka font yang diterapkan akan sama seperti font yang digunakan pada sistem operasi kita.
math : jenis font yang digunakan untuk penulisan rumus-rumus matematika.
emoji : jenis font yang digunakan untuk menampilkan emoji.
fangsong : jenis font yang menampilkan gaya penulisan Chinese.

- Satuan dalam menetapkan ukuran font terdapat dua jenis. Yang pertama relative, yakni satuan yang nilainya 
tergantung pada sesuatu hal, contohnya ukuran dari viewport, induk elemen ataupun ukuran teks standar. 
Dan yang kedua adalah absolute, yakni satuan yang nilainya telah ditentukan atau digunakan dalam dunia nyata.

contoh:
body {
  font-size: 16px;
}
h1 {
  font-size: 150%; /* 150% dari 16 = 24px */
}

- text-shadow
Nilai dari properti ini cukup rumit karena membutuhkan tiga buah nilai dan satu buah nilai warna sehingga membutuhkan empat nilai dalam satu properti untuk menentukan bayangannya.

Nilai pertama : menunjukkan seberapa jauh ke kiri atau kanan (horizontal) bayangan harus ditampakkan.
Nilai kedua : menunjukkan jarak ke atas atau ke bawah (vertical) bayangan harus ditampakkan. 
Nilai Ketiga (opsional) : menentukan tingkat keburaman yang harus diterapkan pada bayangan.
Nilai Keempat :  menentukan warna yang digunakan pada bayangan.

Contoh: text-shadow: 1px 1px 0px #000000;

# inline element:

- Elemen HTML yang secara default tidak menambahkan baris baru ketika dibuat.
- Nilai lebar dan tinggi elemen inline sebesar konten di dalamnya, dan tidak dapat diubah.
- Margin dan padding hanya mempengaruhi elemen secara horizontal, tidak vertikal.

# block element:

- Elemen HTML secara default menambahkan baris baru ketika dibuat.
- Jika tidak diatur lebarnya, lebar dari elemen block akan memenuhi lebar dari browser atau elemen yang menaunginya.
- Kita dapat mengatur dimensi dari elemen block.
- Di dalam elemen block, kita dapat menyimpan tag elemen HTML lainnya.

# box shadow:

box-shadow: 6px 6px 5px 10px #666666;

- Nilai pertama : menunjukkan seberapa jauh ke kiri atau kanan (horizontal) bayangan harus ditampakkan.
- Nilai kedua : menunjukkan jarak ke atas atau ke bawah (vertical) bayangan harus ditampakkan. 
- Nilai Ketiga (opsional) : menentukan tingkat keburaman yang harus diterapkan pada bayangan.
- Nilai Keempat (opsional) : menentukan tingkat sebaran (spread) bayangan. Semakin besar nilai yang ditentukan, bayangan yang nampak pun semakin luas.
- Nilai Kelima : menentukan warna yang digunakan pada bayangan.

# Positioning

- Normal Flow / Static Flow : Merupakan default behaviour yang dimiliki elemen, di mana setiap elemen block akan ditampilkan dalam baris baru ketika dibuat. Sehingga setiap elemen block selalu muncul di bawah dari elemen block sebelumnya. Bahkan jika masih terdapat ruang kosong pada samping elemennya, mereka tidak akan nampak bersebelahan. 
- Relative Positioning : Membuat elemen bisa berpindah posisi ke atas, kanan, bawah, maupun kiri dari posisi semula atau posisi seharusnya elemen tersebut berada. Perpindahan posisi ini tidak akan berpengaruh terhadap posisi elemen di sekitarnya karena ketika menggunakan relative positioning, elemen tersebut akan dipindahkan dari normal flow.
- Absolute Positioning : Sama seperti relative, elemen akan dipindahkan keluar dari normal flow sehingga kita dapat memindahkan posisi elemen ke atas, kanan, bawah, maupun kiri secara leluasa tanpa mengganggu elemen di sekitarnya. Namun posisinya relatif pada jendela browser dan induk elemen selama induk elemen juga berada di luar dari normal flow.
- Fixed Positioning : Merupakan absolute position namun posisinya selalu relatif pada jendela browser. Bahkan ketika pengguna scrolling pun, posisinya di layar akan tetap tak berubah. 

Untuk mengubah posisi elemen yang berada di non-static flow, kita dapat menggunakan properti top, right, bottom, maupun left.
Perlu kita ingat ya, bahwa properti top, left, right, dan bottom pada CSS hanya akan berpengaruh pada elemen yang menerapkan non-static flow (elemen yang menerapkan nilai relative, absolute, dan fixed pada properti position).

- Fixed positioning merupakan absolute position namun posisinya selalu relatif pada jendela browser (meskipun diletakan di dalam induk elemen diluar dari flow normal). Bahkan ketika pengguna melakukan scrolling posisinya akan tetap nampak pada posisinya di layar.

- Floating
Sederhananya properti float dapat membuat elemen berada pada sebelah kanan atau kiri. Saat diterapkan pada elemen inline, properti float juga memungkinkan elemen di sekitarnya mengelilingi elemen tersebut (wrap).

- Permasalahan penerapan float
Properti float terlihat sangat mudah untuk digunakan, baik dalam text wrapping maupun dalam penyusunan layout. Tetapi bukan berarti ketika menggunakan properti ini, tiada efek samping atau masalah yang ditimbulkan. Apa itu?

- Clear Property
Jika sebuah elemen induk hanya memiliki satu elemen dengan menerapkan properti float, ia akan memiliki nilai tinggi 0px.
Cara yang pertama adalah dengan menggunakan properti clear. Properti clear memang dibuat untuk menghilangkan sifat float, dengan demikian elemen yang menerapkan properti float akan kembali “dianggap ada”. Namun untuk menerapkan properti ini kita perlu membuat sebuah elemen kosong (biasanya menggunakan div tanpa konten) yang menerapkan properti clear.
Nilai dari properti clear merupakan nilai yang digunakan pada properti float karena properti clear akan menghapus sifat float sesuai dengan nilai yang ditetapkan.

- overflow: auto;
Cara yang kedua adalah dengan menetapkan properti overflow: auto; pada elemen yang menampung elemen float. Sebagian developer lebih memilih menggunakan cara ini karena lebih praktis dan tidak perlu membuat elemen baru ketika menggunakannya.
Untuk menerapkannya sangatlah simpel. Cukup tambahkan properti overflow dengan nilai auto pada container.

- Properti float berfungsi untuk memindahkan suatu elemen untuk berada sebelah di kiri atau di sebelah kanan, dengan menggunakan nilai right atau left. Ketika menggunakan properti tersebut kita perlu menetapkan lebar pada elemen yang akan diterapkan properti float sehingga kita tahu berapa banyak cakupan lebar yang disediakan untuk elemen tersebut.

- Pada browser Google Chrome dan Mozilla Firefox terdapat fitur inspection. Fitur ini sangat bermanfaat bagi developer web dalam membantu pengembangan website.
Yang jelas pada inspector tersebut terdapat fitur di mana kita dapat mensimulasikan halaman website dalam tampilan mobile device atau tablet. Untuk membuka fitur inspector kita bisa gunakan shortcut ctrl + shift + i pada browser, atau dengan melakukan klik kanan -> inspect / inspect page.


- CSS Media Queries
CSS menyediakan sebuah fitur yang dapat kita gunakan untuk menentukan rule hanya pada ukuran viewport tertentu. Fitur tersebut dinamakan CSS Media Queries.

Contoh:
/* Rule yang dituliskan dalam block @media di bawah akan diterapkan pada device yang memiliki ukuran viewport di bawah 992px */
@media screen and (max-width: 992px) {
  /* ..... */
}
 
/* Rule yang dituliskan dalam block @media di bawah akan diterapkan pada device yang memiliki ukuran viewport di bawah 600px */
@media screen and (max-width: 600px) {
  /* ..... */
}

- Materi Responsive Layout
https://www.dicoding.com/blog/dasar-tampilan-responsif-pada-website/
https://web.dev/responsive-web-design-basics/

- Sticky Positioning (kombinasi relative dan fixed)
Dengan menggunakan nilai sticky pada properti position, membuat navigasi dapat melekat 
pada jendela browser (layaknya fixed position) tetapi posisi awalnya tetap menempati posisi di mana ia seharusnya berada (layaknya relative position).

# Memperbaiki CSS
Terdapat banyak cara dan best practice dalam memperbaiki CSS yang telah Anda tulis. Salah satu cara yang mudah dan cepat dilakukan adalah dengan menggunakan tools untuk otomatis mencari kesalahan pada penulisan.

# Mencari Kesalahan CSS
Salah satu cara yang paling cepat untuk memastikan bahwa CSS yang telah Anda tulis itu valid dan dapat berjalan adalah menggunakan berbagai tools online yang tersedia secara gratis. Pengecekan cukup dengan cara copy-paste kode CSS, upload berkas CSS, atau menulis alamat situs yang ingin diperiksa.

Berikut beberapa opsi gratis yang tersedia.

- https://jigsaw.w3.org/css-validator/
- https://codebeautify.org/cssvalidate
- http://csslint.net/

# Kecilkan Ukuran CSS
Ukuran CSS sangat penting untuk dapat dihemat karena akan mempengaruhi seberapa cepat situs Anda dapat dimuat pada browser. Cara untuk menghemat ukuran berkas CSS adalah dengan menghapus spasi atau karakter yang tidak diperlukan dari kode. Berikut contoh spasi atau karakter yang dapat dihapus:

- New line characters (Baris baru)
- Whitespace characters (Spasi)
- Block delimiters (Pembatas block)
- CSS comments (Komentar CSS)

Perbaikan di atas dapat dilakukan secara manual namun Anda juga dapat menggunakan tools online yang dapat memperbaiki secara otomatis. Berikut beberapa opsi yang tersedia.

- https://cssnano.co/playground/
- https://cssminifier.com/
- https://www.minifier.org/

# Flexible Box Model
Jadi apa sebenarnya itu flexbox atau flexible box model? Pada dasarnya flexbox merupakan mode layout yang mudah dan praktis untuk mengatur elemen dengan menggunakan sebuah container.

Sebelumnya kita sudah menggunakan teknik float dalam penyusunan layout. Float memang cukup mudah dipahami tetapi tak cukup praktis untuk digunakan. Pasalnya, kita memerlukan pengukuran dimensi yang tepat agar elemen berada di posisi yang diinginkan.

Dengan Flexbox kita dapat mengatur ukuran secara otomatis dan mampu beradaptasi dengan ukuran container-nya. Dengan kemampuan flexibelnya, tampilan layout yang disusun menggunakan flexbox menjadi mobile-friendly. Selain itu, flexbox dapat dikombinasikan dengan media query, sehingga ia dapat lebih optimal lagi digunakan pada peranti mobile.

Berikut beberapa konsep dari flexbox yang perlu kita ketahui:

- Dapat mengubah ukuran dimensi elemen dengan menyesuaikan ukuran yang cocok bagi ruang kosong yang ada pada container-nya.
- Flexbox is directional agnostic. ini berbeda dengan konsep block model di mana elemen selalu ditampilkan secara vertikal dengan membuat baris baru. Ini berbeda pula dengan konsep inline model di mana elemen selalu ditampilkan secara horizontal. Dengan flexbox kita dapat melakukan kedua hal tersebut dengan mudah.
- Dibuat untuk menyusun layout yang mobile friendly.

# Flex Container
Flex container merupakan sebuah elemen yang menampung beberapa flex item. Karena Parent-child merupakan relasi yang wajib ada dalam penerapan flexbox, maka setiap flex item harus merupakan anak / child dari flex container.

Materi Flexbox: https://medium.com/@elelvyra/learn-css-display-property-flexbox-2-2c78f559889f

 Pada box, kita tidak menetapkan nilai dimensi seperti width dan height. Kita cukup menggunakan satu properti yakni flex-grow: 1;.

# Property flex-grow
Properti flex-grow ini digunakan untuk memberitahu berapa banyak ukuran yang harus ditetapkan oleh flex-item. Nilai dari properti ini bukan nilai dari dimensi asli pada flex item, melainkan nilai yang relatif terhadap ruang kosong pada flex container.

Jika kita menetapkan nilai flex-grow yang sama pada seluruh flex item, maka dimensi dari tiap flex item akan sama rata dan memenuhi ruang kosong yang ada pada container. Namun jika kita memberikan nilai yang berbeda dari salah satu item-nya, contohnya nilai yang lebih besar, maka flex item tersebut akan mencakup ukuran yang lebih besar. Flex item yang lain akan menyusut menyesuaikan agar tetap masuk pada ruang flex container. 

# Flex Direction
Seperti yang sudah kita ketahui sebelumnya, flexbox merupakan directional agnostic, di mana kita dapat mengubah arah munculnya flex-item yang berada di flex container. Secara default deretan flex-item ditampilkan secara horizontal, namun kita dapat mengubahnya dengan menetapkan properti flex-direction pada flex container-nya.

Ada empat nilai yang bisa digunakan untuk properti flex-direction, antara lain:

- row : merupakan nilai default, di mana deretan flex-item pada container ditampilkan secara horizontal.
- row-reverse : memiliki sifat yang sama seperti row, namun urutan flex item-nya ditukar.
- column : Deretan flex-item pada container ditampilkan secara vertikal.
- column-reverse : memiliki sifat yang sama seperti column, namun urutan flex item-nya ditukar.

Dengan menggunakan properti ini, kita dapat membuat dua dimensional layout dengan menempatkan flex container di dalam flex container, dalam arti lain sebuah flex container dapat memiliki child berupa flex container lain.