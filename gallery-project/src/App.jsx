import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  //user data save here
  let [userData, setUserData] = useState([]);
  // index for pages
  const [index, setIndex] = useState(1)

  //Get data function
  async function getData() {
    let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(response.data);
  }
  // call getData only when index changes
  useEffect(() => {
    getData();
  }, [index])

  //if api is not responding
  let printUserData = "No data available";

  //map on userData
  if (userData.length > 0) {
    printUserData = userData.map((elem) => {

      return <a key={elem.id} href={elem.url}>
        <div className='rounded text-center'>
          <img className='h-50 w-50 rounded-2xl object-cover' src={elem.download_url} alt="" />
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </div>
      </a>;
    })
  }

  return (
    <>
      <header>
        <div className="bg-blue-400 flex items-center justify-center py-4">
          <h2 className="font-bold text-2xl">
            Image Gallery Project Using a Fake API
          </h2>
        </div>
      </header>

      {/* Rendering images and author name at once becuase when jsx sees array it print all the items */}
      <div className='p-4'>
        <div className='flex flex-wrap gap-6 justify-center items-center'>
          {printUserData}
        </div>

        {/* Prev and next button */}
        <div className='flex gap-5 mt-4 items-center justify-center'>

          {/* prev button */}
          <button
            style={{ opacity: index == 1 ? 0.5 : 1 }}
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
              }
            }} className='bg-blue-500 py-2 px-4 rounded-2xl active:scale-90'>Prev</button>
          {/* current page */}
          <h2 className='font-semibold text-md'>Page {index}</h2>
          {/* next button */}
          <button onClick={() => {
            setIndex(index + 1);
          }} className='bg-blue-500 py-2 px-4 rounded-2xl active:scale-90'>Next</button>
        </div>
      </div>
    </>
  )
}

export default App
