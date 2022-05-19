<!-- DEBUG-VIEW START 5 4 3 APPPATH/Config/../Views/home/block/scripts.php -->
<!-- DEBUG-VIEW START 4 3 APPPATH/Config/../Views/home/block/scripts.php -->

<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
<script type="text/javascript"  id="debugbar_loader" data-time="1651050641" src="https://homexp.in/?debugbar"></script><script type="text/javascript"  id="debugbar_dynamic_script"></script><style type="text/css"  id="debugbar_dynamic_style"></style>

    
    <meta name="author" content="">
    <meta name="description" content="">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Title -->
    <title>HomeXP - Emi Calculator</title>

    <!--  Favicon -->
    <link rel="shortcut icon" href="https://homexp.in/assets/home/images/favicon.png">

    <!-- CSS -->
    <link rel="stylesheet" href="https://homexp.in/assets/home/css/stylesheet.css?v=1.1">
    <!---Sweet Alert-->
    <link rel="stylesheet" type="text/css" href="https://homexp.in/assets/home/plugins/sweet-alert/sweetalert2.min.css">
    <!---Select2 css-->
    <link href="https://homexp.in/assets/home/plugins/select2/css/select2.min.css" rel="stylesheet">

    <!--summernote css-->
    <link rel="stylesheet" type="text/css" href="https://homexp.in/assets/home/plugins/summernote/summernote-bs4.css">

    <!---DataTables css-->
    <link href="https://homexp.in/assets/home/plugins/datatable/dataTables.bootstrap4.min.css" rel="stylesheet" />
    <link href="https://homexp.in/assets/home/plugins/datatable/responsivebootstrap4.min.css" rel="stylesheet" />
    <link href="https://homexp.in/assets/home/plugins/datatable/fileexport/buttons.bootstrap4.min.css" rel="stylesheet" />

    <link href="https://homexp.in/assets/home/plugins/amazeui-datetimepicker/css/amazeui.datetimepicker.css" rel="stylesheet">
	<link href="https://homexp.in/assets/home/plugins/jquery-simple-datetimepicker/jquery.simple-dtpicker.css" rel="stylesheet">
	<link href="https://homexp.in/assets/home/plugins/pickerjs/picker.min.css" rel="stylesheet">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet">

        <style>
        .utf-listing-img-content-item span{
            left: 0px;
}
    </style>
        <style>
    div.dataTables_wrapper div.dataTables_processing {
        top: 5%!important;
}
    </style>
</head>

<body>
    <!--Loader-->
    <div class="vfx-loader">
        <div class="loader-wrapper">
            <div class="loader-content">
                <div class="loader-dot dot-1"></div>
                <div class="loader-dot dot-2"></div>
                <div class="loader-dot dot-3"></div>
                <div class="loader-dot dot-4"></div>
                <div class="loader-dot dot-5"></div>
                <div class="loader-dot dot-6"></div>
                <div class="loader-dot dot-7"></div>
                <div class="loader-dot dot-8"></div>
                <div class="loader-dot dot-center"></div>
            </div>
        </div>
    </div>
    <!-- Loader end -->
    <!-- Wrapper -->
    <div id="wrapper">
        <!-- Compare Property Widget -->
        <div class="utf-compare-slidebar-area">
            <div class="utf-smt-trigger-item"></div>
            <div class="utf-smt-content">
                <h4>Compare Property
                    <span class="utf-smt-mobile-trigger-item"></span>
                </h4>
                <form method="post" action="https://homexp.in/user/cmp" class="comapare_form">
                    <div class="utf-smt-property-item">
                        <!-- Property -->

                        <p id="error" style="color:red;"></p>
                        <div class="utf-listing-item compact" id="cmp1" style="display:none"> <a href="" id="url1"
                                class="utf-smt-listing-img-container">
                                <div class="utf-remove-compare-item" onclick="rmvcmpr('cmp1')"><i
                                        class="icon-line-awesome-close"></i></div>
                                <div class="utf-listing-badges-item"><span class="for-sale" id="cmp_for1"></span></div>
                                <div class="utf-listing-img-content-item"> <span class="utf-listing-compact-title-item"
                                        id="cmp_title1"></span> </div>
                                <img src="" id="cmp_image1" alt="">
                            </a>
                            <input type="hidden" id="cmp_pid1" required name="pid1">

                        </div>
                        <!-- Property -->
                        <div class="utf-listing-item compact" id="cmp2" style="display:none"> <a href="" id="url1"
                                class="utf-smt-listing-img-container">
                                <div class="utf-remove-compare-item" onclick="rmvcmpr('cmp2')"><i
                                        class="icon-line-awesome-close"></i></div>
                                <div class="utf-listing-badges-item"><span class="for-sale" id="cmp_for2"></span></div>
                                <div class="utf-listing-img-content-item"> <span class="utf-listing-compact-title-item"
                                        id="cmp_title2"></span> </div>
                                <img src="" id="cmp_image2" alt="">
                            </a>
                            <input type="hidden" id="cmp_pid2" required name="pid2">
                            <input type="hidden" id="for" required name="for">
                        </div>
                    </div>
                    <p class="error_msg_cmp" style="color:red;padding-left: 30px;"></p> 
                    <div class="utf-smt-buttons">
                        <button type="submit" class="button">Compare Property</button>
                    </div>

            </div>
            </form>
        </div>
        <!-- Compare Property Widget / End -->


        <!-- DEBUG-VIEW START 1 APPPATH/Config/../Views/home/block/header.php -->
<!-- Header Container -->
<header id="header-container" class="fullwidth">
    <!-- Header -->
    <div id="header">
        <div class="container">
            <div class="left-side">
                <div id="logo"><a href="https://homexp.in/"><img src="https://homexp.in/assets/home/images/logo.png" alt=""></a></div>
                <div class="mmenu-trigger">
                    <button class="hamburger hamburger--collapse" type="button"> <span class="hamburger-box"> <span
                                class="hamburger-inner"></span> </span> </button>
                </div>
                <!-- Main Navigation -->
                <nav id="navigation" class="style-1">
                    <ul id="responsive">
                        <li><a href="https://homexp.in/" >Home</a>
                        </li>
                        <li><a href="https://homexp.in/home/package"
                                >Package</a></li>
                        <li><a https: //homexp.in/user/package"
                                >Property</a>
                            <ul>
                                <li><a href="https://homexp.in/post/Search/Sale">Sale</a></li>
                                <li><a href="https://homexp.in/post/Search/Rent">Rent</a></li>
                                <li><a href="https://homexp.in/post/Search/FarmHouse">Farmhouse</a></li>
                                <li><a href="https://homexp.in/post/Search/Auction">Auction</a></li>
                                <li><a href="https://homexp.in/post/Search/Pre_Auction">Pre Auction</a></li>
                            </ul>
                        </li>
                        <li><a ><span
                                    class="user-name span::after">HomeXP</span></a>
                            <ul>
                                <li><a href="https://homexp.in/Service">Services</a></li>
                                <li><a href="https://homexp.in/Service/loan">Loan</a></li>
                            </ul>
                        </li>
                        <li><a href="https://homexp.in/post/Search/offer"
                                >Offers</a></li>
                       
                        <!-- <li><a href="https://homexp.in/user/about" >About</a></li> -->
                        <li><a href="https://homexp.in/user/contact"
                                >Contact</a></li>
                                <li><a href="https://homexp.in/user/general_alert"
                                >Alert</a></li>
                    
                           
                    </ul>
                </nav>
                <div class="clearfix"></div>
            </div>

            <div class="right-side">
                <!-- Header Widget -->
                <div class="header-widget">
                                        <a href="https://homexp.in/Auth" class="button border"><i class="icon-line-awesome-user"></i><span>Sign
                            In</span></a>
                                        <a href="https://homexp.in/Post/Property" class="button border"><i class="icon-feather-plus-circle"></i>
                        <span>Post Property</span></a>
                </div>
            </div>

        </div>
    </div>
</header>
<div class="clearfix"></div>
<!-- DEBUG-VIEW ENDED 1 APPPATH/Config/../Views/home/block/header.php -->

        
<div class="container" style="margin:20px auto 20px auto;">
    <div class="row">
        <div class="my-account">
            <div class="tabs-container">
                <div class="utf-section-headline-item centered margin-bottom-30 margin-top-0">
                    <div class="utf-welcome-text-item">
                        <h3 class="headline"><span>Emi Calculator</span>Emi Calculator</h3>
                        <p class="utf-slogan-text">Calculate Your Emi per Month Quickly</p>
                    </div>
                </div>
                <hr>
                <div class="col-md-6">
                    <form method="post" action="https://homexp.in/service/emicalculator"class="ajax-form-submit">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-row form-row-wide">
                                    <h4>Loan Amount :</h4>
                                    <input type="text" class="input-text" onkeypress="return isDesimalNumberKey(event)"  name="amount"  placeholder="Enter loan Amount ₹" value="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-row form-row-wide">
                                <h4>Tenure :</h4>
                                    <input type="text" class="input-text" onkeypress="return isDesimalNumberKey(event)"  name="tenure"placeholder="Enter No. of Year" value="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-row form-row-wide">
                                    <h4>Interest Rate  :</h4>
                                    <input type="text" class="input-text" onkeypress="return isDesimalNumberKey(event)"  name="rate" placeholder="Enter Rate of Interest % " value="" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-row form-row-wide">
                                    <input type="submit" class="button full-width border margin-top-10"  id="save_data" value="Calcultate" />
                                </div>
                            </div>
                            
                        </div>	
                    </form>
                </div>
                <div class="col-md-6 offset-md-2">
                    <div class="row" style="text-align:center;">
                        <div class="col-md-12">
                            <h3>Your EMI Per Month will be</h3>
                            <b><h4 id="emi">₹</h4></b>
                        </div>
                        <br>
                        <div class="col-md-6">
                            <h4>Total Interest</h4>
                            <b><h5 id="interest" >₹</h5></b>
                        </div>
                        <br>
                        <div class="col-md-6">
                            <h4>Amount With Interest</h4>
                            <b><h5 id="totalamt" >₹</h5></b>
                        </div>
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                            <div class="form-row form-row-wide">
                                <input type="submit" class="button full-width border margin-top-10"  value="Apply For Loan" />
                            </div>
                        </div>
                        <div class="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<section class="fullwidth" data-background-color="#fbfbfb" style="margin-top:50px;"> 
    <div class="container">
      <div class="row">
		<div class="col-md-12">	
			<div class="utf-section-headline-item centered margin-bottom-30 margin-top-0">
			  <h3 class="headline"><span>Home Loan Calculator</span> Home Loan Calculator</h3>
			  <div class="utf-headline-display-inner-item"></div>
			  <p class="utf-slogan-text">Deside Your Budget</p>
			</div>  
		</div>
        <a href ="https://homexp.in/service/emicalculator">
        <div class="col-md-3 col-sm-6"> 
          <div class="utf-icon-box-item-area">
            <div class="icon-container"><i class="icon-line-awesome-building"></i></div>
            <h3>Emi Calculator</h3>
            <p>Calculate Your Emi per Month Quickly</p>
          </div>
        </div>
        </a>
        <a href ="https://homexp.in/service/loaneligibility">
        <div class="col-md-3 col-sm-6"> 
          <div class="utf-icon-box-item-area">
            <div class="icon-container"><i class="icon-line-awesome-building"></i></div>
            <h3>Loan Eligibility</h3>
            <p>Calculate Your Loan Eligibility Quickly</p>
          </div>
        </div>
        </a>
        <a href ="https://homexp.in/service/balancetransfer">
        <div class="col-md-3 col-sm-6"> 
          <div class="utf-icon-box-item-area">
            <div class="icon-container"><i class="icon-line-awesome-building"></i></div>
            <h3>Balance Transfer</h3>
            <p>Calculate Your Balance Transfer Quickly</p>
          </div>
        </div>
        </a>
        <a href ="https://homexp.in/user/contact">
		<div class="col-md-3 col-sm-6"> 
          <div class="utf-icon-box-item-area">
            <div class="icon-container"><i class="icon-material-outline-business"></i></div>
            <h3>Become An Agent</h3>
            <p>Become an Agent</p>
          </div>
        </div>
        </a>
      </div>
    </div>
</section>
  <!-- Container / End --> 
  
        <!-- DEBUG-VIEW START 2 APPPATH/Config/../Views/home/block/footer.php -->
<!-- Footer -->
<div id="footer" style="margin-top: 30px;">
    <div class="container">
        <div class="row">
            <div class="col-md-5 col-sm-12 col-xs-12">
                <a href="https://homexp.in/"><img class="footer-logo" src="https://homexp.in/assets/home/images/HOMEXP w.png" alt=""></a>
                <h5><strong style="color:#fff;">About Us</strong></h5>
                <p style="color:#fff;"> HomeXp is India's Most Popular Property marketplace to buy,<br> 
                    sell, and rent residential and commercial properties.</p>
                <h5><strong style="color:#fff;">Contact Us</strong></h5>
          
                <p style="color:#fff;"><i class="icon-line-awesome-whatsapp"></i> <span> (+91) 92652 31400</span></p>
                <p style="color:#fff;"><i class="icon-material-outline-email"></i><span> homexp.in@gmail.com</span></p>
          
            </div>
            <div class="col-md-2 col-sm-2 col-xs-6">
                <h4 style="color:#fff;">Useful Links</h4>
                <ul class="utf-footer-links-item">
                    <li><a href="https://homexp.in/">Home</a></li>
                    <li><a href="https://homexp.in/user/about">About Us</a></li>
                    <li><a href="https://homexp.in/user/term">Terms and Condition</a></li>
                    <li><a href="https://homexp.in/user/privacy">Privacy Policy</a></li>
                    <!-- <li><a href="#">Properties</a></li> -->
                    <li><a href="https://homexp.in/user/contact">Contact</a></li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-3 col-xs-6">
               <h4 style="color:#fff;">Other Links</h4>
                <ul class="utf-footer-links-item">
                    <li><a href="https://homexp.in/service/emicalculator">Emi Calculator</a></li>
                    <li><a href="https://homexp.in/service/balancetransfer">Balance Transfer</a></li>
                    <li><a href="https://homexp.in/home/package">Package</a></li>
                    <li><a href="https://homexp.in/Service">HomeXp Service</a></li>
                    <li><a href="https://homexp.in/Service/loan">HomeXp Loans</a></li>
                    
                    <!-- <li><a href="#">Favorites</a></li> -->
                </ul>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-6">
                <div> 
                    <label><strong style="color:#fff;"> Keep In Touch </strong></label>
					<form action="https://homexp.in/user/subscribe" class="ajax-subscribe-submit">
                        <input name="email" type="email" placeholder="Enter Email" required>                
                        <p class="form_proccessing_email" style="color:green;"></p>
                        <p class="error_msg_email" style="color:red"></p> 
                        <button style="background-color:#424242;"class="button border" name="submit"><i class="icon-feather-mail"></i>
                        <span>Subscribe</span></button>
                    </form>
                </div>                
            </div>			
		</div>
        
        <div class="row">
            <div class="col-md-12">
                <div class="copyrights">Copyright © 2020 All Rights Reserved.</div>
            </div>
        </div>
    </div>
</div>

<!-- DEBUG-VIEW ENDED 2 APPPATH/Config/../Views/home/block/footer.php -->
        <div id="backtotop"><a href="#"></a></div>
    </div>
    <!-- Wrapper End -->
    <!-- DEBUG-VIEW START 3 APPPATH/Config/../Views/home/block/scripts.php -->
<script>
var PATH = 'https: //homexp.in/';
</script>
<!-- Scripts --> 
<script src="https://homexp.in/assets/home/scripts/jquery-3.3.1.min.js"></script> 
<script src="https://homexp.in/assets/home/scripts/chosen.min.js"></script> 
<script src="https://homexp.in/assets/home/scripts/magnific-popup.min.js"></script> 
<script src="https://homexp.in/assets/home/scripts/owl.carousel.min.js"></script> 
<script src="https://homexp.in/assets/home/scripts/rangeSlider.js"></script> 
<script src="https://homexp.in/assets/home/scripts/sticky-kit.min.js"></script> 
<script src="https://homexp.in/assets/home/scripts/slick.min.js"></script> 
<script src="https://homexp.in/assets/home/scripts/masonry.min.js"></script> 
<script src="https://homexp.in/assets/home/scripts/mmenu.min.js"></script> 
<script src="https://homexp.in/assets/home/scripts/tooltips.min.js"></script> 
<script src="https://homexp.in/assets/home/scripts/typed.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.devbridge-autocomplete/1.4.11/jquery.autocomplete.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.devbridge-autocomplete/1.4.11/jquery.autocomplete.min.js"></script> 

<!-- Jquery-Ui js-->
<script src="https://homexp.in/assets/home/plugins/jquery-ui/ui/widgets/datepicker.js"></script>

<!-- Data Table js -->
<script src="https://homexp.in/assets/home/plugins/datatable/jquery.dataTables.min.js"></script>
<script src="https://homexp.in/assets/home/plugins/datatable/dataTables.bootstrap4.min.js"></script>
<script src="https://homexp.in/assets/home/plugins/datatable/dataTables.responsive.min.js"></script>
<script src="https://homexp.in/assets/home/plugins/datatable/fileexport/dataTables.buttons.min.js"></script>
<script src="https://homexp.in/assets/home/plugins/datatable/fileexport/buttons.bootstrap4.min.js"></script>
<script src="https://homexp.in/assets/home/plugins/datatable/fileexport/jszip.min.js"></script>
<script src="https://homexp.in/assets/home/plugins/datatable/fileexport/pdfmake.min.js"></script>
<script src="https://homexp.in/assets/home/plugins/datatable/fileexport/vfs_fonts.js"></script>
<script src="https://homexp.in/assets/home/plugins/datatable/fileexport/buttons.html5.min.js"></script>
<script src="https://homexp.in/assets/home/plugins/datatable/fileexport/buttons.print.min.js"></script>
<script src="https://homexp.in/assets/home/plugins/datatable/fileexport/buttons.colVis.min.js"></script>
<!-- Select2 js-->
<script src="https://homexp.in/assets/home/plugins/select2/js/select2.min.js"></script>

<script src="https://homexp.in/assets/home/plugins/sweet-alert/sweetalert2.min.js" type="text/javascript"></script>


<script src="https://homexp.in/assets/home/scripts/custom_jquery.js"></script> 
<script src="https://homexp.in/assets/home/scripts/function.js"></script> 
<!-- DEBUG-VIEW ENDED 3 APPPATH/Config/../Views/home/block/scripts.php -->
    <script src="https://homexp.in/assets/home/plugins/sweet-alert/sweetalert2.min.js" type="text/javascript"></script>
  <script>
  $(document).ready(function() {

    $('.ajax-form-submit').on('submit', function(e) {

      $('#save_data').prop('disabled', true);
      $('.error-msg').html('');
      $('.form_proccessing').html('Please wail...');
      e.preventDefault();
      var aurl = $(this).attr('action');
      $.ajax({
          type: "POST",
          url: aurl,
          data: $(this).serialize(),
          success: function(response) {
              if (response.st == 'success') {
                $('#emi').html('₹ ' +response.emi);
                $('#totalamt').html('₹ ' + response.totalamt);
                $('#interest').html('₹ ' + response.interest);
                $('#save_data').prop('disabled', false);
                } else {
                  $('.form_proccessing').html('');
                  $('#save_data').prop('disabled', false);
                  $('.error-msg').html(response.msg);
                }
            },
          error: function() {
              $('#save_data').prop('disabled', false);
              alert('Error');
            }
        });
    return false;
    });
});
    
    </script>
  
<script src="https://homexp.in/assets/home/plugins/sweet-alert/sweetalert2.min.js" type="text/javascript"></script>
<script>
 $(document).ready(function() {
    $('.ajax-subscribe-submit').on('submit', function(e) {
        $('#save_data').prop('disabled', true);
        $('.error_msg_email').html('');
        $('.form_proccessing_email').html('Please wail...');
        e.preventDefault();
        var aurl = $(this).attr('action');
        $.ajax({
            type: "POST",
            url: aurl,
            data: $(this).serialize(),
            success: function(response) {
                if (response.st == 'success') {
                    $('#save_data').prop('disabled', false);
                    $('.form_proccessing_email').html('');
                    swal("success!",
                    "Subscribed Succeessfully..!",
                    "success");
                } else {
                    $('.form_proccessing_email').html('');
                    $('#save_data').prop('disabled', false);
                    $('.error_msg_email').html(response.msg);
                }
            },
            error: function() {
                $('#save_data').prop('disabled', false);
                alert('Error');
            }
        });
    return false;
    });
});
</script>

    <script>
    
        
    function rmvcmpr(obj) {
        $("#" + obj).hide();
}

    $(function() {
        $('input[type=file
    ][name=profile_image
    ]').on('change', fileUpload);
});

    $('.comapare_form').on('submit', function(e) {
        var cmp_pid1 = $('#cmp_pid1').val();
        var cmp_pid2 = $('#cmp_pid2').val();
    
        if(cmp_pid1 == '' || cmp_pid2 == ''){
            $('.error_msg_cmp').html('Please minimum add two Property for Compare');
            return false;
    }else{
            return true;
    }
});

    function fileUpload(event) {
    //notify user about the file upload status
        $("#profile_loading").html(event.target.value + " uploading...");

        //get selected file
        files = event.target.files;

        //form data check the above bullet for what it is  
        var data = new FormData();

        //file data is presented as an array
        for (var i = 0; i < files.length; i++) {
            var file = files[i
        ];
            if (!file.type.match('image.*')) {
            //check file type
                $("#profile_loading").html("Please choose an images file.");
        } else {
            //append the uploadable file to FormData object
                data.append('file', file, file.name);

                //create a new XMLHttpRequest
                var xhr = new XMLHttpRequest();

                //post file data for upload
                xhr.open('POST', 'https: //homexp.in/auth/updateProfile', true);
                xhr.send(data);
                xhr.onload = function() {
                //get response and show the uploading status
                    var response = JSON.parse(xhr.responseText);
                    if (xhr.status === 200 && response.st == 'ok') {
                        $("#profile_loading").html('');
                        $(".utf-edit-profile-photo-area").css("background",
                    "url(" + response.image + ")");
                        $(".utf-edit-profile-photo-area").css("background-size",
                    "contain");
                        $(".utf-edit-profile-photo-area").css("background-repeat",
                    "no-repeat");
                        //$(".utf-edit-profile-photo-area").attr('src', response.image);
                } else {
                        $("#profile_loading").html(response.msg);
                }
            };
        }
    }
}
    </script>
</body>

</html>
<!-- DEBUG-VIEW ENDED 4 3 APPPATH/Config/../Views/home/block/scripts.php -->

<!-- DEBUG-VIEW ENDED 5 4 3 APPPATH/Config/../Views/home/block/scripts.php -->
