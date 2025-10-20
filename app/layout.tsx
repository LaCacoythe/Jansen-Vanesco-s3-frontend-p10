import './globals.css'
import Navbar from '../component/navbar'
import Footer from '../component/footer'

export const metadata = {
  title: 'Raktangle Engine - Create Without Boundaries',
  description: 'Game engine that blends 2D Platformer, Topdown RPG, and Visual Novel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
