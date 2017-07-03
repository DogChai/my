

//主模块
$(function(){
    $('#fullpage').fullpage({
        verticalCentered: false,
        resize:true,
        scrollingSpeed:600,
        'css3':true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        'navigation': true,
        'navigationPosition': 'right',
        navigationTooltips: ['首页', '技能', '作品', '爱好', '联系我'],


        //页面加载完成执行
        // afterRender: function(index){
        //     if(index == 1){
        //         $('.section1').find('.text p').delay(500).animate({
        //             'opacity':1
        //         },1000,'easeOutExpo');
        //     };
        // },

        //滚动前位置
        onLeave: function(index,direction){
            if(index == 1){
                $('.section1').find('.text p').eq(0).delay(500).animate({
                    'opacity':0
                },400,'easeOutExpo');
                $('.section1').find('.text p').eq(1).delay(500).animate({
                    'opacity':0
                },400,'easeOutExpo');
                $('.section1').find('.text p').eq(2).delay(500).animate({
                    'opacity':0
                },400,'easeOutExpo');
                $('.section1').find('.text p').eq(3).delay(500).animate({
                    'opacity':0
                },400,'easeOutExpo');
            };

            // if(index == 2){
            //     $('.section2').find('.skill h1').animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill span').animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill p').eq(0).animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill p').eq(1).animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill p').eq(2).animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill p').eq(3).animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill p').eq(4).animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill p').eq(5).animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill p').eq(6).animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill p').eq(7).animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill p').eq(8).animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            //     $('.section2').find('.skill p').eq(9).animate({
            //         'right':'-1500',
            //         'opacity':0
            //     },0,'easeOutExpo');
            // };

            // if(index == 3){
            //     $('.section3').find('.demo .smDemo').eq(0).animate({
            //         'left':-900
            //     },100,'easeOutExpo');
            //     $('.section3').find('.demo .smDemo').eq(1).animate({
            //         'top':-900,
            //         'opacity':0,
            //         'z-index':-999
            //     },100,'easeOutExpo');
            //     $('.section3').find('.demo .smDemo').eq(2).animate({
            //         'right':-900
            //     },100,'easeOutExpo');
            //     $('.section3').find('.demo .smDemo').eq(3).animate({
            //         'left':-900
            //     },100,'easeOutExpo');
            //     $('.section3').find('.demo .smDemo').eq(4).animate({
            //         'bottom':-900,
            //         'opacity':0,
            //         'z-index':-999
            //     },100,'easeOutExpo');
            //     $('.section3').find('.demo .smDemo').eq(5).animate({
            //         'right':-900
            //     },100,'easeOutExpo');
            // };

            if(index == 4){

            };

            if(index == 5){

            };
        },



        //滚动后位置
        afterLoad: function(anchorLink,index){
            if(index == 1){
                $('.section1').find('.text p').eq(0).delay(500).animate({
                    'opacity':1
                },400,function(){
                    $('.section1').find('.text p').eq(1).delay(500).animate({
                    'opacity':1
                    },400,function(){
                        $('.section1').find('.text p').eq(2).delay(500).animate({
                            'opacity':1
                        },400,function(){
                            $('.section1').find('.text p').eq(3).delay(500).animate({
                                'opacity':1
                            },400,'easeOutExpo');
                        });
                    });
                });
                
            };

            // if(index == 2){
            //     $('.section2').find('.skill h1').animate({
            //         'right':'0',
            //         'opacity':1
            //     },400,function(){
            //         $('.section2').find('.skill span').animate({
            //             'right':'0',
            //             'opacity':1
            //         },400,function(){
            //             $('.section2').find('.skill p').eq(0).animate({
            //                 'right':'0',
            //                 'opacity':1
            //             },400,function(){
            //                 $('.section2').find('.skill p').eq(1).animate({
            //                     'right':'0',
            //                     'opacity':1
            //                 },400,function(){
            //                     $('.section2').find('.skill p').eq(2).animate({
            //                         'right':'0',
            //                         'opacity':1
            //                     },400,function(){
            //                         $('.section2').find('.skill p').eq(3).animate({
            //                             'right':'0',
            //                             'opacity':1
            //                         },400,function(){
            //                             $('.section2').find('.skill p').eq(4).animate({
            //                                 'right':'0',
            //                                 'opacity':1
            //                             },400,function(){
            //                                 $('.section2').find('.skill p').eq(5).animate({
            //                                     'right':'0',
            //                                     'opacity':1
            //                                 },400,function(){
            //                                     $('.section2').find('.skill p').eq(6).animate({
            //                                         'right':'0',
            //                                         'opacity':1
            //                                     },400,function(){
            //                                         $('.section2').find('.skill p').eq(7).animate({
            //                                             'right':'0',
            //                                             'opacity':1
            //                                         },400,function(){
            //                                             $('.section2').find('.skill p').eq(8).animate({
            //                                                 'right':'0',
            //                                                 'opacity':1
            //                                             },400,function(){
            //                                                 $('.section2').find('.skill p').eq(9).animate({
            //                                                     'right':'0',
            //                                                     'opacity':1
            //                                                 },400,'easeOutExpo');
            //                                             });
            //                                         });
            //                                     });
            //                                 });
            //                             });
            //                         });
            //                     });
            //                 });
            //             });
            //         });
            //     })
            // };

            // if(index == 3){
            //     $('.section3').find('.demo .smDemo').eq(1).css({
            //         'z-index':5
            //     });
            //     $('.section3').find('.demo .smDemo').eq(4).css({
            //         'z-index':5
            //     });

            //     $('.section3').find('.demo .smDemo').eq(0).animate({
            //         left:0
            //     },600,'easeOutExpo');
            //     $('.section3').find('.demo .smDemo').eq(1).animate({
            //         top:0,
            //         opacity:1
            //     },600,'easeOutExpo');
            //     $('.section3').find('.demo .smDemo').eq(2).animate({
            //         right:0
            //     },600,'easeOutExpo');
            //     $('.section3').find('.demo .smDemo').eq(3).animate({
            //         left:0
            //     },600,'easeOutExpo');
            //     $('.section3').find('.demo .smDemo').eq(4).animate({
            //         bottom:0,
            //         opacity:1
            //     },600,'easeOutExpo');
            //     $('.section3').find('.demo .smDemo').eq(5).animate({
            //         right:0
            //     },600,'easeOutExpo');
            // };

            if(index == 4){

            };

            if(index == 5){

            };
        }
    });
    
});

