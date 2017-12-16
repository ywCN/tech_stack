export default (state = null, action) => {
    // null is for default state
    // // cannot return undefined
    // return null; // null for we do not want a selected row when boot up
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
