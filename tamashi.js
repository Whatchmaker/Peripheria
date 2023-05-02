var $gameTime = document.querySelector('#game-time')
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')
var $result = document.querySelector('#result')
var $table =document.querySelector('#table')

$gameTime.addEventListener('input', setGameTime)
$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

var score = 0
var isGameStarted = false





function setGameTime()
{
    var time = +$gameTime.value
    $time.textContent = time.toFixed(1)
    hide($resultHeader)
    show($timeHeader)
}

function startGame()
{
    score = 0
    setGameTime()
    hide($start)
    $game.style.backgroundColor = '#fff'
    show($timeHeader)
    hide($resultHeader)
    $gameTime.setAttribute('disabled', 'true')
    isGameStarted = true

    var id = setInterval(function() {

        var time = +$time.textContent

        if(time <= 0)
        {
            clearInterval(id)
            endGame()
        }
        else
        {
            $time.textContent = (time - 0.1).toFixed(1)
        }

    }, 100)

    renderBox()
}

function setGameScore()
{
    $result.textContent = score.toString()
}

function endGame()
{
    $game.innerHTML = ''
    show($start)
    setGameTime()
    setGameScore()
    $game.style.backgroundColor = '#ccc'
    show($resultHeader)
    hide($timeHeader)
    $gameTime.removeAttribute('disabled')
    isGameStarted = false
}

function handleBoxClick(event)
{
    if(!isGameStarted)
        return

    if(event.target.dataset.box)
    {
        score++
        renderBox()
    }
}

function renderBox()
{
    $game.innerHTML = ''
    var box = document.createElement('div')   
    
    var boxSize = getRandom(30, 100)
    
    var gameBoard = $game.getBoundingClientRect()
    var maxTop = gameBoard.height - boxSize
    var maxLeft = gameBoard.width - boxSize
   
     

    box.style.width = box.style.height = boxSize + 'px'
    box.style.backgroundColor = 'rgb(' +
    getRandom (0,255)+','+
    getRandom (0,255)+','+
    getRandom (0,255)+')'
    
    box.style.position = 'absolute'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.borderRadius = getRandom (0,50) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')
    $game.insertAdjacentElement('afterbegin', box)
}

 

function show($el)
{
    $el.classList.remove('hide')
}

function hide($el)
{
    $el.classList.add('hide')
}

function getRandom(min, max)
{
    return Math.floor(Math.random() * (max-min) + min)
} 



 
 