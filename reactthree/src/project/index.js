import React from 'react'
import { renderer } from './RenderLoop'



class Project extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('componetDidMount')
    //Three.js渲染结果Canvas画布插入到body元素中
    document.body.appendChild(renderer.domElement);
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Project