import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <Card />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)