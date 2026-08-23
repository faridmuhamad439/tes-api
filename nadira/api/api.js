let galleryData = [
  { id: 1, style: "Streetwear", label: "Dark", judul: "Dark Street", deskripsi: "Gaya serba gelap yang bold.", gambar: "https://i.pinimg.com/736x/ea/09/c0/ea09c0aab622f720bc875b4af564ae90.jpg" },
  { id: 2, style: "Streetwear", label: "Jersey", judul: "Jersey Style", deskripsi: "Topi buat look sporty.", gambar: "https://i.pinimg.com/736x/d0/c0/29/d0c029567f1ec5159750acd0d22496ff.jpg" },
  { id: 3, style: "Streetwear", label: "Urban", judul: "Urban Casual", deskripsi: "Kasual ala anak kota.", gambar: "https://i.pinimg.com/736x/79/b7/f1/79b7f1161cd04fb6dde9bb652e8d9b6d.jpg" },
  { id: 4, style: "Streetwear", label: "Bold", judul: "Bold Print", deskripsi: "Motif berani dan colorful.", gambar: "https://i.pinimg.com/736x/78/e0/c9/78e0c9ea3002879bad62c581c3e36c2d.jpg" },
  { id: 5, style: "Streetwear", label: "Grey", judul: "Grey Street", deskripsi: "Palet netral dengan potongan longgar.", gambar: "https://i.pinimg.com/736x/a2/78/88/a27888974f7f59bc0ccb7c1a7f691ce3.jpg" },
  { id: 6, style: "Streetwear", label: "Layered", judul: "Layered Street", deskripsi: "Tumpuk jaket dan hoodie ala jalanan.", gambar: "https://i.pinimg.com/736x/6b/8e/9a/6b8e9a7012a1c55090c7f3cdd7ed3419.jpg" },
  { id: 7, style: "Streetwear", label: "Monochrome", judul: "Monochrome Street", deskripsi: "Satu warna dominan, tampil tetap bold.", gambar: "https://i.pinimg.com/736x/f9/a1/e8/f9a1e8be10b6dd8244f6a2b207e88dd8.jpg" },

  { id: 8, style: "Vintage", label: "Vintage", judul: "Vintage Mood", deskripsi: "Nuansa klasik yang timeless.", gambar: "https://i.pinimg.com/736x/26/9e/a6/269ea691ae0e213940af9514cda30307.jpg" },
  { id: 9, style: "Vintage", label: "Classic", judul: "Classic Outfit", deskripsi: "Tampilan klasik yang tetap stylish.", gambar: "https://i.pinimg.com/736x/dd/3d/b6/dd3db6c97debb5b0fb93b9a348a6f7cf.jpg" },
  { id: 10, style: "Vintage", label: "Vintage", judul: "Vintage Dress", deskripsi: "Dress bernuansa lawas yang manis.", gambar: "https://i.pinimg.com/736x/b1/e1/7d/b1e17da30d236e31524a26ae9ff589fd.jpg" },
  { id: 11, style: "Vintage", label: "Old", judul: "Old School", deskripsi: "Aesthetic jadul yang tetap keren.", gambar: "https://i.pinimg.com/1200x/a0/c9/c7/a0c9c7def5b456ccde00c794cb57fd79.jpg" },

  { id: 12, style: "Y2K", label: "Y2K", judul: "Y2K Girl", deskripsi: "Outfit Y2K cewe yang colorful.", gambar: "https://i.pinimg.com/736x/04/b9/c5/04b9c53b32cbc33ba229f3fd6cbe3f37.jpg" },
  { id: 13, style: "Y2K", label: "Y2K", judul: "Y2K Boy", deskripsi: "Style Y2K look santai.", gambar: "https://i.pinimg.com/736x/52/37/1f/52371ff8ad03d0b80573a4e763e2e099.jpg" },
  { id: 14, style: "Y2K", label: "Y2K", judul: "Y2K Denim", deskripsi: "Denim dengan nuansa fashion tahun 2000-an.", gambar: "https://i.pinimg.com/736x/31/2b/44/312b447eb1774761bea52865c2e2b7d6.jpg" },
  { id: 15, style: "Y2K", label: "Y2K", judul: "Y2K Street", deskripsi: "Gaya dengan sentuhan Y2K.", gambar: "https://i.pinimg.com/1200x/20/08/4f/20084f6218d1fe6c36a0263febf9d513.jpg" },

  { id: 16, style: "Retro", label: "Retro", judul: "Retro Classic", deskripsi: "Outfit dengan nuansa klasik retro.", gambar: "https://i.pinimg.com/736x/4c/ed/de/4cedde5d6d9a52964f2e6be044d300bb.jpg" },
  { id: 17, style: "Retro", label: "70s", judul: "70s Retro", deskripsi: "Gaya colorful khas tahun 70-an.", gambar: "https://i.pinimg.com/1200x/cc/ff/69/ccff690c9dbdca105e0a08fc658ad08d.jpg" },
  { id: 18, style: "Retro", label: "80s", judul: "80s Retro", deskripsi: "Outfit bold dengan karakter tahun 80-an.", gambar: "https://i.pinimg.com/1200x/a9/0a/75/a90a75f229e6e2f98f199a9cfa78ca70.jpg" },
  { id: 19, style: "Retro", label: "90s", judul: "90s Retro", deskripsi: "Gaya santai khas era 90-an.", gambar: "https://i.pinimg.com/1200x/c0/4b/eb/c04beb8a9a617260fd3318289ed8e325.jpg" },

  { id: 20, style: "Grunge", label: "Grunge", judul: "Grunge Outfit", deskripsi: "Style dark yang bebas.", gambar: "https://i.pinimg.com/736x/4a/3c/60/4a3c600ddb1a0b7bf1f159c85e832295.jpg" },
  { id: 21, style: "Grunge", label: "Dark", judul: "Dark Mood", deskripsi: "Serba gelap dengan kesan misterius.", gambar: "https://i.pinimg.com/736x/42/ce/c5/42cec52039c3a519022f4dfadbdcbd1b.jpg" },
  { id: 22, style: "Grunge", label: "90s", judul: "90s Grunge", deskripsi: "Gaya kasar khas era 90-an.", gambar: "https://i.pinimg.com/736x/f8/26/02/f826025fe49ec30ec807a17e9bce2324.jpg" },
  { id: 23, style: "Grunge", label: "All", judul: "All Black", deskripsi: "Total hitam yang edgy.", gambar: "https://i.pinimg.com/1200x/e9/2d/c2/e92dc23f8b4501663e93df6391fcbc7a.jpg" },
  { id: 24, style: "Grunge", label: "Rock", judul: "Rock Casual", deskripsi: "Outfit casual dengan sentuhan rock.", gambar: "https://i.pinimg.com/736x/26/b4/b2/26b4b2077685d88b0e6f9e09561f540e.jpg" },
  { id: 25, style: "Grunge", label: "Edgy", judul: "Edgy Grunge", deskripsi: "Outfit edgy dengan karakter yang kuat.", gambar: "https://i.pinimg.com/736x/58/75/35/587535e23e9c07dbd2a2957ff585e4fc.jpg" },

  { id: 26, style: "Casual", label: "Casual", judul: "Casual Style", deskripsi: "Outfit santai dan nyaman.", gambar: "https://i.pinimg.com/736x/33/ba/1b/33ba1b849d619a239d7b03353280925a.jpg" },
  { id: 27, style: "Casual", label: "Daily", judul: "Daily Cute", deskripsi: "Simpel, nyaman, dan cocok untuk sehari-hari.", gambar: "https://i.pinimg.com/736x/bd/0f/98/bd0f98e17f12cc1cc6179cbe37f2fefe.jpg" },
  { id: 28, style: "Casual", label: "Denim", judul: "Denim Casual", deskripsi: "Outfit santai untuk menemani aktivitas harian.", gambar: "https://i.pinimg.com/736x/22/2d/36/222d369cad986369648ce90aca66db1a.jpg" },
  { id: 29, style: "Casual", label: "Cozy", judul: "Cozy Casual", deskripsi: "Casual style yang effortless dan stylish.", gambar: "https://i.pinimg.com/736x/db/53/b6/db53b646619adef2435c2691fa01be2e.jpg" },
  { id: 30, style: "Casual", label: "Simple", judul: "Simple", deskripsi: "Gaya minimalis yang mudah dipadukan.", gambar: "https://i.pinimg.com/736x/68/f4/14/68f4147a8b9723e0239848cc75a8c2e4.jpg" },
  { id: 31, style: "Casual", label: "Marun", judul: "Marun Casual", deskripsi: "Casual style untuk kamu yang suka kesederhanaan.", gambar: "https://i.pinimg.com/1200x/27/17/b9/2717b9d3d3a7a591ae76346200c20864.jpg" },
  { id: 32, style: "Casual", label: "Coklat", judul: "Coklat Casual", deskripsi: "Gaya minimalis yang mudah dipadukan hijab.", gambar: "https://i.pinimg.com/736x/0b/70/f8/0b70f8d301354fb96b8194599e61a156.jpg" },
  { id: 33, style: "Casual", label: "Black", judul: "Black Casual", deskripsi: "Gaya casual yang cocok untuk berbagai suasana.", gambar: "https://i.pinimg.com/736x/2d/ce/c9/2dcec9471222d07df77c9fcb28f86ffe.jpg" },
  { id: 34, style: "Casual", label: "Weekend", judul: "Weekend Casual", deskripsi: "Look casual yang cocok untuk hangout.", gambar: "https://i.pinimg.com/736x/4d/95/1f/4d951fc0041d4e3506db7b26efa4c80d.jpg" },
  { id: 35, style: "Casual", label: "Outfit", judul: "Outfit Casual", deskripsi: "Karena outfit nyaman juga bisa tetap keren.", gambar: "https://i.pinimg.com/736x/b0/81/ed/b081edbc41ba5cb92bd44ee5feefdfad.jpg" }
];

export default function handler(req, res) {
    res.status(200).json(galleryData);
}