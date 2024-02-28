import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 0, name: "John C.", salary: 800, increase: false },
        { id: 1, name: "Alex M.", salary: 3000, increase: true },
        { id: 2, name: "Carl W.", salary: 9000, increase: false },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const elem = {
      id: nextId(),
      name: name,
      salary: salary,
      increase: false,
    };

    return (e) => {
      e.preventDefault();
      this.setState(({ data }) => {
        const newArr = [...data, elem];
        return {
          data: newArr,
        };
      });
    };
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
