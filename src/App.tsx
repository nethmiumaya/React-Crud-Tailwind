import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {Dashboard} from "./Pages/Dashboard.tsx";
import {AddCustomer} from "./Pages/AddCustomer.tsx";
import {DeleteCustomer} from "./Pages/DeleteCustomer.tsx";
import {UpdateCustomer} from "./Pages/UpdateCustomer.tsx";
function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '', element : <Dashboard/>},
                { path : '/add', element : <AddCustomer/>},
                { path : '/delete', element : <DeleteCustomer/>},
                { path : '/update', element : <UpdateCustomer/>}
            ]
        },
    ])

    return (
        <>
            <CustomerProvider>
                <RouterProvider router={routes} />
            </CustomerProvider>
        </>
    );
}

export default App