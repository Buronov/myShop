console.log("Main JS is runing..!")
import moment from 'moment';
import momen from 'moment'
// import $ from 'jquery' 



$(function () {
    $("#button_cont").on('click', () => {
        console.log("you clicced Contact button");
        OpenPopupCenter("/contact", 'contact', 1240, 760)
    });

    $("#close_btn").on('click', () => {
        console.log("Pressed Close Button");
        window.opener.location.reload();
        window.close();
    });

    $('#submit_btn').on('click', () => {
        console.log("pressed Submit button");
        const name_t = $('#input_name').val();
        const email_t = $('#input_email').val();
        const text_t = $('textarea').val();
        const params = {
            name: name_t,
            email: email_t,
            text: text_t,
            time: moment().format(),
        };
        console.log(params);
        window.close();

        $.post('/call-me', params, data => {
            console.log("data : ", data);
            window.open.location.reload();
            window.close();
        }, "JSON").fail((err) => {
            console.log("ERROR::: ", err);
        });
    });



});



function OpenPopupCenter(pageURL, title, w, h) {
    let left = Math.round(screen.width / 2 - w / 2);
    let top = Math.round(screen.height / 2 - h / 2);
    window.open(
      pageURL,
      title,
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + w + ", height=" + h + ", top=" + top + ", left=" + left);}