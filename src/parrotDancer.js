var MakeParrotDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('parrotDancer');
  this.$node.css('background-image', "url(https://media2.giphy.com/media/nRBJjjILMTkQM/200.gif)");
};

MakeParrotDancer.prototype = Object.create(MakeDancer.prototype);
MakeParrotDancer.prototype.constructor = MakeParrotDancer;
MakeParrotDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
};