$(function() {
  var $navMethods = $("#nav-methods"),
      $navFigures = $("#nav-figures"),
      $sectionMethods = $("#sections-methods"),
      $sectionFigures = $("#sections-figures");
  
  $navMethods.click(function(event) {
    $(this).addClass("ui--active");
    $navFigures.removeClass("ui--active");
    $sectionMethods.fadeIn();
    $sectionFigures.fadeOut();
    event.preventDefault();
  });

  $navFigures.click(function(event) {
    $(this).addClass("ui--active");
    $navMethods.removeClass("ui--active");
    $sectionFigures.fadeIn();
    $sectionMethods.fadeOut();
    event.preventDefault();
  });
});
