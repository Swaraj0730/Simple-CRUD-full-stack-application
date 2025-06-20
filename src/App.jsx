import './App.css'
import { ListEmpComponent } from './Components/ListEmpComponent'
import { HeaderComponent } from './Components/HeaderComponent'
import { FooterComponent } from './Components/FooterComponent'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import { EmployeeComponent } from './Components/EmployeeComponent'


function App() {

  return (
    <>
    <div className='App'>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* http://localjost:3000 */}
        <Route path='/' element={<ListEmpComponent />}></Route>
         {/* http://localjost:3000/employee */}
         <Route path='/employee' element={<ListEmpComponent />}></Route>
          {/* http://localjost:3000/add-employee */}
         <Route path='/add-employee' element={ <EmployeeComponent/>}></Route>
          {/* http://localjost:3000/edit-employee/{id} */}
          <Route path='/edit-employee/:id' element={ <EmployeeComponent />}></Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </div>
    </>
  )
}
export default App
