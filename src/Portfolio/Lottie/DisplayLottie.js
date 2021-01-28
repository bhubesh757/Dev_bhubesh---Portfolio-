import React, { Component, Suspense } from 'react';
import Lottie from 'react-lottie';
import Loading from "/home/bhubesh/myportfolio/src/Portfolio/Containers/Loading/Loading.js";



export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
    
    return (
        <Suspense fallback={<Loading/>}>
          {/* To override default onClick pause by Lottie */}
          <div onClick='null'>
            <Lottie 
              options={defaultOptions}
            />
          </div>
        </Suspense>
    );
  }
}