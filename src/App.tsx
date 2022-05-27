import {useState, useEffect} from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import JokeContainer from './components/JokeContainer';
// import {Joke} from "./types/Joke"

// type errorMessage = {
//   message: string
// }

function App() {

  const [data, setData] = useState<string>("")
  const [fetchError, setFetchError] = useState<string | null>("")

  const fetchData = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) throw Error('Did not recieve expected data')
      const data = await response.json()
      console.log(data);
      setData(JSON.stringify(data.joke));
      setFetchError(null);
    } catch (error) {
      const err = error as Error
      console.log(err.message);
      setFetchError(err.message);
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            'Accept': 'application/json'
          }
        });
        if (!response.ok) throw Error('Did not recieve expected data')
        const data = await response.json()
        console.log(data);
        setData(JSON.stringify(data.joke));
        setFetchError(null);
      } catch (error) {
        const err = error as Error
        console.log(err.message);
        setFetchError(err.message);
      }
    }

    fetchData();
  }, [])


  return (
    <main className="App">
      <Header />
      <JokeContainer 
        data={data}
        fetchError={fetchError}
        fetchData={fetchData}
      />
      <Footer />
    </main>
  );
}

export default App;
