$(function () {
    /** 메뉴 스크롤 */
    let lastScroll = 0;
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        if (curr >= 100) {
            $('header').addClass('skip');
            $('.banner-group').addClass('top');
            if (curr > lastScroll) {
                $('header').addClass('wheel')
            } else {
                $('header').removeClass('wheel')
                $('.banner-group').removeClass('top');

            }
        } else {
            $('header').removeClass('wheel')
            $('header').removeClass('skip')
        }
        lastScroll = curr;
    })
    /** menu */
    $('.menu .item').hover(function () {
        $(this).find('.dropdown-menu').addClass('show')
    }, function () {

        $(this).find('.dropdown-menu').removeClass('show')
    })
    /** intro h2 */
    introTl = gsap.timeline();
    introTl.to('.sc-intro .bg-img', {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    })
        .from('.sc-intro .main-title span', {
            stagger: 0.5,
            opacity: 0,
            scale: 3
        }, 'a').from($('.sc-intro h2'), {
            yPercent: 100,
            opacity: 0
        }, 'a').from($('.btn-play'), {
            opacity: 0
        },).from('.sc-intro .watch-group', {
            opacity: 0,
            yPercent: 10
        });

    /** sc-intro watch */
    let leftEl = ``;
    for (let index = 0; index < 91; index++) {
        first = (index === 0) ? "on" : "";
        leftEl += `<img src="./assets/landings/connected-e4/00.hero/left/${index.toString().padStart(5, '0')}.png" alt="" class="${first}">`;
    }
    $('.sc-intro .wh-left').html(leftEl);

    ScrollTrigger.create({
        trigger: '.sc-intro',
        start: "-10% 0%",
        end: "100% 100%",
        // markers: true,
        onUpdate: function (self) {
            totalLangth = $('.sc-intro .wh-left img').length;
            idx = Math.round(self.progress * (totalLangth - 1));

            currItem = $('.sc-intro .wh-left img.on');
            nextItem = $('.sc-intro .wh-left img').eq(idx);

            if (currItem) {
                currItem.removeClass('on');
            }
            if (nextItem) {
                nextItem.addClass('on')
            }
        },
    });
    let rightEl = ``;
    for (let index = 0; index < 91; index++) {
        first = (index === 0) ? "on" : "";
        rightEl += `<img src="./assets/landings/connected-e4/00.hero/right/${index.toString().padStart(5, '0')}.png" alt="" class="${first}">`;
    }
    $('.sc-intro .wh-right').html(rightEl);

    ScrollTrigger.create({
        trigger: '.sc-intro',
        start: "-10% 0%",
        end: "100% 0%",
        // markers: true,
        onUpdate: function (self) {
            totalLangth = $('.sc-intro .wh-right img').length;
            idx = Math.round(self.progress * (totalLangth - 1));

            currItem = $('.sc-intro .wh-right img.on');
            nextItem = $('.sc-intro .wh-right img').eq(idx);

            if (currItem) {
                currItem.removeClass('on');
            }
            if (nextItem) {
                nextItem.addClass('on')
            }
        }
    });
    gsap.to('.sc-intro .item', {
        scrollTrigger: {
            trigger: '.sc-intro',
            start: "-10% 0%",
            end: '100% 100%',
            // markers: true,
            scrub: 0
        },
        yPercent: -30,
    });


    /** h2.title scale 반복 */
    const titleWrap = document.querySelectorAll('[data-trf="up"]');
    titleWrap.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                scrub: 0,
                start: '0 90%',
                end: "100% 100%",
                // markers: true,
            },
            yPercent: -100,
            opacity: 1
        });
    });


    /** sc-design */
    let crownEl = ``;
    for (let index = 0; index < 179; index++) {
        first = (index === 0) ? "on" : "";
        crownEl += `<img src="./assets/landings/connected-e4/01.crown/${index.toString().padStart(5, '0')}.jpg" alt="" class="${first}">`;
    }
    $('.sc-design .canvas-wrap').html(crownEl);

    const crownTl = gsap.timeline();
    crownTl.to('.sc-design .canvas-wrap', {
        scrollTrigger: {
            trigger: '.sc-design .canvas-wrap',
            start: "0% 100%",
            end: "100% 0%",
            onUpdate: function (self) {
                totalLangth = $('.sc-design .canvas-wrap img').length;
                idx = Math.round(self.progress * (totalLangth - 1));

                currItem = $('.sc-design .canvas-wrap img.on');
                nextItem = $('.sc-design .canvas-wrap img').eq(idx);

                if (currItem) {
                    currItem.removeClass('on');
                }
                if (nextItem) {
                    nextItem.addClass('on')
                }
            }
        }
    })
    gsap.to('.sc-design', {
        scrollTrigger: {
            trigger: '.sc-design',
            start: '0% 100%',
            end: '100% 0%',
            // markers: 'true',
            toggleClass: {
                targets: '.sc-design',
                className: 'black'
            }
        }
    })

    /** sc-tech */
    let duoEl = ``;
    for (let index = 0; index < 179; index++) {
        first = (index === 0) ? "on" : "";
        duoEl += `<img src="./assets/landings/connected-e4/02.duo/${index.toString().padStart(5, '0')}.jpg" alt="" class="${first}">`;
    }
    $('.sc-tech .canvas-wrap').html(duoEl);
    gsap.from('.sc-tech ', {
        scrollTrigger: {
            trigger: '.sc-tech .canvas-wrap',
            start: '0% 100%',
            end: '100% 100%',
            scrub: 0,
            // markers: true,
            // toggleClass: {
            //     targets: 'body',
            //     className: 'white'
            // }
        },
        'clip-path': 'inset(0% 10% 0% 10%)',
    })
    const techTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-tech .canvas-wrap',
            start: "0% 0%",
            end: "100% 0%",
            scrub: 0,
            onEnter: function () {
            },
            onUpdate: function (self) {
                totalLangth = $('.sc-tech .canvas-wrap img').length;
                idx = Math.round(self.progress * (totalLangth - 1));
                currItem = $('.sc-tech .canvas-wrap img.on');
                nextItem = $('.sc-tech .canvas-wrap img').eq(idx);
                techH3 = $('.sc-tech .info-text .text-cont h3')
                list01 = $('.sc-tech .desc-wrap p.item01')
                list02 = $('.sc-tech .desc-wrap p.item02')
                list03 = $('.sc-tech .desc-wrap p.item03')
                idxTl = gsap.timeline(function () {
                    scrollTrigger({
                        scrub: 0
                    })
                });
                if (currItem) {
                    currItem.removeClass('on');
                }
                if (nextItem) {
                    nextItem.addClass('on')
                }
            },
        }
    });
    techTl.to('.sc-tech .info-text .text-cont', {
        autoAlpha: 1,
        y: 0
    },).to('.sc-tech .info-text .text-cont .desc-wrap p.item01', {
        autoAlpha: 0,
        yPercent: -30
    },).to('.sc-tech .info-text .text-cont .desc-wrap p.item02', {
        autoAlpha: 1,
        y: 0
    },).to('.sc-tech .info-text .text-cont .desc-wrap p.item02', {
        autoAlpha: 0,
        yPercent: -30
    },).to('.sc-tech .info-text .text-cont .desc-wrap p.item03', {
        autoAlpha: 1,
        y: 0
    },).to('.sc-tech .info-text .text-cont', {
        autoAlpha: 0,
        yPercent: -30
    },)
        //     .to($('.sc-tech h3,.sc-tech .desc-wrap p.item01'), {
        //     scrollTrigger: {
        //         trigger: '.sc-tech .canvas-wrap',
        //         start: '100% 0%',
        //         end: '100% 100%',
        //         scrub: 0,
        //         // markers: true,
        //     },
        //     // stagger: 1,
        //     opacity: 1,
        //     yPercent: -100,
        // },)

        .to('.sc-tech ', {
            scrollTrigger: {
                trigger: '.sc-tech .sticky',
                start: '100% 0%',
                end: '100% 100%',
                scrub: 0,
                onLeave: function () {
                    gsap.to('.sc-tech', {
                        scrollTrigger: {
                            trigger: '.sc-tech',
                            start: '100% 100%',
                            end: '100% 0%',
                            scrub: 0,  // scrub을 true로 설정하여 애니메이션이 스크롤과 동기화되도록 함
                            // markers: true,

                        },
                        'clip-path': 'inset(0% 10% 0% 10%)',
                    });
                }
                // markers: true,
                // toggleClass: {
                //     targets: 'body',
                //     className: 'white'
                // }
            },

        })


    /** h2.title scale 반복 */
    const scaleElements = document.querySelectorAll('[data-txt="scale"]');
    const titleTl = gsap.timeline();
    scaleElements.forEach(element => {
        titleTl.from(element.querySelector('span:first-child'), {
            scrollTrigger: {
                trigger: element,
                scrub: 0,
                start: '0 60%',
                end: "50% 100%",
                // markers: true,
            },
            opacity: 0,
            // duration: 0.2
        })
            .from(element.querySelectorAll('span:not(.first)'), {
                scrollTrigger: {
                    trigger: element,
                    scrub: 0,
                    start: '0 30%',
                    end: "100% 100%",
                    // markers: true,
                },
                // delay: 0.9,
                stagger: 0.5,
                opacity: 0,
                scale: 5,
                transformOrigin: "top center"
            });
    });


    /** sc-custom */
    let customEl = ``;
    for (let index = 0; index < 179; index++) {
        first = (index === 0) ? "on" : "";
        customEl += `<img src="./assets/landings/connected-e4/04.custom/${index.toString().padStart(5, '0')}.jpg" alt="" class="${first}">`;
    }
    $('.sc-custom .canvas-wrap').html(customEl);

    const customTl = gsap.timeline();

    customTl.to('.sc-custom .canvas-wrap', {
        scrollTrigger: {
            trigger: '.sc-custom .canvas-wrap',
            start: "0% 100%",
            end: "100% 0%",
            // markers: true,
            onUpdate: function (self) {
                const totalLength = $('.sc-custom .canvas-wrap img').length;
                const idx = Math.round(self.progress * (totalLength - 1));

                const currItem = $('.sc-custom .canvas-wrap img.on');
                const nextItem = $('.sc-custom .canvas-wrap img').eq(idx);

                if (currItem.length) {
                    currItem.removeClass('on');
                }
                if (nextItem.length) {
                    nextItem.addClass('on');
                }
            },
            onLeave: function () {
                gsap.to('.sc-custom', {
                    scrollTrigger: {
                        trigger: '.sc-custom',
                        start: '100% 100%',
                        end: '100% 0%',
                        scrub: 0,  // scrub을 true로 설정하여 애니메이션이 스크롤과 동기화되도록 함
                        // markers: true,
                        toggleClass: {
                            targets: 'body',
                            className: 'grey'
                        }
                    },
                    'clip-path': 'inset(0% 10% 0% 10%)',
                });
            }
        }
    });


    /** sc-features list 반복*/
    const list = document.querySelectorAll('.sc-features');
    list.forEach(element => {
        gsap.from(element.querySelectorAll('.list li,.title-wrap,.list >.btn-arrow'), {
            scrollTrigger: {
                trigger: element,
                scrub: 0,
                start: '0 60%',
                end: "100% 100%",
                // markers: true,
            },
            stagger: 0.5,
            opacity: 0,
            yPercent: 50
        });
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                scrub: 0,
                start: '100% 100%',
                // end: '100% 100%'
            },
            'clip-path': 'inset(0% 5% 0% 5%)',
        })
        gsap.to('.sc-features.ft01', {
            scrollTrigger: {
                trigger: '.ft01',
                start: '0% 0%',
                // end: '100% 100%',
                toggleClass: {
                    targets: 'body',
                    className: 'black'
                }
            }
        })
        // gsap.to('.sc-features.ft02', {
        //     scrollTrigger: {
        //         trigger: '.ft02',
        //         start: '0% 0%',
        //         // end: '100% 100%',
        //         toggleClass: {
        //             targets: 'body',
        //             className: 'org'
        //         }
        //     }
        // })
        gsap.to('.sc-features.ft03', {
            scrollTrigger: {
                trigger: '.ft03',
                start: '0% 0%',
                end: '100% 100%',

            }, onLeave: function () {
                gsap.to('.sc-features.ft03', {
                    scrollTrigger: {
                        trigger: '.sc-features.ft03',
                        start: '0% 100%',
                        end: '200% 00%',
                        scrub: 0,  // scrub을 true로 설정하여 애니메이션이 스크롤과 동기화되도록 함
                        // markers: true,
                        toggleClass: {
                            targets: 'body',
                            className: 'dark'
                        }
                    },
                    // 'clip-path': 'inset(0% 10% 0% 10%)',
                });
            }
        })

    });
    // ScrollTrigger.create({
    //     trigger: `[data-theme="orange"]`,
    //     start: "0% 0%",
    //     end: "100% 100%",
    //     markers: true,
    //     toggleClass: {
    //         targets: "body",
    //         className: "org",
    //     },
    // })
    /** sc-wellness */
    let wellnessEl = ``;
    for (let index = 0; index < 179; index++) {
        first = (index === 0) ? "on" : "";
        wellnessEl += `<img src="./assets/landings/connected-e4/06.wellness/${index.toString().padStart(5, '0')}.jpg" alt="" class="${first}">`;
    }
    $('.sc-wellness .canvas-wrap').html(wellnessEl);

    ScrollTrigger.create({
        trigger: '.sc-wellness .canvas-wrap',
        start: "0% 0%",
        end: "100% 0%",
        // markers: true,
        onUpdate: function (self) {
            totalLangth = $('.sc-wellness .canvas-wrap img').length;
            idx = Math.round(self.progress * (totalLangth - 1));

            currItem = $('.sc-wellness .canvas-wrap img.on');
            nextItem = $('.sc-wellness .canvas-wrap img').eq(idx);

            if (currItem) {
                currItem.removeClass('on');
            }
            if (nextItem) {
                nextItem.addClass('on')
            }
        }
    })
    gsap.to('.sc-wellness', {
        scrollTrigger: {
            trigger: '.sc-wellness',
            start: '0% 100%',
            end: '100% 100%',
            // markers: true,
            toggleClass: {
                targets: 'body',
                className: 'org'
            }
        }
    })
    gsap.to('.sc-wellness ', {
        scrollTrigger: {
            trigger: '.sc-wellness .canvas-wrap',
            start: '100% 100%',
            end: '100% 0%',
            scrub: 0,
            // markers: true,
            // toggleClass: {
            //     targets: 'body',
            //     className: 'white'
            // }
        },
        // onLeave: function () {
        //     gsap.to('.sc-wellness', {
        //         scrollTrigger: {
        //             trigger: '.sc-wellness',
        //             start: '100% 100%',
        //             end: '100% 0%',
        //             scrub: 0,  // scrub을 true로 설정하여 애니메이션이 스크롤과 동기화되도록 함
        //             // markers: true,
        //             toggleClass: {
        //                 targets: 'body',
        //                 className: 'black'
        //             }
        //         },
        //         'clip-path': 'inset(0% 10% 0% 10%)',
        //     });
        // }
    })

    /** sc-sport */
    let sportEl = ``;
    for (let index = 0; index < 179; index++) {
        first = (index === 0) ? "on" : "";
        sportEl += `<img src="./assets/landings/connected-e4/05.sport/${index.toString().padStart(5, '0')}.jpg" alt="" class="${first}">`;
    }
    $('.sc-sport .canvas-wrap').html(sportEl);

    ScrollTrigger.create({
        trigger: '.sc-sport .canvas-wrap',
        start: "0% 0%",
        end: "100% 0%",
        // markers: true,
        onUpdate: function (self) {
            totalLangth = $('.sc-sport .canvas-wrap img').length;
            idx = Math.round(self.progress * (totalLangth - 1));

            currItem = $('.sc-sport .canvas-wrap img.on');
            nextItem = $('.sc-sport .canvas-wrap img').eq(idx);

            if (currItem) {
                currItem.removeClass('on');
            }
            if (nextItem) {
                nextItem.addClass('on')
            }
        }
    })
    const sportTl = gsap.timeline();
    sportTl.to('.sc-sport ', {
        scrollTrigger: {
            trigger: '.sc-sport',
            start: '100% 100%',
            // end: '200% 100%',
            scrub: 0,
            // markers: true,
            // toggleClass: {
            //     targets: 'body',
            //     className: 'white'
            // }
        },
        'clip-path': 'inset(0% 10% 5% 10%)',
        // 'background': '#fff'
    })


    /** sc-charger */
    let chargerEl = ``;
    for (let index = 0; index < 179; index++) {
        first = (index === 0) ? "on" : "";
        chargerEl += `<img src="./assets/landings/connected-e4/07.charger/${index.toString().padStart(5, '0')}.jpg" alt="" class="${first}">`;
    }
    $('.sc-charger .canvas-wrap').html(chargerEl);

    ScrollTrigger.create({
        trigger: '.sc-charger .canvas-wrap',
        start: "0% 50%",
        end: "100% 0%",
        // markers: true,
        onUpdate: function (self) {
            totalLangth = $('.sc-charger .canvas-wrap img').length;
            idx = Math.round(self.progress * (totalLangth - 1));

            currItem = $('.sc-charger .canvas-wrap img.on');
            nextItem = $('.sc-charger .canvas-wrap img').eq(idx);

            if (currItem) {
                currItem.removeClass('on');
            }
            if (nextItem) {
                nextItem.addClass('on')
            }
        }, onLeave: function () {
            gsap.to('.sc-charger', {
                scrollTrigger: {
                    trigger: '.sc-charger',
                    start: '100% 100%',
                    end: '100% 0%',
                    scrub: 0,  // scrub을 true로 설정하여 애니메이션이 스크롤과 동기화되도록 함
                    // markers: true,
                    toggleClass: {
                        targets: 'body',
                        className: 'grey'
                    }
                },
                'clip-path': 'inset(0% 10% 0% 10%)',
            });
        }
    })

    /** product */
    $('.sc-product .item-list-name a').click(function (e) {
        e.preventDefault();
        size = $(this).data('size');
        $('.sc-product .item-list-name a').removeClass('on');
        $(this).addClass('on');
        $(size).addClass('show').siblings().removeClass('show');
    })

    /** course */
    gsap.to('.sc-course .bg-img', {
        scrollTrigger: {
            trigger: '.sc-course',
            start: '0% 10%',
            end: '100% 100%',
            scrub: 0,
            // markers: true,
        },
        yPercent: -5
    })



    //반복문
    //inset 공통
    $('[data-inset="true"]').each(function (idx, el) {
        startData = $(this).data('start');
        endData = $(this).data('end');
        colorData = $(this).data('color')
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: startData,
                end: endData,
                scrub: 0,
                // markers: true,
                toggleClass: {
                    targets: 'body',
                    className: colorData
                }
            },
            'clip-path': 'inset(0% 10% 0% 10%)',
        })
    })
}) //end