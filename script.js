document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.pedestrian_icon, .spray_icon, .cast_icon, .recreation_icon, .theme_icon, .raw_icon, .polyfil_icon, .foam_icon, .concrete_icon, .construction_icon, .containment_icon, .defence_icon, .spacialty_icon, .marine_icon, .oil_gas_icon, .transport_icon, .infrastructure_icon');

    const backgrounds = document.querySelectorAll('.pedestrian_bg, .spray_bg, .cast_bg, .recreation_bg, .theme_bg, .raw_bg, .polyfil_bg, .foam_bg, .concrete_bg, .construction_bg, .containment_bg, .defence_bg, .spacialty_bg, .infrastructure_bg, .marine_bg, .oil_gas_bg, .transport_bg');

    const boxes = document.querySelectorAll('.pedestrian_box, .spray_box, .cast_box, .recreation_box, .theme_box, .raw_box, .polyfil_box, .foam_box, .concrete_box, .construction_box, .containment_box, .defence_box, .specialty_box, .infrastructure_box, .marine_box, .oil_gas_box, .transport_box,.Right_pedestrian_box, .Right_spray_box, .Right_cast_box, .Right_recreation_box, .Right_theme_box, .Right_raw_box, .Right_polyfil_box, .Right_foam_box, .Right_concrete_box, .Right_construction_box, .Right_containment_box, .Right_defence_box, .Right_specialty_box, .Right_infrastructure_box, .Right_marine_box, .Right_oil_gas_box, .Right_transport_box');

    const images = document.querySelectorAll('.pedestrian_img, .circle_img, .spray_img, .cast_img, .recreation_img, .theme_img, .raw_img, .poly_fil_img, .foam_img, .concrete_img, .construction_img, .defence_img, .specialty_img, .infrastructure_img, .marine_img, .oil_gas_img, .transport_img, .containment_img');

    const links = document.querySelectorAll('.pedestrian_link, .industrial_link, .cast_link, .recreation_link, .theme_link, .raw_link, .polyfill_link, .spray_link, .concrete_link, .construction_link, .defence_link, .spacialty_link, .infrastructure_link, .mining_link, .transport_link, .containment_link, .oil_link');

    const resetAllStyleFun = () => {
        icons.forEach(function (icon) {
            icon.style.width = '0%';
        });

        backgrounds.forEach(function (bg) {
            bg.classList.remove('circle_pull');
        });

        boxes.forEach(function (box) {
            box.style.display = 'none';
        });


        images.forEach(function (img) {
            img.style.opacity = '0';
        });


        links.forEach(function (link) {
            link.style.marginLeft = '-22%';
        });
    }



    const pedestrianIcons = document.querySelectorAll('.pedestrian_icon, .pedestrian_bg');

    pedestrianIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.pedestrian_icon').style.width = '9%';
            document.querySelector('.pedestrian_bg').classList.add('circle_pull');
            document.querySelector('.pedestrian_box').style.display = 'block';
            document.querySelector('.Right_pedestrian_box').style.display = 'block';
            document.querySelector('.pedestrian_img').style.opacity = '1';
            document.querySelector('.pedestrian_link').style.marginLeft = '-24%';
        });
    });


    const sprayIcon = document.querySelectorAll('.spray_icon, .spray_bg');
    sprayIcon.forEach(function (element) {
        element.addEventListener('mouseover', function () {
            resetAllStyleFun()
            document.querySelector('.spray_icon').style.width = '9%';
            document.querySelector('.spray_bg').classList.add('circle_pull');
            document.querySelector('.spray_box').style.display = 'block';
            document.querySelector('.Right_spray_box').style.display = 'block';
            document.querySelector('.spray_img').style.opacity = '1';
            document.querySelector('.industrial_link').style.marginLeft = '-24%';
        });
    });

    const cast_iconIcons = document.querySelectorAll('.cast_icon, .cast_bg');
    cast_iconIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.cast_icon').style.width = '9%';
            document.querySelector('.cast_bg').classList.add('circle_pull');
            document.querySelector('.cast_box').style.display = 'block';
            // TODO ========
            document.querySelector('.Right_cast_box').style.display = 'block';
            
            document.querySelector('.cast_img').style.opacity = '1';
            document.querySelector('.cast_link').style.marginLeft = '-24%';
        });
    });


    const recreationIcons = document.querySelectorAll('.recreation_icon, .recreation_bg');
    recreationIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.recreation_icon').style.width = '9%';
            document.querySelector('.recreation_bg').classList.add('circle_pull');
            document.querySelector('.recreation_box').style.display = 'block';
            document.querySelector('.Right_recreation_box').style.display = 'block';
            document.querySelector('.recreation_img').style.opacity = '1';
            document.querySelector('.recreation_link').style.marginLeft = '-24%';
        });
    });

    const themeIcons = document.querySelectorAll('.theme_icon, .theme_bg');
    themeIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.theme_icon').style.width = '9%';
            document.querySelector('.theme_bg').classList.add('circle_pull');
            document.querySelector('.theme_box').style.display = 'block';
            document.querySelector('.Right_theme_box').style.display = 'block';
            document.querySelector('.theme_img').style.opacity = '1';
            document.querySelector('.theme_link').style.marginLeft = '-24%';
        });
    });
    const rawIcons = document.querySelectorAll('.raw_icon, .raw_bg');
    rawIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.raw_icon').style.width = '9%';
            document.querySelector('.raw_bg').classList.add('circle_pull');
            document.querySelector('.raw_box').style.display = 'block';
            document.querySelector('.Right_raw_box').style.display = 'block';
            document.querySelector('.raw_img').style.opacity = '1';
            document.querySelector('.raw_link').style.marginLeft = '-24%';
        });
    });
    const polyfilIcons = document.querySelectorAll('.polyfil_icon, .polyfil_bg');
    polyfilIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {
            resetAllStyleFun()
            document.querySelector('.polyfil_icon').style.width = '9%';
            document.querySelector('.polyfil_bg').classList.add('circle_pull');
            document.querySelector('.polyfil_box').style.display = 'block';
            document.querySelector('.Right_polyfil_box').style.display = 'block';
            document.querySelector('.poly_fil_img').style.opacity = '1';
            document.querySelector('.notw').style.marginLeft = '-24%';
        });
    });
    const foamIcons = document.querySelectorAll('.foam_icon, .foam_bg');
    foamIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.foam_icon').style.width = '9%';
            document.querySelector('.foam_bg').classList.add('circle_pull');
            document.querySelector('.foam_box').style.display = 'block';
            document.querySelector('.Right_foam_box').style.display = 'block';
            document.querySelector('.foam_img').style.opacity = '1';
            document.querySelector('.spray_link').style.marginLeft = '-24%';
        });
    });

    const concreteIcons = document.querySelectorAll('.concrete_icon, .concrete_bg');
    concreteIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.concrete_icon').style.width = '9%';
            document.querySelector('.concrete_bg').classList.add('circle_pull');
            document.querySelector('.concrete_box').style.display = 'block';
            document.querySelector('.Right_concrete_box').style.display = 'block';
            document.querySelector('.concrete_img').style.opacity = '1';
            document.querySelector('.concrete_link').style.marginLeft = '-24%';
        });
    });


    const marineIcons = document.querySelectorAll('.marine_icon, .marine_bg');
    marineIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.marine_icon').style.width = '9%';
            document.querySelector('.marine_bg').classList.add('circle_pull');
            document.querySelector('.marine_box').style.display = 'block';
            document.querySelector('.Right_marine_box').style.display = 'block';
            document.querySelector('.marine_img').style.opacity = '1';
            document.querySelector('.mining_link').style.marginLeft = '-24%';
        });
    });


    // todo 
    const transportIcons = document.querySelectorAll('.transport_icon, .transport_bg');
    transportIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.transport_icon').style.width = '9%';
            document.querySelector('.transport_bg').classList.add('circle_pull');
            document.querySelector('.transport_box').style.display = 'block';
            document.querySelector('.transport_img').style.opacity = '1';
            document.querySelector('.transport_link').style.marginLeft = '-24%';
        });
    });


    const oil_gasIcons = document.querySelectorAll('.oil_gas_icon, .oil_gas_bg');
    oil_gasIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.oil_gas_icon').style.width = '9%';
            document.querySelector('.oil_gas_bg').classList.add('circle_pull');
            document.querySelector('.oil_gas_box').style.display = 'block';
            document.querySelector('.Right_oil_gas_box').style.display = 'block';
            document.querySelector('.oil_gas_img').style.opacity = '1';
            document.querySelector('.oil_link').style.marginLeft = '-24%';
        });
    });
// 
    const infrastructureIcons = document.querySelectorAll('.infrastructure_icon, .infrastructure_bg');
    infrastructureIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.infrastructure_icon').style.width = '9%';
            document.querySelector('.infrastructure_bg').classList.add('circle_pull');
            document.querySelector('.infrastructure_box').style.display = 'block';
            document.querySelector('.Right_infrastructure_box').style.display = 'block';
            document.querySelector('.infrastructure_img').style.opacity = '1';
            document.querySelector('.infrastructure_link').style.marginLeft = '-24%';
        });
    });
    const spacialtyIcons = document.querySelectorAll('.spacialty_icon, .spacialty_bg');
    spacialtyIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            console.log('first', document.querySelector('.spacialty_link'))
            resetAllStyleFun()
            document.querySelector('.spacialty_icon').style.width = '9%';
            document.querySelector('.spacialty_bg').classList.add('circle_pull');
            document.querySelector('.specialty_box').style.display = 'block';
            document.querySelector('.Right_specialty_box').style.display = 'block';
            document.querySelector('.specialty_img').style.opacity = '1';
            document.querySelector('.spacialty_link').style.marginLeft = '-28%';
        });
    });
    const defenceIcons = document.querySelectorAll('.defence_icon, .defence_bg');
    defenceIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.defence_icon').style.width = '9%';
            document.querySelector('.defence_bg').classList.add('circle_pull');
            document.querySelector('.defence_box').style.display = 'block';
            document.querySelector('.Right_defence_box').style.display = 'block';
            document.querySelector('.defence_img').style.opacity = '1';
            document.querySelector('.defence_link').style.marginLeft = '-24%';
        });
    });
    const containmentIcons = document.querySelectorAll('.containment_icon, .containment_bg');
    containmentIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.containment_icon').style.width = '9%';
            document.querySelector('.containment_bg').classList.add('circle_pull');
            document.querySelector('.containment_box').style.display = 'block';
            document.querySelector('.Right_containment_box').style.display = 'block';
            document.querySelector('.containment_img').style.opacity = '1';
            document.querySelector('.containment_link').style.marginLeft = '-24%';
        });
    });
    const constructionIcons = document.querySelectorAll('.construction_icon, .construction_bg');
    constructionIcons.forEach(function (element) {
        element.addEventListener('mouseover', function () {

            resetAllStyleFun()
            document.querySelector('.construction_icon').style.width = '9%';
            document.querySelector('.construction_bg').classList.add('circle_pull');
            document.querySelector('.construction_box').style.display = 'block';
            document.querySelector('.Right_construction_box').style.display = 'block';
            document.querySelector('.construction_img').style.opacity = '1';
            document.querySelector('.construction_link').style.marginLeft = '-24%';
        });
    });


});