jQuery(document).ready(function($) {
    $("head").append('<link rel="stylesheet" type="text/css" href="styleswitcher/styleswitcher.css">');
    $("#wrapper").prepend('<div id="styleswitcher"></div>');
    $('#styleswitcher').load('styleswitcher/styleswitcher.html');

    $(document).on("click", "#switch-panel-responsive", function() {
        if ($(this).hasClass('show-panel')) {

            $('.switcher-responsive').css({
                'right': '-240px'
            });
            $('#switch-panel-responsive').removeClass('show-panel');
            $('#switch-panel-resposnive').addClass('hide-panel');
        } else if ($(this).hasClass('hide-panel')) {

            $('.switcher-responsive').css({
                'right': 0
            });
            $('#switch-panel-resposnive').removeClass('hide-panel');
            $('#switch-panel-responsive').addClass('show-panel');
        }
    });
    $(document).on("mouseleave", ".switcher-responsive", function() {
        $('.switcher-responsive').css({
            'right': '-240px'
        });
        $('#switch-panel-responsive').removeClass('show-panel');
        $('#switch-panel-resposnive').addClass('hide-panel');
    });
    $(document).on("click", ".blue", function() {
        $('#csscolors').attr('href', 'css/colors/blue.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $(document).on("click", ".cyan", function() {
        $('#csscolors').attr('href', 'css/colors/cyan.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $(document).on("click", ".green", function() {
        $('#csscolors').attr('href', 'css/colors/green.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $(document).on("click", ".orange", function() {
        $('#csscolors').attr('href', 'css/colors/orange.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $(document).on("click", ".purple", function() {
        $('#csscolors').attr('href', 'css/colors/purple.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $(document).on("click", ".red", function() {
        $('#csscolors').attr('href', 'css/colors/red.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $(document).on("click", ".yellow", function() {
        $('#csscolors').attr('href', 'css/colors/yellow.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $(document).on("click", ".green2", function() {
        $('#csscolors').attr('href', 'css/colors/green2.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $(document).on("click", ".yellow2", function() {
        $('#csscolors').attr('href', 'css/colors/yellow2.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $(document).on("click", ".gray", function() {
        $('#csscolors').attr('href', 'css/colors/gray.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    /**************************************************************************************/

    $(document).on("change", "#pagetransition", function() {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        $('.pt-trigger').data('animation', valueSelected);
    });
    /*************************************************************************/
    $(document).on("click", ".menustyle1", function() {
        $(".main-nav .peicon").removeClass('smallradius');
        $(".main-nav .peicon").addClass('square');

    });
    $(document).on("click", ".menustyle2", function() {
        $(".main-nav .peicon").removeClass('square');
        $(".main-nav .peicon").addClass('smallradius');

    });
    $(document).on("click", ".menustyle3", function() {
        $(".main-nav .peicon").removeClass('square');
        $(".main-nav .peicon").removeClass('smallradius');

    });
    /*************************************************************************/
    $(document).on("click", ".headerstyle1", function() {
        $(".pt-page .backgroundimg fieldset").removeClass('noborderfield');
        $(".pt-page .backgroundimg fieldset").addClass('squarefildset');

    });
    $(document).on("click", ".headerstyle2", function() {
        $(".pt-page .backgroundimg fieldset").removeClass('noborderfield');
        $(".pt-page .backgroundimg fieldset").removeClass('squarefildset');

    });
    $(document).on("click", ".headerstyle3", function() {
        $(".pt-page .backgroundimg fieldset").removeClass('squarefildset');
        $(".pt-page .backgroundimg fieldset").addClass('noborderfield');

    });
    /*************************************************************************/
    $(document).on("click", ".titlestyle1", function() {
        $(".title-container .icon-title").removeClass('squaretitle');
        $(".title-container .icon-title").addClass('roundedtitle');


    });
    $(document).on("click", ".titlestyle2", function() {
        $(".title-container .icon-title").removeClass('roundedtitle');
        $(".title-container .icon-title").addClass('squaretitle');

    });
    $(document).on("click", ".titlestyle3", function() {
        $(".title-container .icon-title").removeClass('squaretitle');
        $(".title-container .icon-title").removeClass('roundedtitle');
    });
    /***********************************************************************/

$(document).on("click", ".layoutmode1", function() {
        $("body").addClass('darkmode');
    });
$(document).on("click", ".layoutmode2", function() {
        $("body").removeClass('darkmode');
    });

});