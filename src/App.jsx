import { Route, Routes } from 'react-router'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Weather from './pages/Weather.jsx'
import CalorieTracker from './pages/CalorieTracker.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/calories" element={<CalorieTracker />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
