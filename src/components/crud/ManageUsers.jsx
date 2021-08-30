import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserData, getUsersData } from '../../actions/crud';

export const ManageUsers = () => {

    const dispatch = useDispatch();
    const { allUsers, loadingData } = useSelector(state => state.crud);

    useEffect(() => {
        dispatch(getUsersData());
    },[dispatch])
    
    const handleDeleteUser = (id) => {
        dispatch(deleteUserData(id));
        dispatch(getUsersData());
    }



    return (
        <section className="_section-manage-user">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre completo</th>
                        <th>Email</th>
                        <th>Sueldo</th>
                    </tr>
                </thead>
                    {loadingData &&
                        ( <div className="_loading-data"></div> )
                    }
                    {allUsers.length === 0
                    ?
                    <div class="alert alert-danger" role="alert">
                        No Hay Usuarios
                    </div>
                    :
                    <tbody>
                    {allUsers.map(user => (
                        <tr >
                            <td key={user._id}> {user.nombre} </td>
                            <td> {user.email} </td>
                            <td> {user.sueldo} </td>
                            <Link to={`/edit-user/${user._id}`} >Editar</Link>
                            <div>
                                <button onClick={() => handleDeleteUser(user._id)}>Eliminar</button>
                            </div>
                    </tr>
                    ))}
                    </tbody>
                        }
            </table>
        </section>
    )
}
