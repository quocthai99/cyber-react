import './../BaiTapBurger/BaiTapBurger.css'
import { useSelector, useDispatch } from 'react-redux'

export default function BaiTapBurger() {

    const { burger, menu, total } = useSelector(state => state.BurgerReducer)
    const dispatch = useDispatch()

    const renderBread = () => {

        return (Object.entries(burger)).map(([burger, value], index) => {
            let breadMid = []
            for (let i = 0; i < value; i++) {
                breadMid.push(<div key={i} className={burger}></div>)
            }
            return breadMid

            // return <div key={index} className={burger}></div>
        })
    }

    const addBreadMid = (propsBurger, amount) => {
        return {
            type: "ADD_BREADMID",
            propsBurger,
            amount
        }
    }

    const renderMenu = () => {
        return (Object.entries(menu)).map(([propsMenu, price], index) => {
            return (
                <tr key={index}>
                    <td>{propsMenu}</td>
                    <td>
                        <button className='btn btn-success' onClick={() => {
                            dispatch(addBreadMid(propsMenu, 1))
                        }}>+</button>
                        {burger[propsMenu]}
                        <button className='btn btn-danger' onClick={() => {
                            dispatch(addBreadMid(propsMenu, -1))
                        }}>-</button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[propsMenu] * price}</td>
                </tr>
            )
        })
    }



    return (
        <div className='container' >
            <h3>BaiTapBurger</h3>
            <div className='row'>
                <div className='col-7'>
                    <h3 className='text-center text-danger' >My Burger</h3>
                    <div className='breadTop'></div>
                    {renderBread()}
                    <div className='breadBottom'></div>
                </div>
                <div className='col-5'>
                    <h3 className='text-center text-success'>chon thuc an</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>thuc an</th>
                                <th></th>
                                <th>gia</th>
                                <th>thanh tien</th>
                            </tr>
                            {renderMenu()}
                        </thead>
                        <tfoot>
                            <tr>
                                <td className='colSpan-2'></td>
                                <td>Tong cong</td>
                                <td>{total}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}
