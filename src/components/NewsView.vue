<template>
  <section class="news">
    <div class="inner clearfix">
      <!-- {{ntcdata}} -->
      <div class="news-box">
        <h3>공지사항</h3>
        <ul class="news-list">
          <li v-for="(item, index) in ntcdata" v-bind:key="index">
            <!-- {{item}} -->
            <a v-bind:href="item.url"><span>{{item.title}}</span></a>
            <!-- item.url은 {{}}을 붙여주면안됨!!! 까먹지마!!!   -->
          </li>
          <!-- <li><a href="#"><span>에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)</span></a></li> -->
          <!-- <li><a href="#"><span>에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)</span></a></li> -->
          <!-- <li><a href="#"><span>2021년도 협력업체 모집공고</span></a></li> -->
          <!-- <li><a href="#"><span>STX건설 상호 사용 관련 안내</span></a></li> -->
        </ul>
      </div>
      <!-- {{nwsdata}} -->
      <div class="news-box">
        <h3>보도자료</h3>
        <ul class="news-list">
          <li v-for="(item, index) in nwsdata" v-bind:key="index">

            <a :href="item.url"><span>{{item.title}}</span></a>

            <!-- 여기서 url의 경우네는 넣어줘야할부분이 속성에 해당하는부분임. -->
            <!-- 그래서 v-bind를 href앞에 붙여서 그대로 가져온다고 보면됨 -->
            <!-- 그와 다르게 title의 경우에는 글자 그대로를 가져오기때문에 콧수염이용 -->
          </li>
          <!-- <li><a href="#"><span>STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’</span></a></li> -->
          <!-- <li><a href="#"><span>STX건설, 2018년 성장 청신호</span></a></li> -->
        </ul>
      </div>

    </div>
  </section>
</template>

<script>
  import {
    computed
  } from 'vue'
  import {
    useStore
  } from 'vuex';
  export default {
    props: ['ntcdata', 'nwsdata'],
    setup() {
      const store = useStore();
      const noticeData = computed(() => store.state.noticeData)
      const newsData = computed(() => store.state.newsData)
      store.dispatch('fetchNews')
      store.dispatch('fetchNotice')
      return {
        noticeData,
        newsData
      }
    }
  }
</script>

<style>
  /* 새소식 */
  .news {
    position: relative;
  }

  .news::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: #ed1c24;
  }

  .news::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: #58595b;
  }

  .news .inner {
    z-index: 9;
  }

  .news-box {
    width: 50%;
    float: left;
    padding: 55px 0;
  }

  .news-box:first-child {
    padding-right: 110px;
  }

  .news-box:last-child {
    padding-left: 110px;
  }


  .news-box h3 {
    font-size: 32px;
    color: #fff;
    font-weight: 300;
    margin-bottom: 45px;
  }

  .news-list {}

  .news-list li {
    padding: 25px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  }

  .news-list li:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .news-list li a {
    position: relative;
    display: block;
  }

  .news-list li a::after {
    content: '';
    position: absolute;
    right: 0;
    transform: translateX(-50%);
    top: 0;
    width: 48px;
    height: 23px;
    background: url('../assets/images/bg_common.png') no-repeat;
    background-position: 0px -49px;
  }

  .news-list li a span {

    display: inline-block;
    width: 75%;

    color: #fff;
    font-weight: 300;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>