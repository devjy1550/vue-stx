import {
  createStore
} from "vuex";
import stxStore from './Modules/stxStore'

export default createStore({
  // state: {
  //   gnbData: [{
  //     mainLink: '#',
  //     mainTitle: '회사소개',
  //     subData: [{
  //         subLink: '#',
  //         subTitle: '인사말'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: 'STX건설'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '기업문화'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: 'STX건설연혁'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '조직안내'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '윤리경영'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '안전·환경·품질경영'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '찾아오시는길'
  //       },
  //     ]
  //   }, {
  //     mainLink: '#',
  //     mainTitle: '사업분야',
  //     subData: [{
  //         subLink: '#',
  //         subTitle: '건축사업'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '주택사업'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '토목사업'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '플랜트/공작기계사업'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '해외사업'
  //       },
  //     ]

  //   }, {
  //     mainLink: '#',
  //     mainTitle: '사회공헌',
  //     subData: [{
  //         subLink: '#',
  //         subTitle: '나눔의생각'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '주요활동분야'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '활동현황'
  //       },
  //     ]
  //   }, {
  //     mainLink: '#',
  //     mainTitle: '홍보센터',
  //     subData: [{
  //         subLink: '#',
  //         subTitle: '홍보동영상'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '홍보브로슈어'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: 'STX건설뉴스'
  //       },
  //     ]
  //   }, {
  //     mainLink: '#',
  //     mainTitle: '고객지원',
  //     subData: [{
  //         subLink: '#',
  //         subTitle: '자주묻는질문'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '고객문의'
  //       },
  //     ]
  //   }, {
  //     mainLink: '#',
  //     mainTitle: '채용정보',
  //     subData: [{
  //         subLink: '#',
  //         subTitle: '채용안내'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '채용공고'
  //       },
  //       {
  //         subLink: '#',
  //         subTitle: '채용FAQ'
  //       },
  //     ]
  //   }],
  //   noticeData: [
  //     {
  //       url: 'a.html',
  //       title: '에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)'
  //     },
  //     {
  //       url: 'b.html',
  //       title: '에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)'
  //     },
  //     {
  //       url: 'c.html',
  //       title: '2021년도 협력업체 모집공고'
  //     },
  //     {
  //       url: 'd.html',
  //       title: 'STX건설 상호 사용 관련 안내'
  //     }
  //   ],
  //   newsData: [{
  //       url: 'k.html',
  //       title: 'STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’'
  //     },
  //     {
  //       url: 'i.html',
  //       title: 'STX건설, 2018년 성장 청신호'
  //     }
  //   ]
  // },
  // actions: {},
  // mutations: {},
  // getters: {}
  modules: {
    stxStore
  }
});