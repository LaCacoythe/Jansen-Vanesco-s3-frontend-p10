export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-dark">Tentang <span className="text-yellow">Raktangle Engine</span></h1>
      
      <div className="space-y-6 text-lg text-dark">
        <p>
            Raktangle Engine adalah game engine 2D modern yang sudah dirancang khusus untuk pembuatan game berbasis genre hybrid. 
            Memberikan kemudahan yang berfokus kepada genre 2D sehingga developer hanya perlu fokus pada pengembangan konten dan mekanik game.
        </p>

        <p>
            Raktangle Engine dibuat pada tahun 2025 oleh Jansen Vanesco, seorang develpoer indie yang tertarik pada game 2D.
            Raktangle Engine terinspirasi dari serial "RPG Maker MV", "RPG Maker MZ", dan lainnya.
        </p>

        <div className="bg-listbox border-l-4 border-primary p-6 my-8">
          <p className="text-dark font-semibold italic">
            "Game engine ini akan sangat membantu anda sebagai pengguna dalam membuat game 2D yang anda impikan"
          </p>
          <p className="text-primary mt-2 font-medium">- Jansen Vanesco</p>
        </div>
      </div>
    </div>
  )
}