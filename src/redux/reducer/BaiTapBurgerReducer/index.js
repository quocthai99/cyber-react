
const burgerState = {
    burger: { salad: 0, cheese: 0, beef: 0 },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55
    },
    total: 0
}

const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case "ADD_BREADMID": {
            let { propsBurger, amount } = action
            if (amount === -1 && state.burger[propsBurger] < 1) {
                return { ...state }
            }
            let burgerUpdate = { ...state.burger }
            burgerUpdate[propsBurger] += amount
            state.burger = burgerUpdate
            // tong tien
            state.total += amount * state.menu[propsBurger]
            return { ...state }
        }

    }
    return { ...state }
}

export default BurgerReducer

