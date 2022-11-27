import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import memes from "./data"
import FilterButtons from "./FilterButtons"
import List from "./List"
import RandomMeme from "./RandomMeme"

const uniqueCategory = ["all", ...new Set(memes.map((item) => item.category))]

function App() {
  const [animals, setAnimals] = useState(memes)
  const [categories, setCategories] = useState(uniqueCategory)

  const filter = (category: string) => {
    if (category === "all") {
      setAnimals(memes)
      return
    }
    const newList = memes.filter((item) => item.category === category)
    setAnimals(newList)
  }

  return (
    <BrowserRouter>
      <div className='mx-auto text-l font-sans bg-slate-200'>
        <FilterButtons filter={filter} categories={categories} />
        <Routes>
          <Route path='/' element={<List animals={animals} />} />
          <Route path='/randommeme' element={<RandomMeme />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
