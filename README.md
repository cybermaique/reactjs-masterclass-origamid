Componentes necessários:

https://unpkg.com/react@16/umd/react.development.js
https://unpkg.com/react-dom@16/umd/react-dom.development.js
https://unpkg.com/@babel/standalone@7/babel.min.js


* Babel
  * Temos que entender que todo elemento React é criado com a função createElement. O Babel é o responsável por transformar o elemento criado com JSX (que se parece com HTML) em funções de React.
  * Transforma o código em funções de React pra criar os elementos do React.
  * Exemplo: 
 
```
 function App() {
  return <div id="container">Meu App</div>;
}
```
  Sempre criaremos da forma acima. O Babel transforma em:
  
```
 function App() {
  return React.createElement('div', { id: 'container' }, 'Meu App');
}
```
  
  * Criar componente
    * Com Arrow function:
```
<body>
  <div id="app"></div>
    const App = () => {
      return <div>Meu App</div>
    }

    ReactDOM.render(<App />, document.getElementById('app'))
  </script>
</body>
```

    * Com Class:
```
<body>
  <div id="app"></div>
    class Button extens React.Componentes{
    render(){
  return <button>Comprar</button>
    }
  }

    ReactDOM.render(<Button />, document.getElementById('app'))
  </script>
</body>
```
