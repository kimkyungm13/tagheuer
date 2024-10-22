$(function () {
    //상단 메뉴
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() === 0) {
                $('#header').removeClass('skip');
                $('.banner-group').removeClass('top');
            } else {
                $('#header').addClass('skip');
                $('.banner-group').addClass('top');
            }
        });
    });
    /** intro h2 */
    introTl = gsap.timeline();
    introTl.from('.sc-intro .main-title span', {
        stagger: 0.5,
        opacity: 0,
        scale: 3
    }, 'a').from($('.sc-intro h2'), {
        yPercent: 3,
        opacity: 0
    }, 'a').from($('.btn-play'), {
        opacity: 0
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
        yPercent: -20,
    });

    /** sc-design */
    let crownEl = ``;
    for (let index = 0; index < 179; index++) {
        first = (index === 0) ? "on" : "";
        crownEl += `<img src="./assets/landings/connected-e4/01.crown/${index.toString().padStart(5, '0')}.jpg" alt="" class="${first}">`;
    }
    $('.sc-design .canvas-wrap').html(crownEl);

    ScrollTrigger.create({
        trigger: '.sc-design .canvas-wrap',
        start: "0% 100%",
        end: "100% 0%",
        // markers: true,
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
    })

    gsap.to('.sc-design ', {
        scrollTrigger: {
            trigger: '.sc-design .canvas-wrap',
            start: '100% 100%',
            end: '200% 100%',
            scrub: 0,
            // markers: true,
            toggleClass: {
                targets: 'body',
                className: 'white'
            }
        },
        'clip-path': 'inset(0% 10% 0% 10%)',
    })
    // gsap.to(`[data-theme="black"]`, {
    //     scrollTrigger: {
    //         trigger: `[data-theme="black"]`,
    //         start: '0% 100%',
    //         end: '100% 100%',
    //         scrub: 0,
    //         // markers: true
    //         toggleClass: {
    //             targets: 'body',
    //             className: 'black'
    //         }
    //     },
    //     // 'clip-path': 'inset(0% 10% 0% 10%)',
    //     // 'background': '#fff'
    // })

    /** sc-tech */
    let duoEl = ``;
    for (let index = 0; index < 179; index++) {
        first = (index === 0) ? "on" : "";
        duoEl += `<img src="./assets/landings/connected-e4/02.duo/${index.toString().padStart(5, '0')}.jpg" alt="" class="${first}">`;
    }
    $('.sc-tech .canvas-wrap').html(duoEl);

    ScrollTrigger.create({
        trigger: '.sc-tech .canvas-wrap',
        start: "0% 0%",
        end: "100% 0%",
        // markers: true,
        onUpdate: function (self) {
            totalLangth = $('.sc-tech .canvas-wrap img').length;
            idx = Math.round(self.progress * (totalLangth - 1));
            textOn = $('.sc-tech .sub-title');
            currItem = $('.sc-tech .canvas-wrap img.on');
            nextItem = $('.sc-tech .canvas-wrap img').eq(idx);
            if (currItem) {
                currItem.removeClass('on');
            }
            if (nextItem) {
                nextItem.addClass('on')
            }
            if (idx == '1') {
                textOn.addClass('on')
            }
        }
    })

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

        // 'background': '#fff'
    })
    txtTl = gsap.timeline();
    txtTl.to($('.sc-tech h2,.sc-tech .desc-wrap p'), {
        scrollTrigger: {
            trigger: '.sc-tech .canvas-wrap',
            start: '0 80%',
            end: '100% 100%',
            scrub: 0,
            // markers: true
        },


        stagger: 1,
        autoAlpha: 1,
        yPercent: 0,
    },)

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


    /** sc-sport */
    let sportEl = ``;
    for (let index = 0; index < 179; index++) {
        first = (index === 0) ? "on" : "";
        sportEl += `<img src="./assets/landings/connected-e4/05.sport/${index.toString().padStart(5, '0')}.jpg" alt="" class="${first}">`;
    }
    $('.sc-sport .canvas-wrap').html(sportEl);

    ScrollTrigger.create({
        trigger: '.sc-sport .canvas-wrap',
        start: "0% 50%",
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
    gsap.to('.sc-sport ', {
        scrollTrigger: {
            trigger: '.sc-sport .canvas-wrap',
            start: '100% 100%',
            end: '100% 0%',
            scrub: 0,
            markers: true,
            toggleClass: {
                targets: 'body',
                className: 'black'
            }
        },
        'clip-path': 'inset(0% 10% 0% 10%)',
        // 'background': '#fff'
    })
    /** sc-wellness */
    let wellnessEl = ``;
    for (let index = 0; index < 179; index++) {
        first = (index === 0) ? "on" : "";
        wellnessEl += `<img src="./assets/landings/connected-e4/06.wellness/${index.toString().padStart(5, '0')}.jpg" alt="" class="${first}">`;
    }
    $('.sc-wellness .canvas-wrap').html(wellnessEl);

    ScrollTrigger.create({
        trigger: '.sc-wellness .canvas-wrap',
        start: "0% 50%",
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
        'clip-path': 'inset(0% 10% 0% 10%)',
        'background': '#000'
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
        }
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
    /** h2.title transform 반복 */
    const titleWrap = document.querySelectorAll('[data-trf="up"]');

    titleWrap.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                scrub: 0,
                start: '0 90%',
                end: "+=100%",
                // markers: true,
            },
            yPercent: -100,
            opacity: 1
        });
    });
    // /**배경이미지 변경 */
    ScrollTrigger.create({
        trigger: `[data-theme="orange"]`,
        start: "0% 100%",
        end: "100% 50%",
        // markers:true,
        toggleClass: {
            targets: "body",
            className: "org",
        },
    })
    // ScrollTrigger.create({
    //     trigger: `[data-theme="white"]`,
    //     start: "0% 100%",
    //     end: "100% 50%",
    //     markers: true,
    //     toggleClass: {
    //         targets: "body",
    //         className: "white",
    //     },
    // })
    /** sc-features list 반복 */
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
    });



    /** product */
    $('.sc-product .item-list-name a').click(function (e) {
        e.preventDefault();
        size = $(this).data('size');
        $('.sc-product .item-list-name a').removeClass('on');
        $(this).addClass('on');
        $(size).addClass('show').siblings().removeClass('show');
    })
});
