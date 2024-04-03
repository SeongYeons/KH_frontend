import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProfilePage from './components/ProfilePage';
import CommentsPage from './components/CommentsPage';
import NotFoundPage from './components/NotFoundPage';
import Layout from './components/Layout';
import PostPage from './components/PostPage';
import CommentsPage2 from './components/CommentsPage2';

function App() {
  return (
    <Routes>
      {/* 공통 레이아웃 컴포넌트 */}
      <Route element={<Layout />}>
        {/* <Route path="/" element={<HomePage />}/> */}
        <Route index element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="/posts/:postId/comments" element={<CommentsPage2 />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
