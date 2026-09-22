/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;
    let sum = 0;
    let ans = [];
    if(k===0){
        for(let i=0;i<n;i++){
            ans[i]=0
        }
    }else if(k>0){
        for(let i=1;i<=k;i++){
            sum+=code[i];
        }
        ans.push(sum)
        for(let i=1;i<n;i++){
            let out = i;
            let inc = (i+k)%n;
            sum = sum+code[inc];
            sum = sum-code[out] 
            ans[i]=sum
        }
    }else{
        let absK = -k;
    for(let i = 1; i <= absK; i++){
        sum += code[(n - i) % n];
    }
    ans.push(sum);

    for(let i = 1; i < n; i++){
        let outgoing = (i - 1 - absK + n) % n;
        let incoming = (i - 1) % n;
        sum = sum + code[incoming];
        sum = sum - code[outgoing];
        ans[i] = sum;
    }
    }
    return ans;
};