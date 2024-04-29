$(function () {
    /**https://sisiblog.tistory.com/315 */
    const html = document.documentElement;
    const canvases = {
        // hero: { canvas: document.getElementById("here"), context: null },
        crown: { canvas: document.getElementById("crown"), context: null },
        duo: { canvas: document.getElementById("duo"), context: null },
        // custom: { canvas: document.getElementById("custom"), context: null },
        // sport: { canvas: document.getElementById("sport"), context: null },
        // wellness: { canvas: document.getElementById("wellness"), context: null },
        // charger: { canvas: document.getElementById("charger"), context: null },
    };


    const frameCounts = {
        // hero: 148,
        crown: 100,
        duo: 178,
        // custom: 80,
        // sport: 100,
        // wellness: 129,
        // charger: 111
    };
    const currentFrames = {
        // hero: index => `/assets/landings/connected-e4/00.hero/${index.toString().padStart(5, '0')}.jpg`,
        crown: index => `/assets/landings/connected-e4/01.crown/${index.toString().padStart(5, '0')}.jpg`,
        duo: index => `/assets/landings/connected-e4/02.duo/${index.toString().padStart(5, '0')}.jpg`,
        // custom: index => `/assets/landings/connected-e4/04.custom/${index.toString().padStart(5, '0')}.jpg`,
        // sport: index => `/assets/landings/connected-e4/05.sport/${index.toString().padStart(5, '0')}.jpg`,
        // wellness: index => `/assets/landings/connected-e4/06.wellness/${index.toString().padStart(5, '0')}.jpg`,
        // charger: index => `/assets/landings/connected-e4/07.charger/${index.toString().padStart(5, '0')}.jpg`
    };

    // 이미지 프리로드 함수
    const preloadImages = canvasName => {
        for (let i = 1; i < frameCounts[canvasName]; i++) {
            const img = new Image();
            img.src = currentFrames[canvasName](i);
        }
    };

    // 캔버스 요소를 초기화하고 첫 번째 이미지를 로드하는 함수
    const initializeCanvas = canvasName => {
        const canvasObj = canvases[canvasName];
        canvasObj.context = canvasObj.canvas.getContext("2d");
        const img = new Image();
        img.src = currentFrames;
        img.onload = function () {
            canvasObj.context.drawImage(img, 0, 0);
        };
    };

    // 이미지를 업데이트하는 함수
    const updateImage = (canvasName, index) => {
        const canvasObj = canvases[canvasName];
        const img = new Image();
        img.src = currentFrames[canvasName](index);
        img.onload = function () {
            canvasObj.context.clearRect(0, 0, canvasObj.canvas.width, canvasObj.canvas.height);
            canvasObj.context.drawImage(img, 0, 0);
        };
    };
    // 각 캔버스에 대해 프레임 이미지를 프리로드
    Object.keys(canvases).forEach(canvasName => preloadImages(canvasName));

    // 각 캔버스에 대해 초기화
    Object.keys(canvases).forEach(canvasName => initializeCanvas(canvasName));


    // GSAP을 사용하여 스크롤 이벤트 처리
    gsap.to(window, {
        scrollTrigger: {
            trigger: html,
            scrub: true,
            start: 'top top',
            end: '500% bottom',
            // markers: true
        },
        onUpdate: () => {
            const scrollTop = html.scrollTop;
            const maxScrollTop = html.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(
                frameCounts - 1,
                Math.ceil(scrollFraction * frameCount)
            );
            updateImage(frameIndex + 1);
        }
    });

    gsap.from('[data-txt="scale"] span', {
        scrollTrigger: {
            trigger: '[data-txt="scale"]',
            scrub: 0,
            start: '0 80%',
            end: '100% 100%',
            markers: true,
        },
        opacity: 0,
        stagger: 1,
        scale: 5
    })
});
