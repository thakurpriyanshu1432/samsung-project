function openSideHeader() {
    document.querySelector(".side-header").classList.add("side-header-show");
    document.querySelector(".backdrop").classList.toggle("backdrop-show");
    document.querySelector("body").style.overflow = "hidden"
}

function closeSideHeader() {
    document.querySelector(".side-header").classList.remove("side-header-show");

    document.querySelector(".side-header-main-menu-mobile").classList.remove("side-header-main-menu-mobile-show");

    document.querySelector(".backdrop").classList.toggle("backdrop-show");

    document.querySelector("body").style.overflow = "scroll"


}

function openSideMobile() {
    document.querySelector(".side-header-main-menu-mobile").classList.add("side-header-main-menu-mobile-show");
}

function backToSideHeader() {
    document.querySelector(".side-header-main-menu-mobile").classList.remove("side-header-main-menu-mobile-show");
}

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function removeCustomerService() {
    document.querySelectorAll(".customer-service1")[0].style.display = "none";
}

function dropdownList() {
    document.querySelector(".side-header-main-menu2 > li:nth-child(2)").classList.toggle(".side-header-main-menu2 > li:nth-child(2)-show")
    document.querySelector(".side-header-main-menu2 > li:nth-child(2) img ").classList.toggle("icon-rotate");

}


