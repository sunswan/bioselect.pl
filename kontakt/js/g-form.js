$(
  (function () {
    $(".g-form").submit(function (event) {
      event.preventDefault();

      // The link that was received during the publication phase of the application
      let appLink =
        // "https://script.google.com/macros/s/AKfycbxO-sAVCHLE1vt2dZAofNycb0A2R7HUcJ1G2LTPz17bcwRfO2gZLkAprUJ8zZsLE5IIGA/exec";
        "https://script.google.com/macros/s/AKfycbwK5cQC2pTsWe-QJqY3Gq12dcOuvY4xNP0dIkxXzf5fsV4UiMJDj8OoYbd-zNNFb4IT/exec";

      // success
      let successRespond = "Wiadomość wysłana";

      // error
      let errorRespond = "Nie udało się wysłać wiadomość";

      // Id form
      let form = $("#" + $(this).attr("id"))[0];

      // h2 with the answer form
      let formRespond = $(this).find(".g-form__title_respond");

      // Button
      let submitButton = $(this).find(".g-form__button");

      // FormData
      let fd = new FormData(form);

      $.ajax({
        url: appLink,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        beforeSend: function () {
          if (fd.get("honeypot").length) {
            return false;
          } else {
            fd.delete("honeypot");
          }
          submitButton.prop("disabled", true);
        },
      })
        .done(function (res, textStatus, jqXHR) {
          if (jqXHR.readyState === 4 && jqXHR.status === 200) {
            // Output the form's answer.
            formRespond.html(successRespond).css("color", "#3f5240");

            // Return activity to the submit button
            submitButton.prop("disabled", false);

            // Clearing form fields
            form.reset();
          } else {
            formTitle.css({
              display: "none",
            });
            formRespond.html(errorRespond).css("color", "#3f5240");
            setTimeout(() => {
              formRespond.css({
                display: "none",
              });
              formTitle.css({
                display: "block",
              });

              submitButton.prop("disabled", false);
            }, 5000);

            console.log("Google nie odpowiedziało statusem 200");
          }
        })
        .fail(function (res, textStatus, jqXHR) {
          formRespond
            .html(
              "Nie udało się wysłać wiadomość"
            )
            .css("color", "#3f5240");
          setTimeout(() => {
            formRespond.css({
              display: "none",
            });
            formTitle.css({
              display: "block",
            });
            submitButton.prop("disabled", false);
          }, 5000);

          console.log(
            "Failed to execute query on the path specified in the script"          );
        });
    });
  })(jQuery)
);
