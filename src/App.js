import React, { useReducer } from "react";

import { featureReducer, initialState } from "./reducers/featureReducer";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
    const [featureState, dispatch] = useReducer(featureReducer, initialState);
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

    const removeFeature = (item) => {
        // dispatch an action here to remove an item
        dispatch({ type: "REMOVE_FEATURE", payload: item });
    };

    const buyItem = (item) => {
        // dipsatch an action here to add an item
        dispatch({ type: "ADD_FEATURE", payload: item });
    };

    return (
        <div className="boxes">
            <div className="box">
                <Header car={featureState.car} />
                <AddedFeatures
                    car={featureState.car}
                    removeFeature={removeFeature}
                />
            </div>
            <div className="box">
                <AdditionalFeatures
                    additionalFeatures={featureState.additionalFeatures}
                    buyItem={buyItem}
                />
                <Total
                    car={featureState.car}
                    additionalPrice={featureState.additionalPrice}
                />
            </div>
        </div>
    );
};

export default App;
