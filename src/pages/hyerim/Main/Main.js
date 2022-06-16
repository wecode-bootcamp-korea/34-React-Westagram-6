import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './main.scss';

const Main = () => {
  const [textIn, setTextIn] = useState([]);
  const [commentBox, setCommentBox] = useState('');

  return (
    <div id="wrap">
      <nav className="nav">
        <div className="nav_left">
          <h1>Westagram</h1>
        </div>
        {/* { nav_left} */}
        <div className="nav_center">
          <input type="text" placeholder="검색" className="navSearch" />
        </div>
        {/* {nav_center} */}
        <div className="nav_right">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="search"
            className="navImg"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="heart"
            className="navImg"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="mypage"
            className="navImg"
          />
        </div>
        {/* {nav_right} */}
      </nav>

      <section id="main">
        <div className="feeds">
          <article className="feed_in">
            <div className="profile">
              <img
                src="/images/hyerim/profile2.jpg"
                alt="profile"
                className="profileImg"
              />
              <p className="profileName">w_oo_o_</p>
              <i className="fa-solid fa-ellipsis" />
            </div>
            {/* {profile} */}
            <div className="feed_img">
              <img
                src="/images/hyerim/feed.jpg"
                alt="feed"
                className="feedImg"
              />
            </div>
            {/* {feed_img} */}

            <div className="feed_icon">
              <div className="icon_l">
                <svg
                  aria-label="좋아요"
                  className="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                </svg>
                <svg
                  aria-label="댓글 달기"
                  className="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
                <svg
                  aria-label="게시물 공유"
                  className="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="22"
                    x2="9.218"
                    y1="3"
                    y2="10.083"
                  />
                  <polygon
                    fill="none"
                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <svg
                aria-label="저장"
                className="_ab6-"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
            {/* {feed_icon} */}

            <div className="feed_like">
              <div className="like_who">
                <img
                  src="/images/hyerim/gong.jpg"
                  alt="img"
                  className="likeWhoImg"
                />
                <p>
                  <span className="name">gongyoo</span>님 외 10명이 좋아합니다
                </p>
              </div>
              {/* { like_who} */}
              <div className="like_me">
                <p>
                  <span className="name">w_oo_o_</span> #행궁동 #EEEm
                </p>
              </div>

              {/* {like_me} */}
              <ul className="comment_add">
                <li>
                  <span className="name">wecode</span>맛있겠다!
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Emoji_u2665.svg/768px-Emoji_u2665.svg.png"
                    className="commentHeart"
                  ></img>
                </li>
                {textIn.map(ele => {
                  return <Comment text={ele} />;
                })}

                {/* {textIn.map(function (a, i) {
                  return (
                    <>
                      <li>
                        <span className="name">wecode</span>
                        {textIn[i]}
                      </li>
                    </>
                  );
                })} */}
              </ul>
              {/* {comment_add} */}
              <div className="feed_time">30분 전</div>
              {/* {comment_add} */}
            </div>
            {/* {feed_like} */}
            <div className="feed_comment">
              <form
                className="comment_box"
                onSubmit={e => {
                  e.preventDefault();
                  let copy = [...textIn];
                  copy.push(commentBox);
                  setTextIn(copy);
                  e.target.reset();
                }}
              >
                <div>
                  <input
                    type="text"
                    className="comment_in"
                    placeholder="댓글 달기..."
                    onChange={e => {
                      setCommentBox(e.target.value);
                    }}
                  />
                </div>
                <button className="btn">게시</button>
              </form>
            </div>
            {/* {feed_comment} */}
          </article>
          {/* {feed_in} */}
        </div>
        {/* {feeds} */}

        <div className="main-right">
          <div className="right_profile">
            <img
              src="/images/hyerim/profile2.jpg"
              alt="profile"
              className="rightProfileImg"
            />
            <p>
              w_oo_o_
              <br />
              <span className="profile_name">Hyerim</span>
            </p>
          </div>
          {/* {right_profile} */}
          <div className="right_story">
            <p className="title">
              스토리
              <span className="more">
                <a href="#">모두 보기</a>
              </span>
            </p>
            <ul className="story_list">
              <li className="storyList">
                <img
                  src="/images/hyerim/profile.jpg"
                  alt="profile1"
                  className="listImg"
                />
                <p className="listName">
                  _yum_s
                  <br />
                  <span className="listTime">16분 전</span>
                </p>
              </li>
              <li className="storyList">
                <img
                  src="/images/hyerim/story1.jpg"
                  alt="profile1"
                  className="listImg"
                />
                <p className="listName">
                  mozzi_sson
                  <br />
                  <span className="listTime">3시간 전</span>
                </p>
              </li>
              <li className="storyList">
                <img
                  src="/images/hyerim/story2.jpg"
                  alt="profile1"
                  className="listImg"
                />
                <p className="listName">
                  jjung_irang
                  <br />
                  <span className="listTime">20시간 전</span>
                </p>
              </li>
              <li className="storyList">
                <img
                  src="/images/hyerim/profile.jpg"
                  alt="profile1"
                  className="listImg"
                />
                <p className="listName">
                  woooo
                  <br />
                  <span className="listTime">하루 전</span>
                </p>
              </li>
            </ul>
          </div>
          {/* { right_story} */}
          <div className="right_recommend">
            <p className="title">
              회원님을 위한 추천
              <span className="more">
                <a href="#">모두 보기</a>
              </span>
            </p>
            <div className="recommend_box">
              <p className="re_name">
                <img
                  src="/images/hyerim/recommend.jpg"
                  alt="recommend"
                  className="reImg"
                />
                joaaaaahye
                <br />
                <span className="recommendFollow">
                  _legend_a님 외 2명이 팔로우하고 있습니다.
                </span>
              </p>
              <p className="re_follow">
                <a href="#">팔로우</a>
              </p>
            </div>
            {/* {recommend_box} */}
            <div className="recommend_box">
              <p className="re_name">
                <img
                  src="/images/hyerim/recommend1.jpg"
                  alt="recommend"
                  className="reImg"
                />
                sonane_cake
                <br />
                <span className="recommendFollow">
                  jjung_irang님 외 12명이 팔로우하고 있습니다.
                </span>
              </p>
              <p className="re_follow">
                <a href="#">팔로우</a>
              </p>
            </div>
            {/* {recommend_box} */}
            <div className="recommend_box">
              <p className="re_name">
                <img
                  src="/images/hyerim/gong.jpg"
                  alt="recommend"
                  className="reImg"
                />
                gongyoo
                <br />
                <span className="recommendFollow">
                  mozzi_sson님 외 5명이 팔로우하고 있습니다.
                </span>
              </p>
              <p className="re_follow">
                <a href="#">팔로우</a>
              </p>
            </div>
            {/* {recommend_box} */}
          </div>
          {/* right_recommend*/}

          <footer>
            <div className="main_footer">
              <ul className="footBox">
                {FOOT_DATA.map((ele, idx) => {
                  return <li key={idx}>{ele.text}</li>;
                })}
              </ul>
            </div>
          </footer>

          <p className="foot_copy">&copy; 2022 INSTAGRAM FROM META</p>
          <Link to="/Login-hyerim">뒤로가기</Link>
        </div>
        {/* main-right */}
      </section>
    </div>
  );
};

const FOOT_DATA = [
  { id: 1, text: '소개 .' },
  { id: 2, text: '도움말 .' },
  { id: 3, text: '홍보 센터 .' },
  { id: 4, text: 'API .' },
  { id: 5, text: '채용 정보 .' },
  { id: 6, text: '약관 .' },
  { id: 7, text: '위치 .' },
  { id: 8, text: '언어 .' },
];

const Comment = props => {
  // const { textIn } = props;

  return (
    <li>
      <span className="name">wecode</span>
      {props.text}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Emoji_u2665.svg/768px-Emoji_u2665.svg.png"
        className="commentHeart"
      ></img>
    </li>
  );
};

export default Main;
