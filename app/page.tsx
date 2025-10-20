import Link from 'next/link'

export default function Home() {
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

  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Raktangle <span className="text-yellow">Engine</span> {/* ← KUNING di Engine */}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Berkreasi tanpa batas - Engine game 2D modern yang memberdayakan Anda untuk membangun 
            pengalaman multi-genre dengan fleksibilitas yang belum pernah ada sebelumnya.
          </p>
          <div className="space-x-4">
            <Link 
              href="/features" 
              className="bg-primary hover:bg-blue text-white px-8 py-3 rounded-lg font-semibold transition border-2 border-transparent hover:border-yellow"> {/* ← Hover kuning */}
              Jelajahi Fitur
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-yellow text-yellow hover:bg-yellow hover:text-dark px-8 py-3 rounded-lg font-semibold transition"> {/* ← KUNING sebagai secondary */}
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-dark">
            Fitur <span className="text-yellow">Unggulan</span> untuk Developer Kreatif {/* ← KUNING di "Unggulan" */}
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Dirancang untuk developer yang ingin mendorong batas-batas kreasi game 2D 
            dengan sistem yang canggih dan tools yang fleksibel.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Link key={feature.id} href={`/features/${feature.id}`}>
                <div className="bg-white rounded-lg p-6 border-2 border-border hover:border-yellow transition cursor-pointer h-full"> {/* ← Hover kuning */}
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-dark">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 bg-listbox rounded-lg p-8 border-2 border-yellow"> {/* ← Border kuning */}
            <h3 className="text-2xl font-bold text-center mb-6 text-dark">
              Mengapa <span className="text-yellow">Raktangle Engine</span>? {/* ← KUNING di nama */}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-3 text-yellow">🚀</div> {/* ← Ikon kuning */}
                <h4 className="font-bold text-dark mb-2">Fleksibilitas Genre</h4>
                <p className="text-gray-600 text-sm">Bebas dari batasan genre tunggal dan buat pengalaman gaming yang benar-benar unik</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-3 text-yellow">💡</div> {/* ← Ikon kuning */}
                <h4 className="font-bold text-dark mb-2">Sistem Tingkat Lanjut</h4>
                <p className="text-gray-600 text-sm">Tools powerful yang berkembang seiring dengan kompleksitas proyek dan visi kreatif Anda</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-3 text-yellow">🎨</div> {/* ← Ikon kuning */}
                <h4 className="font-bold text-dark mb-2">Kebebasan Kreatif</h4>
                <p className="text-gray-600 text-sm">Ekspresikan ide desain game unik Anda tanpa kendala teknis yang menghambat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
