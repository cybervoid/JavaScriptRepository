//babel pre-processes the external javascript file.

//create a dom element with react
class AppComponent extends React.Component{
  render(){
    return React.createElement("h1",
      {className: "header"},
      "Hello world"
    );
  }
}

ReactDOM.render(
  React.createElement(AppComponent, null),  //render this
  document.getElementById("application") //output it here
);
