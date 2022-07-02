import router from "./router";

const isLogin=true

router.beforeEach(async (to,from,next)=>{
    if(isLogin){
        next()
    }else{
        return {name:'Login'}
    }
})