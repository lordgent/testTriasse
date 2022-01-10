import React from "react";
import Image from "next/image";
import imgartikel from "../../../assets/img/img-article-1.jpg";
function InfoDetailProduct() {
  return (
    <div className="w-9/12 bg-white shadow-lg">
      <div className="w-full">
        <Image src={imgartikel} alt="imagearticle" sizes="100%" />
      </div>
      <div className="px-10 py-10">
        <p className=" text-md text-zinc-700 font-semibold lg:text-2xl">
          Paket Skrining Diabetes Melitus{" "}
        </p>
        <p className="text-xs py-6 font-semibold">Informasi detail</p>
        <p className="text-xs text-gray-500">
          Diabetes melitus merupakan penyakit yang dapat menyerang semua
          golongan usia, termasuk anak muda. Kondisi ini terbagi ke dalam dua
          jenis, tipe-1 dan tipe-2. Diabetes melitus tipe-1 terjadi karena
          penyakit autoimun yang menyebabkan pankreas tidak dapat memproduksi
          insulin. Sementara itu, diabetes melitus tipe-2 muncul sebagai efek
          dari pola makan tidak sehat karena tidak bisa mengontrol asupan gula
          yang masuk dalam tubuh. Di usia muda, kebanyakan orang cenderung
          mempunyai pola makan yang tidak sehat. Sebagai contoh, banyak anak
          muda yang lebih menyukai fast food dan makanan-makanan manis seperti
          donat, kue, hingga minuman boba dibandingkan mengonsumsi makanan
          sehat. Jika kebiasaan tersebut tidak diubah, bukan tidak mungkin Anda
          akan menderita diabetes militus di usia muda. Ketika mengonsumsi gula
          secara berlebihan, terjadi peningkatan resistensi insulin. Peningkatan
          resistensi insulin membuat tubuh tidak dapat memproses kelebihan gula
          dengan baik. Lonjakan kadar gula darah kemudian tak bisa terhindarkan
          dan memicu penyakit diabetes melitus tipe-2. Selain pola makan, faktor
          seperti usia, berat badan, genetik, dan gaya hidup juga turut berperan
          dalam berkembangnya penyakit ini. Sementara itu, penyebab pasti dari
          diabetes tipe-1 belum diketahui secara pasti. Meski begitu, penyakit
          autoimun diketahui ikut berkontribusi karena membuat sistem imun tubuh
          menyerang dan menghancurkan sel beta penghasil insulin di pankreas.
          Faktor lain yang disebut ikut ambil peran dalam munculnya penyakit ini
          antara lain genetik dan lingkungan. Menerapkan pola hidup sehat
          merupakan cara mengatasi diabetes di usia muda yang paling sederhana.
          Beberapa tindakan yang harus dilakukan penderita diabetes antara lain
          konsumsi makanan sehat, rutin berolahraga, istirahat dengan cukup,
          hingga menghilangkan kebiasaan merokok. Cara mencegah diabetes di usia
          muda adalah dengan menerapkan pola hidup sehat dalam kehidupan
          sehari-hari. Untuk mencegah diabetes tipe-2, aturlah pola makan dan
          asupan gula yang masuk ke dalam tubuh. Selain itu, Anda juga harus
          rajin berolahraga supaya berat badan tetap ideal. Sementara itu, belum
          ada tindakan yang dapat dilakukan untuk mencegah diabetes tipe-1. Jika
          merasakan gejala-gejala diabetes, segeralah berkonsultasi dengan
          dokter di Mitra Keluarga untuk mendapatkan penanganan yang tepat.
        </p>
        <p className="text-xs text-gray-500">
          Beberapa cara yang bisa dijadikan pilihan untuk mengatasi diabetes, di
          antaranya: <br /> 1. Suntikan insulin Bagi penderita diabetes tipe-1,
          suntikan insulin merupakan obat utama karena tubuh mereka tidak mampu
          memproduksinya. Ada empat jenis insulin yang dapat digunakan oleh
          penderita diabetes. Masing-masing jenis dibedakan berdasarkan seberapa
          cepat cairan tersebut bekerja dan berapa lamakah efeknya bertahan
          dalam tubuh.
        </p>
      </div>
    </div>
  );
}

export default InfoDetailProduct;
