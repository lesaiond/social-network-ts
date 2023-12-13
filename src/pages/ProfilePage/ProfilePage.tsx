import React from "react";
import "./ProfilePage.scss";
import { Header } from "../../components/UI/Header/Header";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { WhatsNew } from "../../components/WhatsNew/WhatsNew";
import { LeftSide } from "../../components/LeftSide/LeftSide";
import { RightSide } from "../../components/RightSide/RightSide";

export const ProfilePage = () => {
  const user = useTypedSelector((state) => state.userSlice.user)


  return (
    <div className="container">
      <Header />
      <div className="ProfilePage">
        <LeftSide />
        <div className="ProfileHeader">
          <svg
            className="icon icon-edit"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="icon"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM33.0775 11.2929C32.687 10.9024 32.0538 10.9024 31.6633 11.2929L27.9599 14.9963L27.9596 14.9966L27.9592 14.9969L13.1447 29.8114C13.0246 29.9316 12.937 30.0804 12.8903 30.2438L11.0385 36.7253C10.9387 37.0745 11.0361 37.4503 11.2929 37.7071C11.5497 37.9639 11.9255 38.0613 12.2747 37.9615L18.7562 36.1097C18.9196 36.063 19.0684 35.9754 19.1886 35.8553L34.003 21.0408L34.0034 21.0404L34.0038 21.0401L37.7071 17.3367C38.0976 16.9462 38.0976 16.313 37.7071 15.9225L33.0775 11.2929ZM15.2661 30.5185L28.6667 17.1179L31.8821 20.3333L18.4815 33.7339L15.2661 30.5185ZM30.0809 15.7037L33.2963 18.9191L35.5858 16.6296L32.3704 13.4142L30.0809 15.7037ZM14.3465 32.4274L16.5726 34.6535L13.456 35.544L14.3465 32.4274Z"
            />
          </svg>
          <div className="user__block">
            <img src="./img/users/denis-frolov.jpeg" alt="Denis Frolov" />
            <div className="user__description">
              <h1 className="user__name">{user?.useremail}</h1>
              <div className="user__info">
                <div className="parameter">
                  <span className="key">Друзья</span>
                  <span className="value">130</span>
                </div>
                <div className="parameter">
                  <span className="key">Подписчики</span>
                  <span className="value">923</span>
                </div>
                <div className="parameter">
                  <span className="key">Подписки</span>
                  <span className="value">246</span>
                </div>
              </div>
            </div>
            <div className="buttons-wrapper">
              <button className="secondary">Редактировать профиль</button>
              <button className="primary">Добавить историю</button>
            </div>
          </div>
          <div className="profile-background"></div>
        </div>
        <main className="Main">
          <WhatsNew />
          <div className="UserPosts">
            <div className="UserPosts__controls">
              <div className="tabs">
                <div className="tab _no-select photos _active">
                  <svg
                    className="icon icon-photo"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="photo"
                      d="M25 17.5V2.5C25 1.125 23.875 0 22.5 0H7.5C6.125 0 5 1.125 5 2.5V17.5C5 18.875 6.125 20 7.5 20H22.5C23.875 20 25 18.875 25 17.5ZM11.25 12.5L13.7875 15.8875L17.5 11.25L22.5 17.5H7.5L11.25 12.5ZM0 5V22.5C0 23.875 1.125 25 2.5 25H20V22.5H2.5V5H0Z"
                    />
                  </svg>

                  <span>Фото</span>
                </div>
                <div className="tab _no-select videos">
                  <svg
                    className="icon icon-video"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="video"
                      d="M13.8125 14.375L19 11.0625C19.3958 10.8125 19.5937 10.4583 19.5937 10C19.5937 9.54167 19.3958 9.1875 19 8.9375L13.8125 5.625C13.3958 5.33333 12.9687 5.3125 12.5312 5.5625C12.0937 5.8125 11.875 6.17708 11.875 6.65625V13.3437C11.875 13.8229 12.0937 14.1875 12.5312 14.4375C12.9687 14.6875 13.3958 14.6667 13.8125 14.375ZM7.5 20C6.8125 20 6.22375 19.755 5.73375 19.265C5.24375 18.775 4.99917 18.1867 5 17.5V2.5C5 1.8125 5.245 1.22375 5.735 0.733752C6.225 0.243752 6.81333 -0.000831211 7.5 2.12224e-06H22.5C23.1875 2.12224e-06 23.7762 0.245002 24.2662 0.735002C24.7562 1.225 25.0008 1.81333 25 2.5V17.5C25 18.1875 24.755 18.7762 24.265 19.2662C23.775 19.7562 23.1867 20.0008 22.5 20H7.5ZM2.5 25C1.8125 25 1.22375 24.755 0.733752 24.265C0.243752 23.775 -0.000831211 23.1867 2.12224e-06 22.5V6.25C2.12224e-06 5.89583 0.120002 5.59875 0.360002 5.35875C0.600002 5.11875 0.896669 4.99917 1.25 5C1.60417 5 1.90125 5.12 2.14125 5.36C2.38125 5.6 2.50083 5.89667 2.5 6.25V22.5H18.75C19.1042 22.5 19.4012 22.62 19.6412 22.86C19.8812 23.1 20.0008 23.3967 20 23.75C20 24.1042 19.88 24.4012 19.64 24.6412C19.4 24.8812 19.1033 25.0008 18.75 25H2.5Z"
                    />
                  </svg>
                  <span>Видео</span>
                </div>
              </div>
              <div className="upload-media _no-select">
                <svg
                  className="icon icon-upload"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <g>
                    <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
                  </g>
                </svg>
                <span>Загрузить фото</span>
              </div>
            </div>
            <div className="media-container">
              <img
                className="media__item"
                src="./img/users/arina-volkova.jpeg"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/user-photo-2.jpeg"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/user-photo-3.jpeg"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/user-photo-4.jpeg"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/user-photo-5.jpeg"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/user-photo-6.jpeg"
                alt="Post Item"
              />
            </div>
            <div className="show-all _no-select">
              <span>Показать все</span>
              <svg
                className="icon icon-show-all"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="arrow"
                  d="M6 5.99999C5.8565 5.99999 5.71731 5.97708 5.58242 5.93128C5.44753 5.88548 5.33561 5.82441 5.24664 5.74808L0.295964 1.53435C0.0986543 1.36641 0 1.15267 0 0.893127C0 0.633586 0.0986543 0.419846 0.295964 0.251907C0.493273 0.0839689 0.744394 0 1.04933 0C1.35426 0 1.60538 0.0839689 1.80269 0.251907L6 3.82442L10.1973 0.251907C10.3946 0.0839689 10.6457 0 10.9507 0C11.2556 0 11.5067 0.0839689 11.704 0.251907C11.9013 0.419846 12 0.633586 12 0.893127C12 1.15267 11.9013 1.36641 11.704 1.53435L6.75336 5.74808C6.64574 5.83968 6.52915 5.90472 6.40359 5.94319C6.27803 5.98166 6.1435 6.0006 6 5.99999Z"
                />
              </svg>
            </div>
          </div>
          <div className="Post _liked _marked">
            <div className="UserElem">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="user__description">
                <a href="#" className="main__text">
                  Александр Майков
                </a>
                <p className="secondary__text">Сегодня 9:37</p>
              </div>
            </div>
            <p className="Post__text">Момент умиротворения и спокойствия</p>
            <div className="media-container">
              <img
                className="media__item"
                src="./img/post/nature-1.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-2.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-3.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-4.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-5.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-6.png"
                alt="Post Item"
              />
            </div>
            <div className="PostControls">
              <div className="icon-wrapper like">
                <span className="count likes-count">-500</span>
                <svg
                  className="icon icon-like"
                  viewBox="0 0 23 23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="icon"
                    d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                  />
                </svg>
              </div>
              <div className="icon-wrapper comment">
                <span className="count comments-count">500</span>
                <svg
                  className="icon icon-comment"
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="comment"
                    d="M9.25 25.5C8.91848 25.5 8.60054 25.3683 8.36612 25.1339C8.1317 24.8995 8 24.5815 8 24.25V20.5H3C2.33696 20.5 1.70107 20.2366 1.23223 19.7678C0.763392 19.2989 0.5 18.663 0.5 18V3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H23C23.663 0.5 24.2989 0.763392 24.7678 1.23223C25.2366 1.70107 25.5 2.33696 25.5 3V18C25.5 18.663 25.2366 19.2989 24.7678 19.7678C24.2989 20.2366 23.663 20.5 23 20.5H15.375L10.75 25.1375C10.5 25.375 10.1875 25.5 9.875 25.5H9.25ZM10.5 18V21.85L14.35 18H23V3H3V18H10.5Z"
                    fill="#6D6F7A"
                  />
                </svg>
              </div>
              <div className="icon-wrapper repost">
                <svg
                  className="icon icon-repost"
                  viewBox="0 0 32 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="icon"
                    d="M31.1767 11.6881L20.105 0.818783C19.9503 0.666682 19.753 0.563052 19.5383 0.520999C19.3235 0.478945 19.1009 0.500357 18.8985 0.582526C18.6962 0.664696 18.5232 0.803931 18.4014 0.982625C18.2797 1.16132 18.2146 1.37144 18.2145 1.58643V7.06864C14.6246 7.37026 10.6595 9.09577 7.39755 11.8117C3.46988 15.0834 1.02443 19.2993 0.510988 23.6824C0.470864 24.0231 0.541243 24.3676 0.712109 24.6669C0.882976 24.9661 1.14562 25.2048 1.46267 25.349C1.77972 25.4932 2.13502 25.5355 2.47801 25.47C2.82099 25.4044 3.13418 25.2344 3.37301 24.984C4.89536 23.393 10.3122 18.3619 18.2145 17.9189V23.3251C18.2146 23.54 18.2797 23.7502 18.4014 23.9289C18.5232 24.1075 18.6962 24.2468 18.8985 24.329C19.1009 24.4111 19.3235 24.4325 19.5383 24.3905C19.753 24.3484 19.9503 24.2448 20.105 24.0927L31.1767 13.2234C31.3837 13.0196 31.5 12.7436 31.5 12.4557C31.5 12.1679 31.3837 11.8919 31.1767 11.6881ZM20.4289 20.7015V16.8035C20.4289 16.5152 20.3122 16.2387 20.1046 16.0349C19.897 15.831 19.6153 15.7165 19.3217 15.7165C15.4356 15.7165 11.6504 16.7124 8.07153 18.6784C6.24879 19.6841 4.55049 20.8932 3.01041 22.2816C3.8131 19.0425 5.83645 15.9625 8.82994 13.4693C12.0435 10.7941 15.9656 9.19495 19.3217 9.19495C19.6153 9.19495 19.897 9.08043 20.1046 8.87659C20.3122 8.67275 20.4289 8.39629 20.4289 8.10802V4.21137L28.8281 12.4557L20.4289 20.7015Z"
                    fill="#6D6F7A"
                  />
                </svg>
              </div>
              <div className="icon-wrapper mark">
                <svg
                  className="icon icon-mark"
                  viewBox="0 0 21 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="mark"
                    d="M2.5 24.8819C2.02381 25.0725 1.57143 25.031 1.14286 24.7574C0.714285 24.4838 0.5 24.0844 0.5 23.5591V2.85999C0.5 2.07349 0.78 1.39996 1.34 0.839407C1.9 0.278851 2.57238 -0.0009509 3.35714 2.42783e-06H17.6429C18.4286 2.42783e-06 19.1014 0.280281 19.6614 0.840837C20.2214 1.40139 20.5009 2.07444 20.5 2.85999V23.5591C20.5 24.0834 20.2857 24.4829 19.8571 24.7574C19.4286 25.032 18.9762 25.0735 18.5 24.8819L10.5 21.4499L2.5 24.8819Z"
                  />
                </svg>
              </div>
            </div>
            <div className="CommentBlock">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="comment__description">
                <a href="#" className="comment__owner">
                  Карина Савина
                </a>
                <p className="comment__text">Это текст комментария...</p>
                <a href="#" className="reply">
                  Ответить
                </a>
              </div>
              <span className="date">25 марта</span>
              <svg
                className="icon icon-like"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon"
                  d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                />
              </svg>
            </div>
            <svg
              className="icon icon-more"
              viewBox="0 0 25 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="more">
                <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" />
                <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" />
                <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" />
              </g>
            </svg>
          </div>
          <div className="Post Repost _liked _marked">
            <div className="UserElem Repost__owner">
              <img src="./img/users/mark-krahmalev.jpeg" alt="User" />
              <div className="user__description">
                <a href="#" className="main__text">
                  Марк Крахмалев
                </a>
                <p className="secondary__text">20 марта 23:31</p>
              </div>
            </div>
            <div className="Repost__wrapper">
              <div className="UserElem">
                <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
                <div className="user__description">
                  <a href="#" className="main__text">
                    Александр Майков
                  </a>
                  <p className="secondary__text">Сегодня 9:37</p>
                </div>
              </div>
              <div className="media-container">
                <img
                  className="media__item"
                  src="./img/post/garnet-man.png"
                  alt="Post Item"
                />
                <img
                  className="media__item"
                  src="./img/post/garnet.png"
                  alt="Post Item"
                />
              </div>
            </div>
            <div className="PostControls">
              <div className="icon-wrapper like">
                <span className="count likes-count">-500</span>
                <svg
                  className="icon icon-like"
                  viewBox="0 0 23 23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="icon"
                    d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                  />
                </svg>
              </div>
              <div className="icon-wrapper comment">
                <span className="count comments-count">500</span>
                <svg
                  className="icon icon-comment"
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="comment"
                    d="M9.25 25.5C8.91848 25.5 8.60054 25.3683 8.36612 25.1339C8.1317 24.8995 8 24.5815 8 24.25V20.5H3C2.33696 20.5 1.70107 20.2366 1.23223 19.7678C0.763392 19.2989 0.5 18.663 0.5 18V3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H23C23.663 0.5 24.2989 0.763392 24.7678 1.23223C25.2366 1.70107 25.5 2.33696 25.5 3V18C25.5 18.663 25.2366 19.2989 24.7678 19.7678C24.2989 20.2366 23.663 20.5 23 20.5H15.375L10.75 25.1375C10.5 25.375 10.1875 25.5 9.875 25.5H9.25ZM10.5 18V21.85L14.35 18H23V3H3V18H10.5Z"
                    fill="#6D6F7A"
                  />
                </svg>
              </div>
              <div className="icon-wrapper repost">
                <svg
                  className="icon icon-repost"
                  viewBox="0 0 32 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="icon"
                    d="M31.1767 11.6881L20.105 0.818783C19.9503 0.666682 19.753 0.563052 19.5383 0.520999C19.3235 0.478945 19.1009 0.500357 18.8985 0.582526C18.6962 0.664696 18.5232 0.803931 18.4014 0.982625C18.2797 1.16132 18.2146 1.37144 18.2145 1.58643V7.06864C14.6246 7.37026 10.6595 9.09577 7.39755 11.8117C3.46988 15.0834 1.02443 19.2993 0.510988 23.6824C0.470864 24.0231 0.541243 24.3676 0.712109 24.6669C0.882976 24.9661 1.14562 25.2048 1.46267 25.349C1.77972 25.4932 2.13502 25.5355 2.47801 25.47C2.82099 25.4044 3.13418 25.2344 3.37301 24.984C4.89536 23.393 10.3122 18.3619 18.2145 17.9189V23.3251C18.2146 23.54 18.2797 23.7502 18.4014 23.9289C18.5232 24.1075 18.6962 24.2468 18.8985 24.329C19.1009 24.4111 19.3235 24.4325 19.5383 24.3905C19.753 24.3484 19.9503 24.2448 20.105 24.0927L31.1767 13.2234C31.3837 13.0196 31.5 12.7436 31.5 12.4557C31.5 12.1679 31.3837 11.8919 31.1767 11.6881ZM20.4289 20.7015V16.8035C20.4289 16.5152 20.3122 16.2387 20.1046 16.0349C19.897 15.831 19.6153 15.7165 19.3217 15.7165C15.4356 15.7165 11.6504 16.7124 8.07153 18.6784C6.24879 19.6841 4.55049 20.8932 3.01041 22.2816C3.8131 19.0425 5.83645 15.9625 8.82994 13.4693C12.0435 10.7941 15.9656 9.19495 19.3217 9.19495C19.6153 9.19495 19.897 9.08043 20.1046 8.87659C20.3122 8.67275 20.4289 8.39629 20.4289 8.10802V4.21137L28.8281 12.4557L20.4289 20.7015Z"
                    fill="#6D6F7A"
                  />
                </svg>
              </div>
              <div className="icon-wrapper mark">
                <svg
                  className="icon icon-mark"
                  viewBox="0 0 21 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="mark"
                    d="M2.5 24.8819C2.02381 25.0725 1.57143 25.031 1.14286 24.7574C0.714285 24.4838 0.5 24.0844 0.5 23.5591V2.85999C0.5 2.07349 0.78 1.39996 1.34 0.839407C1.9 0.278851 2.57238 -0.0009509 3.35714 2.42783e-06H17.6429C18.4286 2.42783e-06 19.1014 0.280281 19.6614 0.840837C20.2214 1.40139 20.5009 2.07444 20.5 2.85999V23.5591C20.5 24.0834 20.2857 24.4829 19.8571 24.7574C19.4286 25.032 18.9762 25.0735 18.5 24.8819L10.5 21.4499L2.5 24.8819Z"
                  />
                </svg>
              </div>
            </div>
            <div className="CommentBlock">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="comment__description">
                <a href="#" className="comment__owner">
                  Карина Савина
                </a>
                <p className="comment__text">Это текст комментария...</p>
                <a href="#" className="reply">
                  Ответить
                </a>
              </div>
              <span className="date">25 марта</span>
              <svg
                className="icon icon-like"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon"
                  d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                />
              </svg>
            </div>
            <svg
              className="icon icon-more"
              viewBox="0 0 25 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="more">
                <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" />
                <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" />
                <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" />
              </g>
            </svg>
          </div>
        </main>
        <RightSide />
      </div>
    </div>
  );
};
