<template>
  <div>
    <!-- 无head 消息提醒窗口 -->
    <div class="am-modal am-modal-alert am-my-alert" tabindex="-1" id="alert-not-head-message">
        <div class="am-modal-dialog">
            <div class="am-modal-bd">
            {{message}}
            </div>
            <div class="am-modal-footer">
            <span class="am-modal-btn">确定</span>
            </div>
        </div>
    </div>
    <!-- 含head 消息提醒窗口 -->
    <div class="am-modal am-modal-alert am-my-alert" tabindex="-1" id="alert-head-message">
        <div class="am-modal-dialog">
            <div class="am-modal-hd">{{head}}</div>
            <div class="am-modal-bd">{{message}}</div>
            <div class="am-modal-footer">
              <span class="am-modal-btn">确定</span>
            </div>
        </div>
    </div>
    <!-- 无head 确认窗口-->
    <div class="am-modal am-modal-confirm am-my-alert" tabindex="-1" id="my-confirm">
        <div class="am-modal-dialog">
            <div class="am-modal-bd">{{message}}</div>
            <div class="am-modal-footer">
              <span class="am-modal-btn" data-am-modal-cancel>取消</span>
              <span class="am-modal-btn" data-am-modal-confirm>确定</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-alert',
  methods: {
    alert: function (message) {
      const $modal = $('#alert-not-head-message')
      this.message = message
      $modal.modal('open')
    },
    alert2: function (head, message) {
      const $modal = $('#alert-head-message')
      this.head = head
      this.message = message
      $modal.modal('open')
    },
    confirm: function (message, call1, call2) { // call1:点击确定后执行的回调函数。 call2： 点击取消后执行的回调函数
      const $modal = $('#my-confirm')
      this.message = message
      $modal.modal({closeViaDimmer: false, onConfirm: call1, onCancel: call2})
    }
  },
  data () {
    return {
      message: 'hell',
      head: '标题'
    }
  }
}
</script>
