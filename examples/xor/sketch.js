/* weights are generated randomly
 ** the default activation function is sigmoid
 ** all what you need is to create the NN and give it the training data
 ** all the heavy lefting done by the library
 */
let nn; // initializing a NN variable
let lr_slider; // learning rate slider

let training_data = [
  {
    inputs: [0, 0],
    outputs: [0],
  },
  {
    inputs: [0, 1],
    outputs: [1],
  },
  {
    inputs: [1, 0],
    outputs: [1],
  },
  {
    inputs: [1, 1],
    outputs: [0],
  },
];

function setup() {
  createCanvas(400, 400); // where the results appear on the web
  nn = new NeuralNetwork(2, 4, 1); // creating a new NN and assign it to nn variable
  lr_slider = createSlider(0.01, 0.5, 0.1, 0.01); // as the name says creating a slider using the library to control the learning rate
  //HTML5 slider >>> ranges from 0.01 to .5 and starts with 0.1 with increment steps of 0.01
}

function draw() {
  // drawing what happens over time!
  background(0);

  for (let i = 0; i < 10; i++) {
    // training iterations are 10
    let data = random(training_data);
    nn.train(data.inputs, data.outputs); // training the NN using the data randomly
  }

  nn.setLearningRate(lr_slider.value());

  let resolution = 10;
  let cols = width / resolution;
  let rows = height / resolution;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x1 = i / cols;
      let x2 = j / rows;
      let inputs = [x1, x2];
      let y = nn.predict(inputs);
      noStroke();
      fill(y * 255);
      rect(i * resolution, j * resolution, resolution, resolution);
    }
  }
}
