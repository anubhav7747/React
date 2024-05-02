import Anubhav from "./anubhav";

function App() {
  const username = "anubhav";
  return (
    <>
      <Anubhav />
      {/* below "{username}" act as a "evaluated expression". */}
      <h1>Username: {username}</h1>
      <h2>this is a heading.</h2>
      <p>This is a paragraph.</p>
    </>
  );
}

export default App;
