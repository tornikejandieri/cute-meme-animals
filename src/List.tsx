import { useState } from "react"

interface Props {
  animals: {
    name: string
    category: string
    image: string
    desc: string
    id: number
  }[]
}

const List: React.FC<Props> = ({ animals }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <div className='text-slate-700  p-6 max-w-lg mx-auto border-x-slate-500 '>
      {animals.map((animal) => {
        const { name, image, desc, id } = animal
        return (
          <div key={id}>
            <h3 className='font-medium bold italic mb-6 mt-4'>{name}</h3>
            <img
              className='aspect-auto rounded-xl mx-auto'
              src={image}
              alt=''
            />
            <p className='mb-12'>
              {readMore ? desc : `${desc.substring(0, 200)}`}...
              <button
                className='bg-violet-700 text-white rounded-lg hover:bg-pink-200 hover:text-slate-600 p-1'
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "show less" : "read more"}
              </button>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default List
