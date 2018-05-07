import React from 'react';
import ReactDOM from 'react-dom';
function luckyNumber(){
    const randomNumber = ((Math.random()* 1000) + 1 ) >> 0;
    console.log(randomNumber);
    return randomNumber;
}
const user = {
    name: 'katy', 
    luckyNumber: luckyNumber()
};
function greeting(user){
    return <div className = 'container'> 
                <h1>Welcome {user.name}</h1>
                <h2 className = 'text-muted'>This is your {user.luckyNumber}</h2>

          </div>
}
ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

