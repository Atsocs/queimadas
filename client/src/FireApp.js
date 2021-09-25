import SearchBar from './scripts/SearchBar.js'
import FireBoard from './scripts/FireBoard.js'
import React from 'react';

class FireApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataOrigin: 'ip', // should be either 'ip' or 'query'
            data: { found: false, },
        }
    }

    setData(data) {
        this.setState({
            data: data,
            dataOrigin: 'query',
        });
    }

    render() {
        return (
            <div className="App">
                <SearchBar setAppData={(d) => this.setData(d)} />
                <FireBoard
                    dataOrigin={this.state.dataOrigin}
                    queryResponse={this.state.data}
                />
            </div>
        );
    }
}

export default FireApp