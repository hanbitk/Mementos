import Router from "./shared/Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default App;
