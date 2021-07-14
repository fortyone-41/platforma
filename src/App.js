import React from "react";
import DataGrid, { Column, ColumnFixing } from "devextreme-react/data-grid";
import "./App.css";
import service from "./data.js";
import reportConfig from "./report-config.js";
import Modal from "./Modal/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.dataSource = service.getData();
    this.state = {
      dataGrid: reportConfig.getConfig(),
      visible: false,
    };
    this.onCloseModal = () => {
      this.setState((prev) => ({ ...prev, visible: false }));
    };
  }

  addColumn(caption, fixed = false, dataField = caption, dataType = "string") {
    this.state.dataGrid.columns[caption] = {
      fixed: fixed,
      dataField: dataField,
      dataType: dataType,
    };
    this.setState(this.state);
  }

  removeColumn(caption) {
    delete this.state.dataGrid.columns[caption];
    this.setState(this.state);
  }

  changeColumnName(oldCaption, newCaption) {
    this.state.dataGrid.columns[newCaption] = {
      ...this.state.dataGrid.columns[oldCaption],
    };
    delete this.state.dataGrid.columns[oldCaption];
    this.setState(this.state);
  }

  render() {
    return (
      <div style={{display: "flex", justifyContent:"center", flexDirection: "column"}}>
      <h3 style={{marginLeft: "25%", marginRight: "25%"}}>Окно предварительного просмотра отчета</h3>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <DataGrid
            id="gridContainer"
            dataSource={this.dataSource}
            keyExpr="ID"
            width="60%"
            allowColumnReordering={true}
            allowColumnResizing={true}
            columnAutoWidth={true}
            showBorders={true}
          >
            <ColumnFixing enabled={true} />
            {Object.keys(this.state.dataGrid.columns).map((item, index) => (
              <Column
                key={index}
                caption={item}
                fixed={this.state.dataGrid.columns[item].fixed}
                dataType={this.state.dataGrid.columns[item].dataType}
                dataField={this.state.dataGrid.columns[item].dataField}
              />
            ))}
          </DataGrid>
          <div className="columns">
            Список колонок
            <div style={{ marginLeft: "10px" }}>
              {Object.keys(this.state.dataGrid.columns).map((item, index) => {
                return (
                  <div key={index}>
                    {item} 
                    <button
                      title="Изменить название"
                      style={{ paddingLeft: "0px", paddingRight: "0px" }}
                      className="btn btn-outline secondary"
                      onClick={() => {
                        this.changeColumnName(
                          item,
                          prompt("Введите новое название")
                        );
                      }}
                    >
                      &#9998;
                    </button>
                    <button
                      title="Удалить колонку"
                      style={{ paddingLeft: "0px", paddingRight: "0px" }}
                      className="btn btn-outline secondary"
                      onClick={() => this.removeColumn(item)}
                    >
                      &#128465;
                    </button>
                     
                  </div>
                );
              })}
              <Modal addColumn={this.addColumn.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
