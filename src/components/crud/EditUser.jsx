import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneUserAction, updateUserAction } from '../../actions/crud';
import { useForm } from '../../hooks/useForm';

export const EditUser = () => {
    const { id } = useParams();
    const { loading } = useSelector(state => state.loadingForm)
    const { oneUser } = useSelector(state => state.crud)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getOneUserAction(id))
    },[dispatch])

    const { handleInputChange, inputManage } = useForm({
        _id: id,
        nombre: oneUser.nombre,
        email: oneUser.email,
        sueldo: oneUser.sueldo
    });
    const { nombre, email, sueldo } = inputManage;
    console.log(oneUser)

    const handleInputSubmitEdit = (e) => {
        e.preventDefault()
        if(id){
            dispatch(updateUserAction(inputManage))
        }
    }

    return (
        <div className="_manage_main-container">
            <form onSubmit={handleInputSubmitEdit}>
                <h1 className="_h1-add-user">Add a new User</h1>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        name="nombre"
                        onChange={handleInputChange}
                        placeholder="Introduce your name"
                        autoComplete="off"
                        value={nombre}
                        />
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        name="email"
                        onChange={handleInputChange}
                        placeholder="Introduce your email"
                        autoComplete="off"
                        value={email}
                        />
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        name="sueldo"
                        onChange={handleInputChange}
                        placeholder="Introduce your sueldo"
                        autoComplete="off"
                        value={sueldo}
                        />
                </div>
                {/*  */}
                {(loading === true)
                    ?
                    (<button className="_form-spiner" type="submit">
                        <div className="loading-form"></div>
                    </button>)
                    :
                    (<button className="_manage-botton" type="submit">
                        Actualizar
                    </button>)
                }
            </form>
        </div>
    )
}