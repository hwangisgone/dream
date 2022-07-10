var $target = $('.wrapper');
inView('.spacing').on('enter', function(el){
  var color = $(el).attr('data-bg-enter');
  $target.css('background-color', color );
});
inView('.spacing').on('exit', function(el){
  var color = $(el).attr('data-bg-exit');
  $target.css('background-color', color );
});