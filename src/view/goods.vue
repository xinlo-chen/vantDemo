<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item>
        <img
          src="//img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="//img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
          alt=""
        />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="title">{{ "美国伽力果（约680g/3个）" }}</div>
        <div class="price">{{ "¥26.80" }}</div>
      </van-cell>
      <van-cell class="express">
        <van-col span="10">{{ "运费：免运费" }}</van-col>
        <van-col span="14">{{ "剩余：19" }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="cellGroup">
      <van-cell value="进入店铺" icon="shop-o" is-link>
        <template #title>
          <span>有赞的店</span>
          <van-tag class="tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link />
    </van-cell-group>

    <van-cell-group class="cellGroup">
      <van-cell title="查看商品详情" is-link />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickCart" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickButton"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import {
  Swipe,
  SwipeItem,
  Cell,
  CellGroup,
  Col,
  Tag,
  Icon,
  cellGroup,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
} from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Col.name]: Col,
    [Tag.name]: Tag,
    [Icon.name]: Icon,
    [cellGroup.name]: cellGroup,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
  },
  methods: {
    onClickCart() {
      this.$router.push("cart");
    },
  },
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  .title {
    font-size: 16px;
  }
  .price {
    color: #f44;
  }
  .express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  .cellGroup {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  .tag {
    margin-left: 5px;
  }
}
</style>