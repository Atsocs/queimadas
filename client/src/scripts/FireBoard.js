import { FaFire, FaBan } from 'react-icons/fa'
import React from "react";

// TODO: Parametrize those consts below according to historical data, for city/state/country separately
// for fireCount between fireCountSmall and fireCountBig, the fire grows linearly.
const fireCountSmall = 1; // minimum of fireCount in order to show a fire
const fireCountBig = 1; // number of fireCount where the fire stops increasing
const fireSizeSmall = 20; // size of the smallest fire
const fireSizeBig = 20; // size of the biggest fire


class FireBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            found: !props.hasOwnProperty("notFound"),
            location: {
                countryCode: props.countryCode ? props.countryCode : "BR",
                stateCode: props.stateCode,
                cityName: props.cityName,
            },
            firesCount: [props.cityFires, props.stateFires, props.countryFires],
            // TODO: get locationText from stateCode and cityName, with the correct article.
            // Example: RJ => "no Rio de Janeiro", SP => "em São Paulo"
            locationText: ["em " + props.cityName, "em " + props.stateCode, "no Brasil"],
        };
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

    renderRegion(fireCount, locationText) {
        fireCount = parseInt(fireCount);
        const regionParagraph = <p>{fireCount === 0 ? "Não há " : `Há ${fireCount} `}
            foco{fireCount === 1 ? '' : 's'} de queima {locationText}!</p>;
        return (
            <div className="col">
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
                {this.state.firesCount.map((x, i) => this.renderRegion(x, this.state.locationText[i]))}
            </div>
        );
    }
}

export default FireBoard;