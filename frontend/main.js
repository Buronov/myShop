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
        btfalert();
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
            window.opener.location.reload();
            window.close();
        }, "JSON").fail((err) => {
            console.log("ERROR::: ", err);
        });
    });

    // ************* AUTHOR PAGE *************************
    $("#coding_icon").on('click', () => {
        console.log("Pressed Coding Icon");
        OpenPopupCenter('/input', 'contact', 315, 500);
    });


    // AUTHOR DATABASE
    $('#submit_form').on('click', () => {
        console.log("pressed submit button");
        btfalert();
        const form_name = $('#form_name').val();
        const form_profession = $('#form_profession').val();
        const form_age = $('#form_age').val();
        const form_residence = $('#form_residence').val();
        const form_adress = $('#form_adress').val();
        const form_language1 = $('#form_language1').val();
        const form_language2 = $('#form_language2').val();
        const form_language3 = $('#form_language3').val();
        const form_skills1 = $('#form_skills1').val();
        const form_skills2 = $('#form_skills2').val();
        const form_skills3 = $('#form_skills3').val();
        const form_skills4 = $('#form_skills4').val();
        const form_skills5 = $('#form_skills5').val();
        const form_extra_skills1 = $('#form_extra_skills1').val();
        const form_extra_skills2 = $('#form_extra_skills2').val();
        const form_extra_skills3 = $('#form_extra_skills3').val();
        const form_extra_skills4 = $('#form_extra_skills4').val();
        const work_place = $('#work_place').val();
        const form_service_desc = $('#form_service_desc').val();
        const form_about = $('#form_about').val();
        const parametrs = {
            form_name: form_name,
            profession: form_profession,
            age: form_age,
            residence: form_residence,
            adress: form_adress,
            languages: [form_language1, form_language2, form_language3],
            skills: [form_skills1, form_skills2, form_skills3, form_skills4, form_skills5],
            extra_skills: [form_extra_skills1, form_extra_skills2, form_extra_skills3, form_extra_skills4],
            work_place: work_place,
            service_desc: form_service_desc,
            about_me: form_about,
            time: moment().format(),
        };
        console.log(parametrs);
        setTimeout(() => {
            window.close();
            window.opener.location.reload();
        }, 1000);
        window.opener.location.reload();
        $.post('/input-user', parametrs, data => {
            console.log("data : ", data);
            window.opener.location.reload();
            // window.close();
            
        }, "JSON").fail((err) => {
            console.log("ERROR::: ", err);
        });
    });

});

function btfalert() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      
      Toast.fire({
        icon: 'success',
        title: 'Message Successfully Submitted'
      });
};

function OpenPopupCenter(pageURL, title, w, h) {
    let left = Math.round(screen.width / 2 - w / 2);
    let top = Math.round(screen.height / 2 - h / 2);
    window.open(
      pageURL,
      title,
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + w + ", height=" + h + ", top=" + top + ", left=" + left);};
