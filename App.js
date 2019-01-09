class App extends React.Component {

  state = {
    ratioDollars: 3.8,
    ratioEuros: 4.2,
    value: '',
    amountDollars: null,
    amountEuros: null,
  }
  handleChange = (e) => {
    // const value = e.target.value >= 0 ? e.target.value : alert('enter only positive number')
    // if (e.target.value < 0) return alert('enter only positive number')
    this.setState({
      value: e.target.value
      //value,

    })
    this.setState((state) => {
      return {
        amountDollars: (state.value / state.ratioDollars).toFixed(2),
        amountEuros: (state.value / state.ratioEuros).toFixed(2)
      }
    }
    )
  }
  render() {
    return(
    <>
      <div className="container">
        <h1>Exchange Currency</h1>
        <input
        type="number"
        placeholder={"amount in zł"}
        value={this.state.value}
        onChange={this.handleChange}
        />
        <p>$$$: {this.state.amountDollars}</p>
        <p>EUR: {this.state.amountEuros}</p>
        {this.state.value < 0 ? <h3 className="alert">Warning! please enter only positive number!</h3> : null}
      </div>
    </>
    )
  }

}
ReactDOM.render(<App />, document.getElementById('root'))