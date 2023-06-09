import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    
    const filterExpenses = props.expenses.filter(expense => {
        const date = new Date(expense.date);
        return date.getFullYear() == props.selectYear;
    })

    return (
        <div className="expense-list">
            
            { filterExpenses.length === 0 ? <h5>No expense found!</h5> : filterExpenses.map((expense, index) => (
                <ExpenseItem key={index} onEditExpense={props.onEditExpense} onUpdateExpense={props.onUpdateExpense} expense={expense}/>
            ))
            }
        </div>
    );
}

export default ExpenseList;