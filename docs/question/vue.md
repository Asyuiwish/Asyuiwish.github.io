# Vue
## 用v-for渲染swiper-slide数据缺失/loop失效
>当进行v-for渲染时，同时进行着swiper的初始化，此时列表还没有渲染完，而初始化已经完成，导致数据渲染不完全。  

>loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。loop模式在与free模式同用时会产生抖动，因为free模式下没有复制slide的时间点。  

解决办法：
``` javascript
// 把初始化写入一个方法中，等待数据完成渲染后进行调用
  // methods
  temporary () {
    // 访问接口数据
    axios.get('....',{params:{....}}).then((res)=>{
      // 访问成功后进行逻辑处理
      _this.$nextTick(()=>{
         // 进行初始化 延迟执行，确保数据已经渲染完成
         _this.initSwiper()
      })
	})
  }
  initSwiper(){
   // 初始化 swiper
     if (this.swiper!=''){return}
     this.swiper = new swiper({
		loop: true,
		observer: true //修改swiper自己或子元素时，自动初始化swiper
	 })
  }
```