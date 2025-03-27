function fnLimiter(limit,fn){
    let count = 0;
    return ()=>{
        if(count < limit){
            count++;
             fn();
        }
    }
}

let limiter = fnLimiter(5,()=>{
    console.log("hello");
})

limiter()
limiter()
limiter()
limiter()
limiter()
limiter() //ignored