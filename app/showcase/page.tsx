import Link from 'next/link'

const games = [
  {
    gume: "wall-rune",
    title: "Wall Rune",
    description: "Dinding besar yang memisahkan antara dunia di dalam dungeon dan overworld. Berlatarkan fantasi abad pertengahan.",
    genre: ["Action RPG", "Topdown", "Fantasy"]
  },
  {
    gume: "yustoria", 
    title: "Yustoria", 
    description: "Visual Novel dengan pilihan bercabang serta eksplorasi dalam bentuk 2D Topdown maupun 2D Platformer.",
    genre: ["Visual Novel", "Mystery", "Slice of Life"]
  }
]

export default function ShowcasePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-dark">Showcase <span className="text-yellow">Game</span></h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Contoh game yang dibuat dengan <span className="text-yellow">Raktangle Engine</span>:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {games.map((game) => (
          <Link key={game.gume} href={`/showcase/${game.gume}`}>
            <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition cursor-pointer">
              <h2 className="text-2xl font-bold mb-3 text-dark">{game.title}</h2>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <div className="flex flex-wrap gap-2">
                {game.genre.map((g) => (
                  <span key={g} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}