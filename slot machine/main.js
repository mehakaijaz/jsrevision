// 1.deposit some money
// 2.collect a bet amount
// 3.Determine no of lines to bet on 
// 4. spin the slot machine
// 5.check if the user won
// 6.give the user their winnings
// 7.play again
 
// 2 ways of making function
/* 1. function deposit(){
    return
}
deposit()*/
/* 2. const deposit = ()=>{

}*/

const prompt=require("prompt-sync")();

const ROWS=3;
const COLS=3;

const SYMBOLS_COUNT={
    A:2,
    B:4,
    C:6,
    D:8
}

const SYMBOLS_VALUES={
    'A':5,
    'B':4,
    'C':3,
    'D':2
}


const deposit = ()=>{
    while(true){
    const depositAmount = prompt('Enter a deposit amount: ')
    const numDepositAmount =parseFloat(depositAmount)// if we give 'hello' o/p= NAN , if we give '129.9' o/p=129.9

    if(isNaN(numDepositAmount) || numDepositAmount<=0){
        console.log('Invalid numDepositAmount, try again')
    }else{
        return numDepositAmount;
    }
}
}

const getNumOfLines=()=>{
    while(true){
        const lines = prompt('Enter the no. of lines to bet on (1-3): ')
        const NumOfLines =parseFloat(lines)// if we give 'hello' o/p= NAN , if we give '129.9' o/p=129.9
    
        if(isNaN(NumOfLines) || NumOfLines<=0 || NumOfLines > 3 ){
            console.log('Invalid NumOfLines, try again')
        }else{
            return NumOfLines;
        }
    }
}

const getBet=(balance,lines)=>{
    while(true){
        const bet = prompt('Enter the bet per line: ')
        const NumBet =parseFloat(bet)// if we give 'hello' o/p= NAN , if we give '129.9' o/p=129.9
    
        if(isNaN(NumBet) || NumBet<=0 || NumBet > (balance / lines)){
            console.log('Invalid NumBet, try again')
        }else{
            return NumBet;
        }
    }
}

const spin = ()=>{
    const symbols=[];
    for (const [symbol ,count] of Object.entries(SYMBOLS_COUNT)){
        //console.log(symbol, count)
        for (let i =0; i< count;i++){
        symbols.push(symbol);
    }}//console.log(symbols)
    const reels=[[],[],[]];
    for (let i=0;i=COLS;i++);{
        const reelSymbols= [...symbols];
        for (j=0;j<ROWS;j++);{
            const randomIndex=Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol=reelSymbols[randomIndex];

            
        }
    }
}
spin();
let balance=deposit();
//console.log(depositAmount)
const NumOfLines=getNumOfLines();
const bet =getBet(balance,NumOfLines);