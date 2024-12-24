const obj = {
    name: 'abis',
    st: 'asdsa',
    sds: '2121'
}
let result = 'Datos de nuevo usuario:\n'

for (const key in obj) {
    result += `${key}: ${obj[key]} \n`
    
}