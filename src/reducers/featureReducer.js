export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: "2019 Ford Mustang",
        image:
            "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: [],
    },
    additionalFeatures: [
        { id: 1, name: "V-6 engine", price: 1500 },
        { id: 2, name: "Racing detail package", price: 1500 },
        { id: 3, name: "Premium sound system", price: 500 },
        { id: 4, name: "Rear spoiler", price: 250 },
    ],
};

export const featureReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FEATURE":
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                features: state.car.features.push(action.payload),
            };
        case "REMOVE_FEATURE":
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
            };
        default:
            return state;
    }
};
// case "TOGGLE_REMOVE_FEATURE":
//     return {
//         ...state,
//         features: state.features.map((feature) => {
//             if (feature.id === action.payload) {
//                 return {
//                     ...feature,
//                     added: feature.added,
//                 };
//             }
//             return feature;
//         }),
//     };
// case "ADD_TO_ADDITONAL_FEATURES":
//     return {
//         ...state.additionalFeatures,
//         additionalFeatures: state.features.filter((feature) => {
//             return !feature.added;
//         }),
//     };
// case "REMOVE_FROM_FEATURES":
//     return {
//         ...state,
//         features: state.features.filter((features) => {
//             return features.added;
//         }),
//     };
// case "TOGGLE_ADD_FEATURE":
//     return {
//         ...state,
//         additionalFeatures: state.additionalFeatures.map((item) => {
//             if (item.id === action.payload) {
//                 return {
//                     ...item,
//                     added: !item.added,
//                 };
//             }
//             return item;
//         }),
//     };
// case "REMOVE_FROM _ADDITONAL_FEATURES":
//     return {
//         ...state,
//         additionalFeatures: state.additionalFeatures.filter(
//             (additionalFeatures) => {
//                 return !additionalFeatures.added;
//             }
//         ),
//     };
// case "ADD_TO_FEATURES":
//     return {
//         ...state.features,
//         features: state.additionalFeatures.filter((feature) => {
//             return feature.added;
//         }),
//     };
