setTimeout(function () { console.log('Hello fetoni') }, 3500);

const inputNumber = () => {
    const getNumber = prompt('Please input a valid number')
    const parseIt = parseInt(getNumber)
    const sum = parseIt + 200;
    alert(sum)
    console.log(getNumber, parseIt, sum)
}
const seeLocation = confirm('DO you want to see location')
if (seeLocation === true) {
    console.log(location.href)
}
else {
    console.log('ok')
}