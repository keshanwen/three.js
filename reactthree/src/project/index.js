import React from 'react'



class Project extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('componetDidMount')
  }

  render() {
    return (
      <div>
        hello i am class Component
      </div>
    )
  }
}

export default Project