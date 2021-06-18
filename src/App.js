import React, { Component } from "react";
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
// usamos la NAVBAR de bootstrap
// https://getbootstrap.com/docs/5.0/components/navbar/


//Decidi, en vez de usar otro componente, armar la lista dentro del mismo state ya que de esa forma me aseguro de que un atributo se relacione directamente del otro y queden alineados
class App extends Component {
    state = {
        counters: [
          { id: 1, value: 4, producto: "Tomate", precio: 50          },
          { id: 2, value: 0, producto: "Papel Higienico", precio: 100},
          { id: 3, value: 0, producto: "Banana", precio: 200         },
          { id: 4, value: 0, producto: "Atun", precio: 120           },
          { id: 5, value: 1, producto: "Aquarius", precio: 140       }
        ],
      };
      constructor(){
        super();
        console.log('app - constructor');
      }
      componentDidMount(){
        console.log('app - mounted');
      }
      
      handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter}; // clonamos el objeto recibido x parametro
        counters[index].value++;
        this.setState({counters});
      };
      handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters: counters });
      };
      handleReset = () => {
        const counters = this.state.counters.map((c) => {
          c.value = 0;
          return c;
        });
        this.setState({ counters });
      };

      //Función para devolver el total de todass las compras
      result(){
       const result =  this.state.counters.filter(c => c.value>0).reduce((t,c ) => t + c.precio * c.value, 0);
       return result;
      }

      //Función para traer los contadores de los elementos comprados
      totalCounters(){
        const totalCounters = this.state.counters.filter(c=> c.value>0).length;
        return totalCounters;
      }
  render(){
    console.log('app - rendered');
  return (
    <React.Fragment>
        {/* Paso ambos resultados al NavBar que es child del App para que los renderice desde ahí */}
        <NavBar totalCounters={this.totalCounters()} 
                resultado = {this.result()}
                />
        
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        />
      </main>
    </React.Fragment>
  );
}
}
export default App;