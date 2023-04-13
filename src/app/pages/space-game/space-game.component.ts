import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { map, player } from './configs';
import { ObstacleModel } from './model/obstacle.model';

@Component({
  selector: 'app-space-game',
  templateUrl: './space-game.component.html',
  styleUrls: ['./space-game.component.scss']
})
export class SpaceGameComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;

  headerSize: number = 65;
  frameNumber: number = 0;

  gameOver: boolean = false;
  gameLoop?: NodeJS.Timer;
  playerImg: any = new Image();

  obstacleImg: any = new Image();
  obstacles: Array<ObstacleModel> = [];

  constructor(private router: Router) {
    if (localStorage.getItem("Secret") == null)
      this.goHome();
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;

    this.loadAssets();
    this.startGameLoop();
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.movePlayer(event, 'keydown');
  }

  startGameLoop() {
    this.gameLoop = setInterval(() => {
      if (this.gameOver)
        return;

      this.frameNumber += 1;
      this.cleanGround();
      this.createObstacles();
      this.moveObstacles();
      this.drawPlayer();
    }, 10);
  }

  loadAssets(): void {
    this.playerImg.src = player.imgSrc;
    this.obstacleImg.src = '../../../../assets/game/star.svg';
  }

  drawPlayer() {
    this.ctx.drawImage(
      this.playerImg,
      player.x, player.y,
      player.width, player.height
    );
  }

  movePlayer(event: KeyboardEvent, type: string): void {
    if (type === 'keydown') {
      if (event.key === 'ArrowLeft' || event.key === 'A' || event.key === 'a')
        this.moveLeft();
      else if (event.key === 'ArrowRight' || event.key === 'D' || event.key === 'd')
        this.moveRight();
      else if (event.key === 'ArrowUp' || event.key === 'W' || event.key === 'w')
        this.moveUp();
      else if (event.key === 'ArrowDown' || event.key === 'S' || event.key === 's')
        this.moveDown();
    }
  }

  moveLeft(): void {
    if (player.x === 0 || player.x < 0) {
      player.x = 0;
    } else {
      player.x -= player.speed;
    }
  }

  moveRight() {
    if (player.x + player.width === map.width ||
      player.x + player.width > map.width) {
      player.x = map.width - player.width;
    } else {
      player.x += player.speed;
    }
  }

  moveUp() {
    if (player.y === 0 + this.headerSize || player.y < this.headerSize) {
      player.y = this.headerSize;
    } else {
      player.y -= player.speed;
    }
  }

  moveDown() {
    if (player.y + player.height === map.height ||
      player.y + player.height > map.height) {
      player.y = map.height - player.height;
    } else {
      player.y += player.speed;
    }
  }

  everyInterval(frame: number) {
    return (this.frameNumber / frame) % 1 == 0
  }

  createObstacles(): void {
    if (this.frameNumber === 1 || this.everyInterval(45)) {
      const direction = Math.random() < 0.5;

      const obstacle: ObstacleModel = {
        x: direction ? Math.floor(Math.random() * window.innerWidth) : 0,
        y: direction ? 0 : Math.floor(Math.random() * window.innerHeight),
        speed: Math.floor(Math.random() * 4) + 1,
        height: 50,
        width: 55,
        fallAxisY: direction
      };

      if (window.innerWidth <= 768) {
        obstacle.width /= 2;
        obstacle.height /= 2;
      }

      this.obstacles.push(obstacle);
    }
  }

  moveObstacles(): void {
    this.obstacles.forEach((element: ObstacleModel, index: number) => {
      if (element.fallAxisY)
        element.y += element.speed;
      else
        element.x += element.speed;

      this.ctx.drawImage(
        this.obstacleImg,
        element.x, element.y,
        element.width, element.height
      );

      if (this.detectCrash(element)) {
        this.gameOver = true;
      }

      if (element.y > map.height) {
        this.obstacles.splice(index, 1);
      }
    });
  }

  detectCrash(obstacle: ObstacleModel): boolean {
    if ((player.y + player.height < obstacle.y) ||
      (player.y > obstacle.y + obstacle.height) ||
      (player.x + player.width < obstacle.x) ||
      (player.x > obstacle.x + obstacle.width)) {
      return false
    }

    return true;
  }

  resetGame = (): void => {
    player.x = window.innerWidth / 2;
    player.y = window.innerHeight / 2;
    this.obstacles = [];
    clearInterval(this.gameLoop);
    this.cleanGround();
    this.gameOver = false;
    this.startGameLoop();
  }

  goHome = (): void => {
    this.router.navigateByUrl('').then(() => {
      window.location.reload();
    });
  }

  cleanGround(): void {
    this.ctx.clearRect(0, 0, map.width, map.height);
  }
}
