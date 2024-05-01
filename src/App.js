import TypeAhead from "./components/typeAhead/TypeAhead"

const suggestionsList = ['Ape','Buffello','Cat','Dog','Elephent','Fox','Goat','Horse','I','Jackel','K']
const App = ()=>{
  
  return(
    <TypeAhead suggestions={suggestionsList}/>
  )
}
export default App