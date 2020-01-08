import React from 'react'

export const Login = ({setuserName}) =>{
    return(
        <>
            <div className="row">
                <div className="col-2 offset-5">
                    <form>
                        <div className="form-group">
                            <label htmlFor="user">Nombre de Usuario</label>
                            <input type="text" className="form-control" id='user'/>
                        </div>
                        <button type='button' className='btn btn-outline-light' onClick={e=>{
                            const name= document.getElementById('user').value
                            if(name){
                                setuserName(name)
                            }
                        }}>Ingresa!</button>
                    </form>
                </div>
            </div>
        </>
    )
}