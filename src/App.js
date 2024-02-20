import './App.css';
import { ReactHooks } from './components/reactHooks';
import { ToDo } from './components/toDO';
import { UsingAPI } from './components/usingAPI';
import { Axios } from 'axios';


function App() {
  const names = ["Js", "Jsx", "react", "Java"];
  return (
    <div className="App">
      {/* <Intro name="Lucky" /> */}
      {/* {
        names.map((name, key) => {
          return <h1 key={key}>{name}</h1>
        })
      } */}
      {/* <Lesson2 /> */}

      {/* <ReactHooks /> */}
      {/* <ToDo /> */}
      <UsingAPI />
      
    </div>
  );
}

const Intro = (props) =>{
  const age = 10;
  const isgreen = age>=18 ? true : false;
  return(
    <div>
      <h1>Name: {props.name}</h1>
     {/* <h1> Age: <Age /></h1> */}
     <h1 style={{color: isgreen ? "green": "red"}}> Age: { age >= 18 ? <span>Over age</span>: <span>Under age</span>}</h1>
    </div>
  );
};

// const Age = () =>{
//   const age = 10;
//   return (
//     age >= 18 ? <span>Over age</span>: <span>Under age</span>
//   );
// };

const Lesson2 = () =>{
  const users = [
    {name: "Luxshan", age: 23},
    {name: "Lucky", age: 24},
    {name: "mr.Robot", age: 24}
  ];

  return (
    <div>
      {
        users.map((user, key) => {
          return <div>{user.name} {user.age} </div>
        })
      }
    </div>
  );
};



export default App;
