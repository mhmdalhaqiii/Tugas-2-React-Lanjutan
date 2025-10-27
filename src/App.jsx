import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/public";
import Books from "./pages/public/books";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

// Layouts
import PublicLayout from "./layout/public";
import AdminLayout from "./layout/admin";

// Admin Pages
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BookCreate from "./pages/admin/books/create";
import AdminGenres from "./pages/admin/genres";
import GenreCreate from "./pages/admin/genres/create";
import AdminAuthors from "./pages/admin/authors";
import AuthorCreate from "./pages/admin/authors/create";
import BookEdit from "./pages/admin/books/edit";
import ShowBook from "./pages/public/books/show";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="books"> 
            <Route index element={<Books />}/>
            <Route path="show/:id" element={<ShowBook/>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Admin Routes */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          {/* Books */}
          <Route path="books">
            <Route index element={<AdminBooks />} />           {/* /admin/books */}
            <Route path="create" element={<BookCreate />} />   {/* /admin/books/create */}
            <Route path="edit/:id" element={<BookEdit/>} />
          </Route>

          {/* Genres */}
          <Route path="genres">
            <Route index element={<AdminGenres />} />          {/* /admin/genres */}
            <Route path="create" element={<GenreCreate />} />  {/* /admin/genres/create */}
          </Route>

          {/* Authors */}
          <Route path="authors">
            <Route index element={<AdminAuthors />} />         {/* /admin/authors */}
            <Route path="create" element={<AuthorCreate />} /> {/* /admin/authors/create */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
