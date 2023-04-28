

const winwidth = $(window).width();



// mobile & tablet 

if (winwidth < 800) {

  // 자바스크립트


// top으로 이동
const toTop = document.querySelector('#top')
const side = document.querySelector('#side')

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    toTop.classList.add('show')
    side.classList.add('up')
  } else {
    toTop.classList.remove('show')
    side.classList.remove('up')
  }
})

toTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

}



// 제이쿼리-------------------------------------------------


AOS.init({
  duration: 1000
})


  // quick menu
  $('.quick_menu').stop().hide()
  $('.add').click(function () {
    if ($(this).siblings('.quick_menu').is(':visible')) {
      $('.quick_menu').stop().slideUp()
      $(this).attr('src', './img/add-circle.png')
    } else {
      $(this).attr('src', './img/minus-circle.png')
      $('.quick_menu').stop().slideDown()
    }
  })

    // hamburger menu
    $('.hamsection').hide()
    $('.hamburger').click(function () {
      $('.hamsection').stop().fadeIn('slow')
      $('body').addClass('body_lock')
    })
  
    $('.close').click(function () {
      $('.hamsection').stop().fadeOut('fast')
      $('body').removeClass('body_lock')

    })
  
    $('.ham_sub').stop().hide()
    $('.ham_main > li > a').click(function () {
      $('.ham_sub').stop().slideUp()
      if ($(this).next().is(':visible')) {
        $(this).next().slideUp()
      } else {
        $(this).next().stop().slideDown()
      }
    })
  
    

  // section title animation waypoint
  $('#mtsection2, #mtsection3, #mtsection4').waypoint(function () {
    $(this).find('.before').addClass('animate')
    $(this).find('.after').addClass('animate')
  }, {
    offset: '75%'
  })


  // section1 스크롤 내리기
  $('.scroll').on('click', function () {
    const sec1 = $('#mtsection2').offset().top
    const sec1to = sec1 - 100
    $('html, body').animate({
      scrollTop: sec1to
    }, 1000);

  })

    // section2 slick
    $('.slideimg').slick({
      dots: false,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      mouseOnHover: false,
      pauseOnHover: false
    })
  
    setInterval(function () {
      const htext = $('.slideimg .slick-active').find('.cam').attr('alt')
      $('#mtsection2 .name h2').text(htext)
    })
  
  
    // section3 slick
    $('.slidegallery').slick({
      dots: false,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 5000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      responsive: [{
          breakpoint: 801,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            dots: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            dots: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
            slidesToScroll: 1,
            arrows: false,
          }
        }
  
      ]
    })

    
      // section3 modal
      function modalOn() {
        if(winwidth < 800) {
          $('#mtsection3 .guide').addClass('modal_on')
          $('#mtsection3 .modal').addClass('back_on')  
        } else {
          $('#desksection2 .guide').addClass('modal_on')
          $('#desksection2 .modal').addClass('back_on')  
        }
        $('body').addClass('body_lock')
      }
    
      function modalOff() {
        console.log()
        if(winwidth < 800) {
          $('#mtsection3 .guide').removeClass('modal_on')
          $('#mtsection3 .modal').removeClass('back_on')

          const offset = $('#mtsection3').offset()
    
          $('html').animate({
            scrollTop: offset.top
          })  
        } else {
          $('#desksection2 .guide').removeClass('modal_on')
          $('#desksection2 .modal').removeClass('back_on')  

          const offset = $('#desksection2').offset()
    
          $('html').animate({
            scrollTop: offset.top
          }) 
        }
        $('body').removeClass('body_lock')
      }
    
    
      $('.slidegallery li a').click(function (e) {
        e.preventDefault()

        modalOn()

        const thisSec = $(this).parent().index()
        if(winwidth < 800) {
          $('.guide .sec').hide()
          $('.guide .sec').eq(thisSec).css('display', 'block')  
        } else {
          $('.guide .sec1').hide()
          $('.guide .sec1').eq(thisSec).css('display', 'block')
        }
    

        const changeImg = $(this).attr('href')
        $('.guide img').attr('src','')
        $('.guide img').attr('src', changeImg)
      })
    
      $('#mtsection3 .guide, .modal').click(function () {
        modalOff()
      })
      $('#desksection2 .guide, .modal').click(function () {
        modalOff()
      })  


  
  
    // section4 fadeInOut
    const roll = $('.indicator a')
    const lens = $('.slidelens > li')

    let num = 0
  
    $('.slidelens > li:nth-child(1)~').hide()
  
    for (let i = 0; i < roll.length; i++) {
      roll.eq(i).on('click', List)
  
      function List(e) {
        for (let i = 0; i < roll.length; i++) {
          roll.eq(i).removeClass('on')
          lens.eq(i).stop().fadeOut()
        }
  
        roll.eq(i).addClass('on')
        lens.eq(i).stop().fadeIn()
        
        e.preventDefault()
  
        return num = i
      }
    }
  
    const notMove = setInterval(function () {
      num++
      if (num > 3) {
        num = 0
      }
      roll[num].click()
    }, 8000)
  


  


// mobile & tablet end


// desktop start


// pagination
$('#pagination a').click(function(e) {
  e.preventDefault()

  $('#pagination a').removeClass('on')
  $(this).addClass('on')

  const pageMove = $(this).attr('href')
  const pageTop = $(pageMove).offset().top
  $('body, html').stop().animate({
    scrollTop: pageTop
  }, 1000)

})




// desksection1 tab menu

$('.tab li a').click(function(e){
  e.preventDefault()
  $('.tab li a').removeClass('on')
  $(this).addClass('on')

  const changeVideo = $(this).attr('href')
  $('.left_video').children().attr('src', changeVideo)

  const index = $(this).parent().index()
  $('.pan li').hide()
  $('.pan li').eq(index).stop().slideDown('slow')
})



