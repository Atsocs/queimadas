import SearchBar from './scripts/SearchBar.js'
import FireBoard from './scripts/FireBoard.js'
import React from 'react';

class FireApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getInitialState();
        this.fireBoardElement = React.createRef();
    }

    getInitialState() {
        const initialState = {
            dataOrigin: 'ip', // should be either 'ip' or 'query'
            data: { found: false, },
        }
        return initialState;
    }

    setData(data) {
        this.setState({
            data: { ...this.state.data, ...data },
            dataOrigin: 'query',
        });
        if (this.state.data.cityName && this.state.data.stateName) {
            const stateData = this.state.data;
            const brasilFires = this.fireBoardElement.current.state.firesCount[2];
            const fireState = {
                found: true, // TODO: set this boolean accordingly
                firesCount: [stateData.cityFires, stateData.stateFires, brasilFires],
                locationText: [
                    "em " + stateData.cityName,
                    "em " + stateData.stateName,
                    "no Brasil"
                ],
            }
            this.fireBoardElement.current.setState(fireState);
        }
    }

    render() {
        return (
            <div className="App">
                <SearchBar
                    setAppData={(d) => this.setData(d)}
                />
                <FireBoard
                    ref={this.fireBoardElement}
                    dataOrigin={this.state.dataOrigin}
                    queryResponse={this.state.data}
                />
            </div>
        );
    }
}

export default FireApp