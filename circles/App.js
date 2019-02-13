// Render the circles using React!
const App = (props) => {
    console.log(props)
    let { circles } = props
    return (
      <div className="d-flex flex-column align-items-center">
          <Circle circOutput={props}/>
      </div>
    )
}

const Circle = (props) => {
  console.log(props.circOutput)
  return (
    props.circOutput.circles.map((e, index) => {
      return (
        <div key={index} style={{width: e.radius * 2, height: e.radius * 2, borderRadius: e.radius, backgroundColor: e.color}}></div>
      )
    })
  )
}
// CHALLENGE: Write a separate Circle component for use in the App component
