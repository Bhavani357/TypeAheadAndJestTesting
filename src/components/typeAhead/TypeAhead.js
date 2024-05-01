import {useState} from 'react'
import {Heading,BgContainer,InputElement,UlContainer,ListItem} from '../styledComponents'

const TypeAhead = ({suggestions})=>{
  const [inputEl, setInputEl] = useState("")
  const [filteredListElements, setFilteredListElements] =useState([])
  

  const handleInput = (event)=>{
    setInputEl(event.target.value)
    const filteredList = suggestions.filter((each,index)=>{
      return each.toLowerCase().includes(inputEl.toLowerCase())
    })
    setFilteredListElements(filteredList)
    console.log(filteredListElements)
  }
  
  const handleOnClickingInputEl = (eachItem)=>{
    setInputEl(eachItem)
    setFilteredListElements([])
  }

  return(
    <BgContainer>
      <div>
        <Heading>Type Ahead Component</Heading>
        <InputElement type="text" onChange={handleInput} value={inputEl} placeholder='Enter any animal name'/>
      </div>
      <UlContainer>
        {filteredListElements.map((eachItem,index)=>
          <ListItem key={index} onClick={()=>handleOnClickingInputEl(eachItem)}>{eachItem}</ListItem>
        )}
      </UlContainer>
    </BgContainer>
  )
}

export default TypeAhead