import React,{useState} from 'react'

function Holiday() {
    const [data, setdata] = useState({name:"",type:"",date:""})
const [tasks, settasks] = useState([ 
{name:"sourabh",
type:"holiday",
date:"12/2/4"},

{name:"sourab",
type:"holiday",
date:"12/2/4"},

{name:"sourav",
type:"holiday",
date:"12/2/4"}])
const handler = (event) => {
  let { name, value } = event.target;
  setdata({ ...data, [name]: value });
};



function add(){
 
console.log(tasks,data)
settasks([...tasks,data])


 console.log("you called me")
}
    return (
        <div>
            <div className="App">
      <form action="submit">
        <input type="text" name="name" onChange={handler} />
        <input type="text" name="type" onChange={handler} />
        <input type="date" name="date" id="" onChange={handler} />
        <input type="button" value="add" onClick={add} />
      </form>
      <div onClick={()=>{}}>add</div>
      {tasks.map((arr)=><div>{arr.name}
      {arr.type}{arr.date}</div>
      )}
    </div>
        </div>
    )
}

export default Holiday
