console.log('I am here');

// alert('Ammu is coming')
const ammuComing = () => {
    alert('ammu coming')
}

const askPicnic = () => {
    const response = confirm('are you going to picnic?');
    console.log(response)
    if (response === true) {
        alert('fee bkash koro')
    }
    else {
        console.log('tata')
    }
};

const askName = () => {
    const name = prompt('What is your name?')
    if (name) {
        console.log(name)
    }
    else {
        console.log('sorry')
    }
}


const url = document.getElementById("anchor");
const path = url.pathname;
console.log(path)