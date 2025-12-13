import React, { useState } from 'react'

const App = () => {
  //javaScript
  const [heading, setHeading] = useState("");
  const [details, setDeatails] = useState("");
  let [notesDetails, setNotesDetails] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    let copyDetail = [...notesDetails];
    console.log(copyDetail);
    copyDetail.push({ heading, details });
    console.log(copyDetail);
    setNotesDetails(copyDetail);
    console.log(notesDetails);
    console.log("Form Submitted by", heading);
    console.log("Form Submitted by", details);
  }
  const deleteNote = (idx) => {
    let copyArray = [...notesDetails];
    copyArray.splice(idx, 1);
    setNotesDetails(copyArray);
  }

  return (
    <div className='lg:flex bg-amber-200 w-full'>
      <div>
        <form className='bg-black h-screen flex flex-col gap-5 p-10 lg:w-170'>
          <h1 className='text-white text-2xl font-bold'>Add Notes</h1>
          <input className='text-white border border-white rounded font-medium text-md h-13 w-150 placeholder-white' type="text" placeholder='Enter Notes Heading' value={heading} onChange={(e) => {
            setHeading(e.target.value);
          }} />
          <textarea className='text-white border border-white rounded font-medium text-md h-13 w-150 placeholder-white' type="text" placeholder='Write details' value={details} onChange={(e) => {
            setDeatails(e.target.value);
          }} />
          <button className='bg-white font-medium text-lg active:scale-95 rounded h-8 w-150 cursor-pointer' onClick={(e) => {
            submitHandler(e)
          }}>Add</button>
        </form>
      </div>
      <div className="bg-black h-screen w-full flex flex-col gap-5 p-10 border-l-2 border-white">
        <h1 className="text-white text-2xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5">
          {notesDetails.map(function (e, idx) {
            return <div key={idx} className="h-60 w-full sm:w-[30%] lg:w-[30%] xl:w-[29%] bg-white rounded p-8 relative">
              <h3 className='text-xl font-bold'>{e.heading}</h3>
              <p className='text-md font-semibold mt-2'>{e.details}</p>
              <button onClick={() => {
                deleteNote(idx);
              }} className='bg-red-700 absolute bottom-2 cursor-pointer ms-6 text-lg font-medium px-2 rounded'>Delete</button>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App
