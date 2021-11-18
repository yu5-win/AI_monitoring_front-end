    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext("2d");

    const buildBoxes = [];
    const floorBoxes = [];
    let mousePos = { x: 0, y: 0 };

    const colorB = 'rgb(52, 171, 218)';
    const colorF = 'rgb(20, 180, 20)';

    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    class Box {
      constructor(index, x, y, width, color) { // index, x좌표, y좌표, 박스크기, 색
        this.index = index;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 25;
        this.color = color;
        this.draw();
      }
      draw() {
        var unit;
        var cornRadius = 8;

        if (this.color === colorB) unit = '동';
        else if(this.color === colorF) unit = '층';
        else unit = '';

        ctx.font = 'bold 15px sans-serif';

        ctx.lineJoin = "round";
        ctx.lineWidth = cornRadius;
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;

        ctx.strokeRect(this.x + (cornRadius / 2), this.y + (cornRadius / 2), this.width - cornRadius, this.height - cornRadius);
        ctx.fillRect(this.x + (cornRadius / 2), this.y + (cornRadius / 2), this.width - cornRadius, this.height - cornRadius);

        if (this.color === 'white') ctx.fillStyle = 'black';
        else ctx.fillStyle = 'white';

        ctx.fillText(this.index + unit, this.x + (this.width / 2), this.y + (this.height / 2));
      }
    }

    let selBuildBox = 0;
    let buildX = 0, buildY = 10;
    for (let i = 1; i < 10; i++) {
      buildBoxes.push(new Box(100 + i, buildX, buildY, 70, colorB));
      buildX += 78;
    }    
    let startBuildBox = false;
    if(startBuildBox === false){
      new Box('101동', 0, buildY, 70, 'white');
     }
    
    let selFloorBox = 0;
    let floorX = 700, floorY = 400;
    for (let i = 1; i < 11; i++) {
      floorBoxes.push(new Box(i, floorX, floorY, 50, colorF));
      floorY -= 40;
    }
    let startFloordBox = false;
    if(startFloordBox === false){
      new Box('1층', floorX, 400, 50, 'white');
     }

    canvas.addEventListener('click', e => {
      for (let i = 0; i < buildBoxes.length; i++) {
        let box = buildBoxes[i];
        if (mousePos.x > box.x && mousePos.x < box.x + box.width && mousePos.y > box.y && mousePos.y < box.y + box.height) {
          startBuildBox = true;
          if (startBuildBox === true) {
            new Box(101, 0, buildY, 70, colorB);
          } 
          if (selBuildBox != null) {
            if (selBuildBox.index != box.index) {
              new Box(selBuildBox.index, selBuildBox.x, selBuildBox.y, 70, colorB);
            }
            new Box(box.index+'동', box.x, box.y, 70, 'white');

            buildingId = box.index + 'b';
          }
          selBuildBox = box;
        }
      }
      for (let i = 0; i < floorBoxes.length; i++) {
        let box = floorBoxes[i];
        if (mousePos.x > box.x && mousePos.x < box.x + box.width && mousePos.y > box.y && mousePos.y < box.y + box.height) {
          startFloordBox = true;
          if (startFloordBox === true) {
            new Box(1, floorX, 400, 50, colorF);
          } 
          if (selFloorBox != null) {
            if (selFloorBox.index != box.index) new Box(selFloorBox.index, selFloorBox.x, selFloorBox.y, 50, colorF);
            new Box(box.index+'층', box.x, box.y, 50, 'white');

            floorId = box.index + 'f';
          }
          selFloorBox = box;
        }
      }
    });

    // mouse cursor pointer
    canvas.addEventListener('mousemove', e => {
      const boxes = [
        ...buildBoxes,
        ...floorBoxes
      ];
      var onBox = false;
      mousePos.x = e.layerX;
      mousePos.y = e.layerY;

      for (var i = 0; i < boxes.length; i++) {
        box = boxes[i];
        if (mousePos.x > box.x && mousePos.x < box.x + box.width && mousePos.y > box.y && mousePos.y < box.y + box.height) onBox = true;
        else document.querySelector('canvas').classList.remove('Common_canvasCursor__1ZpDD');
      }
      if (onBox) document.querySelector('canvas').classList.add('Common_canvasCursor__1ZpDD');
    })

    const workerImg = []; // 근로자 이미지 객체
    // 캔버스 영역 밖으로 나가지 않게 최대, 최소값 지정
    var xMax = 450; var xMin = 0;
    var yMax = 230; var yMin = 10;

    // 랜덤 위치값
    // setInterval(function getPosition() {
    //   for (var i = 0; i < worker.length; i++) {
    //     worker[i].x = Math.random() * (xMax - xMin) + xMin;
    //     worker[i].y = Math.random() * (yMax - yMin) + yMin;
    //   }
    //   return getPosition;
    // }(), 1000);


    const worker = [
      { "name": "김XX", "state": "이동", "x": 100, "y": 150, "building": "101b", "floor": "1f" },
      { "name": "김XX", "state": "멈춤", "x": 0, "y": 0, "building": "104b", "floor": "2f" },
      { "name": "이XX", "state": "이동", "x": 100, "y": 200, "building": "103b", "floor": "1f" },
      { "name": "김XX", "state": "이동", "x": 400, "y": 200, "building": "101b", "floor": "1f" },
      { "name": "염XX", "state": "멈춤", "x": 0, "y": 0, "building": "101b", "floor": "2f" },
      { "name": "정XX", "state": "이동", "x": 0, "y": 0, "building": "105b", "floor": "3f" },
      { "name": "권XX", "state": "이동", "x": 0, "y": 0, "building": "103b", "floor": "10" },
      { "name": "이XX", "state": "멈춤", "x": 620, "y": 150, "building": "101b", "floor": "1f" },
      { "name": "허XX", "state": "이동", "x": 0, "y": 0, "building": "105b", "floor": "3f" }
    ]
    // 근로자 위치 그리기
    for (var i = 0; i < worker.length; i++) {
      // 근로자 객체 생성
      workerImg[i] = new Image();
      workerImg[i].src = './images/img_patrn.png';
      // 1초마다 근로자 위치 갱신
      (function (i) {
        workerImg[i].onload = function () {
          const timer = setInterval(() => {
            if (buildingId === worker[i].building && floorId === worker[i].floor) {
              ctx.drawImage(workerImg[i], worker[i].x, worker[i].y, 25, 25);

              ctx.fillStyle = 'rgba(0,0,0,0.6)'
              ctx.fillRect(worker[i].x - 5, worker[i].y - 15, 35, 15);
              ctx.fillRect(worker[i].x, worker[i].y + 25, 23, 15);

              ctx.font = 'bold 12px sans-serif';
              ctx.fillStyle = 'white'
              ctx.fillText(worker[i].name, worker[i].x + 12, worker[i].y - 7);
              ctx.fillText(worker[i].state, worker[i].x + 12, worker[i].y + 34);
            }
          }, 1000);
        }
      })(i)
    }
    // 오브젝트 중복되지 않게 캔버스 지우기
    const timer = setInterval(() => {
      ctx.clearRect(0, 100, canvas.width-70, canvas.height);
    }, 1000);

    // test
    buildingId = '101b';
    floorId = '1f';
