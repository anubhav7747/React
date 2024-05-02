import "./App.css";
import CardReader from "./CardReader";

function App() {
  let obj = {
    username: "Anubhav",
    email: "anubhav@gmail.com",
    password: "password",
  }

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-7xl">This is a heading</h1>
        <p className="font-serif text-teal-700 text-5xl m-10 p-3 border border-4">
          This is a paragraph
        </p>
        {/* <CardReader channel="react" sendingObj={obj} /> */}
        {/* <CardReader /> */}
        <CardReader username="anubhav" click="click here" />
        <CardReader username="tiwari" />
      </div>
    </>
  );
}

export default App;
