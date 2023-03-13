import "./App.css";
import { createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState, useEffect } from "react";
import { themeSettings } from "theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { HomePage } from "pages/homePage";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Login from "pages/login";
import { NewPost } from "pages/newPost";
import NotFound from "pages/notfound/NotFound";
// import PostPage from "pages/PostPage";
import BlogWidget from "pages/widgets/BlogWidget";
import { BlogsWidget } from "pages/widgets/BlogsWidget";
import Blog from "pages/widgets/Blog";
import { UserPostList, UserPosts } from "pages/userPostsList";
import { Display } from "pages/UserPostDetail/Display";

export const ThemeContext = createContext();
export const ToggleContext = createContext();
export const UserContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState("light");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [posts, setPosts] = useState(null);
  const [currentPost, setCurrentPost] = useState(null);

  const theme = useMemo(
    () => createTheme(themeSettings(darkTheme)),
    [darkTheme]
  );

  if (user) localStorage.setItem("user", JSON.stringify(user));

  return (
    <div>
      <ThemeContext.Provider
        value={{
          name: [darkTheme, setDarkTheme],
          userInfo: [user, setUser],
          userPosts: [posts, setPosts],
          currentPost: [currentPost, setCurrentPost],
        }}
      >
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/create"
                element={
                  JSON.parse(localStorage.getItem("user")) &&
                  JSON.parse(localStorage.getItem("user")).token ? (
                    <NewPost />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path={`/articles/:postId`}
                element={
                  JSON.parse(localStorage.getItem("user")) &&
                  JSON.parse(localStorage.getItem("user")).token ? (
                    <Display />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path={`/posts/user`}
                element={
                  JSON.parse(localStorage.getItem("user")) &&
                  JSON.parse(localStorage.getItem("user")).token ? (
                    <UserPostList userId={user.user._id} allPosts={posts} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path={`/posts/user/:postId`}
                element={
                  JSON.parse(localStorage.getItem("user")) &&
                  JSON.parse(localStorage.getItem("user")).token ? (
                    <Display />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
