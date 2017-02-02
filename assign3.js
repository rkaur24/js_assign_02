function arrSum(arrayPass)
{
    for(let i =0; i<arrayPass.length; i++)
    {
        arrayPass[i] =arrayPass[i]+2;
    }
    
    return arrayPass;
}

let arrayOrg = [2,5,8,4,9]

let arrayAfterAdd = arrSum(arrayOrg);
console.log(arrayAfterAdd);