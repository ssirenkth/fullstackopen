import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
  return(
    <>
      <h1>{course.name}</h1>
    </>
  )
}
const Part = (p) => (
      <p>
        {p.part} {p.exercise}
      </p>
)

const Content = (exercises) =>{
  return(
    <>
      <Part part = {exercises.part1} exercise = {exercises.exercises1}/>
      <Part part = {exercises.part2} exercise = {exercises.exercises2}/>
      <Part part = {exercises.part3} exercise = {exercises.exercises3}/>
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