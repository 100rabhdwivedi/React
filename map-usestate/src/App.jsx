
const App = () => {

  let data = [
    {
      name:"saurabh",
      age:18,
    },
    {
      name:"sivam",
      age : 15,
    },
    {
      name:"surya",
      age:15
    }
  ]

  let updatedData = data.map((elem,index)=>{
    return (
      <li key={index}>
        <span>Name: {elem.name}</span> |
        <small>Age: {elem.age}</small>
      </li>
    )
    
  })
  return (
    <div>
      <h1>Rendering Json data</h1>
      <ul>
        {updatedData}
      </ul>
    </div>
  )
}

export default App