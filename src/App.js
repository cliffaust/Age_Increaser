import { useState } from "react";

function App() {
  const [state, changeAge] = useState({ age: 0 });

  let btnStyles = {
    padding: "12px 8px",
    backgroundColor: "#F3A712",
    fontWeight: 600,
    borderRadius: "5px",
    marginLeft: "5px",
    cursor: "pointer",
    border: "none",
  };

  const handleClick = () => {
    changeAge({ age: state.age + 1 });
  };
  return (
    <div>
      <h1>Age is {state.age}</h1>
      <button onClick={handleClick} style={btnStyles}>
        Click Me!!
      </button>
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = { age: 0 };
//   }

//   handleClick = () => {
//     this.setState({ age: this.state.age + 1 });
//   };

//   render() {
//     let btnStyles = {
//       padding: "12px 8px",
//       backgroundColor: "#F3A712",
//       fontWeight: 600,
//       borderRadius: "5px",
//       marginLeft: "5px",
//       cursor: "pointer",
//       border: "none",
//     };
//     return (
//       <div>
//         <h1>Age is {this.state.age}</h1>
//         <button onClick={this.handleClick} style={btnStyles}>
//           Click Me!!
//         </button>
//       </div>
//     );
//   }
// }

export default App;
