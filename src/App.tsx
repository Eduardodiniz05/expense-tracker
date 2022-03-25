import { useState } from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {categories} from './data/categories';
import {items} from './data/Items';

const App = () => {
    const [list, setList] = useState(items);
    const [currentMonth, setCurrentMonth] = useState()

  return(
    <C.Container>
        <C.Header>
           <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          {/* Área de informações */}

          {/* Área de inserção */}

          {/* Tabela de Itens */}

        </C.Body>
    </C.Container>
  )
}
export default App;
