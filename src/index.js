import reactDOM from "react-dom/client"


import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
import img6 from "./assets/6.jpg"
import img7 from "./assets/7.jpg"
import img8 from "./assets/8.jpg"

const root = reactDOM.createRoot(document.getElementById("root"))

function Imggall(props){
  return(
    <div style={{padding:"20px",margin:"10px",display:"inline-block",gap:"40px",marginLeft:"30px",marginTop:"10px",backgroundColor:"white"}}>
      <div>{props.photo}</div>
      <h1 style={{textAlign:"center"}}>{props.dogname}</h1>
      
      
    </div>
  )

}

var arr = [
<img src={img1} style={{width:250,height:300}} alt="img"></img>,
<img src={img2} style={{width:250,height:300}} alt="img"></img>,
<img src={img3} style={{width:250,height:300}} alt="img"></img>,
<img src={img4} style={{width:250,height:300}} alt="img"></img>,
<img src={img5} style={{width:250,height:300}} alt="img"></img>,
<img src={img6} style={{width:250,height:300}} alt="img"></img>,
<img src={img7} style={{width:250,height:300}} alt="img"></img>,
<img src={img8} style={{width:250,height:300}} alt="img"></img>
]
var dogname = ["Huskey","Dober","Big Eyed Buggy","Browny","Whitey","labrador","shih Tzu","Doberman"]
root.render(
  <div>
    {arr.map(function(data,index){
      return <Imggall photo={data} dogname={dogname[index]}></Imggall>
    })}
  </div>
)

