import "./RightSide.scss";

export const RightSide = () => {
  return (
    <aside className="RightSide">
      <div className="List">
        <div className="List__title">
          <h2>Близкие друзья</h2>
          <span className="count">123</span>
        </div>
        <div className="UserElem">
          <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
          <div className="user__description">
            <p className="main__text">Александр Майков</p>
            <p className="secondary__text _online">Онлайн</p>
          </div>
          <span className="Badge">3</span>
        </div>
        <div className="UserElem">
          <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
          <div className="user__description">
            <p className="main__text">Александр Майков</p>
            <p className="secondary__text _online">Онлайн</p>
          </div>
          <span className="Badge">3</span>
        </div>
        <div className="UserElem">
          <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
          <div className="user__description">
            <p className="main__text">Александр Майков</p>
            <p className="secondary__text _online">Онлайн</p>
          </div>
          <span className="Badge">3</span>
        </div>
      </div>
      <div className="MusicBlock">
        <div className="MusicBlock__title">
          <h2>Вы недавно слушали</h2>
          <span>123</span>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-1.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">Pieces</p>
            <p className="secondary__text">Andrew Belle</p>
          </div>
          <div className="plus-button _active"></div>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-2.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">In the Wind</p>
            <p className="secondary__text">On-The-Go</p>
          </div>
          <div className="plus-button"></div>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-3.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">On you own</p>
            <p className="secondary__text">Meltt</p>
          </div>
          <div className="plus-button _active"></div>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-4.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">Infinity</p>
            <p className="secondary__text">James Young</p>
          </div>
          <div className="plus-button"></div>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-5.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">Let me follow</p>
            <p className="secondary__text">Son Lux</p>
          </div>
          <div className="plus-button _active"></div>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-6.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">Youth</p>
            <p className="secondary__text">Glass Animals</p>
          </div>
          <div className="plus-button"></div>
        </div>
      </div>
    </aside>
  );
};
