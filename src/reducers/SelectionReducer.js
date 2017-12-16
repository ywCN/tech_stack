export default (state, action) => {
    console.log(action);
    // cannot return undefined
    return null; // null for we do not want a selected row when boot up
};
