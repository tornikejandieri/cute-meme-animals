import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const RandomMeme: React.FC = () => {
  const url = "https://meme-api.herokuapp.com/gimme"
  const [count, setCount] = useState(0)

  const [data, setData] = useState<string>()
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    setLoading(true)
    const resp = await fetch(url)
    const data = await resp.json()
    setData(data.url)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [url, count])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className=' max-w-lg mx-auto'>
      {data && <img className='max-w-sm mr-auto  p-4' src={data} />}
      <div>
        <Link
          className='text-green-700 hover:text-green-600
           italic mr-auto w-16 md:w-32 lg:w-48 mb-2'
          to={"/"}
        >
          👈 Go back to homepage
        </Link>
      </div>

      <button
        className='bg-violet-700 hover:bg-violet-500 text-white rounded-lg pl-6 
        pr-6 mr-auto mt-2 mb-4'
        onClick={() => setCount((n) => n + 1)}
      >
        Get Another Meme
      </button>
    </div>
  )
}

export default RandomMeme
