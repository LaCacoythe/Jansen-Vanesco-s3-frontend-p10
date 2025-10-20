import { notFound } from 'next/navigation'
import Link from 'next/link'

const featuresData = {
  'hybrid-gameplay': {
    title: 'Multiple Gameplay',
    description: 'Mencampurkan 2D Topdown, 2D Platformer, dan Visual Novel dalam satu proyek',
    details: [
      'Kombinasikan berbagai genre game dalam satu project',
      'Transisi mulus antara gameplay topdown dan platformer', 
      'Sistem event yang terintegrasi antar genre',
      'Manajemen karakter yang konsisten di semua mode'
    ]
  },
  'dynamic-layering': {
    title: 'Layer Peta Yang Dinamis', 
    description: 'Map Layering tingkat lanjut dan canggih untuk kompleksitas peta',
    details: [
      'Multiple layer dalam satu peta',
      'Aktifkan dan nonaktifkan layer sesuai kebutuhan',
      'Transisi dinamis antar layer peta',
      'Event system yang bekerja di semua layer'
    ]
  },
  'combat-system': {
    title: 'Mode Pertarungan Yang Fleksibel',
    description: 'Mendukung pertarungan Turn-Based dan Real-Time',
    details: [
      'Sistem turn-based tradisional seperti RPG klasik',
      'Mode real-time dengan basic attack dan gerakan dinamis',
      'Kustomisasi sistem pertarungan sesuai kebutuhan game',
      'Integrasi smooth antara exploration dan combat'
    ]
  },
  'enhanced-database': {
    title: 'Database Tingkat Lanjut',
    description: 'Kustomisasi item, skill, musuh, dan database lain yang lebih detail',
    details: [
      'Database karakter dengan atribut yang lebih kompleks',
      'Sistem item dan equipment yang detail',
      'Kustomisasi skill tree dan progression system',
      'Manajemen musuh dengan AI yang dapat dikonfigurasi'
    ]
  }
}

interface Props {
  params: {
    id: string
  }
}

export default function FeatureDetail({ params }: Props) {
  const feature = featuresData[params.id as keyof typeof featuresData]

  if (!feature) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-dark">{feature.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{feature.description}</p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-border">
        <h2 className="text-2xl font-bold mb-4 text-dark">Fitur Utama</h2>
        <ul className="space-y-3">
          {feature.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span className="text-dark">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link 
        href="/features" 
        className="bg-primary hover:bg-blue text-white px-6 py-2 rounded-lg transition"
      >
        Kembali ke Fitur
      </Link>
    </div>
  )
}