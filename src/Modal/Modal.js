import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      caption: "",
      fixed: false,
      dataType: "",
    };
  }

  render() {
    return (
      <div className="modalWindow">
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.setState((prev) => ({ ...prev, isOpen: true }))}
        >
          Добавить колонку
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Добавить колонку</h1>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Введите название колонки
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Название колонки"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) =>
                    this.setState((prev) => ({
                      ...prev,
                      caption: e.target.value,
                    }))
                  }
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Зафиксировать колонку
                </span>
                <div class="input-group-text">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) =>
                      this.setState((prev) => ({
                        ...prev,
                        fixed: e.target.checked,
                      }))
                    }
                  />
                </div>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Выберите тип данных
                </span>
                <select
                  className="form-control"
                  onChange={(e) =>
                    this.setState((prev) => ({
                      ...prev,
                      dataType: e.target.value,
                    }))
                  }
                >
                  <option disabled selected value="">
                    Выберите значение
                  </option>
                  <option value="string">Строковый</option>
                  <option value="number">Числовой</option>
                  <option value="date">Дата</option>
                  <option value="phone">Телефон</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    if (
                      this.state.caption !== "" &&
                      this.state.dataType !== ""
                    ) {
                      this.props.addColumn(
                        this.state.caption,
                        this.state.fixed || false,
                        this.state.caption,
                        this.state.dataType
                      );
                      this.setState((prev) => ({ ...prev, isOpen: false }));
                    } else alert("Заполните все поля.");
                  }}
                >
                  Добавить колонку
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() =>
                    this.setState((prev) => ({ ...prev, isOpen: false }))
                  }
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
