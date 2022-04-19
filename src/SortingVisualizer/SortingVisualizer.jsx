import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 1;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],

        };
}

componentMount() {
    this.resetArray();
}

resetArray() {
    const array = [];
    for(let i = 0; i< 300; i++){
        array.push(randomizedFromMinToMax(5, 700));
    }
    this.setState({array});
}


mergeSort() {




    const animations = getMergeSortAnimations(this.state.array);
 
 
    for (let i = 0; i < animations.length; i++) {
 
 
      const arrayBars = document.getElementsByClassName('array-bar');
 
 
      const isColorChange = i % 3 !== 2;
 
 
      if (isColorChange) {
 
 
        const [barOneIdx, barTwoIdx] = animations[i];
 
 
        const barOneStyle = arrayBars[barOneIdx].style;
 
 
        const barTwoStyle = arrayBars[barTwoIdx].style;
 
 
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
 
 
        setTimeout(() => {
 
 
          barOneStyle.backgroundColor = color;
 
 
          barTwoStyle.backgroundColor = color;
 
 
        }, i * ANIMATION_SPEED_MS);
 
 
      } else {
 
 
        setTimeout(() => {
 
 
          const [barOneIdx, newHeight] = animations[i];
 
 
          const barOneStyle = arrayBars[barOneIdx].style;
 
 
          barOneStyle.height = `${newHeight}px`;
 
 
        }, i * ANIMATION_SPEED_MS);
 
 
      }
 
 
    }
 
 
  }
 

    render() {
        const {array} = this.state;
        return (
            <div className="array-container">
                {array.map( (value, idx) => (
                <div className = "array-bar"
                key={idx}
                style={{
                    backgroundColor: "blue",
                    height: `${value}px`,
                }}></div>))
                }
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                {/* <button onClick={() => this.resetArray()}>Quick Sort</button>
                <button onClick={() => this.resetArray()}>Heap Sort</button>
                <button onClick={() => this.resetArray()}>Binary Sort</button>
                <button onClick={() => this.resetArray()}>Insertion Sort</button> */}
            </div>
        );
    }

}



function randomizedFromMinToMax(min, max){
    return Math.floor(Math.random() * (max -min + 1) + min);
}

