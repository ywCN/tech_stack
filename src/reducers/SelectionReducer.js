export default (state, action) => {
    // console.log(action);
    // // cannot return undefined
    // return null; // null for we do not want a selected row when boot up
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
