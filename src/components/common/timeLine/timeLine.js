$(".timeLine_main .year .list").each(function (e, target) {
  var $target=  $(target),
    $ul = $target.find("ul");
  $target.height($ul.outerHeight()), $ul.css("position", "absolute");
});
$(".timeLine_main .year>h2>a").click(function(e){
  e.preventDefault();
  $(this).parents(".year").toggleClass("close");
});
