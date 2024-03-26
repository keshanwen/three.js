import React from 'react'
import { renderer } from './RenderLoop'
import './index.css'



class Project extends React.Component {
  constructor() {
    super()
  }

  showPhoto() {
    //Three.js渲染结果Canvas画布插入到body元素中
    document.body.appendChild(renderer.domElement);
  }

  componentDidMount() {
    console.log('componetDidMount')
    this.showPhoto()
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Project