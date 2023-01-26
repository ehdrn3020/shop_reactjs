import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from './../stores/userSlice';
import { addCount, subCount } from './../store';

function Cart() {

    let user = useSelector((state)=>{return state.user})
    let list = useSelector((state)=>{return state.wishlist})
    let dispatch = useDispatch()

    return (
        <div>
            { user.name } 의 장바구니

            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Add</th>
                        <th>Sub</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, i)=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <td><button onClick={()=>{
                                        dispatch(addCount(item.id));
                                    }}>+</button></td>
                                    <td><button onClick={()=>{
                                        dispatch(subCount(item.id));
                                    }}>-</button></td>
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