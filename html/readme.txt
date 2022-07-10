# Teks Terformat
- Long quotations
Jika pada konten kita memiliki sebuah kutipan ataupun sebuah testimonial, kita dapat gunakan format long quotations dengan menggunakan tags <blockquote>. Konten di dalam elemen <blockquote> ini dapat berupa sebuah paragraf, heading, ataupun list. 

- Preformatted text
Pada sub-modul sebelumnya, kita sudah mengetahui bahwa HTML akan mengabaikan penulisan spasi yang dituliskan secara berulang dan juga line breaks (baris baru). Tetapi pada beberapa tipe konten seperti contoh kode atau puisi hal tersebut sangat berarti. Dengan begitu, terdapat sebuah elemen yang dapat kita gunakan untuk menampilkan konten sesuai yang kita tulis pada text editor. Untuk menggunakannya, kita gunakan elemen <pre> sebagai pembungkus kontennya. 

- Figure
Figure
Elemen ini digunakan untuk merepresentasikan konten tersendiri (self-contained content) seperti ilustrasi, diagram, foto atau bisa juga sebuah baris kode. Banyak hal yang dapat digunakan dalam elemen ini. 
Elemen ini digunakan untuk mengelompokkan blok konten yang dapat dipindahkan posisinya dari blok utama sebuah dokumen tanpa mempengaruhi arti dari induk dokumen.
Di dalam elemen figure kita dapat menuliskan elemen <figcaption> sebagai sebuah caption (judul) untuk konten tersebut. Berikut contoh penggunaan figure pada sebuah konten gambar.

# Inline Formatting text
Standarnya elemen HTML memiliki dua sifat yaitu block dan inline. Elemen yang memiliki sifat block selalu membuat baris baru ketika menampilkannya, contohnya seperti elemen paragraf, list, heading, dan lainnya. Berlawanan dengan elemen yang memiliki sifat block, yaitu elemen inline. Elemen ini tidak menambahkan baris baru ketika dibuat.

- Anchor
Anchor (jangkar) merupakan elemen yang digunakan untuk membuat sebuah hyperlink ke halaman atau website lain, file, alamat email, atau URL lainnya. Untuk menggunakan elemen ini kita gunakan tag <a>...</a> bersama dengan atribut href untuk menetapkan sebuah target yang akan dituju. 

(atribut = nilai)
 + download = filename
Menginstruksikan browser untuk mengunduh pada URL yang ditetapkan daripada mengarahkannya.  

 + href = URL
Menetapkan target yang akan diarahkan/unduh ketika pengguna menekan hyperlink.

- Emphasized text
Gunakan elemen <em> untuk menunjukan bagian kata yang perlu kita tekankan. Elemen ini menunjukan stress emphasis atau konten/kata yang perlu mendapatkan penekanan atau perhatian khusus. Berikut contoh penggunaannya.

- Important text
Gunakan elemen <strong> untuk menunjukan sebuah teks yang begitu penting (strong importance), serius, ataupun mendesak. Dalam arti teks tersebut harus dapat perhatian lebih dari teks biasa lainnya.
Standarnya pada browser, sebuah teks yang dibungkus dengan tag  <strong> akan ditampilkan secara tebal. Dan ketika pengguna menggunakan pembaca layar (screen reader), suara yang terdengar akan berbeda. Ini mengartikan bahwa teks tersebut penting tidak hanya sekedar tebal.

- Short quotations
Gunakan elemen <q> untuk menandai sebuah kutipan dalam sebuah teks. Elemen short quotations berbeda dengan <blockquote>. Elemen ini digunakan untuk kutipan pendek yang terletak di dalam baris (inline).
Standarnya pada browser sebuah teks yang diberi markup <q> akan ditampilkan di dalam tanda kutip (Quotation marks).

- Cite
Selain sebuah atribut, <cite> juga merupakan sebuah elemen yang digunakan untuk sebuah rujukan pada sebuah dokumen, contohnya sebuah buku, majalah, artikel dan lainnya. Standarnya pada browser sebuah teks yang diberi markup <cite> akan ditampilkan dengan cetak miring (italic).

- Defining terms
Elemen <dfn> digunakan ketika mendefinisikan sebuah istilah (term). Elemen ini harus terletak pada elemen lain yang menaunginya. Contohnya pada sebuah elemen <p> atau elemen <section>.

- Subscript <sub> dan superscript <sup>
Subscript <sub> dan superscript <sup> merupakan elemen yang dapat membuat teks yang ditampilkan nampak kecil, dengan posisi di bawah (sub) atau di atas (sup) dari teks biasanya. Elemen ini digunakan untuk menunjukan sebuah rumus kimia ataupun matematika.

- Highlighted text
Untuk menandai atau menyorot sebuah teks kita bisa menggunakan elemen <mark>. Elemen ini digunakan ketika terdapat sebuah teks yang memiliki peran penting, biasanya teks tersebut merupakan bagian yang paling relevan atau penting dalam sebuah konteks kalimat.

- Header, Main, Footer

- nav

- Articles

- Aside

- Section

- div
 elemen ini merupakan sebuah wadah (container) yang bersifat umum untuk menampung beberapa konten. Elemen ini tidak akan memberikan efek apapun pada konten atau layout sebelum menerapkan sebuah style menggunakan CSS.

- Span
Yang kedua elemen <span>, elemen ini memberikan manfaat yang sama seperti <div>, bedanya elemen ini digunakan sebagai phrase elements dan tidak terdapat line breaks ketika menggunakannya. Sederhananya, <span> merupakan sebuah <div> yang digunakan dalam sebuah baris teks yang dapat diwadahi oleh paragraf, list, heading atau lainnya.

- Column Spans
Untuk merentangkan sebuah kolom (column spanning) kita bisa menggunakan atribut colspan pada elemen <td> atau <th>. Berikut contoh untuk penggunaan atribut colspan sehingga sebuah header mencangkup dua kolom.

- Row Spans
Untuk merentangkan sebuah baris (row spanning) kita dapat menggunakan atribut rowspan. Sama seperti column spanning, tetapi atribut ini akan merentangkan sebuah sel ke bawah. Berikut contohnya.