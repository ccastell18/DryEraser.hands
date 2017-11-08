const expect = require('chai').expect
const myFunc = require('../src/main');

let whiteBoard = [{text: 'wash car', color: 'black', smudged: false}, {text: 'cook food', color: 'black', sumdged: false}];

describe('remove', function(array){
  it("removes the item permanently", function(){
    expect(myFunc.removeItems(array).to.equal())
  })

})
describe('smudge', function(array){
  it('smudges or not smudges'), function(){
    expect(myFunc.smudge().to.equal('smudge: true');
  }
})
