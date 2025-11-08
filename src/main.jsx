import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './features/products/Products.jsx';
import Counter from './features/counter/Counter.jsx';
import TodoList from './features/todolist/Todolist.jsx';
import Recipes from './features/recipes/Recipes.jsx';
import Leads from './features/leads/Leads.jsx';
import AddLeads from './features/leads/AddLeads.jsx';
import EditLead from './features/leads/EditLead.jsx';
import AddRemarks from './features/leads/AddRemarks.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
         path: "/counter",
         element:<Counter></Counter>
      },
      {
         path: "/todolist",
         element:<TodoList></TodoList>
      },
      {
         path: "/recipes",
         element:<Recipes></Recipes>
      },
      {
         path: "/products",
         element:<Products></Products>
      },
      {
         path:"/leads",
         element:<Leads></Leads>
      },
      {
         path:"/addLead",
         element:<AddLeads></AddLeads>
      },
      {
         path:"/editLead/:id",
         element:<EditLead></EditLead>
      },
      {
         path:"/addRemarks/:id",
         element:<AddRemarks></AddRemarks>
      }
  ]
}
]);

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
   </Provider>
    
)
