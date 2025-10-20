export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-dark">Hubungi <span className="text-yellow">Kami</span></h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Tertarik dengan Raktangle Engine? Kami siap membantu anda dalam mengeksplor lebih lanjut mengenai Raktangle Engine!
      </p>
      
      <div className="bg-white rounded-lg shadow-lg p-8 border border-border">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-dark">Nama Lengkap</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
              placeholder="Nama Pengirim..."/>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-dark">Alamat Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
              placeholder="email@examp.com"/>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-dark">Pesan</label>
            <textarea 
              rows={6} 
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
              placeholder="Tuliskan detail pesan disini..."></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-primary hover:bg-blue text-white py-3 rounded-lg font-semibold transition border-2 border-transparent hover:border-yellow">
            Kirim Pesan
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-lg font-semibold mb-4 text-dark">Informasi Kontak <span className="text-yellow">Lainnya</span></h3>
          <div className="space-y-2 text-gray-600">
            <p>📧 Email: <span className="text-yellow">jansen535240148@stu.untar.ac.id</span></p>
            <p>💬 Community: -</p>
          </div>
        </div>
      </div>
    </div>
  )
}