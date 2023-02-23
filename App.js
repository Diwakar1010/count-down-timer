import { useEffect, useState } from "react";


function App() {
  const [time, setTime] = useState("")
  const something = (event) => {
    if (event.key === 'Enter') {
      const inputTime = Math.floor(event.target.value)
	  if(isNaN(inputTime)){
		setTime(0)
	  }else{
		setTime(inputTime)
	  }
    }
  }
  useEffect(()=>{
	let inputvalid;
	if(time>0){
		inputvalid = setInterval(()=>{
			setTime((prev)=>prev-1)
		},1000)
	}else{
		setTime(0)
	}
	return ()=> clearInterval(inputvalid)
  },[time])
 

  return (
    <div className="App">
      <input type="text"  id="timeCount" onKeyDown={something}  ></input>
      <div id="current-time"> {time}</div>
    </div>
  );
}

export default App;

// echo "# count-down-timer" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Diwakar1010/count-down-timer.git
// git push -u origin main

