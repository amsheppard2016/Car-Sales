import React from "react";

import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { removeFeature, buyItem } from "./action";

const App = (props) => {
    // const state = {
    //   additionalPrice: 0,
    //   car: {
    //     price: 26395,
    //     name: '2019 Ford Mustang',
    //     image:
    //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    //     features: []
    //   },
    //   additionalFeatures: [
    //     { id: 1, name: 'V-6 engine', price: 1500 },
    //     { id: 2, name: 'Racing detail package', price: 1500 },
    //     { id: 3, name: 'Premium sound system', price: 500 },
    //     { id: 4, name: 'Rear spoiler', price: 250 }
    //   ]
    // };

    console.log("car", props.car);
    return (
        <div className="boxes">
            <div className="box">
                <Header car={props.car} />
                <AddedFeatures
                    car={props.car}
                    removeFeature={props.removeFeature}
                />
            </div>
            <div className="box">
                <AdditionalFeatures
                    additionalFeatures={props.additionalFeatures}
                    buyItem={props.buyItem}
                />
                <Total
                    car={props.car}
                    additionalPrice={props.additionalPrice}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        additionalPrice: state.additionalPrice,
        car: state.car,
        additionalFeatures: state.additionalFeatures,
    };
};

export default connect(mapStateToProps, { removeFeature, buyItem })(App);
