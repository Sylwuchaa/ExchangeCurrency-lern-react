///////////////////// ver 1.0 /////////////////////////////////////////////////
// class App extends React.Component {
//   state = {
//     ratioDollars: 3.77,
//     ratioEuros: 4.2,
//     value: '',
//     amountDollars: null,
//     amountEuros: null,
//   }
//   handleChange = (e) => {
//     // const value = e.target.value >= 0 ? e.target.value : alert('enter only positive number')
//     // if (e.target.value < 0) return alert('enter only positive number')
//     this.setState({
//       value: e.target.value
//       //value,

//     })
//     this.setState((state) => {
//       return {
//         amountDollars: (state.value / state.ratioDollars).toFixed(2),
//         amountEuros: (state.value / state.ratioEuros).toFixed(2)
//       }
//     }
//     )
//   }
//   render() {
//     return(
//     <>
//       <div className="container">
//         <h1>Exchange Currency</h1>
//         <input
//         type="number"
//         placeholder={"amount in zł"}
//         value={this.state.value}
//         onChange={this.handleChange}
//         />
//         <p>$$$: {this.state.amountDollars}</p>
//         <p>EUR: {this.state.amountEuros}</p>
//         <div className="warning-container">{this.state.value < 0 ? <h3 className="alert">Warning! please enter only positive number!</h3> : null}</div>
//       </div>
//     </>
//     )
//   }

// }

///////////////////////////////////// version 2.0 //////////////////////////////////

const Cash = (props) => {
  const amount = (props.cash / props.ratio).toFixed(2)
  return (
  <p>Amount in {props.title}: {amount}</p>
  )
}
class App extends React.Component {

  state = {
    value: '',
    ratioDollars: 3.77,
    ratioEuros: 4.20,
    amount: '',
  }
  currency = [
    {id: 1, name: 'euro', ratio: 4.2 },
    {id: 2, name: 'dollar', ratio: 3.77 },
    {id: 3, name: 'pound', ratio: 4.2 },
  ]

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    return (
      <>
      <div className="container">
        <input type="number"
        onChange ={this.handleChange}
        value={this.state.value}
        />
        <Cash ratio={this.state.ratioDollars} cash={this.state.value} title={'$$$'}/>
        <Cash ratio={this.state.ratioEuros} cash={this.state.value} title={'EUR'}/>
      </div>
      </>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))

/////////////////////////// version 3.0 /////////////////////////////////