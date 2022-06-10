import React from 'react';
import { Link } from "react-router-dom";
import './main.scss';

const Main = () => {
  return (
    <div id="wrap">
      <nav className="nav">
        <div className="nav_left">
          <i className="fa-brands fa-instagram logo_icon" />
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
                src="/images/profile2.jpg"
                alt="profile"
                className="profileImg"
              />
              <p className="profileName">w_oo_o_</p>
              <i className="fa-solid fa-ellipsis" />
            </div>
            {/* {profile} */}

            <div className="feed_img">
              <img src="/images/feed.jpg" alt="feed" className="feedImg" />
            </div>
            {/* {feed_img} */}

            <div className="feed_icon">
              <div className="icon_l">
                <i className="fa-solid fa-heart heart" />
                <i className="fa-regular fa-comment comment" />
                <i className="fa-solid fa-arrow-up-from-bracket arrow"></i>
              </div>
              <i className="fa-regular fa-bookmark bookmark" />
            </div>
            {/* {feed_icon} */}

            <div className="feed_like">
              <div className="like_who">
                <img src="/images/gong.jpg" alt="img" className="likeWhoImg" />
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
              <div className="comment_add">
                <div className="comment_addBoxtitle">
                  <p>
                    <span className="name">wecode</span>맛있겠다!
                  </p>
                  <i className="fa-regular fa-heart like_heart" />
                </div>
                {/* {comment_addBoxtitle} */}
              </div>
              <div className="feed_time">30분 전</div>
              {/* {comment_add} */}
            </div>
            {/* {feed_like} */}
            <div className="feed_comment">
              <ul className="comment_box">
                <li>
                  <input
                    type="text"
                    className="comment_in"
                    placeholder="댓글 달기..."
                  />
                </li>
              </ul>
              <button type="button" className="btn">
                게시
              </button>
            </div>
            {/* {feed_comment} */}
          </article>
          {/* {feed_in} */}
        </div>
        {/* {feeds} */}

        <div className="main-right">
          <div className="right_profile">
            <img
              src="/images/profile2.jpg"
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
                  src="/images/profile.jpg"
                  alt="profile1"
                  className="listImg"
                />
                <p className="listName">
                  _yum_s
                  <br />
                  <span class="listTime">16분 전</span>
                </p>
              </li>
              <li className="storyList">
                <img
                  src="/images/story1.jpg"
                  alt="profile1"
                  className="listImg"
                />
                <p className="listName">
                  mozzi_sson
                  <br />
                  <span class="listTime">3시간 전</span>
                </p>
              </li>
              <li className="storyList">
                <img
                  src="/images/story2.jpg"
                  alt="profile1"
                  className="listImg"
                />
                <p className="listName">
                  jjung_irang
                  <br />
                  <span class="listTime">20시간 전</span>
                </p>
              </li>
              <li className="storyList">
                <img
                  src="/images/profile.jpg"
                  alt="profile1"
                  className="listImg"
                />
                <p className="listName">
                  woooo
                  <br />
                  <span class="listTime">하루 전</span>
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
                  src="/images/recommend.jpg"
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
                  src="/images/recommend1.jpg"
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
                <img src="/images/gong.jpg" alt="recommend" className="reImg" />
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
                <li>
                  <a href="#">소개 .</a>
                </li>
                <li>
                  <a href="#">도움말 .</a>
                </li>
                <li>
                  <a href="#">홍보 센터 .</a>
                </li>
                <li>
                  <a href="#">API .</a>
                </li>
                <li>
                  <a href="#">채용 정보 .</a>
                </li>
                <li>
                  <a href="#">약관 .</a>
                </li>
                <li>
                  <a href="#">위치 .</a>
                </li>
                <li>
                  <a href="#">언어 .</a>
                </li>
              </ul>
            </div>
            {/* {main_footer} */}
            <p className="foot_copy">&copy; 2022 INSTAGRAM FROM META</p>
            <Link to="/">뒤로가기</Link>
          </footer>
        </div>
        {/* main-right */}
      </section>
    </div>
  );
};

export default Main;
