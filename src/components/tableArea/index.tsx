import * as C from './style'


export const TableArea = () =>  {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width= {130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn >Título</C.TableHeadColumn>
                    <C.TableHeadColumn width= {150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </C.Table>
    )
}