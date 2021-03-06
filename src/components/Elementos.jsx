import Pagination from "rc-pagination"
import { useRef } from "react"
import { Link } from "react-router-dom"

const Elementos = (props) => {
    const {titleTable,linkCreate,phSearch,buscarByQ,pagina,size,total,onchange} = props
    const inputSearch = useRef()

    return (<>
        <div className="col-12">
            <div id="card-categorias" className="card">
                <div className="card-header">
                    <div className="row">

                        <div className="col-3" style={{ display: "flex", alignItems: "center", }}>
                            <h3 className="card-title">{titleTable}</h3>
                        </div>

                        <div className="col-6">
                            <Link to={linkCreate}>
                                <div className="btn btn-success">Crear</div>
                            </Link>
                        </div>

                        <div className="col-3" style={{ display: "flex", alignItems: "flex-end", }}>
                            <div className="input-group" >
                                <input ref={inputSearch} type="search" className="form-control" placeholder={phSearch} />
                                <div className="input-group-append">
                                    <button onClick={()=>buscarByQ(inputSearch.current.value)} className="btn btn-default">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="card-body">
                    {props.children}
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
                    items_per_page: '/ p??gina',
                    jump_to: 'Ir a',
                    jump_to_confirm: 'confirmar',
                    page: 'P??gina',

                    // Pagination.jsx
                    prev_page: 'P??gina anterior',
                    next_page: 'P??gina siguiente',
                    prev_5: '5 p??ginas previas',
                    next_5: '5 p??ginas siguientes',
                    prev_3: '3 p??ginas previas',
                    next_3: '3 p??ginas siguientes',
                    page_size: 'tama??o de p??gina',
                }}
                readOnly />
        </div>
    </>)
}
export default Elementos