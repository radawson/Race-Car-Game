const pc = myCarNew(100, 110)

const npc = myEnemyNew(150, 110)

moveNPC()

const inventory = fuelStorage()
move(inventory).to(0, 800)
//left side cones
move(newImage('assets/trafficCone.png')).to(50, 100)
move(newImage('assets/trafficCone.png')).to(50, 150)
move(newImage('assets/trafficCone.png')).to(50, 200)
move(newImage('assets/trafficCone.png')).to(100, 200)
move(newImage('assets/trafficCone.png')).to(150, 200)
move(newImage('assets/trafficCone.png')).to(200, 200)
move(newImage('assets/trafficCone.png')).to(250, 200)
move(newImage('assets/trafficCone.png')).to(250, 250)
move(newImage('assets/trafficCone.png')).to(250, 300)
move(newImage('assets/trafficCone.png')).to(250, 350)
move(newImage('assets/trafficCone.png')).to(300, 350)
move(newImage('assets/trafficCone.png')).to(350, 350)
move(newImage('assets/trafficCone.png')).to(400, 350)
move(newImage('assets/trafficCone.png')).to(450, 350)
move(newImage('assets/trafficCone.png')).to(500, 350)
move(newImage('assets/trafficCone.png')).to(500, 400)
move(newImage('assets/trafficCone.png')).to(500, 450)
move(newImage('assets/trafficCone.png')).to(500, 500)
move(newImage('assets/trafficCone.png')).to(550, 500)
move(newImage('assets/trafficCone.png')).to(600, 500)
move(newImage('assets/trafficCone.png')).to(650, 500)
move(newImage('assets/trafficCone.png')).to(650, 550)
move(newImage('assets/trafficCone.png')).to(650, 600)
move(newImage('assets/trafficCone.png')).to(650, 650)
move(newImage('assets/trafficCone.png')).to(650, 700)
//right side cones
move(newImage('assets/trafficCone.png')).to(500, 100)
move(newImage('assets/trafficCone.png')).to(500, 150)
move(newImage('assets/trafficCone.png')).to(550, 150)
move(newImage('assets/trafficCone.png')).to(600, 150)
move(newImage('assets/trafficCone.png')).to(650, 150)
move(newImage('assets/trafficCone.png')).to(700, 150)
move(newImage('assets/trafficCone.png')).to(750, 150)
move(newImage('assets/trafficCone.png')).to(750, 200)
move(newImage('assets/trafficCone.png')).to(750, 250)
move(newImage('assets/trafficCone.png')).to(750, 300)
move(newImage('assets/trafficCone.png')).to(800, 300)
move(newImage('assets/trafficCone.png')).to(850, 300)
move(newImage('assets/trafficCone.png')).to(850, 350)
move(newImage('assets/trafficCone.png')).to(850, 400)
move(newImage('assets/trafficCone.png')).to(850, 450)
move(newImage('assets/trafficCone.png')).to(850, 500)
move(newImage('assets/trafficCone.png')).to(850, 550)
move(newImage('assets/trafficCone.png')).to(850, 600)
move(newImage('assets/trafficCone.png')).to(850, 650)
move(newImage('assets/trafficCone.png')).to(850, 700)

//fuel
move(newItem('assets/gas.png')).to(450, 270)
move(newItem('assets/gas.png')).to(700, 500)

//finish line
move(newImage('assets/finishLine.png')).to(0,650)

function finishLine(width,height,color,x,y){

}