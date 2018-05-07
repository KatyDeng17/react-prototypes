import React from 'react';
import Table from "./table";
const students =[
  { name: "Katy", 
    course: "Math", 
    grade: 100
  },
  { name: "James", 
    course: "Math", 
    grade: 100
  },
  { name: "DoDo", 
    course: "Math", 
    grade: 0
  },
  { name: "DoDo2", 
  course: "Math", 
  grade: 0
  }
]

const App = (props)=>{
  return (
      <div className ="container"> 
          <h1>Student Grade Table From { props.schoolName}</h1>
          <Table data = {students}/>    
          {/* data is the props: students is the value  */}
      </div>
    
  ) 
}


export default App;