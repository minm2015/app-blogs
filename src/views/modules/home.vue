<template>
    <div class="app-body">
      <app-loader/>
      <app-alert ref="alert"/>
      <!-- banner start -->
      <div class="am-g am-g-fixed blog-fixed am-u-sm-centered blog-article-margin">
          <div  class="am-slider am-slider-b1">
          <ul class="am-slides">
          <li>
              <img src="@/assets/i/b1.jpg">
              <div class="blog-slider-desc am-slider-desc ">
              <div class="blog-text-center blog-slider-con">
                  <span><a href="javascript:void(0)" class="blog-color" @click="test">Article &nbsp;</a></span>
                  <h1 class="blog-h-margin"><a href="">总在思考一句积极的话</a></h1>
                  <p>那时候刚好下着雨，柏油路面湿冷冷的，还闪烁着青、黄、红颜色的灯火。
                  </p>
                  <span class="blog-bor">2015/10/9</span>
                  <br><br><br><br><br><br><br>
              </div>
              </div>
          </li>
          <li>
              <img src="@/assets/i/b3.jpg">
              <div class="am-slider-desc blog-slider-desc">
              <div class="blog-text-center blog-slider-con">
                  <span><a href="javascript:void(0)" class="blog-color" @click="test">Article &nbsp;</a></span>
                  <h1 class="blog-h-margin"><a href="">总在思考一句积极的话</a></h1>
                  <p>那时候刚好下着雨，柏油路面湿冷冷的，还闪烁着青、黄、红颜色的灯火。
                  </p>
                  <span>2015/10/9</span>
              </div>
              </div>
          </li>
          </ul>
          </div>
      </div>
      <!-- banner end -->
      <!-- content srart -->
      <div class="am-g am-g-fixed blog-fixed">
          <article-list/>
          <intro/>
      </div>
      <!-- content end -->
    </div>
</template>
<script>
import AppLoader from '@/components/loader'
import AppAlert from '@/components/alert'
import articleList from './article_list'
import intro from './intro'
export default {
  name: 'home',
  mounted () {
    $('.am-slider').flexslider()// load banner
  },
  components: {
    AppLoader, AppAlert, articleList, intro
  },
  methods: {
    test: function () {
      this.$refs.alert.alert('aaa')
    }
  },
  data () {
    return {
    }
  }
}
</script>
