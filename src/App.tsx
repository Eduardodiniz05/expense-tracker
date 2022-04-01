import { useState, useEffect } from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {categories} from './data/categories';
import {items} from './data/Items';
import {getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { AddArea } from './components/AddArea'



const App = () => {
    const [list, setList] = useState(items);
    const [filteredList, setFilteredList] = useState<Item[]>([])
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
      setFilteredList(filterListByMonth(list, currentMonth));
    }, [list, currentMonth]);

    const handleMonthChange = (newMonth: string) => {
      setCurrentMonth(newMonth);
    }

    useEffect(() => {
      let incomeCount = 0
      let expense = 0
      for(let i in filteredList) {
        if(categories[filteredList[i].category].expense) {
          expense += filteredList[i].value
        }else {
          incomeCount += filteredList[i].value
        }
      }

      setIncome(incomeCount)

      setExpense(expense)

    }, [filteredList])

  return(
    <C.Container>
        <C.Header>
           <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          

          <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
          />
          
          <AddArea />

          <TableArea list={filteredList} />

        </C.Body>
    </C.Container>
  )
}
export default App;
