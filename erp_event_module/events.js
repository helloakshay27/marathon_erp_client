$(document).ready(function () {
  // Adding click event listener to tab elements within '.pro-radio-tabs2'
  $(".pro-radio-tabs2 .pro-radio-tabs__tab").click(function () {
    $(".pro-radio-tabs2 .pro-radio-tabs__tab").removeClass(
      "pro-radio-tabs__tab__selected"
    );
    $(".pro-radio-tabs2 .ant-radio").removeClass("ant-radio-checked");
    $(this).addClass("pro-radio-tabs__tab__selected");
    $(this).find(".ant-radio").addClass("ant-radio-checked");
  });

  // Adding click event listener to tab elements within '.pro-radio-tabs1'
  $(".pro-radio-tabs1 .pro-radio-tabs__tab").click(function () {
    $(".pro-radio-tabs1 .pro-radio-tabs__tab").removeClass(
      "pro-radio-tabs__tab__selected"
    );
    $(".pro-radio-tabs1 .ant-radio").removeClass("ant-radio-checked");
    $(this).addClass("pro-radio-tabs__tab__selected");
    $(this).find(".ant-radio").addClass("ant-radio-checked");
  });

  // Adding click event listener to tab elements within '.pro-radio-tabs3'
  $(".pro-radio-tabs3 .pro-radio-tabs__tab").click(function () {
    $(".pro-radio-tabs3 .pro-radio-tabs__tab").removeClass(
      "pro-radio-tabs__tab__selected"
    );
    $(".pro-radio-tabs3 .ant-radio").removeClass("ant-radio-checked");
    $(this).addClass("pro-radio-tabs__tab__selected");
    $(this).find(".ant-radio").addClass("ant-radio-checked");
  });

  $("#RFQ-tab").click(function () {
    $(".rfq-tab-hide").hide();
  });

  $("#Auction-tab").click(function () {
    $(".rfq-tab-hide").show();
  });

  $(".delivery .ant-radio").click(function () {
    $(this).addClass("ant-radio-checked");
  });
});

function toggleIcon(collapseId) {
    var iconSpan = document.getElementById(collapseId + "-icon");
    var icon = iconSpan.querySelector("i");
    var collapseElement = document.getElementById(collapseId);
  
    // Toggle between plus and minus icons based on the current state
    if (collapseElement.classList.contains("show")) {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  }
  
