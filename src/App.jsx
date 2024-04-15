import Player from "./components/Player"
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Boki" symbol="X" />
          <Player initialName="Admin" symbol="O" />
        </ol>
      </div>
    </main>
  )
}

export default App
