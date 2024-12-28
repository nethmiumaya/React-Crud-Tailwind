import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router";
import { CustomerProvider } from "./store/CustomerProvider.tsx";
import { ItemProvider } from "./store/ItemProvider.tsx";
import { RootLayout } from "./component/RootLayout.tsx";
import { Dashboard } from "./Pages/Dashboard.tsx";
import { Add } from "./Pages/Add.tsx";
import { Delete } from "./Pages/Delete.tsx";
import { Update } from "./Pages/Update.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayout />,
            children: [
                { path: '', element: <Dashboard /> },
                { path: '/add', element: <Add /> },
                { path: '/delete', element: <Delete /> },
                { path: '/update', element: <Update /> }
            ]
        },
    ]);

    return (
        <>
            <CustomerProvider>
                <ItemProvider>
                    <RouterProvider router={routes} />
                </ItemProvider>
            </CustomerProvider>
        </>
    );
}

export default App;