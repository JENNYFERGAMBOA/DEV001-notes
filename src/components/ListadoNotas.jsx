const ListadoNotas  = ({arrayTareas}) => {
    return <div> {arrayTareas.map((objetoTarea)=>{
        return (
            <div>
                <div>{objetoTarea.descrpcion}</div>
                <div><button>Ver Nota</button></div>
                <div><button>Eliminar Nota</button></div>
            </div>
        );
    })}
     </div>;
};
export default ListadoNotas;