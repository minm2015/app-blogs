<template>
    <div class="am-modal-actions  am-g sou am-modal-active" id="my-actions" style="display: none;">
        <form class="am-form-inline" role="form" action="http://www.oncewy.com/index.php" method="get" target="_blank">
            <input type="hidden" name="m" value="search">
            <input type="hidden" name="c" value="index">
            <input type="hidden" name="a" value="init">
            <input type="hidden" name="typeid" value="" id="typeid">
            <input type="hidden" name="siteid" value="1" id="siteid">
            <div class="am-u-sm-7" style="padding-right:0px">
            <input type="text" class="am-form-field" name="q" id="q" placeholder="请输入关键词点击搜索">
            </div>
            <div class="am-u-sm-3" style="padding:0px">
            <button type="submit" class="am-btn am-btn-default" style="width: 100%;">搜索</button>
            </div>
            <div class="am-u-sm-2" style="padding:0px">
            <button type="submit" class="am-btn am-btn-default" style="background:none; border:none; color:#C1C1C1" data-am-modal-close=""><i class="am-icon-times"></i></button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: 'app-search',
  mounted () {
    $('#my-actions').on('open.modal.amui', function () {
    })
  }
}
</script>
