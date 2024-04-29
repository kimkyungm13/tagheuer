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
    // 캔버스 요소와 컨텍스트 설정
    const canvases = [
        { canvas: document.querySelector("#crown"), width: 1920, height: 610 },
        { canvas: document.querySelector("#duo"), width: 1920, height: 1080 },
        { canvas: document.querySelector("#custom"), width: 1920, height: 1080 },
        { canvas: document.querySelector("#active"), width: 1920, height: 1080 }
    ];

    // 이미지 프레임 수 설정
    const frameCounts = [178, 100, 178, 178];

    // 이미지 로딩 함수 정의
    const currentFrames = [
        index => `/assets/landings/connected-e4/01.crown/${(index + 1).toString().padStart(5, '0')}.jpg`,
        index => `/assets/landings/connected-e4/02.duo/${(index + 1).toString().padStart(5, '0')}.jpg`,
        index => `/assets/landings/connected-e4/04.custom/${(index + 1).toString().padStart(5, '0')}.jpg`,
        index => `/assets/landings/connected-e4/05.sport/${(index + 1).toString().padStart(5, '0')}.jpg`
    ];

    // 이미지 배열 초기화
    const images = [];
    for (let i = 0; i < canvases.length; i++) {
        images.push([]);
    }

    // 애니메이션을 위한 객체 초기화
    const ani1 = { frame: 0 };
    const ani2 = { frame: 0 };
    const ani3 = { frame: 0 };
    const ani4 = { frame: 0 };
    const animators = [ani1, ani2, ani3, ani4];

    // 각 캔버스 및 이미지 배열에 대한 초기화
    for (let i = 0; i < canvases.length; i++) {
        const canvas = canvases[i].canvas;
        const context = canvas.getContext("2d");
        canvas.width = canvases[i].width;
        canvas.height = canvases[i].height;

        for (let j = 0; j < frameCounts[i]; j++) {
            const img = new Image();
            img.src = currentFrames[i](j);
            images[i].push(img);
        }

        // GSAP 애니메이션 설정
        gsap.to(animators[i], {
            frame: frameCounts[i] - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: '.canvas-wrap',
                scrub: 0.5,
                start: '0% 60%',
                end: '+=2000%',
                // markers: true
            },
            onUpdate: () => render(i) // 콜백 함수 설정
        });

        images[i][0].onload = () => render(i);
    }

    // 렌더링 함수 정의
    function render(index) {
        const canvas = canvases[index].canvas;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[index][animators[index].frame], 0, 0);
    }


    /** h2.title scale 반복 */
    const scaleElements = document.querySelectorAll('[data-txt="scale"]');

    scaleElements.forEach(element => {
        gsap.from(element.querySelectorAll('span'), {
            scrollTrigger: {
                trigger: element,
                scrub: 0,
                start: '0 90%',
                end: "+=100%",
                // markers: true,
            },
            delay: 0.4,
            stagger: 0.5,
            opacity: 0,
            scale: 5
        });
    });

    /**배경이미지 변경 */
    ScrollTrigger.create({
        trigger: `[data-theme="white"]`,
        start: "0% 0%",
        end: "100% 50%",
        // markers:true,
        toggleClass: {
            targets: "body",
            className: "white",
        },
    })
    /** sc-features list 반복 */
    const list = document.querySelectorAll('.sc-features');
    list.forEach(element => {
        gsap.from(element.querySelectorAll('.list li,.title-wrap,.list >.btn-arrow'), {
            scrollTrigger: {
                trigger: element,
                scrub: 0,
                start: '0 60%',
                end: "100% 100%",
                markers: true,
            },
            stagger: 0.5,
            opacity: 0,
            yPercent: 50
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

    gsap.to('.sc-design .canvas-wrap ', {
        scrollTrigger: {
            trigger: '.sc-design',
            start: '0% 50%',
            scrub: 1,
            toggleClass: {
                targets: 'body',
                className: 'white'
            }
        },
        'clip-path': 'inset(0% 3% 0% 3%)',
    })
    /**sc-tech 텍스트  */
    txtTl = gsap.timeline();
    txtTl.to($('.sc-tech .desc-wrap p'), {
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

    /** product */
    $('.sc-product .item-list-name a').click(function (e) {
        e.preventDefault();
        size = $(this).data('size');
        $('.sc-product .item-list-name a').removeClass('on');
        $(this).addClass('on');
        $(size).addClass('show').siblings().removeClass('show');
    })
});
