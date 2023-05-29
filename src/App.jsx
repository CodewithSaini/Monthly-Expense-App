import "./App.css";
import {useState, useEffect} from "react";
import ExpenseDetail from "./components/containers/ExpenseDetail";
import AddContainer from "./components/containers/AddContainer";


function App() {
  const [data, setData] = useState([]);
  const [selectYear, setSelectYear] = useState(2023);
  const years = [2023, 2022, 2021, 2020, 2019];


  const handleYearChange = (event) => {
    setSelectYear(event.target.value)
  }

  const fetchDataFromDatabase = () => {
    fetch('/api/data').then(
      response => {
        return response.json();
      }).then( data => {
        setData(data);
      });
  }

  useEffect(() => {
    fetchDataFromDatabase();
  }, []);

  return (
    <div className="App container">
      <div className="title-heading">
        <h3>Expense Tracker</h3>
        <div className="filter-by-year">
            <h5>Filter by year</h5>
            <select value={selectYear} onChange={handleYearChange} name="filter-by-year" id="filter-by-year">
              {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
        </div>
      </div>
      <AddContainer onAddExpense={fetchDataFromDatabase}/>
      <ExpenseDetail expenses={data} selectYear={selectYear}/>
    </div>
  );
}

export default App;
