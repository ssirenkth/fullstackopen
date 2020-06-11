import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
  return(
    <>
      <h1>{course.name}</h1>
    </>
  )
}
const Content = (exercises) =>{
  return(
    <>
      <p>
        {exercises.part1} {exercises.exercises1}
      </p>
      <p>
        {exercises.part2} {exercises.exercises2}
      </p>
      <p>
        {exercises.part3} {exercises.exercises3}
      </p>
    </>
  )
}
const Total = (props) =>{
  return(
    <>
      <p>Number of exercises {props.sum}</p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3}
        exercises1 = {exercises1} exercises2 = {exercises2}
        exercises3 = {exercises3}/>
      <Total sum = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))