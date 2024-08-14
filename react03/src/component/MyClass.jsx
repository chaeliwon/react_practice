import React, { Component } from 'react'
// useState 등등은 함수형 컴포넌트에서만 사용하는 리액트 훅, 지금 현재 파일은 클래스 컴포넌트기 때문에 사용할수 없다

export class MyClass extends Component {

    //LifeCycle 함수
    // 컴포넌트 생명주기에 맞춰서 실행 되어지는 함수들

    // 1.componentDidMount : 컴포넌트가 맨처음 랜더링 됄때 실행하겠습니다
    componentDidMount(){
        console.log("Mount단계");
        
    };

    // 2.componentDidUpdate : 컴포넌트가 재 랜더링 될때 실행하겠습니다 / setState 값이 변경됐을때
    // state 값이 변경, props 변경
    componentDidUpdate(){
        console.log("Update단계");
        // 출력 숫자가 10에 도달하면
        // 목표 숫자가 도달했습니다
        if(this.state.num ==10){
            alert("목표 숫자에 도달했습니다.")
        }
    };

    // class 컴포넌트 state 변수 생성
    state = {
        num : 0
    };


  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        {/* class 컴포넌트 setState 사용법 */}
        <button onClick={()=>this.setState({num : this.state.num+1})}>+1</button>
      </div>
    )
  }
};

export default MyClass