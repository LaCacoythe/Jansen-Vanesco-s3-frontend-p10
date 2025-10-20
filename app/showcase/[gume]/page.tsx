import { notFound } from 'next/navigation'
import Link from 'next/link'

const gamesData = {
  'wall-rune': {
    title: 'Wall Rune',
    description: 'Dinding besar yang memisahkan antara dunia di dalam dungeon dan overworld. Berlatarkan fantasi abad pertengahan dengan sentuhan explorasi story yang mendalam.',
    genre: ['Action RPG', 'Topdown', 'Fantasy'],
    features: ['Multiple Gameplay', 'Dynamic Map Layering'],
    developer: 'Gam Fiction'
  },
  'yustoria': {
    title: 'Yustoria',
    description: 'Visual Novel dengan pilihan bercabang serta eksplorasi dalam bentuk 2D Topdown maupun 2D Platformer. Kompleksitas dalam pembuatan kriteria ending.',
    genre: ['Visual Novel', 'Mystery', 'Slice of Life', 'School', 'Fantasy'],
    features: ['Enhanced Database', 'Dialogue System'],
    developer: 'Gamma Fiksi Game'
  }
}

interface Props {
  params: {
    gume: string
  }
}

export default function ShowcaseDetail({ params }: Props) {
  const game = gamesData[params.gume as keyof typeof gamesData]

  if (!game) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-dark">{game.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{game.description}</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-dark">Detail Game</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-dark">Genre</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {game.genre.map((g) => (
                  <span key={g} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {g}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-dark">Developer</h3>
              <p>{game.developer}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 text-dark">Fitur <span className="text-yellow">Engine</span></h2>
          <ul className="space-y-2">
            {game.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <span className="text-primary mr-2">⚡</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link 
        href="/showcase" 
        className="text-primary hover:text-blue font-semibold"
      >
        ← Kembali
      </Link>
    </div>
  )
}