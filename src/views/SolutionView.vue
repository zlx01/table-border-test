<template>
  <div class="main-box">
    <table class="table-box before-merge-table-box">
      <thead>
        <tr class="table-header">
          <th class="cell title1-box bbottom">
            <div>账户内容</div>
          </th>
          <th class="cell title2-box bright bbottom">
            <div>当前账户</div>
          </th>
          <th class="cell title3-box bbottom">
            <div>手机所在账户</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="row-box">
          <th class="cell data-col1-box">
            <div>xx号</div>
          </th>
          <td class="cell data-col2-box bright">
            <div>/</div>
          </td>
          <td class="cell data-col3-box">
            <div>/</div>
          </td>
        </tr>
        <tr class="row-box">
          <th class="cell data-col1-box">
            <div>手机</div>
          </th>
          <td class="cell data-col2-box bright">
            <div>/</div>
          </td>
          <td class="cell data-col3-box">
            <div>/</div>
          </td>
        </tr>
        <tr class="row-box">
          <th class="cell data-col1-box bbottom">
            <div>微信</div>
          </th>
          <td class="cell data-col2-box bright bbottom">
            <div>/</div>
          </td>
          <td class="cell data-col3-box bbottom">
            <div>/</div>
          </td>
        </tr>
        <tr class="row-box">
          <th class="cell data-col1-box">
            <div>xxxx</div>
          </th>
          <td class="cell data-col2-box bright">
            <div>/</div>
          </td>
          <td class="cell data-col3-box">
            <div>/</div>
          </td>
        </tr>
        <tr class="row-box">
          <th class="cell data-col1-box">
            <div>积分</div>
          </th>
          <td class="cell data-col2-box bright">
            <div>/</div>
          </td>
          <td class="cell data-col3-box">
            <div>/</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.main-box {
  background: #1c1c1c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.table-box {
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 6px;
  width: calc(100% - 30px);
  transform: translateX(-1px);
  overflow: hidden;

  th,
  td {
    vertical-align: middle;
  }
}

.before-merge-table-box {
  background-color: rgba(254, 254, 254, 0.4);
  overflow: hidden;
  border-collapse: collapse;
  //border-spacing: 0;

  $firstColWidth: 27.68%;
  $secondColWidth: 36.16%;
  $thirdColWidth: 36.16%;

  .cell {
    padding: 0;
    font-weight: 400;
    word-break: break-all;
  }

  .bbottom {
    position: relative;
    &::after {
      display: block;
      content: "";
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      box-sizing: border-box;
      transform: scaleY(0.5);
      transform-origin: 0 0;
      border-bottom: 1px solid red;
    }
  }

  .bright {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      box-sizing: border-box;
      transform: scaleX(0.5);
      transform-origin: 0 100%;
      border-right: 1px solid green;
    }
  }

  .table-header {
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(254, 254, 254, 0.4);
    height: 41px;
    font-family: "PingFang SC";

    .title1-box {
      width: $firstColWidth;
      color: rgba(254, 254, 254, 0.6);
    }

    .title2-box {
      width: $secondColWidth;
    }

    .title3-box {
      width: $thirdColWidth;
    }
  }

  .row-box {
    font-size: 14px;
    text-align: center;
    color: rgba(254, 254, 254, 0.6);
    height: 40px;
    font-family: "PingFang SC";
    font-weight: 400;
    line-height: 21px;

    .data-col1-box {
      width: $firstColWidth;
      background-color: rgba(254, 254, 254, 0.04);
    }

    .data-col2-box {
      width: $secondColWidth;
    }

    .title3-box {
      width: $thirdColWidth;
    }
  }
}
</style>
