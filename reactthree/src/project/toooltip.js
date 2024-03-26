import React from 'react'


class Tooltip extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {
    // 当props变化后执行的操作
    if (this.props.message !== prevProps.message) {
      // someProp发生变化时执行的逻辑
      console.log('someProp changed to:', this.props.someProp);
      this.scrollWeight()
    }
  }

  scrollWeight() {
    // 数字滚动动画
    var weightDOM = document.getElementById("weight")
    weightDOM.innerHTML = 0;
    var weightMax = this.props.message.weight;//粮仓重量
    var weight = 0;//粮仓初始重量
    var interval = setInterval(function () {
      if (weight < weightMax) {
        weight += Math.floor(weightMax / 50);//重量累加
        document.getElementById("weight").innerHTML = weight;
      } else {
        clearInterval(interval);//一旦达到粮食重量，取消周期性函数interval
      }
    }, 5);
  }



  render() {
    return (
      <>
        <div id="messageTag"
          style={{ visibility:"hidden",width:"500px",height:"400px",position: "absolute",color: "#fff",zindex: 2,fontSize: "16px"}}>
          <div style={{ position:"relative"}}>
            <div style={{ position: "absolute", left: "0px", top: "0px" }}>
              <img src="./assets/信息背景.png" alt="" style={{ width: "400px" ,opacity: "1.0" }} />
            </div>
            <div id="granaryName" style={{ position: "absolute", left: "25px", top: "40px", fontSize: "16px" }}>{this.props.message.granaryName }</div>
            <div style={{ position: "absolute", left: "290px", top: "25px" }}>
              <img src="./assets/温度.png" alt="" style={{ width: "50px" }} />
            </div>

            <div style={{ position: "absolute", left: "330px", top: "40px" }}>
              <span id="temperature">{this.props.message.temperature}</span>℃
            </div>
            <div id="grain" style={{ position: "absolute", left: "170px", top: "50px" }}>
              <span id="grain">{this.props.message.grain}</span>
            </div>
            <div style={{ position: "absolute", left: "80px", top: "85px", fontSize: "60px", color: "#00ffff", verticalAlign: "middle" }}>
              <img id="grainImg" src={this.props.message.grainImg } alt="" style={{ width: "60px" }} />
            </div>
            <div style={{ position: "absolute", left: "155px", top: "80px", fontSize: "60px", color: "#00ffff", verticalAlign: "middle" }}>
              <span id="weight">{this.props.message.weight}</span>t
            </div>
            <div style={{ position: "absolute", left: "70px", top: "170px", padding: "8px 25px", borderRadius: "30px", border: "1px solid #00ffff" }}>
              仓高—<span id="granaryHeight">{this.props.message.granaryHeight}</span>m</div>
            <div style={{ position: "absolute", left: "225px", top: "170px", padding: "8px 25px" }}>
              粮高— <span id="grainHeight">{this.props.message.grainHeight}</span> m
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default Tooltip