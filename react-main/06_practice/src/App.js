import './App.css';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';


const App = () => {
  const activeStyle = {
    color: 'green',
    fontWeight: 'bold'
  };

  const [books, setBooks] = useState([
    {no: 1, title: '홍길동전', author: '홍길동'},
    {no: 2, title: '자바의 정석', author: '남궁성'},
    {no: 3, title: '파피용', author: '베르나르 베르베르'},
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (bookNo) => {
    console.log(books);

    if(window.confirm(`${bookNo}번 책을 삭제할까요?`)) {
      setBooks(books.filter((book) => book.no !== bookNo));
    }
  }

  return (
    <>
      <header>
        <div className="container">
          {/* <div className="box"><Link to="/">홈으로</Link></div> */}
          {/* <div className="box"><Link to="/books">도서 목록</Link></div> */}
          {/* <div className="box"><Link to="/addBook">도서 등록</Link></div> */}
          {/* NavLink 활용 */}
          <div className="box"><NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined}>홈으로</NavLink></div>
          <div className="box"><NavLink to="/books" style={({isActive}) => isActive ? activeStyle : undefined}>도서 목록</NavLink></div>
          <div className="box"><NavLink to="/addBook" style={({isActive}) => isActive ? activeStyle : undefined}>도서 등록</NavLink></div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/books" element={<BookListPage books={books} del={deleteBook} />}/>
        <Route path="/addBook" element={<AddBookPage add={addBook} />}/>
      </Routes>
    </>
  );
};

const HomePage = () => {
  return (
    <main>
      <h2>Home</h2>
    </main>
  );
};

const BookListPage = ({books, del}) => {
  console.log(books);

  return (
    <main>
      <h2>도서 목록</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>도서 번호</th>
            <th>도서 이름</th>
            <th>도서 저자</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => 
            <tr key={book.no}>
              <td>{book.no}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td><button onClick={() => del(book.no)}>삭제</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};

const AddBookPage = ({add}) => {
  const navigate = useNavigate();
  const noRef = useRef(false);
  const [form, setForm] = useState({
    no: '',
    title: '',
    author: ''
  });
  const {no, title, author} = form;

  const onChangeForm = (event) => {
    const key = event.target.name;
    const value = (key === 'no') ? parseInt(event.target.value) 
                                    : event.target.value;

    setForm({...form, [key]: value});
  };

  const onReset = () => {
    setForm({
      no: '',
      title: '',
      author: ''
    });
    noRef.current.focus();
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (window.confirm('도서를 등록할까요?')) {
      add(form);
      alert('도서 등록이 완료되었습니다.');
      navigate('/books');
    }
  };

  return (
    <main>
      <h2>도서 등록</h2>

      <form onSubmit={onSubmit}>
        <input 
          type="text"
          placeholder="도서 번호를 입력하세요."
          value={no}
          name="no"
          onChange={onChangeForm}
          ref={noRef}
        />

        <br/>

        <input 
          type="text"
          placeholder="도서 제목을 입력하세요."
          value={title}
          name="title"
          onChange={onChangeForm}
        />

        <br/>

        <input 
          type="text"
          placeholder="도서 저자를 입력하세요."
          value={author}
          name="author"
          onChange={onChangeForm}
        />

        <br/><br/>

        <input type="submit" value="도서 등록"/>
        <input type="reset" onClick={onReset} value="다시 입력"/>
      </form>
    </main>
  );
};

export default App;
