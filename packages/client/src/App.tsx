// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppClient from './pages/AppClient'
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql/config'
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppClient/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
