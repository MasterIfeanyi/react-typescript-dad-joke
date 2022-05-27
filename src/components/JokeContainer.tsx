import React from 'react'
// import {Joke} from "../types/Joke"
import Typescript from "./Typescript"

type JokeContainerProps = {
  fetchError: string | null
  fetchData: () => void
  data: string
}

const JokeContainer = ({data, fetchError, fetchData}: JokeContainerProps) => {
  return (
    <section className="section">
      <div className="container">
        <Typescript />
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="cardStyle">
              {!data && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
              {!data && !fetchError && (data ? data : <p className="statusMsg" style={{ color: "red" }} >No jokes to display.</p>)}
              {data && !fetchError && <p>{data}</p>}
            </div>
            <div className="text-center">
              <button className="btn btn-primary form-button" onClick={fetchData}>Fetch Jokes</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JokeContainer