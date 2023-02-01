import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Header from './component/Header';

function App() {
  const queryClient = new QueryClient();
  return (
	  <QueryClientProvider client = {queryClient}>
        <AuthContextProvider>
          <Header />
          <Outlet />
        </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
