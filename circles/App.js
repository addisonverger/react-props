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
    props.circOutput.circles.map((circle, index) => {
      return (
        <div key={index} style={{width: circle.radius * 2, height: circle.radius * 2, borderRadius: circle.radius, backgroundColor: circle.color}}></div>
      )
    })
  )
}
// CHALLENGE: Write a separate Circle component for use in the App component
