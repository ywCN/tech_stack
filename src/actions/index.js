export const selectLibrary = (libraryId) => {
    return { // NOT (), we need to return Object
        type: 'select_library',
        payload: libraryId
    };
};
