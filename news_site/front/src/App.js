import image from './test-image.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
<>
    <header>
      <nav>
        <ul className="topmenu">
            <li>
                <a href="">Интернет</a>
            </li>
            <li>
                <a href="">Культура</a>
            </li>
            <li>
                <a href="">Общество</a>
            </li>
            <li>
                <a href="">Политика</a>
            </li>
            <li>
                <a href="">Спорт</a>
            </li>
            <li>
                <a href="">Экономика</a>
            </li>
        </ul>
      </nav>
    </header>

    <div className="container">
        <div className="row">
            <div className="col-6">
                <h2 className="title">Название новости</h2>
                <img src={image} className="rounded mx-auto d-block" alt="image" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua ex ea commodo consequat. </p>
        </div>
            <div className="col-6">
               <h2 className="title">Название новости</h2>
                <img src={image} className="rounded mx-auto d-block" alt="image" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.ex ea commodo consequat. </p>
            </div>
            <div className="col-6">
               <h2 className="title">Название новости</h2>
                <img src={image} className="rounded mx-auto d-block" alt="image" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.ex ea commodo consequat. </p>
            </div>
            <div className="col-6">
               <h2 className="title">Название новости</h2>
                <img src={image} className="rounded mx-auto d-block" alt="image" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.ex ea commodo consequat. </p>
            </div>
        </div>
   </div>
  <footer className="page-footer font-small blue footer">
    <div>
        <div className="footer-copyright text-center py-3">
            © 2020 Copyright: все права защищенены
        </div>
    </div>
  </footer>
</>
  );
}

export default App;
