$(document).ready(function () {
    $('.menuLogo').click(function () {
        $('.menu').toggleClass('active');
    });
});

function createDot() {
    const dotID = ["dot1", "dot2", "dot3", "dot4", "dot5", "dot6", "dot7"]

    d3.select("body")
        .insert("div", ":first-child") //inserts before first child of parent (body)
        .attr("id", "dotContainer");

    for (let i = 0; i < dotID.length; i++) {
        d3.select("#dotContainer")
            .insert("div")
            .classed("dot", true)
            .attr("id", dotID[i]);
    };
};

createDot();

// function trackerShadow() {

//     const shadowList = document.querySelectorAll(".shadow");

//     for (let i = 0; i < shadowList.length; i++) {

//         document.addEventListener('mousemove', (e) => {
//             shadowList[i].style.cssText = `
//             left: ${e.clientX}px;
//             top: ${e.clientY}px;
//             `;
//         });

//         document.onload = toStart();

//         function toStart() {
//             shadowList[i].style.cssText = `
//             left: 50vw;
//             top: -1vh;
//             `;
//         };
//     };
// };

// trackerShadow();

// var videoSource = new Array();
// videoSource[0] = 'assets/video/featherFloating.mp4'
// videoSource[1] = 'assets/video/angryGeese.mp4'
// videoSource[2] = 'assets/video/closeup.mp4'
// videoSource[3] = 'assets/video/featherWater.mp4'
// videoSource[4] = 'assets/video/goosebumps.mp4'
// videoSource[5] = 'assets/video/flying.mp4'
// videoSource[6] = 'assets/video/angryGoose.mp4'

// const videoCount = videoSource.length;
// let key = 0;

// document.onload = main();
// function main(videoNum) {

//     console.log(key);
//     d3.select("body")
//         .select("video")
//         .property("src", videoSource[videoNum]);

//     document.getElementById('backgroundVideo').addEventListener('ended', reset, false);
// }

// function reset() {
//     key++;
//     if (key == videoCount) {
//         key = 0;
//         main(key);
//     }
//     else {
//         main(key);
//     }
// }
