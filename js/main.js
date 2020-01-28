//var starList = $('.star');
$('.star_line .star').on('mouseover', function(){
  var thisNum = this;
  var starList = $('.star', this.closest('.star_line'))
  starList.each(function(i, it){

    if(starList.index(this) <= starList.index(thisNum)){

      this.classList.add('active')
    }
    else{
      this.classList.remove('active')
    }
  })

})
$('.star_line').on('mouseleave', function () {
  var starList = $('.star', this.closest('.star_line'))
  starList.each(function(i, it){

    if(starList.index(this)+1 <= $('.star_rating', this.closest('.star_line')).val()){

      this.classList.add('active')
    }
    else{
      this.classList.remove('active')
    }
  })
})

$('.star').on('click', function () {
  $('.star_rating', this.closest('.star_line')).val(this.querySelector('.star__num').innerHTML)
})
