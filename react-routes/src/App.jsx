import Nav from "./components/Nav"
import IndexRoutes from "./routes/IndexRoutes"
const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-800 text-white overflow-hidden">
      <Nav/>
      <IndexRoutes/>
    </div>
  )
}

export default App