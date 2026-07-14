import Hero from './components/Hero'
import Intro from './components/Intro'
import Methods from './components/Methods'
import StreamMap from './components/StreamMap'
import DataSection from './components/DataSection'
import FieldNotes from './components/FieldNotes'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-stream-950">
      <Hero />
      <Intro />
      <Methods />
      <StreamMap />
      <DataSection />
      <FieldNotes />
      <Questions />
      <Footer />
    </main>
  )
}

export default App
