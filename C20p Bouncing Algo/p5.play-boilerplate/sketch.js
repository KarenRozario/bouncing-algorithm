var fixedRect, movingRect

function setup() {
  createCanvas(1200, 800)

  fixedRect = createSprite(400, 0, 60, 120)
  fixedRect.shapeColor = 'green'

  movingRect = createSprite(400, 800, 60, 120)
  movingRect.shapeColor = 'blue'

  fixedRect.velocityY = 5
  movingRect.velocityY = -5
}

function draw() {
  background(0)

  console.log(movingRect.x - fixedRect.x)

  if (
    movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
    fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
    fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2 &&
    movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2
  ) {
    fixedRect.velocityY = fixedRect.velocityY * -1
    movingRect.velocityY = movingRect.velocityY * -1
  }

  drawSprites()
}
