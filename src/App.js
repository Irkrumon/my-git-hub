import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';





function App(){

const form= useFormik(
{
  initialValues:{
    UserName:"",
    Password:"",
    ComfirmPassword:""
  },
  
    onsubmit:(values)=>{
      console.log(values)
    }
  
}
);
const {values,handleChange,handleSubmit}=form;

return(
  <div className='main'>
   <form onSubmit={handleSubmit}>
   <div className='space'>

   </div>
   <div className='inp1'>
    <labe>UserName</labe>
    <input 
    name="name"
    onChange={handleChange}
    value={values.UserName}
    />
   </div>
   <div className='inp2'>
 <label>Password</label>
 <input name="Password"
 onChange={handleChange}
 value={values.Password}
 />
   </div>
   <div className='inp3'>
 <label>ComfirmPassword</label>
 <input name="ComfirmPassword"
 onChange={handleChange}
 value={values.ComfirmPassword}
 />
   </div>

   </form>
  </div>
)

}


export default App;