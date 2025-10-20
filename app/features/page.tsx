import Link from 'next/link'

const features = [
  {
    id: "hybrid-gameplay",
    title: "Multiple Gameplay",
    description: "Mencampurkan 2D Topdown, 2D Platformer, dan Visual Novel dalam satu proyek",
    icon: "🎮"
  },
  {
    id: "dynamic-layering", 
    title: "Layer Peta Yang Dinamis",
    description: "Map Layering tingkat lanjut dan canggih untuk kompleksitas peta",
    icon: "🗂️"
  },
  {
    id: "combat-system",
    title: "Mode Pertarungan Yang Fleksibel", 
    description: "Mendukung pertarungan Turn-Based dan Real-Time",
    icon: "⚔️"
  },
  {
    id: "enhanced-database",
    title: "Database Tingkat Lanjut", 
    description: "Kustomisasi item, skill, musuh, dan database lain yang lebih detail",
    icon: "💾"
  }
]

export default function FeaturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-dark">Fitur <span className="text-yellow">Raktangle Engine</span></h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <Link key={feature.id} href={`/features/${feature.id}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer h-full border border-border">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold mb-3 text-dark">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}