import React from 'react'

class Rules extends React.Component {
    render () {
        return (
            <div className="rules">
                <h3>Rules of Conway's Game of Life</h3>
                <br /> <br />
                <span>In order to play, you can either click into a box to turn it on or use any of the presets above and click play! 
                        The play button will turn the algorithm on, and based on the rules below you will be able to see the lifecycle of the boxes.
                        The rules are as follows:<br /> <br /></span>
                <span>1. Any cell that is on (alive) that has less than two live neighbors will turn off (dead) due to underpopulation in the next generation<br />
                    2. Any cell that is on (alive) with two or three live neighbors will stay on (alive) to the next generation. <br />
                    3. Any cell that is on (alive) with more than three live neighbors will turn off (dead) in the next generation. <br />
                    4. Any cell that is off (dead) with exactly three live neighbors will turn on (alive)</span>
            </div>
        )
    }
}

export default Rules;