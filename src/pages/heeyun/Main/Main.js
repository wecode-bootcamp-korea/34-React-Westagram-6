import React from 'react';
import './main.scss';

const Main = () => {
  return (
    <div className="wrapper">
      <nav className="navi">
        <div className="navLeft">
          <img
            src="../images/heeyun/instagram.png"
            className="navIcons"
            alt="logo_picture"
          />
          <div className="logo">Westagram</div>
        </div>
        <input type="text" placeholder="검색" />
        <div className="navRight">
          <img
            className="naviIcons"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="navInstalogo"
          />
          <img
            className="naviIcons"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="navIcon2"
          />
          <img
            className="naviIcons"
            src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="navIcon3"
          />
        </div>
      </nav>
      <main className="mains">
        <div className="feeds">
          <article className="articles">
            <div className="articleTop">
              <img
                className="computer"
                src="../images/heeyun/computer.jpeg"
                alt="computer"
              />
              <p className="name">developer_</p>
            </div>

            <div className="articleMiddle">
              <img
                className="fighting"
                src="../images/heeyun/fighting.jpg"
                alt="fighting"
              />
            </div>
            <div className="articleIcons">
              <div className="articleLeft">
                <img
                  className="articleIcon"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="heart2"
                />
                <img
                  className="articleIcon"
                  src="../images/heeyun/chat.png"
                  alt="chat"
                />
              </div>
              <div className="articleRight">
                <img
                  className="articleIcon"
                  src="../images/heeyun/save-instagram.png"
                  alt="save"
                />
              </div>
            </div>
            <div className="words">
              <strong>
                <span className="words_id">developer_</span>
              </strong>{' '}
              Wecode 3주차.. 죽을거가타여.. 개발자되고만다 화이팅!!!
            </div>
            <div className="comments">
              <span>
                <input className="comment" type="text" placeholder="댓글달기" />
              </span>
              <span>
                <button className="open">게시</button>
              </span>
            </div>
          </article>
        </div>
        <div className="mainRight">
          <div className="mainRightTop">
            <img
              className="mainRightComputer"
              src="../images/heeyun/computer.jpeg"
              alt="computer"
            />
            <strong>
              <span>developer_</span>
            </strong>
          </div>
          <div className="story">
            <div className="storyWrite">
              <span>스토리</span>
              <strong>
                <span>모두 보기</span>
              </strong>
            </div>
            <div className="storyPeople">
              <div className="storyPerson">
                <img
                  className="iuPhoto"
                  src="../images/heeyun/iu.jpeg"
                  alt="iu_insta"
                />
                <div className="storyName">
                  <span>dlwlrma</span>
                  <span className="grey">2시간전</span>
                </div>
              </div>
              <div className="storyPerson">
                <img
                  className="iuPhoto"
                  src="../images/heeyun/iu.jpeg"
                  alt="iu_insta"
                />
                <div className="storyName">
                  <span>dlwlrma</span>
                  <span className="grey">2시간전</span>
                </div>
              </div>
              <div className="storyPerson">
                <img
                  className="iuPhoto"
                  src="../images/heeyun/iu.jpeg"
                  alt="iu_insta"
                />
                <div className="storyName">
                  <span>dlwlrma</span>
                  <span className="grey">2시간전</span>
                </div>
              </div>
              <div className="storyPerson">
                <img
                  className="iuPhoto"
                  src="../images/heeyun/iu.jpeg"
                  alt="iu_insta"
                />
                <div className="storyName">
                  <span>dlwlrma</span>
                  <span className="grey">2시간전</span>
                </div>
              </div>
            </div>
          </div>
          <div className="recommend">
            <div className="recommendWrite">
              <span>회원님을 위한 추천</span>
              <strong>
                <span>모두 보기</span>
              </strong>
            </div>
            <div className="recommendPeople">
              <div className="recommendPerson">
                <img
                  className="recommendIuPhoto"
                  src="../images/heeyun/iu.jpeg"
                  alt="iu_insta"
                />
                <div className="recommendName">
                  <span>dlwlrma</span>
                  <span className="grey">2시간전</span>
                </div>
              </div>
              <div className="recommendPeople">
                <div className="recommendPerson">
                  <img
                    className="recommendIuPhoto"
                    src="../images/heeyun/iu.jpeg"
                    alt="iu_insta"
                  />
                  <div className="recommendName">
                    <span>dlwlrma</span>
                    <span className="grey">2시간전</span>
                  </div>
                </div>
                <div className="recommendPerson">
                  <img
                    className="recommendIuPhoto"
                    src="../images/heeyun/iu.jpeg"
                    alt="iu_insta"
                  />
                  <div className="recommendName">
                    <span>dlwlrma</span>
                    <span className="grey">2시간전</span>
                  </div>
                </div>
                <div className="recommendPerson">
                  <img
                    className="recommendIuPhoto"
                    src="../images/heeyun/iu.jpeg"
                    alt="iu_insta"
                  />
                  <div className="recommendName">
                    <span>dlwlrma</span>
                    <span className="grey">2시간전</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
