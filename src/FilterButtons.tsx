import { useNavigate } from "react-router-dom"

interface Props {
  filter: Function
  categories: string[]
}

const FilterButtons: React.FC<Props> = ({ filter, categories }) => {
  const navigate = useNavigate()

  return (
    <div className='bg-slate-300  space-x-12 p-4 flex justify-center mr-auto'>
      {categories.map((category, index) => {
        return (
          <button
            className=' bg-violet-700  text-white 
            font-medium w-24 h-auto p-auto rounded-md hover:bg-pink-200'
            key={index}
            type='button'
            onClick={() => filter(category)}
          >
            {category}
          </button>
        )
      })}
      <div>
        <button
          className=' bg-violet-700  text-white 
            font-medium w-24 h-12 rounded-md hover:bg-pink-200'
          onClick={() => navigate("/randommeme")}
        >
          get random meme!
        </button>
      </div>
    </div>
  )
}

export default FilterButtons
