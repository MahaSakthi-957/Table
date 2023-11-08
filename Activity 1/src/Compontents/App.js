import '../App.css';
import {UserCircle} from "lucide-react"
const App=()=>{
    return(
        <body>
            <div>
            <form className='a'>
               <h1><b><UserCircle/>Student Details</b></h1>
            <input type='text' placeholder='Name' className='f'></input>
            <input type='email' placeholder='email' className='f'></input>
            <input type='number' placeholder='Phone no' className='f'></input>
            <input type='text' placeholder='userId' className='f'></input>
            <input type='text' placeholder='Password' className='f'></input>
            <input type='submit' submit className='q'></input>
         </form>
         </div>
        </body>
    )
}
export default App