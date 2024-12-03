import './App.css';
import Card from './components/card';
import deobfuscateString, { forUrl2 } from './components/obfuscatee';

function App() {
  const betterUrl1 = deobfuscateString("asdfksdifsdfn");
  const betterUrl2 = forUrl2();
  console.log(betterUrl1)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-heading">Format:</h1>
        <div className="cards-container">
          <div className="xx-card">
            <Card />
          </div> <span>-</span>
          <div className="xx-card">
            <Card />
          </div> <span>-</span>
          <div className="xx-card">
            <Card />
          </div>
          <span>,</span>

          <div className="xx-card">
            <Card />
          </div> <span>-</span>
          <div className="xx-card">
            <Card />
          </div> <span>-</span>
          <div className="xx-card">
            <Card />
          </div>
        </div>
        {/* 
        
        


        
        You've been looking for me for so long! When did this start again??? Fine you are just one step away, align the "starts" and you'll have my coordinates 
        
        
        
        
        
        */}
        <div className="video-container">
          <iframe
            className="video"
            src={`https://www.youtube.com/embed/${betterUrl1}$&start=456`}
            title="YouTube Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="video"
            src={`https://www.youtube.com/embed/${betterUrl2}&start=1510`}
            title="YouTube Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
