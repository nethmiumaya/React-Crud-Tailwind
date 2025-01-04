import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { RootLayout } from "./component/RootLayout";
import { Dashboard } from "./Pages/Dashboard";
import { Add } from "./Pages/Add";
import { Delete } from "./Pages/Delete";
import { Update } from "./Pages/Update";
import store from "./store/store";

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
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    );
}

export default App;