let score = JSON.parse(localStorage.getItem('score'))

        if(!score){
            score={
                wins:0,
                losses:0,
                ties:0
            }
        }

        updateScoreEle();
       
     //  document.querySelector('.js-result').innerHTML = result;
       // console.log();

        // code for player  move;

        function playGame(playerMove){
            const computerMove = pickComputetMove();
            console.log(computerMove);

            let result = '';

            if(playerMove === 'scissors'){
                if(computerMove === 'scissors'){
                result = 'Tie';
                }else if(computerMove==='paper'){
                    result = 'You win';
                }else if(computerMove==='rock'){
                    result = 'You loss';
                }

            }else if(playerMove === 'paper'){
                if(computerMove === 'rock'){
                result = 'You win';
                }else if(computerMove==='paper'){
                    result = 'Tie';
                }else if(computerMove==='scissors'){
                    result = 'You loss';
                }

            }else if(playerMove === 'rock'){
                if(computerMove === 'rock'){
                result = 'Tie';
                }else if(computerMove==='paper'){
                    result = 'You loss';
                }else if(computerMove==='scissors'){
                    result = 'You win';
                }
            }
           
            if(result === 'You win'){
                  score.wins += 1;
            }else if(result === 'You loss'){
                score.losses += 1;

            }else if(result === 'Tie'){
                   score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreEle();

            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `You
        <img  src="${playerMove}-emoji.png" class="move-icon">
        <img  src="${computerMove}-emoji.png" class="move-icon"> computer`;

            
        }


        function updateScoreEle(){
            document.querySelector('.js-score')
            .innerHTML = `Wins:${score.wins},  Losses: ${score.losses},  Ties: ${score.ties}`;
        }
         
        // this function give the computer move
        function pickComputetMove(){
            const randomNum = Math.random();
            let computerMove = '';
            if(randomNum >= 0 && randomNum < 1/3){
                    computerMove = 'rock';
            }
            else if(randomNum >= 1/3 && randomNum < 2/3){
                computerMove = 'paper';
            }else{
                computerMove = 'scissors';
            }
            
           return computerMove;
        }