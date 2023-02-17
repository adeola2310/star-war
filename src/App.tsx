import { lazy, Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const CharacterListViewPage = lazy(() => import('./pages/CharacterListView/CharacterListView'));
const CharacterdetailsPage = lazy(()=> import ('./pages/CharacterDetails/CharacterDetails'))


const queryClient = new QueryClient();

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
          <Route path="/" element={ <CharacterListViewPage/> } />
          <Route path='/:id' element={ <CharacterdetailsPage/>} />
          </Routes>
        </Suspense>
      </QueryClientProvider>

    </ChakraProvider>
  );
};

export default App;
