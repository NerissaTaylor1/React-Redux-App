import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getBeer } from "../actions/actions";
import BeerItem from "./BeerItem";

const Beer = props => {
    return (
        <div>
            <h1>Punk API- Beers</h1>
            {!props.beer && !props.isFetching && <p>Fetch a beer</p>}
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            <div className="container">
                {props.beer.map(beer => (
                    <div key={beer.id}>
                        <p>Beer name: {beer.name}</p>
                        <img src={beer.image_url} alt="beer-bottle" />
                        <p>tagline: {beer.tagline}</p>
                        <p> First brewed:{beer.first_brewed}</p>
                        <p>Description: {beer.description}</p>


                    </div>
                ))}
            </div>
            <div>
                <button onClick={props.getBeer}>Get Beer Now!</button>

            </div>
        </div>
    )

}
const mapStateToProps = state => {
    return {
        beer: state.beer,
        isFetching: state.isFetching,
        error: state.error
    };
};
export default connect(
    mapStateToProps, { getBeer })(Beer);
