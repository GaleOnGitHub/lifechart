//possibly move into diagram component
const ChartDrawing = function(ageInBlocks, lifeInBlocks){
  const c = document.getElementById('chart-canvas')
  let ctx = c.getContext('2d')
  let age = ageInBlocks
  let numOfBlocks = lifeInBlocks;
  let padding
  const blocks = []
  
  const Block = {
    init: function(type,x,y,size){
      this.type = type
      this.x = x
      this.y = y
      this.size = size
    },
    draw: function(ctx){
      const TYPES = {
        PAST: '#333333',
        PRESENT: '#d33e3e',
        FUTURE: '#a1a1a1'
      }

      ctx.fillStyle = TYPES[this.type] || '#eee'
      ctx.fillRect(this.x,this.y,this.size,this.size);
    }
  }
  
  const createBlocks = () => {
    const size = calcSquareSize()
    const offset = calcOffset(size)
    let posX = offset
    let posY = 0
    blocks.length = 0 //reset array
    
    for(let i = 0; i < numOfBlocks; i++){
      //Get type
      let type = determineType(i,age)
      
      //Create new block
      let newBlock = Object.create(Block)
      newBlock.init(type,posX,posY,size)
      blocks.push(newBlock)
      
      //if the next block falls outside the canvas start a new row
      if(posX+2*(size) >= c.width){
        posX = offset
        posY += size+padding
      }else{
        posX += size+padding
      }
    }
  }
  
  const determineType = (t,age) => {
    if(t < (age-1) ){
      return 'PAST'
    }else if(t === (age-1)){
      return 'PRESENT'
    }else{
      return 'FUTURE'
    }
  }

  function draw(){
    ctx.clearRect(0,0,c.width,c.height)
    for(let block of blocks){
      block.draw(ctx);
    }
  }
    
  //CALCULATIONS
  
  //Squares' side size based on number of boxes and canvas size
  function calcSquareSize(){
    //FROM: http://math.stackexchange.com/questions/466198/algorithm-to-get-the-maximum-size-of-n-squares-that-fit-into-a-rectangle-with-a
    let n = numOfBlocks,
        x = c.width,
        y = c.height
    let sx, sy   
    let px = Math.ceil(Math.sqrt(n * x / y))
    if(Math.floor(px*y/x)*px<=n){ //doesnt fit
      sx = y/Math.ceil(px*y/x)
    }else{
      sx = x/px
    }
    let py = Math.ceil(Math.sqrt(n * y / x))
    if(Math.floor(py*x/y)*py<n){ //doesnt fit
      sy = x/Math.ceil(x*py/y)
    }else{
      sy=y/py
    }
    let size = Math.floor(Math.max(sx,sy))
    size = Math.min(size,60) //?
    return size-padding;
  }
  
  //Amount to offset x position so the boxes are centered
  const calcOffset = (size) =>{
    let w = c.width,
        s = size + padding,
        count = Math.floor(w/s),
        offset = (w - count * s)/2
    
    return Math.floor(offset) //offset in int only
  }
  
  const calcPadding = () => {
    let p = (c.width < 450) ? 1 : 2
    return p
  }
  
  //ACTIONS
  
  //Reset canvas dimensions
  function resize(){
      c.width = (c.clientWidth)
      c.height= (c.clientHeight)
      ctx = c.getContext('2d')
      padding = calcPadding()
      createBlocks()
      draw()
  }

  
  //Change chart data and redraw
  function update(ageInBlocks, lifeInBlocks){
    age = ageInBlocks
    numOfBlocks = lifeInBlocks
    createBlocks();
    draw();
  }
  
  resize()
  padding=calcPadding()
  createBlocks()
  draw()
  
  return {
    update,
    resize
  } 
}

export default ChartDrawing