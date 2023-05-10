import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <main className="flex-1">
      <Header />
      </main>
      <Footer />
    </div>
  )
}
