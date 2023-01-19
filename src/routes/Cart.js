import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from './../stores/userSlice'

function Cart() {

    let user = useSelector((state)=>{return state.user})
    let list = useSelector((state)=>{return state.wishlist})
    let dispatch = useDispatch()

    return (
        <div>
            { user.name }({ user.age }) 의 장바구니
            <button onClick={()=>{
                dispatch(increase(100))
            }}>+</button>
            <button onClick={()=>{
                dispatch(changeName())
            }}>+</button>


            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item)=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart