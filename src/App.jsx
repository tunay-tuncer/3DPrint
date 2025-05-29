import Heading from './components/Heading'
import Settings from './components/Settings'
import PriceShowcase from './components/PriceShowcase'
import PriceCalculator from './components/PriceCalculator'
import { ProjectProvider } from './context/ProjectContext'

function App() {
  return (
    <ProjectProvider>
      <Heading />
      <PriceShowcase />
      <Settings />
      <PriceCalculator />
    </ProjectProvider>
  )
}

export default App
