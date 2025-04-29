const {model} = require ('mongoose')

const {HoldingsSchema} = require('../schemas/HoldingsSchem')

const HoldingsModel = new model ('holding' , HoldingsSchema);

module.exports ={HoldingsModel};