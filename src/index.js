const toggleSubmenuVisibility = (dropdownArrow) => {
    const submenu = document.getElementById("postpartum-dropdown");
    const arrow = document.getElementById(dropdownArrow.id);
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        arrow.innerHTML = " ⏷";
    } else {
        submenu.style.display = "block";
        arrow.innerHTML = " ⏶";
    }
}

