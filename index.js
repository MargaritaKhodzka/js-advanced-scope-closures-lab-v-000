function produceDrivingRange(blockRange) {
  return function(start, end) {
    const startingBlock = parseInt(start);
    const endingBlock = parseInt(end);
    let distance = Math.abs(endingBlock - startingBlock);
    let numberOfBlocks = blockRange - distance;

    if (numberOfBlocks < 0) {
      return `${Math.abs(numberOfBlocks)} blocks out of range`;
    } else {
      return `within range by ${numberOfBlocks}`;
    }
  };
};

function produceTipCalculator(percent) {
  return function(amount) {
    return amount * percent;
  };
};

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
};
