function loopArray(arrfunc)
{
    arrfunc.forEach((item, index) => 
    {
        console.log(`${index}: ${item}`)
    })
}

let arr = [1,2,3,'dog','cat','owl']
loopArray(arr)
