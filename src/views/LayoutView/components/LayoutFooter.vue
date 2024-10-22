<template>
  <footer class="app_footer">
    <div class="container">
      <dl>
        <dt>客戶服務</dt>
        <dd><span></span>在線客服</dd>
        <dd><span></span>問題反饋</dd>
      </dl>
      <dl>
        <dt>關於我們</dt>
        <dd><span></span>臉書</dd>
        <dd><span></span>微博</dd>
      </dl>
      <dl>
        <dt>下載APP</dt>
        <dd><img src="@/assets/images/qrcode.jpg" alt="小兔鮮"></dd>
        <dd class="load">
          掃描QRcode,下載APP <br>
          <div class="mb-4">
            <el-button type="primary">立即下載</el-button>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>服務熱線</dt>
        <dd><i>400-0000-000</i><br>周一~周日 8:00~18:00</dd>
      </dl>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped lang="scss">
.app_footer {
  background-color: #fff;
  padding-top: 20px;
  .container {
    display: flex;
    justify-content: space-between;
    text-align: center;
    dl {
      height: 190px;
      // background-color: #ccc;
      padding: 0 72px;
      border-right: 1px solid #f2f2f2;
      color: #999;
      &:first-child {
        padding-left: 0;
      }
      &:nth-child(3) {
        .load {
          border: none;
          div {
            padding-top: 10px;
          }
        }
      }
      &:last-child {
          border-right: none;
          padding-right: 0;
          dd {
            width: 180px;
              border: none;
              i {
                font-size: 20px;
              }
          }
      }
      dt {
      
        line-height: 1;
        font-size: 18px;
      }
      dd {
        float: left;
        margin: 36px 10px 0 0;
        width: 90px;
        height: 90px;
        padding-top: 6px;
        border: 1px solid #ededed;
        span {
          display: block;
          width: 90px;
          font-size: 38px;
          font-family: 'icomoon';
        }
      }

    }
  }
}
</style>