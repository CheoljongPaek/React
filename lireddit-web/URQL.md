# urql
**ural** is a customizable GraphQL client with versatile features including *normalized caching*.  
> To handle content-heavy pages, use *Document Caching*.  
> To handle dynamic and data-heavy apps, use *Normalized Caching*.  

<br>

## Setting up the Client
```javascript
import { createClient } from 'urql';

const client = createClient({
  url: 'http://localhost:3000/graphql',
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});
```
*createClient* method create the GraphQL client.  
The client manages **all** of our GraphQL requests and result.  
- property1: pass an API's url.
- property2: use *fetchOptions* working when a request is sent to the url from client.   
Options object or a function returning options object are passed.  

<br>

## Providing the Client  
### Option 1: Context API for global **CSR** usage
```javascript
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:3000/graphql',
});

const App = () => (
  <Provider value={client}>
    <YourRoutes />
  </Provider>
);
```  
urql provides *Provider* to use GraphQL queries sent to API.

<br>

### Option 2: Componentization for selective usage between **SSR and CSR**
```javascript
import { withUrqlClient } from 'next-urql';
// createUrqlClient is the client.
// Index is page('/') in nextjs.
export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
```  
Nextjs provides *withUrqlClient* in **next-urql**.  
We can split the client and use it as a component for each page.  
SSR or CSR is selected by passing ssr option.

<br>

## Queries  



//send GraphQL request to API