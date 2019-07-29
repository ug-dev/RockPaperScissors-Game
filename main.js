var count = [];
var inputs = ['rock', 'paper', 'scissors'];
var counter = 0;
var ug = 0;
var flag = 0;
var user_score = 0;
var cpu_score = 0;
function rockMethod(){
    document.querySelector('#rock').style.cssText = "border: 5px solid #3366ff; background: #111; box-shadow: 0 0 25px #3366ff;";
    document.querySelector('#paper').style.cssText = "border: 5px solid #fff";
    document.querySelector('#scissors').style.cssText = "border: 5px solid #fff"; 
    document.querySelector('#action-message').innerHTML = 'Fight!';
    document.querySelector('.action-message-back').style.cssText = 'background: #fff;';
    flag=1;
    counter = 1;
}

function paperMethod(){
    document.querySelector('#rock').style.cssText = "border: 5px solid #fff";
    document.querySelector('#paper').style.cssText = "border: 5px solid #3366ff; background: #111; box-shadow: 0 0 25px #3366ff;";
    document.querySelector('#scissors').style.cssText = "border: 5px solid #fff";
    document.querySelector('#action-message').innerHTML = 'Fight!'; 
    document.querySelector('.action-message-back').style.cssText = 'background: #fff;';
    flag=2;
    counter = 1;
}

function scissorsMethod(){
    document.querySelector('#rock').style.cssText = "border: 5px solid #fff";
    document.querySelector('#paper').style.cssText = "border: 5px solid #fff";
    document.querySelector('#scissors').style.cssText = "border: 5px solid #3366ff; background: #111; box-shadow: 0 0 25px #3366ff;"; 
    document.querySelector('#action-message').innerHTML = 'Fight!';
    document.querySelector('.action-message-back').style.cssText = 'background: #fff;';
    flag=3;
    counter = 1;
}

function getscore(){
    if(sessionStorage.getItem('cpu_score') === null){
        return false;
    }
    else{
        cpu_score = sessionStorage.getItem('cpu_score');
        user_score = sessionStorage.getItem('player_score');
        document.querySelector('#cpu-score').innerHTML = `${cpu_score}`;
        document.querySelector('#player-score').innerHTML = `${user_score}`;
    }
}

function result(){
    if(ug === 1){
        location.reload(false);
    }
    else{
        if(counter==0){
            return 0;
        }
        else{
            cpuInput = 0;
            var cpuInput = Math.floor(Math.random() * 3);

            //CPU object creating here..
            var imgTag = document.createElement('img');
            var divTag = document.createElement('div');
            imgTag.setAttribute('src' , `image/${inputs[cpuInput]}.png`);
            imgTag.setAttribute('title', `${inputs[cpuInput]}`);
            divTag.setAttribute('id', `cpu${inputs[cpuInput]}`);
            var virtualClass = document.querySelector('.virtual');
    
            divTag.appendChild(imgTag);
            virtualClass.appendChild(divTag);
            divTag.className = 'input';
            
            //Decide who is winner..

            switch(flag){
                case 1:
                    if(cpuInput===0){
                        //Tie..
                        document.querySelector('#rock').style.cssText = 'border: 5px solid gray; box-shadow: 0 0 25px gray;';
                        document.querySelector('#action-message').innerHTML = 'Tie..!';
                        setTimeout(() => {
                            document.querySelector('#action-message').innerHTML = 'Play Again!';
                        }, 1000);
                        document.querySelector(`#cpu${inputs[cpuInput]}`).style.cssText = 'border: 5px solid gray; box-shadow: 0 0 25px gray;';
                        ug = 1;
                        break;
                    }
                    else if(cpuInput===1){
                        //Lose..
                        document.querySelector('#rock').style.cssText = 'border: 5px solid red; box-shadow: 0 0 25px red;';
                        document.querySelector('#action-message').innerHTML = 'Lose..!';
                        setTimeout(() => {
                            document.querySelector('#action-message').innerHTML = 'Play Again!';
                        }, 500);
                        document.querySelector(`#cpu${inputs[cpuInput]}`).style.cssText = 'border: 5px solid green; box-shadow: 0 0 25px green;';
                        cpu_score++;
                        ug = 1;
                        break;
                    }
                    else{
                        //Win..
                        document.querySelector('#rock').style.cssText = 'border: 5px solid green; box-shadow: 0 0 25px green;';
                        document.querySelector('#action-message').innerHTML = 'Win..!';
                        setTimeout(() => {
                            document.querySelector('#action-message').innerHTML = 'Play Again!';
                        }, 1000);
                        document.querySelector(`#cpu${inputs[cpuInput]}`).style.cssText = 'border: 5px solid red; box-shadow: 0 0 25px red;';
                        ug = 1;
                        user_score++;
                        break;
                    }
                    break;

                case 2:
                    if(cpuInput===0){
                        //Win..
                        document.querySelector('#paper').style.cssText = 'border: 5px solid green; box-shadow: 0 0 25px green;';
                        document.querySelector('#action-message').innerHTML = 'Win..!';
                        setTimeout(() => {
                            document.querySelector('#action-message').innerHTML = 'Play Again!';
                        }, 1000);
                        document.querySelector(`#cpu${inputs[cpuInput]}`).style.cssText = 'border: 5px solid red; box-shadow: 0 0 25px red;';
                        ug = 1;
                        user_score++;
                    }
                    else if(cpuInput===1){
                        //Tie..
                        document.querySelector('#paper').style.cssText = 'border: 5px solid gray; box-shadow: 0 0 25px gray;';
                        document.querySelector('#action-message').innerHTML = 'Tie..!';
                        setTimeout(() => {
                            document.querySelector('#action-message').innerHTML = 'Play Again!';
                        }, 1000);
                        document.querySelector(`#cpu${inputs[cpuInput]}`).style.cssText = 'border: 5px solid gray; box-shadow: 0 0 25px gray;';
                        ug = 1;
                    }
                    else{
                        //Lose..
                        document.querySelector('#paper').style.cssText = 'border: 5px solid red; box-shadow: 0 0 25px red;';
                        document.querySelector('#action-message').innerHTML = 'Lose..!';
                        setTimeout(() => {
                            document.querySelector('#action-message').innerHTML = 'Play Again!';
                        }, 1000);
                        document.querySelector(`#cpu${inputs[cpuInput]}`).style.cssText = 'border: 5px solid green; box-shadow: 0 0 25px green;';
                        ug = 1;
                        cpu_score++;
                    }
                    break;

                case 3:
                    if(cpuInput===0){
                        //Lose..
                        document.querySelector('#scissors').style.cssText = 'border: 5px solid red; box-shadow: 0 0 25px red;';
                        document.querySelector('#action-message').innerHTML = 'Lose..!';
                        setTimeout(() => {
                            document.querySelector('#action-message').innerHTML = 'Play Again!';
                        }, 1000);
                        document.querySelector(`#cpu${inputs[cpuInput]}`).style.cssText = 'border: 5px solid green; box-shadow: 0 0 25px green;';
                        ug = 1;
                        cpu_score++;
                    }
                    else if(cpuInput===1){
                        //Win..
                        document.querySelector('#scissors').style.cssText = 'border: 5px solid green; box-shadow: 0 0 25px green;';
                        document.querySelector('#action-message').innerHTML = 'Win..!';
                        setTimeout(() => {
                            document.querySelector('#action-message').innerHTML = 'Play Again!';
                        }, 1000);
                        document.querySelector(`#cpu${inputs[cpuInput]}`).style.cssText = 'border: 5px solid red; box-shadow: 0 0 25px red;';
                        ug = 1;
                        user_score++;
                    }
                    else{
                        //Tie..
                        document.querySelector('#scissors').style.cssText = 'border: 5px solid gray; box-shadow: 0 0 25px gray;';
                        document.querySelector('#action-message').innerHTML = 'Tie..!';
                        setTimeout(() => {
                            document.querySelector('#action-message').innerHTML = 'Play Again!';
                        }, 1000);
                        document.querySelector(`#cpu${inputs[cpuInput]}`).style.cssText = 'border: 5px solid gray; box-shadow: 0 0 25px gray;';
                        ug = 1;
                    }
                    break;

                    default: 
                        console.log('hello');
            }
            
            sessionStorage.setItem('cpu_score', `${cpu_score}`);
            sessionStorage.setItem('player_score', `${user_score}`);
            document.querySelector('#cpu-score').innerHTML = `${cpu_score}`;
            document.querySelector('#player-score').innerHTML = `${user_score}`;
                
            document.querySelector('.virtual').style.cssText = 'opacity: 1;';
            document.querySelector('#rock').removeAttribute('onclick');
            document.querySelector('#paper').removeAttribute('onclick');
            document.querySelector('#scissors').removeAttribute('onclick');
        }
    }
}