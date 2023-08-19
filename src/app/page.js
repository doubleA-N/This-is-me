import Navigation from './components/navigation'
import Section from './components/sections'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <Section />
    </main>
  )
}
