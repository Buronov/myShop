console.log("Main JS is runing..!")
import moment from 'moment';
import momen from 'moment';
import Swal from 'sweetalert2'
// import $ from 'jquery' 



$(function () {
    // ************* STORE PAGE *************************
    $("#button_cont").on('click', () => {
        console.log("you clicced Contact button");
        OpenPopupCenter("/contact", 'contact', 1240, 760)
    });
    $('#button_author').on('click', () => {
        console.log("You pressed Author Button");
        window.open('/author', '_self');
    });

    $('#button_home').on('click', () => {
        console.log("You pressed Home Button");
        Swal.fire({
            text: 'You Are In Home Page!',
            icon: 'info',
            confirmButtonText: 'Ok'
          });
    });




    // ************* CONTACT PAGE *************************
    $("#close_btn").on('click', () => {
        console.log("Pressed Close Button");
        window.opener.location.reload();
        window.close();
    });

    $('#submit_btn').on('click', () => {
        console.log("pressed Submit button");
        Swal.fire({
            text: 'Message Successfully Submitted',
            icon: 'success',
            confirmButtonText: 'thanks!'
          });
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
        setTimeout(() => {
            window.close();
        }, 2000);
        

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