import React from 'react';
import './main.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Main = () => {
  const [input, setInput] = useState('');
  const [comment, setComment] = useState([]);

  // const changeHeartColor = () => {};

  return (
    <div className="mainDiv">
      <nav className="nav-bar">
        <div className="nav-left">
          <i className="fa-brands fa-instagram"></i>
          <span className="logo">westagram</span>
        </div>
        <div className="nav-center">
          <input type="searchbar" placeholder="검색" />
        </div>
        <div className="nav-right">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="compass"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="heart"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="mypage"
          />
          <Link to="/login-beomseok">메인</Link>
        </div>
      </nav>
      <main className="main-feeds">
        <div className="feeds">
          <article className="arti">
            <div className="profile-nav">
              <div className="profile-img">
                <img
                  src="/images/beomseok/2.jpeg"
                  alt="profile"
                  className="profileImg"
                />
                <div>
                  <p>
                    <strong>beom__q</strong>
                  </p>
                  <p>호이안</p>
                </div>
              </div>
              <div className="more">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
            <img
              src="/images/beomseok/1.jpeg"
              alt="feeds"
              className="feedsImg"
            />
            <div className="article-nav">
              <div className="article-nav-left">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"> </i>
                <i className="fa-regular fa-share-from-square"></i>
              </div>
              <div className="article-nav-right">
                <i className="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <div className="profile-img-main">
              <img src="/images/beomseok/3.jpeg" alt="" />
              <p>mingming_214님 외 5명이 좋아합니다</p>
            </div>

            <ul className="chatUl">
              {comment.map(function (props, i) {
                return (
                  <CommentCreate
                    comment={comment[i]}
                    key={i}
                    setComment={setComment}
                  />
                  // <li className="commentBox">
                  //   <span className="userId">beom__q</span>
                  //   <li className="commentInput">{comment[i]}</li>
                  //   <img
                  //     src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  //     alt="heart"
                  //     className="heart"
                  //     onClick={changeHeartColor}
                  //   />
                  //   <button
                  //     className="deleteBtn"
                  //     onClick={() => {
                  //       let copy = [...comment];
                  //       copy.splice(i, 1);
                  //       setComment(copy);
                  //     }}
                  //   >
                  //     삭제
                  //   </button>
                  // </li>
                );
              })}
            </ul>
            <form
              className="chat"
              onSubmit={e => {
                e.preventDefault();
                let copy = [...comment];
                copy.push(input);
                setComment(copy);
                e.target.reset();
              }}
            >
              <input
                type="text"
                placeholder="댓글 달기..."
                onChange={e => {
                  setInput(e.target.value);
                }}
              />
              <button type="submit">게시</button>
            </form>
          </article>
        </div>
        <div className="main-right">
          <div className="profile-right">
            <div className="profile">
              <div className="profile-img">
                <img src="/images/beomseok/2.jpeg" alt="profile" />
                <div>
                  <p className="userInfo">
                    <strong>beom__q</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="story">
            <div className="recommend-nav">
              <p>스토리</p>
              <p>모두보기</p>
            </div>
            <div className="profile">
              <div className="profile-img">
                <img src="/images/beomseok/2.jpeg" alt="profile" />
                <div>
                  <p>
                    <strong>beom__q</strong>
                  </p>
                  <p>16분전</p>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="profile-img">
                <img src="/images/beomseok/2.jpeg" alt="profile" />
                <div>
                  <p>
                    <strong>beom__q</strong>
                  </p>
                  <p>3시간전</p>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="profile-img">
                <img src="/images/beomseok/2.jpeg" alt="profile" />
                <div>
                  <p>
                    <strong>beom__q</strong>
                  </p>
                  <p>2시간전</p>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="profile-img">
                <img src="/images/beomseok/2.jpeg" alt="profile" />
                <div>
                  <p>
                    <strong>beom__q</strong>
                  </p>
                  <p>4시간전</p>
                </div>
              </div>
            </div>
          </div>
          <div className="recommend">
            <div className="recommend-nav">
              <p>회원님을 위한 추천</p>
              <p>모두보기</p>
            </div>
            <div className="profile">
              <div className="profile-img">
                <img src="/images/beomseok/2.jpeg" alt="profile" />
                <div className="follow">
                  <p>
                    <strong>beom__q</strong>
                  </p>
                  <p>mingming_214님외 함께아는 친구가 10명입니다</p>
                </div>
                <p className="follow1">팔로우</p>
              </div>
            </div>
            <div className="profile">
              <div className="profile-img">
                <img src="/images/beomseok/2.jpeg" alt="profile" />
                <div className="follow">
                  <p>
                    <strong>beom__q</strong>
                  </p>
                  <p>mingming_214님외 함께아는 친구가 10명입니다</p>
                </div>
                <p className="follow1">팔로우</p>
              </div>
            </div>
            <div className="profile">
              <div className="profile-img">
                <img src="/images/beomseok/2.jpeg" alt="profile" />
                <div className="follow">
                  <p>
                    <strong>beom__q</strong>
                  </p>
                  <p>mingming_214님외 함께아는 친구가 10명입니다</p>
                </div>
                <p className="follow1">팔로우</p>
              </div>
            </div>
          </div>
          <div className="info">
            instagram 정보 . 지원 . 홍보 센터 . API . 채용 정보 .
            개인정보처리방침 . 약관 . 디렉터리 . 프로필 . 해시태그 . 언어
          </div>
          <div className="copy">&copy; 2019 INSTAGRAM</div>
        </div>
      </main>
    </div>
  );
};

const CommentCreate = (props, i) => {
  const { comment, setComment } = props;
  return (
    <li className="commentBox">
      <span className="userId">beom__q</span>
      <li>{comment}</li>
      {/* <button
        className="deleteBtn"
        onClick={() => {
          let copy = [...comment];
          copy.splice(i, 1);
          setComment(copy);
        }}
      >
        삭제
      </button> */}
    </li>
  );
};
export default Main;
