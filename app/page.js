import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Prevent fontawesome from dynamically adding its css
config.autoAddCss = false

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
