import React from 'react';
import { Redirect } from 'react-router-dom';
import * as userAPI from '../services/userAPI';
import Carregamento from './Carregamento';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      buttonIsAble: true,
      carregando: false,
      redirect: false,
    };
  }

  onChangeName = (event) => {
    const { value } = event.target;
    const N = 3;
    if (value.length >= N) {
      this.setState({ buttonIsAble: false });
    } else {
      this.setState({ buttonIsAble: true });
    }
    this.setState({ nome: value });
  }

   handleClick = async () => {
     const { nome } = this.state;
     this.setState({ carregando: true });
     await userAPI.createUser({ name: nome });
     this.setState({ carregando: false,
       redirect: true,
     });
   };

   render() {
     const { buttonIsAble, carregando, redirect } = this.state;
     if (carregando === true) {
       return <Carregamento />;
     }
     return (
       <div data-testid="page-login">
         <form>
           <section>
             <label htmlFor="name">
               <p>Nome</p>
               <input
                 id="name"
                 onChange={ this.onChangeName }
                 data-testid="login-name-input"
                 type="text"
               />
             </label>
             <button
               onClick={ this.handleClick }
               type="submit"
               data-testid="login-submit-button"
               disabled={ buttonIsAble }
             >
               Entrar
             </button>
           </section>
         </form>
         {redirect ? <Redirect to="/search" /> : ''}
       </div>
     );
   }
}
export default Login;
