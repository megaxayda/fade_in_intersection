$(function () {
  // Handler for .ready() called.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(".fade-in-section").addClass("is-visible");
      }
    });
  });

  observer.observe($(".fade-in-section")[0]);
});
