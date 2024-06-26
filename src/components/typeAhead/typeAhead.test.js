import {render,screen} from '@testing-library/react'
import TypeAhead from './TypeAhead'

test("testing heading", ()=>{
    render(<TypeAhead/>);

    const headingEl = screen.getByRole("heading",{name:/type ahead component/i})
    expect(headingEl).toBeInTheDocument()
})

test("inputEl testing",()=>{
    render(<TypeAhead/>);

    const inputEl = screen.getByPlaceholderText(/enter any animal name/i)
    expect(inputEl).toBeInTheDocument()

})
