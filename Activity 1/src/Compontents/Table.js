import { Activity,AlarmClock,AlignCenter,AlertCircle,Annoyed,Apple,Ban,Bluetooth
    ,Bike,Cat,Angry,FolderOpen,PhoneCall,PencilRuler,RadioTower,Rocket} from "lucide-react";
import './Table.css';
const Table = ()=>{
  return(
    <body>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
            <table border="3px" cellSpacing="0px" align="center" style={{width:'450px',height:'450px', textAlign:'center',backgroundColor:'lightblue',borderRadius:'15px'}}>
              <tbody>
                <tr>
              <td><Bluetooth/></td>
                  <td><AlarmClock/></td>
                  <td><Apple/></td>
                  <td><Ban/></td>
                </tr>
                <tr>
                  <td><Annoyed/></td>
                  <td><AlertCircle/></td>
                  <td><AlignCenter/></td>
                  <td><Rocket/></td>
                </tr>
                <tr>
                  <td><Activity/></td>
                  <td><Bike/></td>
                  <td><Cat/></td>
                  <td><FolderOpen/></td>
                </tr>
                <tr>
                  <td><Angry/></td>
                  <td><PhoneCall/></td>
                  <td><PencilRuler/></td>
                  <td><RadioTower/></td>
                </tr>
              </tbody>
            </table>
            </div>
    </body>
        )
    }
    export default Table