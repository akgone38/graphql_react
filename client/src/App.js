import logo from './logo.svg';
import './App.css';
import {gql,useQuery} from '@apollo/client'
const query = gql`
    query getAllTodos {
      getTodos {
          id
          title
          completed
          user{
              name
              email
          }
      }
    }
`
function App() {
  const {data,loading} = useQuery(query);
  if(loading) return <h1>loading...</h1>
  return (
    <div className="App">
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
