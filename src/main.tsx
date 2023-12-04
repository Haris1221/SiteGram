import ReactDOM  from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";
import { Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65626dfacc5b95e61609');

ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter>
    <QueryProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </QueryProvider>
</BrowserRouter>
)