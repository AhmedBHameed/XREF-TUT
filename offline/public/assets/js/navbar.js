var NavBarClass = (function () {
    var instance;
    function NavBar() {
        this.navBar;
        this.burgger;
        this.bg;
    }
    var fn = NavBar.prototype;
    fn.init = function() {
        this.navBar = $('.navigation .hamburger a');
        this.burgger = $('.navigation .fixed-menu');
        this.bg = $('.bg-brightness');
        this.events();
        return this;
    }
    fn.events = function() {
        var self = this;
        $(document).on('click', function(e) {
            e.stopPropagation();
            let el = $(e.target || e.touches[0].target);
            if (el.is('.navigation .hamburger a i') || el.is('.navigation .hamburger a')) {
                if (!self.burgger.hasClass('in')) {
                    self.show();
                    return false;
                } else if (self.burgger.hasClass('in')) {
                    self.hide();
                    return false;
                }
            } else {
                if (el.closest('.fixed-menu').is('.fixed-menu')) {
                    if (el.is('.dropdown') || el.closest('.dropdown').is('.dropdown')) {
                        let menu = el.closest('.dropdown');
                        menu.find(' > .triangle').toggleClass('collapseList');
                        if (menu.next().is('.menu-list')) menu.next().slideToggle();
                        return false;
                    } else {
                        self.hide();
                    }
                } else {
                    self.hide();
                }
            }
        });
    }
    fn.show = function() {
        this.burgger.removeClass('out').addClass('in');
        this.bg.fadeTo(300, 0.6);
        $('body').css({margin: '0', height: "100%", overflow: "hidden"});
    }
    fn.hide = function() {
        this.burgger.removeClass('in').addClass('out');
        this.bg.fadeOut(300);
        $('body').css({margin: '0', height: "auto", overflow: "auto"});
    }
    
    return {
        getInstance: function () {
            if (!instance) {
                instance = new NavBar();
            }
            return instance;
        }
    };

}());