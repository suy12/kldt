<template>
	<div >
		<!--分数-->
		<div class="my_score_container">
			<p class="my_score">
				<!--绑定总分数-->
				<!--解析页面-->
				<span class="fenshu">{{score}}</span>
				<span class="fenshu">分!</span>
			</p>
			<!--设置提示信息-->
			<p class="pingjia">{{tips}}</p>
		</div>
		<!--分享按钮-->
		<div class="share" @click="isshow=true"></div>
		<!--遮罩层-->
		<!--v-show是否显示遮罩层-->
		<div class="mask" v-show="isshow" @click="isshow=false" >
			<img src="../assets/5-2.png" class="share_img" />
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				isshow:false,
				myAnsers:this.$store.state.myAnsers,
				rightAnswers:this.$store.state.rightAnswers,
				score:0,
				tips:""
			}
		},
		created:function(){
			for(var i=0; i<this.myAnsers.length;i++){
				//判断分数
				if (this.myAnsers[i]==this.rightAnswers[i]) {
					this.score+=20;
				}
			}
			if (this.score==0) {
				this.tips="你太笨"
			}else if (this.score==20) {
				this.tips="你不咋地"
			} else if (this.score==40) {
				this.tips="你不行"
			}else if (this.score==60) {
				this.tips="你行"
			}else if(this.score==80){
				this.tips="你棒"
			}else{
				this.tips="你很聪明，脑袋瓜可以赶上图灵了"
			}
		}
	}
</script>

<style lang="less">
	/*重写body演示,换一张背景图*/
	body{
		background: url(../assets/4-1.jpg) no-repeat;
		background-size: 100% 100%;
	}
	/*分数开始*/
	.my_score_container{
		background: url(../assets/4-2.png) no-repeat;
		background-size: 100% 100%;
	    width: 10rem;
	    height: 8rem;
	    position: absolute;
	    top: 6rem;
	    left: 50%;
	    margin-left: -5rem;
	    .my_score{
	    	    text-align: center;
			    position: absolute;
			    top: 4rem;
			    width: 9rem;
			    margin-left: 0.65rem;
	    	.fenshu{
	    		color: red;
	    		font-weight: bold;
	    	}
	    }
	    .pingjia{
	    	color: palevioletred;
		    font-size: 0.7rem;
		    position: absolute;
		    top: 5.5rem;
		    text-align: center;
		    margin-left: 0.8rem;
	    }
	}
	/*分数结束*/
	
	/*分享按钮*/
	.share{
		background: url(../assets/4-3.png) no-repeat;
		    background-size: 100% 100%;
		    width: 6rem;
		    height: 3rem;
		    position: absolute;
		    top: 15rem;
		    left: 50%;
		    margin-left: -3rem;
	}

	/*遮罩层*/
	.mask{
		background: url(../assets/5-1.png) no-repeat;
		background-size: 100% 100%;
	    width: 100%;
	    height: 100%;
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    opacity: 0.8;
	    .share_img{
	    	width: 12rem;
		    height: 10rem;
		    position: absolute;
		    top: 0.3rem;
		    left: 50%;
		    margin-left: -6rem;
	    }
	}
</style>