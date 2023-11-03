
import './App.css';
import search from './Vector.png';
import edit from './Vector (4).png';
import del from './trash-svgrepo-com 1.png';
import addd from './Add.png';
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="head">
          <div className="todoList">TODO LIST</div>
          <div className="header">
            <div className="search">
              <div className="searchNote">Search note...</div>
              <img className="vectorIcon" alt="" src={search} />
            </div>
            <div className="select">
              <div className="content">
                <div className="all"><div class="dropdown">
                 <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   ALL
                 </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">All</a></li>
                    <li><a class="dropdown-item" href="#">Completed tasks</a></li>
                   <li><a class="dropdown-item" href="#">Inomplete tasks</a></li>
                   </ul>
                   </div></div>
                <img
                  className="chevronTopIcon"
                  alt=""
                  src="/chevrontop.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <img className="addButtonIcon" alt="" src={addd} />
          <div className="list">
            <div className="note">
              <div className="noteChild" />
              <div className="note1">Note #1</div>
              <div className="options">
                <img
                  className="optionsChild"
                  alt=""
                  src={edit}
                />
                <img
                  className="trashSvgrepoCom1Icon"
                  alt=""
                  src={del}
                />
              </div>
            </div>
            <div className="note2">
              <div className="noteItem" />
              <div className="noteInner" />
              <div className="note21">Note #2</div>
              <div className="options1">
                <img className="vectorIcon2" alt="" src="/vector2.svg" />
                <img
                  className="trashSvgrepoCom1Icon"
                  alt=""
                  src="/trashsvgrepocom-1.svg"
                />
              </div>
            </div>
            <div className="note3">
              <div className="rectangleDiv" />
              <div className="note31">Note #3</div>
              <div className="options1">
                <img className="vectorIcon2" alt="" src="/vector2.svg" />
                <img
                  className="trashSvgrepoCom1Icon"
                  alt=""
                  src="/trashsvgrepocom-1.svg"
                />
              </div>
            </div>
            <div className="listChild" />
            <div className="listItem" />
          </div>
        </div>
      </div>
    </div>
  );
  };

export default App;
