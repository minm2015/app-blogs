<template>
  <div class="nav-fixed">
    <nav class="am-g am-g-fixed blog-fixed blog-nav">
        <div class="am-collapse am-topbar-collapse" id="blog-collapse">
            <ul class="am-nav am-nav-pills am-topbar-nav" style="width:60%">
                <li><a href="#/home">首页</a></li>
                <li><a href="#/article">文章</a></li>
                <li><a href="#/timeline">存档</a></li>
            </ul>
            <ul class="am-nav am-nav-pills am-topbar-nav" style="float: right">
              <li class="s-li"><a href="#">简体</a></li>
              <li class="s-li"><a href="#">EN</a></li>
              <li><a style="cursor: pointer; padding-right:11px" data-am-modal="{target: '#my-actions'}"><i class="am-icon-search"></i></a></li>
            </ul>
        </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'app-nav',
  mounted () {
    window.scroll(0, 0) // 页面滚动到头条
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>
