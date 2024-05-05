score = 0
cross = true

document.onkeydown = (e) => {
    if (e.keyCode == 32) {                              // space = jump
        vader = document.querySelector('.vader')
        vader.classList.add('animate-vader')
        setTimeout(() => {
            vader.classList.remove('animate-vader')
        }, 1500)
    }
    
    if (e.keyCode == 80) {                              // o = left
        vader = document.querySelector('.vader')
        vaderX = parseInt(window.getComputedStyle(vader, null).getPropertyValue('left'));    
        vader.style.left = vaderX + 112 + 'px'
    }
    
    if (e.keyCode == 79) {                              // o = left
        vader = document.querySelector('.vader')
        vaderX = parseInt(window.getComputedStyle(vader, null).getPropertyValue('left'));    
        vader.style.left = vaderX - 112 + 'px'
    }
}

setInterval(() => {
    vader = document.querySelector('.vader');
    gameOver = document.querySelector('.game-over')
    obstacle = document.querySelector('.obstacle')

    vx = parseInt(window.getComputedStyle(vader, null).getPropertyValue('left'))
    vy = parseInt(window.getComputedStyle(vader, null).getPropertyValue('top'))
    
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    offsetX = Math.abs(vx - ox)
    offsetY = Math.abs(vy - oy)

    if (offsetX < 73 && offsetY < 52) {
        gameOver.style.visibility = 'visible'
        obstacle.classList.remove('animate-obstacle')
    } else if (offsetX < 145 && cross) {
        score += 1
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000)
    }
}, 10);

function updateScore(score) {
    scoreCount.innerHTML = `Score: ${score}`
}