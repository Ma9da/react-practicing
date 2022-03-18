import './App.css';

function App() {
  const title = 'welcome to the new blog'
  const likes = 50;
  const person = {
    name: "magda",
    age: 24
  };
  const link = "https://www.google.com/";
  return (
    <div className="App">
      <div className="content">
        <h1> { title } </h1>
        <p>Liked { likes } times</p>
        <p>
          name: {person.name}
          age: {person.age}
        </p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
