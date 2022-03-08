const projectPlanetButton = document.querySelector(".view-planet-project");
const projectCrowdButton = document.querySelector(".view-crowd-project");
const projectTipButton = document.querySelector(".view-tip-project");
const livePlanetButton = document.querySelector(".live-project");
const projectOverview = document.querySelector(".project-overview");
const projectAlt = document.querySelector(".planet-project-alt");
const projectAltTwo = document.querySelector(".project-alt-two");
const projectAltThree = document.querySelector(".project-alt-three");
const liveCrowdButton = document.querySelector(".live-crowd-button");
const liveTipButton = document.querySelector(".live-tip-button");
displayAltPage = () => {
    projectPlanetButton.addEventListener("click", () => {
        projectOverview.style.display="none";
        projectAlt.style.display="block";
    })
}
displayCrowdPage = () => {
    projectCrowdButton.addEventListener("click", () => {
        projectOverview.style.display="none";
        projectAltTwo.style.display="block";
    })
}
displayTipPage = () =>{
    projectTipButton.addEventListener("click", () => {
        projectOverview.style.display="none";
        projectAltThree.style.display="block";

    })
}

planetButton = () =>{
    livePlanetButton.addEventListener("click", () => {
        location.href = "https://planet-fact-site-eight.vercel.app/";
    })
}
crowdButton = () =>{
    liveCrowdButton.addEventListener("click", () => {
        location.href = "https://crowdfunding-product-page-main-opal.vercel.app/";
    })
}
tipButton = () =>{
    liveTipButton.addEventListener("click", () => {
        location.href = "https://tip-calculator-app-main-tau.vercel.app/";
    })
}
displayAltPage();
planetButton();
displayCrowdPage();
crowdButton();
displayTipPage();
tipButton();