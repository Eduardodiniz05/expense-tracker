import * as C from './style'
import {Item} from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
    list: Item[]
}

export const TableArea = ({ list}: Props) =>  {
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
                {list.map((items, index) => (
                    <TableItem key={index} item={items} />
                ))}

            </tbody>
        </C.Table>
    )
}