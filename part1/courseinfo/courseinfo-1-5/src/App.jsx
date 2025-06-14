const Header = (props) => {
 return (
     <h1>{props.course}</h1>
  )
}


const Content = (props) => {
   return (
    <>
      {props.parts.map((element, index) => (
        <p key={index}> {element.name} {element.exercises}</p>
      ))}
    </>
  );
}



// const Total = (props) => {
//  return (
//     <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
//   )
// }

const App = () => {
 const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      {/* <Total parts={parts} /> */}
    </div>
  )
}

export default App