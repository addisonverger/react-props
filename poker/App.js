// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    return (
      <div className="text-center mt-5 d-flex justify-content-center align-items-start">
          <Card cardInfoArray={props} />
      </div>
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = (props) => {
  console.log(props.cardInfoArray)
  return (
    props.cardInfoArray.cards.map((e, index) => {
      return (
        <img key={index} width="80" src={"cards/" + e.value + e.suit + ".png"}/>
      )
    })
  )
};
