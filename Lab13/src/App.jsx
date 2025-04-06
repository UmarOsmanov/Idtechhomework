import { Slider } from "./components/Slider"

const slider = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
]

function App() {

  return (
    <div className="container">
      <Slider slider={slider} />
    </div>
  )
}

export default App
