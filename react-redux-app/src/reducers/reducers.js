import { FETCH_BEER_START, FETCH_BEER_SUCCESS, FETCH_BEER_FAILURE } from "../actions/actions";

const initialState = {

    beer: [{
        name: "",
        tagline: "",
        first_brewed: "",
        description: "",
        image_url: "",
    }],
    // beer: {},
    isFetching: false,
    error: ""

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BEER_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_BEER_SUCCESS:
            return {
                ...state,
                beer: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_BEER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};
export default reducer;