const initState = {
    navList: [
        {
            style: 'fas',
            name: 'list-ul',
            active: true,
            type: 'all'
        },
        {
            style: 'far',
            name: 'calendar-check',
            active: false,
            type: 'actived'
        }
    ],
    filter: 'all'
}

const SWITCH_TAB = 'SWITCH_TAB';

export const switchTab = (item) => ({
    type: SWITCH_TAB,
    navItemClick: item
})

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SWITCH_TAB:
            let index = state.navList.indexOf(action.navItemClick)
            return {
                navList: [
                    ...state.navList.map(function (subitem, subindex) {
                        if (subindex === index) {
                            return {
                                ...subitem,
                                active: true
                            }
                        }
                        else {
                            return {
                                ...subitem,
                                active: false
                            }
                        }
                    })
                ],
                filter: action.navItemClick.type
            }
        default:
            return state;
    }
}

export default reducer;