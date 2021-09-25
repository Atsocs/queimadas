import { FaFire, FaBan } from 'react-icons/fa'
import React from "react";
import axios from 'axios';
import toTitleCase from './title_case';

// TODO: Parametrize those consts below according to historical data, for city/state/country separately
// for fireCount between fireCountSmall and fireCountBig, the fire grows linearly.
const fireCountSmall = 1; // minimum of fireCount in order to show a fire
const fireCountBig = 1; // number of fireCount where the fire stops increasing
const fireSizeSmall = 20; // size of the smallest fire
const fireSizeBig = 20; // size of the biggest fire

class FireBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = (props.dataOrigin === 'query') ?
            props.queryResponse : { found: false };
        this.state.dataOrigin = props.dataOrigin;
    }

    async getData() {
        const res = await axios.get('http://localhost:3001/api/here')
        const { status, data } = await res;
        if (status !== 200) {
            this.setState({ found: false })
            console.log("erro")
            return
        }
        data.cityName = toTitleCase(data.cityName);
        data.stateName = toTitleCase(data.stateName);

        const state = {
            found: true,
            firesCount: [data.cityFires, data.stateFires, data.countryFires],
            // // TODO: get locationText from stateCode and cityName, with the correct article.
            // // Example: RJ => "no Rio de Janeiro", SP => "em São Paulo"
            locationText: ["em " + data.cityName, "em " + data.stateName, "no Brasil"],
        }
        this.setState(state);
    }

    componentDidMount() {
        if (this.state.dataOrigin === 'ip') {
            this.getData();
        }
    }

    getFire(fireCount) {
        let fireSize = 0;
        if (fireCount >= fireCountSmall) {
            if (fireCount >= fireCountBig) {
                fireSize = fireSizeBig;
            } else {
                fireSize = fireSizeSmall + Math.round(
                    (fireSizeBig - fireSizeSmall) * (fireCount - fireCountSmall) / (fireCountBig - fireCountSmall))
            }
        }
        return fireSize > 0 ? <FaFire size={fireSize} /> : null;
    }

    renderRegion(fireCount, locationText, index) {
        fireCount = parseInt(fireCount);
        const regionParagraph = <p>{fireCount === 0 ? "Não há " : `Há ${fireCount} `}
            foco{fireCount === 1 ? '' : 's'} de queima {locationText}!</p>;
        return (
            <div className="col" key={index}>
                {regionParagraph}
                {this.getFire(fireCount)}
            </div>
        )
    }

    render() {
        if (!this.state.found) {
            return <p><FaBan /> Município não encontrado <FaBan /></p>
        }
        return (
            <div className="row">
                {this.state.firesCount.map((firesCount, index) => this.renderRegion(firesCount, this.state.locationText[index], index))}
            </div>
        );
    }
}

export default FireBoard;