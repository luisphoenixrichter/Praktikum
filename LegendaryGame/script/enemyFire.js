let fireParticles = [];

function drawFireEnemys() {
    enemys.forEach((enemy) => {
        if (enemy.type == 9) {
            if(keyIsDown(72)) {
                enemy.x = 200;
                enemy.y = 500;
                for(let i = 0; i < 100; i++) {
                    fireParticles.push({
                        x: enemy.x + 10,
                        y: enemy.y,
                        fireDistance: (Math.round(Math.random() * 1000)),
                        range: (Math.round(Math.random() * 50) + 100),
                        fireDirection: Math.round(Math.random() * 20) + 1,
                        cooldown: 0,
                    });
                }
            }
            fireParticles.forEach((particle) => {
                if(particle.fireDirection >= 10) {
                    if(particle.y > enemy.y - particle.range) {
                        particle.y -= 1;
                    }
                    if(particle.x < enemy.x + particle.fireDistance) {
                        particle.x += 1;
                    }
                    fill((Math.round(Math.random() * 100)) + 100, 0, 0);
                    rect(particle.x, particle.y, 1, 1);
                    if(particle.y <= enemy.y - particle.range) {
                        fireParticles.shift();
                    }
                } else {
                    if(particle.y > enemy.y - particle.range) {
                        particle.y -= 1;
                    }
                    if(particle.x > enemy.x - particle.fireDistance) {
                        particle.x -= 1;
                    }
                    
                    fill((Math.round(Math.random() * 100)) + 100, 0, 0);
                    rect(particle.x, particle.y, 1, 1);
                    if(particle.y <= enemy.y - particle.range) {
                        fireParticles.shift();
                    }
                }
            });
            fill(0, 200, 200);
            rect(enemy.x, enemy.y, 20, 20);
        }
    });
}