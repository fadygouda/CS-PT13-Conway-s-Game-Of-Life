import React from 'react'
import { ButtonToolbar } from 'react-bootstrap'

class Buttons extends React.Component {

    render() {
        return (
            <div className= "center">
                <ButtonToolbar>
                    <button className = "btn btn-default" onClick={this.props.playButton}>
                        Play
                    </button>
                    <button className = "btn btn-default" onClick={this.props.pauseButton}>
                        Pause
                    </button>
                    <button className = "btn btn-default" onClick={this.props.randomSeed}>
                        Random
                    </button>
                    <button className = "btn btn-default" onClick={this.props.glider}>
                        Glider
                    </button>
                    <button className = "btn btn-default" onClick={this.props.clear}>
                        Clear
                    </button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Buttons;