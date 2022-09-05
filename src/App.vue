<template>
  <!-- 안내창 -->
  <!-- <div class="modal-wrap" v-if="showModal">  -->
  <!-- if문은 html을 생성도 하고 삭제도 함 -->
  <!-- Element부분을 확인하면 modal부분이 주석처리가 되어있는 것을 확인할수있음 -->
  <!-- 즉, display:none의 개념보다 더 큰 개념이기때문에 자주없앴다생겼다 하는 부분은 이걸로 하는걸 추천하지않음 -->

  <!-- 그럴때는 show를 추천함 -->
  <div>
    <Modal />


    <!-- 메인 -->
    <div class="wrap">
      <!-- 상단 -->
      <!-- <Header :gnbdata="gnbData" /> -->
      <Header />
      <!-- 비주얼 -->
      <Visual />
      <!-- 업무파트 -->
      <Part />
      <!-- 새소식 -->
      <News :ntcdata="noticeData" :nwsdata="newsData" />
      <!-- 고객센터 -->
      <Cs />
      <!-- 소개 -->
      <About />
      <!-- 하단  -->
      <Footer />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/HeaderView.vue'
  import Visual from '@/components/VisualView.vue'
  import Part from '@/components/PartView.vue'
  import News from '@/components/NewsView.vue'
  import Cs from '@/components/CsView.vue'
  import About from '@/components/AboutView.vue'
  import Footer from '@/components/FooterView.vue'
  import Modal from '@/components/ModalPop.vue'
  export default {

    name: 'App',
    components: {
      Header,
      Visual,
      Part,
      News,
      Cs,
      About,
      Footer,
      Modal
    },

    setup() {
      /*
      const gnbData = [{
        mainLink: '#',
        mainTitle: '회사소개',
        subData: [{
            subLink: '#',
            subTitle: '인사말'
          },
          {
            subLink: '#',
            subTitle: 'STX건설'
          },
          {
            subLink: '#',
            subTitle: '기업문화'
          },
          {
            subLink: '#',
            subTitle: 'STX건설연혁'
          },
          {
            subLink: '#',
            subTitle: '조직안내'
          },
          {
            subLink: '#',
            subTitle: '윤리경영'
          },
          {
            subLink: '#',
            subTitle: '안전·환경·품질경영'
          },
          {
            subLink: '#',
            subTitle: '찾아오시는길'
          },
        ]
      }, {
        mainLink: '#',
        mainTitle: '사업분야',
        subData: [{
            subLink: '#',
            subTitle: '건축사업'
          },
          {
            subLink: '#',
            subTitle: '주택사업'
          },
          {
            subLink: '#',
            subTitle: '토목사업'
          },
          {
            subLink: '#',
            subTitle: '플랜트/공작기계사업'
          },
          {
            subLink: '#',
            subTitle: '해외사업'
          },
        ]

      }, {
        mainLink: '#',
        mainTitle: '사회공헌',
        subData: [{
            subLink: '#',
            subTitle: '나눔의생각'
          },
          {
            subLink: '#',
            subTitle: '주요활동분야'
          },
          {
            subLink: '#',
            subTitle: '활동현황'
          },
        ]
      }, {
        mainLink: '#',
        mainTitle: '홍보센터',
        subData: [{
            subLink: '#',
            subTitle: '홍보동영상'
          },
          {
            subLink: '#',
            subTitle: '홍보브로슈어'
          },
          {
            subLink: '#',
            subTitle: 'STX건설뉴스'
          },
        ]
      }, {
        mainLink: '#',
        mainTitle: '고객지원',
        subData: [{
            subLink: '#',
            subTitle: '자주묻는질문'
          },
          {
            subLink: '#',
            subTitle: '고객문의'
          },
        ]
      }, {
        mainLink: '#',
        mainTitle: '채용정보',
        subData: [{
            subLink: '#',
            subTitle: '채용안내'
          },
          {
            subLink: '#',
            subTitle: '채용공고'
          },
          {
            subLink: '#',
            subTitle: '채용FAQ'
          },
        ]
      } ];

      const noticeData = [{
          url: 'a.html',
          title: '에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)'
        },
        {
          url: 'b.html',
          title: '에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)'
        },
        {
          url: 'c.html',
          title: '2021년도 협력업체 모집공고'
        },
        {
          url: 'd.html',
          title: 'STX건설 상호 사용 관련 안내'
        }
      ];
      const newsData = [{
          url: 'k.html',
          title: 'STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’'
        },
        {
          url: 'i.html',
          title: 'STX건설, 2018년 성장 청신호'
        }
      ];
*/
      return {
        // noticeData,
        // newsData,
        // showModal,
        // closeModal,
        // showMessage
        Modal,
        // gnbData
      }
    }

  }
</script>

<style>
  @charset "utf-8";
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Noto Sans KR', Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: -0.64px;
    color: #444;
  }

  /* 공통요소 */
  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    max-width: 1200px;
    margin: 0 auto;
  }


  .wrap {
    padding-top: 80px;
  }

  /* 내용별 Section */
</style>