import React from 'react'; 

const Table = (props)=>{
  // console.log(props.data);
  const tableRow = props.data.map((item,index)=>{
        console.log(`${index}:`, item);
  return (
      <tr key = {index}> 
         <td>{item.name}</td>
         <td>{item.course}</td>
         <td>{item.grade}</td>
      </tr>
    )
  });
  return (
    <table className="table">
        <thead className = "thead-inverse">
          <tr> 
            <th>Name</th> 
            <th>course</th> 
            <th>Grade</th> 
          </tr> 
        </thead>
        <tbody> 
          {tableRow}
        </tbody> 
    </table>
  )
}

export default Table;