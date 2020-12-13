var front= {
    st: 0,

    init: function(){
        this.sideMenu();
        this.mainSlider();
        this.viewMode();
        this.findTab();
        this.familySite();
    },

    sideMenu: function() {
        var sideMeun = $('#side_menu');

        // 사이드메뉴 열기 - 닫기
        $('.btn_side_menu span').on('click', function() {
            sideMeun.addClass('on');
            $('.dimm').addClass('on');
            $('body').addClass('on');
        });

        $('#side_menu .btn_close, .dimm').on('click', function() {
            sideMeun.removeClass('on');
            $('.dimm').removeClass('on');
            $('body').removeClass('on');
        });

        // PC게임 - 모바일게임 탭 관련 
        var sideMenuList = $('.game_list li');
        
        $('.game_list li .btn_gamelist').on('click', function() {
            sideMenuList.removeClass('active');
            $(this).parent().addClass('on').siblings('li').removeClass('on');

            if($('.game_list li:nth-child(1)').hasClass('on')) {
                $('#side_menu .side_menu_inner .pcgame_list').show()
                $('#side_menu .side_menu_inner .mobile_game_list').hide();
            } else if($('.game_list li:nth-child(2)').hasClass('on')) {
                $('#side_menu .side_menu_inner .mobile_game_list').show();
                $('#side_menu .side_menu_inner .pcgame_list').hide()
            }
        });

    },
    //메인슬라이드 영역
    mainSlider: function() {
        var menu = [
                    '<span class="tit">마비노기</span>',
                    '<span class="tit">마비노기 영웅전</span>',
                    '<span class="tit">메이플스토리2</span>',
                    '<span class="tit">크레이지아케이드</span>',
                    '<span class="tit">넥슨</span>'
                    ]
        var mainSlider = new Swiper('.main_slider', {
            // Optional parameters
            effect: 'fade',
            autoplay: {
                delay: 5000,
              },
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
                },
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })
    },

    // 썸네일 or 리스트스타일 게임리스트
     viewMode: function() {
        var thumnailBtn = $('#thumbnail');
        var listBtn = $('#list');

        thumnailBtn.on('click', function() {
            $('#contents .all_game_wrap .viewtype .gamelist_detail .game_start_list').show();
            $('#mobilegameList .mobilegame_list_detail').show();
            $('#contents .viewtype .list_style_game').hide();
        });

        listBtn.on('click', function(){
            $('#contents .all_game_wrap .viewtype .gamelist_detail .game_start_list').hide();
            $('#mobilegameList .mobilegame_list_detail').hide();
            $('#contents .viewtype .list_style_game').show();
        });

        // 모바일 썸네일 스타일 더보기 버튼 클릭 시에
        $('#mobilegameList .btn_more').on('click', function() {
            $('#mobilegameList .mobilegame_list_detail .more_gamelist').show();
            $(this).hide();
        });

     },

    //  회원가입 클로즈버튼
     findTab: function() {
        $('.login_wrap .reg_btn_close').on('click', function() {
            $('#contents .login_wrap .find_wrap li').removeClass('active');
        });
     },

    //  패밀리사이트
    familySite: function() {
        $('#footer .bottom_footer_inner .language>a').on('click', function(e) {
            e.preventDefault();
            $('#footer .bottom_footer_inner .language .language_list').toggleClass('on');        
        });
    }
    

}

$(document).ready(function() {
    front.init();

});