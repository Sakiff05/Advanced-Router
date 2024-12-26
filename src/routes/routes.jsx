import AdminRoot from "../Admin/AdminRoot";
import UserRoot from "../User/UserRoot";
import Basket from "../User/basket/basket";
import BookDetails from "../User/bookDetails/bookDetails";
import Books from "../User/books/books";
import Favorites from "../User/favorites/favorites";
import Home from "../User/home/home";
import NotFoundPage from "../User/notFound/NotFoundPage";
import DashBoard from "../Admin/dashBoard/DashBoard";
import AdminBooks from "../Admin/books/AdminBooks";
import BookDetail from "../Admin/bookDetail/BookDetail";
import AddBook from "../Admin/addBook/AddBook";
import EditBook from "../Admin/editBook/EditBook";
const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "books/:id",
        element: <BookDetails />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "books",
        element: <AdminBooks />,
      },
      {
        path: "books/:id",
        element: <BookDetail />,
      },
      {
        path: "add",
        element: <AddBook />,
      },
      {
        path: "books/:id/edit",
        element: <EditBook />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default ROUTES;
