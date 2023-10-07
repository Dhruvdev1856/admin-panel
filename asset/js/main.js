$(document).ready(function () {

    // dashbord dropdown

    $('.aside .main-sidebar .dashboard .subdash').click(function () {
        $('.submenu').slideToggle(1000);
        $('.dashboard .subdash').toggleClass('bg');
    });

    //  invoice dropdown


    $('.aside .main-sidebar .apps .invoice').click(function () {
        $('.subapps').slideToggle(1000);
        $('.aside .main-sidebar .apps .invoice').toggleClass('bg');
    });

    // component dropdown

    $('.aside .main-sidebar .user-interface .components').click(function () {
        $('.subuser-interface').slideToggle(1000);
        $('.aside .main-sidebar .user-interface .components').toggleClass('bg');
    });

    // elements dropdown

    $('.aside .main-sidebar .user-interface .elements ').click(function () {
        $('.subelements').slideToggle(1000);
        $('.aside .main-sidebar .user-interface .elements ').toggleClass('bg');
    });

    // data table dropdown

    $('.aside .main-sidebar .table .data-table ').click(function () {
        $('.subtable').slideToggle(1000);
        $('.aside .main-sidebar .table .data-table ').toggleClass('bg');
    });

    // form dropdown

    $('.aside .main-sidebar .table .forms ').click(function () {
        $('.subforms').slideToggle(1000);
        $('.aside .main-sidebar .table .forms ').toggleClass('bg');
    });

    // user dropdown

    $('.aside .main-sidebar .user-and-page .user ').click(function () {
        $('.subusers').slideToggle(1000);
        $('.aside .main-sidebar .user-and-page .user ').toggleClass('bg');
    });

    // pages dropdown

    $('.aside .main-sidebar .user-and-page .pages ').click(function () {
        $('.subpages').slideToggle(1000);
        $('.aside .main-sidebar .user-and-page .pages ').toggleClass('bg');
    });

    // authorization dropdown

    $('.aside .main-sidebar .user-and-page .authorization ').click(function () {
        $('.subauthorization').slideToggle(1000);
        $('.aside .main-sidebar .user-and-page .authorization ').toggleClass('bg');
    });

    // signout dropdown

    $('.profilepic').click(function () {
        $('.dropdown').toggleClass('show');
    });

    // notification dropdown

    $('.profile .right-nav .bell').click(function () {
        $('.notification').toggleClass('show');
    });

    // mail dropdown

    $('.profile .right-nav .mail-drop').click(function () {
        $('.head-mail').toggleClass('show');
    }); 

    // flag dropdown

    $('.profile .right-nav .flags-drop').click(function () {
        $('.flags').toggleClass('show');
    }); 


    // aside java script

    $('.angles-bar').click(function () {
        $('aside').hide();
    });

    $('.angles-bar').click(function () {
        $('.page-body').addClass('page-body-aside');
    });


    $('.bar').click(function () {
        $('aside').show();
    });

    $('.bar').click(function () {
        $('.page-body').removeClass('page-body-aside');
        $('.page-body').removeClass('margin-l');
    });

    // theme switcher

    $('.themes').click(function () {
        $('html').toggleClass('theme-switcher');
        $('.themes i').toggleClass('bright');

    });

    // calender js

    const daysTag = document.querySelector(".days");
    const currentDate = document.querySelector(".current-date");
    const prevNextIcon = document.querySelectorAll(".icons span");

    let currYear = new Date().getFullYear();
    let currMonth = new Date().getMonth();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const renderCalendar = () => {
        const date = new Date(currYear, currMonth, 1);
        let firstDayofMonth = date.getDay();
        let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
        let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
        let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

        let liTag = "";

        for (let i = firstDayofMonth; i > 0; i--) {
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            let isToday = i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}">${i}</li>`;
        }

        for (let i = lastDayofMonth; i < 6; i++) {
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
        }

        currentDate.innerText = `${months[currMonth]} ${currYear}`;
        daysTag.innerHTML = liTag;
    };

    renderCalendar();

    prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => {
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

            if (currMonth < 0 || currMonth > 11) {
                currYear = icon.id === "prev" ? currYear - 1 : currYear + 1;
                currMonth = currMonth < 0 ? 11 : 0;
            }

            renderCalendar();
        });
    });
});




// map javascript

// Initialize and add the map
// Initialize and add the map






