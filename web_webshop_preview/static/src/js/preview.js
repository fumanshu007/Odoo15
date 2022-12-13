odoo.define("web_webshop_preview.preview", function(require) {
  "use strict";
var element =  document.getElementsByClassName('input_video');
  if (element.length > 0)
  {
    const videoElement = document.getElementsByClassName('input_video')[0];
    const canvasElement = document.getElementsByClassName('output_canvas')[0];
    const canvasCtx = canvasElement.getContext('2d');
    const item = $("#preview_type").html();
    const product_id = $("#product_id").html();

    function onResults(results) {
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(
          results.image, 0, 0, canvasElement.width, canvasElement.height);
      const image = new Image(0,0);
      image.src = "../web/image?model=web.webshop.preview&id=" + product_id + "&field=image";
      if (results.multiFaceLandmarks) {
        for (const landmarks of results.multiFaceLandmarks) {
            const glass = [[70, 111], [111, 340], [340, 300], [300, 70]];
            const glasses =[[441, 442], [443, 442], [443, 444], [445, 444], [445, 342], [446, 342], [446, 261], [448, 261], [448, 449], [450, 449],  [450, 451],
             [451, 452], [452, 453], [453, 464], [413, 464], [413, 441],
             [225, 224], [224, 223], [223, 222], [222, 221], [221, 189], [189, 244], [244, 233], [233, 232], [232, 231], [231, 230], [230, 229],
             [229, 228], [228, 31], [31, 113], [113, 225],
             [244, 122], [122, 6], [6, 351], [351, 464], [446, 356], [226, 127]]
            // draw image on 35
            // distance is 35-265
            const distance = (landmarks[265].x*canvasElement.width) - (landmarks[143].x * canvasElement.width)
            switch (item) {
            case 'Eyes':
              canvasCtx.drawImage(image, (landmarks[71].x * canvasElement.width), (landmarks[71].y * canvasElement.height), distance, distance/3)
              break;
            case 'Above the head':
              canvasCtx.drawImage(image, (landmarks[54].x * canvasElement.width)-distance/5, (landmarks[54].y * canvasElement.height)-distance*1.1, distance*1.3, distance*1.3)
              break;
            default:
              console.log(`Sorry no type.`);
            }
            //drawConnectors(canvasCtx, landmarks, glasses,
            //{color: '#C0C0C070', lineWidth: 1});

        }
      }
      canvasCtx.restore();
    }

    const faceMesh = new FaceMesh({locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    }});
    faceMesh.setOptions({
      maxNumFaces: 1,
      selfieMode: true,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    faceMesh.onResults(onResults);
    const camera = new Camera(videoElement, {
      onFrame: async () => {
        await faceMesh.send({image: videoElement});
      },
      width: 640,
      height: 480
    });

    $('#preview_btn').on('click', function(){
      camera.start();
      $('#preview_box').show('fast');
      videoElement.style.display = 'none';
    });
  }
});