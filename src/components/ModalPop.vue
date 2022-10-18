<template>
  <!-- modal -->
  <div class="modal-wrap">
    <div class="modal-content">
      <div class="modal-notice">
        <p>
          해당 컨텐츠는 학습용으로 제작되었으며,<br />
          모든 리소스는 원저작자에게 있음을 밝힙니다.
        </p>
        <span>본 사이트는 Chrome 에 최적화 되어있습니다.</span>
      </div>
      <div class="modal-desc">
        <span>다음과 같은 사항들을 학습, 그리고 개선하였습니다.</span>
        <ul class="modal-comments">
          <li>
            학습 초기에 진행해본 프로젝트로, 전반적인 레이아웃과 구현에 중점을
            두고 작업한 클론코딩입니다.
          </li>
          <li>menu파트에서의 포커스 유지의 중요성과 구현에 대해 학습하였다.</li>
        </ul>
      </div>
      <div class="modal-close">확인</div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      // 안내창 기능
      // 추가기능 : 스크롤바 없애기
      $("html").css("overflow", "hidden");

      let modalWrap = $(".modal-wrap");
      let modalClose = $(".modal-close");
      modalClose.click(function () {
        modalWrap.stop().fadeOut(100);
        // 추가기능 : 스크롤바 살리기
        $("html").css("overflow", "auto");
      });

      let modalMain = $(".modal-main");
      // 내용 배경 클릭
      modalMain.click(function (event) {
        // 클릭 정보 전달 막기
        event.stopPropagation();
      });
      // 전체 배경 클릭
      modalWrap.click(function () {
        modalWrap.stop().fadeOut(100);
        // 추가기능 : 스크롤바 살리기
        $("html").css("overflow", "auto");
      });
    });

    return {};
  },
};
</script>

<style>
/* modal */
.modal-wrap {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #333;
  background: rgba(0, 0, 0, 0.6);
  font-family: "Open Sans", Sans-serif;
  z-index: 999999999999999;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 560px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  border: 4px solid #0c4da2;
}

.modal-content::before {
  content: "";
  position: absolute;
  display: block;
  top: -62px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  background: url("@/assets/images/MYLG.png") no-repeat center;
  background-size: contain;
}

.modal-notice {
  position: relative;
  display: block;
  padding-top: 45px;
  padding-bottom: 20px;
}

.modal-notice p {
  position: relative;
  display: block;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  text-align: center;
}

.modal-notice span {
  position: relative;
  display: block;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 2px;
  font-weight: 400;
  color: rgb(137, 137, 137);
  text-align: center;
}

.modal-desc {
  position: relative;
  display: block;
  width: calc(100% - 40px);
  height: calc(100% - 240px);
  background-color: #d0dfef;
  border-radius: 16px;
  margin: 0 auto;
}

.modal-desc span {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  font-size: 20px;
  line-height: 32px;
  border-radius: 20px 20px 0 0;
  width: 100%;
  color: #d0dfef;
  text-align: center;
  background-color: #0c4da2;
}

.modal-desc .modal-comments {
  position: absolute;
  height: 100px;
  display: block;
  margin-top: 39px;
  margin-left: 9px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 12px;
  letter-spacing: 1.5px;
  line-height: 24px;
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-desc .modal-comments li {
  list-style: square;
}

.modal-close {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: calc(60% - 40px);
  height: 50px;
  border-radius: 20px;
  font-size: 22px;
  line-height: 50px;
  background-color: #444;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
</style>
