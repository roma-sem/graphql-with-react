import './App.css';
import logo from './logo.png';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Launches from './components/Launches';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      alert(`GraphQL error ${message}`);
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:5000/graphql"})
])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});


function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <div className="App">
        <img src={logo} alt="SpaceX-logo" style={{ width: '300px', margin: 'auto', display: 'block' }} />
        <Launches />
      </div>
    </ApolloProvider>
    </>
  );
}

export default App;
