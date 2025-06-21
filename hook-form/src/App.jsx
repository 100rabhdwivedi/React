import { useState } from "react"
import Create from "./components/Create"
import Read from "./components/Read"
import { nanoid } from "nanoid"
const App = () => {
  const [data,setData] = useState([ {
    id: nanoid(),
    name: "Saurabh Dwivedi",
    email: "saurabh@example.com",
    profession: "Web Developer",
    mobile: "9876543210"
  },
  {
    id: nanoid(),
    name: "Ajay Sharma",
    email: "ajay@example.com",
    profession: "UI/UX Designer",
    mobile: "9123456789"
  },
  {
    id: nanoid(),
    name: "Raj Mehta",
    email: "raj@example.com",
    profession: "Software Engineer",
    mobile: "9988776655"
  }])
  return (
    <div className="bg-[#e8e0d3] text-black w-full ">
      <h1 className="text-[15vw] text-white/60 text-center font-two">Contact </h1>
      <Create data={data} setData={setData}/>
      <Read data={data} setData={setData}/>
    </div>
  )
}

export default App