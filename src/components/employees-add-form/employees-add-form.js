import "./employees-add-form.css";
import { Component } from "react";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    // здесь берем вводимое в поле значение и записываем его в состояние, соответствующее атрибуту name в input
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;
    const { onAdd } = this.props;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            // атрибут name нужен для записи значения из поля input в нужное состояние (name)
            name="name"
            // это значение из состояния this.state
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            // атрибут name нужен для записи значения из поля input в нужное состояние (salary)
            name="salary"
            // это значение из состояния this.state
            value={salary}
            onChange={this.onValueChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={onAdd(name, salary)}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
