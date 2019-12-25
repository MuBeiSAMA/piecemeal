<template>
  <div :style="{height:height+'px'}" class="box fc">
    <div class="fc search_box">
      <h2>easy search!</h2>
      <input  class="input_box" type="text" @keyup="get($event)" v-model="wd" @keydown.down="next" @keydown.up.prevent="last">
      <ul class="list" type='none'>
        <li class="list_item" v-for="(a,idx) in tipList" :key="idx" @click="choose(idx)" :class="{bg:now === idx}">{{a}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wd: "",
      tipList: [],
      now: -1,
      height: null
    };
  },
  created() {
    this.height = window.innerHeight;   //窗口显示区高度
  },
  methods: {
    get(e) {
      if (e.keyCode == 38 || e.keyCode == 40) return; //上下箭头

      if (e.keyCode == 13) {
        //Enter
        window.open("https://wwww.baidu.com/s?wd=" + this.wd);
        this.wd = "";
        this.now = -1;
        return;
      }
      this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", {
          //跨域请求数据
          params: { wd: this.wd }, //输入的关键词
          jsonp: "cb" //这里是callback
        }).then(
          res => {
            //请求成功回调，请求来的数据赋给searchList数组
            // this.searchList = res.body.s;
            this.tipList = res.body.s;
          },
          err => {
            //失败显示状态码
            alert(err.status);
          }
        );
    },
    choose(index) {
      this.wd = this.tipList[index];
      window.open("https://wwww.baidu.com/s?wd=" + this.wd);
      this.now = -1;
      this.wd = "";
    },
    next() {
      this.now++;
      if (this.now >= this.tipList.length) {
        this.now = 0;
      }
      this.wd = this.tipList[this.now];
    },
    last() {
      this.now--;
      if (this.now < -1) {
        this.now = this.tipList.length - 1;
      }
      this.wd = this.tipList[this.now];
    }
  }
};
</script>


<style scoped>
.fc {
  display: flex;
  flex-direction: column;
}
.box {
  width: 100%;
  height: 600px;
  align-items: center;
  background: url("./../assets/img/598a7e6eda231.jpg");
  /* transition: all .5s ease; */
  animation: bgChange 50s ease 2s infinite;
  animation-fill-mode: forwards;
  transform: translate3d(0,0,0);
}
.bg {
  background: #999;
}
.list {
  background: #fff;
  cursor: pointer;
  border-radius: 20px;
  width: 100%;
  box-shadow:  0px 0px 5px #000;
}
.list_item{
  padding: 10px 15px;
}
.list_item:hover {
  color: rgb(0, 132, 255);
}
@keyframes bgChange {
  0%{
    background: url("./../assets/img/598a7e6eda231.jpg");
  }
  25% {
    background: url("./../assets/img/598a7eaa38656.jpg");
  }
  50% {
    background: url("./../assets/img/598a7eb184f9f.jpg");
  }
  75% {
    background: url("./../assets/img/5780744b1335f.jpg");
  }
  100% {
    background: url("./../assets/img/57807418f0b65.jpg");
  }
}
.input_box {
  width: 400px;
  height: 40px;
  border-radius: 20px;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 0 20px;
  box-shadow:  0px 0px 5px #000;
}
.search_box{
  margin-top: 200px;
  align-items: center;
}
.search_box h2{
  color: #fff;
  margin-bottom: 10px;
  text-shadow:  0px 0px 5px #000;
  /* font-style: italic; */
}
</style>
