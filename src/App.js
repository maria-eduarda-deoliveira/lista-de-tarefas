import React, {Component} from "react";
import Lixo from "./assets/lixo.svg";
import Add from "./assets/add.svg";
import Code from "./assets/code.svg";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
::selection {
  color: #fff;
  background: #efd8a4;
}
`;
const Container = styled.div`
position: absolute;
left: 40%;
top: 5%;
`;

const Titulo = styled.h1`
padding: 2px 20px 5px;
color: #e49d89;
font-family: 'Barlow Condensed', sans-serif;
font-size: 40px;
`;

const Tarefas = styled.input`
padding: 2px 5px;
border: #e49d89 solid 2px;
font-size: 20px;
font-family: 'Barlow Condensed', sans-serif;
`;

const BtnAdd = styled.button`
background: transparent;
border: none;
cursor: pointer;
`;

const ContainerLista = styled.div`
margin-top: 5%;
padding: 2%;
border: 1px solid #ccc;
font-size: 20px;
font-family: 'Barlow Condensed', sans-serif;
`;

const Lista = styled.li`
display: flex;
justify-content: space-between;
text-align: center;
max-width: 100%;
list-style: none;
`;

const BtnRemove = styled.button`
background: transparent;
border: none;
cursor: pointer;
`;

const Check = styled.input`
margin-top: 2.5%;
`;

const ImgCode = styled.img`
position: absolute;
top: 90%;
left: 96%
`;

class ListaTarefas extends Component{
  state = {
    tarefa: "",
    lista: []
  };

  remove = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
      })
    });
  };

  add = (event) => {
    if (this.state.tarefa.length > 0) {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }

    /* Evita reiniciar a página ao adicionar tarefas */

    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  render() {
    return (
      <div>
      <Container>
      <GlobalStyle />
      <form onSubmit={this.add}>
        <Titulo>To-Do List</Titulo>
        <Tarefas value={this.state.tarefa} onChange={this.handleChange} placeholder="Escreva aqui..."/>
        <BtnAdd onClick={this.add}><img src={Add} /></BtnAdd>
        <ol>
          {this.state.lista.map((item) => (
            <ContainerLista>
            <Lista key={item.id}>
            <Check type="checkbox" key={item.id} value="task"></Check>
              {item.tarefa}{" "}
              <BtnRemove onClick={() => {this.remove(item.id);}}><img src={Lixo} /></BtnRemove>
            </Lista>
            </ContainerLista>
          ))}
        </ol>
      </form>
      </Container>
      <a href="https://github.com/maria-eduarda-deoliveira/lista-de-tarefas"><ImgCode src={Code} /></a>
      </div>
    );
  }
}

export default ListaTarefas