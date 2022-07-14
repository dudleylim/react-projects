const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                users: [...state.users, action.payload],
                isShowModal: true,
                modalContent: 'item submitted'
            };

        case 'REMOVE_ITEM':
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            };

        case 'NO_ITEM':
            return {
                ...state,
                isShowModal: true,
                modalContent: 'where value at'
            };

        case 'CLOSE_MODAL':
            return {
                ...state,
                isShowModal: false,
            };
    
        default:
            return {...state};
    }
};

export default reducer;