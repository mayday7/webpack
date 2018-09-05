import React, {Component} from 'react';
import './App.css';
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class App extends Component {


  componentDidMount() {
    console.log("3-1....componentDidMount");
    // 第一次绘制图标
    this.drawChart()


  }

  // 绘制图表
  drawChart() {
    var myChart = echarts.init(document.getElementById('main'));
    let option = {
      title: {text: 'ECharts 柱状图'},
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: this.props.data1,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: this.props.data
      }]
    }
    // 绘制图表
    myChart.setOption(option, true);
  }


  componentWillReceiveProps() {

    console.log("4-1....componentWillRecieveProps");

    const that = this
    this.timeout = setTimeout(function () {

        // 状态更新之后重新绘制
        that.drawChart()

    }, 5000)

  }


  //优化  如果不等，则继续执行接下来的代码
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }
  componentWillUpdate(nextProps, nextState){
    console.log("6.....componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState){

  }

  componentWillUnmount() {
    console.log("8...componentWillUnmount");

    clearInterval(this.timeout);

  }

  render() {
    console.log(this.props.data);
    return (
      <div id="main">
      </div>
    );

  }


}

export default App;