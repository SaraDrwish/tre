import './App.css';
import MyNavbar from './components/navbar/Navbar';
import MentorOpp from './pages/MentorOpp';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";




function App() {
  const Layout = () => {
    return (
      <div className="app">
        <MyNavbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    );
  };
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Layout />,
      children: [
         // the pages is content header and footer
        //  {
        //   path: "/",
        //   element: <Home />,
        // },
        {
          path: "/mentorOpp",
          element: <MentorOpp />,
        },
        // {
        //   path: "/profile",
        //   element: <Profile />,
        // },

      ]
    },
    {
      // for pages without header and footer
    }
    
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
