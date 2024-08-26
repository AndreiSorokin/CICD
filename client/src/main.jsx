import { QueryClient, QueryClientProvider } from 'react-query';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <App />
  </QueryClientProvider>
)
