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