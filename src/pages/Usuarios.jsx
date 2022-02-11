import { memo, useContext, useEffect, useMemo, useRef, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { TuplaData } from "../components/TuplaData"
import Pagination from 'rc-pagination';

export const Usuarios = memo((props) => {
    const { user, validToken, createUser, getUserById, getAllUser, updateUser, deleteUser } = useContext(UserContext)
    
    
    const tablaUsuariosBody = useRef()

    const [usuarios, setUsuarios] = useState([])
    const [pagina,setPagina] = useState(0)
    const [total,setTotal] = useState(0)
    const [size,setSize] = useState(0)

    useEffect(async () => {
        console.log('useEffect usuarios render');

        //talvez aqui no deba estar
        updateUsers()
        
    },[user,pagina])

    

    async function onClickTableBody(e) {

        // click en eliminar
        if (e.target.classList.contains('btn-delete')) {
            var id = e.target.dataset.id
            var ok = await deleteUser(id)
            console.log('ok: ',ok);
            if (ok) {
                //todo:limpiar formulario
                updateUsers()
            }
        }

        // click en editar
        /*if (e.target.classList.contains('btn-edit')) {
            var id = e.target.dataset.id
            var u = await getUserById(id)

            console.log('u: ', u);

            var inNombre = formUsuarios.current.querySelector('#us-nombre')
            var inId = formUsuarios.current.querySelector('#us-id')
            inNombre.value = u.username
            inId.value = u.id
        }*/
    }

    

    async function onchange(page){
        console.log('page: ',page);
        setPagina(page)
        //const users = await getAllUser(pagina)
        //if (users) setUsuariosInfo(users)
    }

    async function updateUsers(){
        //setPagina(pagina)
        var iusuarios = await getAllUser(pagina)
        if(iusuarios) setUsuariosInfo(iusuarios)
    }

    function setUsuariosInfo(iusuarios){
        setUsuarios(iusuarios.content)
        //setPagina(iusuarios.number+1)
        setSize(iusuarios.size)
        setTotal(iusuarios.totalElements)
    }

    return (<>
        <div className="col-12">
            <div id="card-categorias" className="card">
                <div className="card-header">
                    <h3 className="card-title">Lista de Usuarios</h3>
                </div>

                <div className="card-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody ref={tablaUsuariosBody} onClick={onClickTableBody}>
                            {/* {console.log('u: ',usuarios)} */}
                            
                            {usuarios.length > 0 ?
                                (usuarios.map((usuario, i) => <TuplaData key={i} usuario={usuario} />))
                                : null}
                            
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        <div className="col-12 pb-2">
            <Pagination 
                current={pagina}
            pageSize={size}
            total={total}
            onChange={onchange}
            locale={{
                // Options.jsx
                items_per_page: '/ página',
                jump_to: 'Ir a',
                jump_to_confirm: 'confirmar',
                page: 'Página',
              
                // Pagination.jsx
                prev_page: 'Página anterior',
                next_page: 'Página siguiente',
                prev_5: '5 páginas previas',
                next_5: '5 páginas siguientes',
                prev_3: '3 páginas previas',
                next_3: '3 páginas siguientes',
                page_size: 'tamaño de página',
              }}
            readOnly />
        </div>
    </>)
})