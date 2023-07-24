import './App.css';
import TeamBuilder from './components/TeamBuilder.jsx';

function App(initialCardList) {

  return (
    <div>
      <TeamBuilder initialCardList={initialCardList}/>
    </div>
  )
}

export default App;