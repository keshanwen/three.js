import React from 'react'
import { renderer } from './RenderLoop'
import './index.css'
import Tooltip from './toooltip'
import { choose, chooseMesh } from './choose' // 执行射线拾取代码
import { tag } from './scene/tag' // HTML 标签相关代码
import { scene } from './scene/index' // three.js 三维场景
import messageData from './messageData' // 粮仓模拟数据



class Project extends React.Component {
  constructor() {
    super()
    this.state = {
      message: {
        granaryName: "立筒仓 L_01",
        temperature: "35.3",
        grain: "红豆",
        grainImg: "./assets/豆子/红豆.png",
        weight: 6700,
        granaryHeight: 36,
        grainHeight: "25.0"
      }
    }
  }

  showPhoto() {
    //Three.js渲染结果Canvas画布插入到body元素中
    document.body.appendChild(renderer.domElement);
  }

  initTooltip() {
    const messageTag = tag('messageTag')
    this.messageTag = messageTag
    scene.add(messageTag) // id "messageTag" 对应的HTML元素作为 three.js 标签
  }

  initEvent() {
    const idArr = ["granaryName", "temperature", "grain", "grainImg", "weight", "granaryHeight", "grainHeight"];
    document.addEventListener('click', (event) => {
      if (chooseMesh) {
        this.messageTag.element.style.visibility = 'hidden'
      }
      choose(event, this.messageTag) // 执行射线拾取的代码

      // 选中不同的粮仓，HTML 信息跟着改变
      if (chooseMesh) {
        const chooseMessage = messageData[chooseMesh.name]
        if (chooseMessage) {
          this.setState({
            message: chooseMessage
          })
        }
        // 批量更新粮仓 chooseMesh 的标签信息
        /* idArr.forEach((id) => {
          const dom = document.getElementById(id)
          if (id === "grainImg") {
            dom.src = messageData[chooseMesh.name][id];//设置图片路径
          } else {
            dom.innerHTML = messageData[chooseMesh.name][id];
          }
        }) */

        this.messageTag.element.style.visibility = 'visible';//显示标签
        this.messageTag.position.copy(chooseMesh.point)
        this.messageTag.position.copy(chooseMesh.point);//射线在粮仓表面拾取坐标
      }
    })
  }

  componentDidMount() {
    this.showPhoto()
    this.initTooltip()
    this.initEvent()
  }

  render() {
    return (
      <div>
        <Tooltip message={ this.state.message }></Tooltip>
      </div>
    )
  }
}

export default Project