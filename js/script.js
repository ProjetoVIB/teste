function openMenu() {
    if (item.style.display == 'flex') {
        item.style.display = 'none'
    } else {
        item.style.display = 'flex'
    }

    if(menu__icon__2.style.display == 'block'){
        menu__icon__2.style.display = 'none'
    }
    else{
        menu__icon__2.style.display = 'block'
    }

    if(menu__icon.style.display == 'none'){
        menu__icon.style.display = 'block'
    }
    else{
        menu__icon.style.display = 'none'
    }

    item.style.backgroundColor = 'rgba(41, 41, 41, 0.9)'
}

function openMap() {
    if (map.style.display == 'block') {
        map.style.display = 'none'
    } else {
        map.style.display = 'block'
    }
}