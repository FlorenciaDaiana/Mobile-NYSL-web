if (document.getElementById("form-container") != undefined) {
function load()
{
    const formulario = document.getElementById("form-container");
    formulario.innerHTML = `      
        <div class="stylized">
        <!-- <label for="first_name">Player's First Name:</label> -->
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingFirstName" placeholder="Player's First Name">
          <label for="floatingFirstName">Player's First Name</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingLastName" placeholder="Last Name">
          <label for="floatingLastName">Last Name</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingStreet" placeholder="Street Address">
          <label for="floatingStreet">Street Address</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingCity" placeholder="City">
          <label for="floatingCity">City</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingZip" placeholder="Zip Code">
          <label for="floatingZip">Zip Code</label>
        </div>
          <input type="date" class="form-control" id="floatingBirthDate" placeholder="Birth Date (mm/dd/yyyy)">
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingParent" placeholder="Parent/Guardian Name">
          <label for="floatingParent">Parent/Guardian Name</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingContactPhone" placeholder="Contact Phone">
          <label for="floatingContactPhone">Contact Phone</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingContactEmail" placeholder="Contact Email">
          <label for="floatingContactEmail">Contact Email</label>
        </div>
      </div>
      <div class="progress mt-2">
        <div class="progress-bar bg-success" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar bg-dark" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
      </div>`;
}

load();


function paginacion()
{ 
    const formulario = document.getElementById("form-container");
    const pag1 = document.getElementById("page-1");
    const pag2 = document.getElementById("page-2");
    const pag3 = document.getElementById("page-3");
   

    pag1.addEventListener("click", () => {
        formulario.innerHTML = ``;
        formulario.innerHTML = `      
        <div class="stylized">
        <!-- <label for="first_name">Player's First Name:</label> -->
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingFirstName" placeholder="Player's First Name">
          <label for="floatingFirstName">Player's First Name</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingLastName" placeholder="Last Name">
          <label for="floatingLastName">Last Name</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingStreet" placeholder="Street Address">
          <label for="floatingStreet">Street Address</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingCity" placeholder="City">
          <label for="floatingCity">City</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingZip" placeholder="Zip Code">
          <label for="floatingZip">Zip Code</label>
        </div>
          <input type="date" class="form-control" id="floatingBirthDate" placeholder="Birth Date (mm/dd/yyyy)">
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingParent" placeholder="Parent/Guardian Name">
          <label for="floatingParent">Parent/Guardian Name</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingContactPhone" placeholder="Contact Phone">
          <label for="floatingContactPhone">Contact Phone</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingContactEmail" placeholder="Contact Email">
          <label for="floatingContactEmail">Contact Email</label>
        </div>
      </div>
      <div class="progress mt-2">
        <div class="progress-bar bg-success" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar bg-dark" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
      </div>`;
      });
      
      pag2.addEventListener("click", () => {
        formulario.innerHTML = ``;
        formulario.innerHTML = `      
        <button type="button" class="btn btn-form" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Gender
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            
            <div class="modal-body">
              <label for="female">Female</label>
              <input type="radio" name="gender" id="female" value="female"/>
              <hr>
              <label for="male">Male</label>
              <input type="radio" name="gender" id="male" value="male"/>
              <hr>
            </div>
          </div>
        </div>
      </div>     

      <button type="button" class="btn btn-form" data-bs-toggle="modal" data-bs-target="#Grade">
        Grade
      </button>
      <div class="modal fade" id="Grade" tabindex="-100">
        <div class="modal-dialog">
          <div class="modal-content">
            
            <div class="modal-body">
              <label for="pre_school">Pre-School</label>
              <input type="radio" name="grade" id="pre_school" value="pre_school"/>
              <hr>
              <label for="1st">1st</label>
              <input type="radio" name="grade" id="1st" value="1st"/>
              <hr>
              <label for="2nd">2nd</label>
              <input type="radio" name="grade" id="2nd" value="2nd"/>
              <hr>
              <label for="3rd">3rd</label>
              <input type="radio" name="grade" id="3rd" value="3rd"/>
              <hr>
              <label for="4th">4th</label>
              <input type="radio" name="grade" id="4th" value="4th"/>
              <hr>
              <label for="5th">5th</label>
              <input type="radio" name="grade" id="5th" value="5th"/>
              <hr>
            </div>
          </div>
        </div>
      </div>

      <hr>
      <legend>Which elementary schools do you live near?</legend>
      <button type="button" class="btn btn-form" data-bs-toggle="modal" data-bs-target="#FirstSchool">
        FirstSchool
      </button>
      <div class="modal fade" id="FirstSchool" tabindex="-100">
        <div class="modal-dialog">
          <div class="modal-content">
            
            <div class="modal-body">
              <select name="school_1" id="school_1">
                <option value="katzenmaier">AJ Katzenmaier</option>
                <option value="greenbay">Greenbay</option>
                <option value="yeager">Howard A Yeager</option>
                <option value="hart">Marjorie P Hart</option>
                <option value="north">North Elementary</option>
                <option value="south">South Elementary</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-form" data-bs-toggle="modal" data-bs-target="#SecondSchool">
        SecondSchool
      </button>
      <div class="modal fade" id="SecondSchool" tabindex="-100">
        <div class="modal-dialog">
          <div class="modal-content">
            
            <div class="modal-body">
              <select name="school_1" id="school_1">
                <option value="katzenmaier">AJ Katzenmaier</option>
                <option value="greenbay">Greenbay</option>
                <option value="yeager">Howard A Yeager</option>
                <option value="hart">Marjorie P Hart</option>
                <option value="north">North Elementary</option>
                <option value="south">South Elementary</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <hr>
      <legend>What position(s) do you normally play? <span class="note">(check all that apply)</span></legend>
      <button type="button" class="btn btn-form" data-bs-toggle="modal" data-bs-target="#PositionNormal">
        Position Normal
      </button>
      <div class="modal fade" id="PositionNormal" tabindex="-100">
        <div class="modal-dialog">
          <div class="modal-content">
            
            <div class="modal-body">
              <label for="n_forward">Forward</label>
              <input type="checkbox" name="normal_position" id="n_forward" value="n_forward"/>
              <hr>
              <label for="n_defense">Defense</label>
              <input type="checkbox" name="normal_position" id="n_defense" value="n_defense"/>
              <hr>
              <label for="n_midfield">Midfield</label>
              <input type="checkbox" name="normal_position" id="n_midfield" value="n_midfield"/>
              <hr>
              <label for="n_goalkeeper">Goalkeeper</label>
              <input type="checkbox" name="normal_position" id="n_goalkeeper" value="n_goalkeeper"/>
              <hr>
            </div>
          </div>
        </div>
      </div>
    
      <hr>
      <legend>What position(s) do you want to play? <span class="note">(check all that apply)</span></legend>
      <button type="button" class="btn btn-form" data-bs-toggle="modal" data-bs-target="#PositionWant">
        Position Want
      </button>
      <div class="modal fade" id="PositionWant" tabindex="-100">
        <div class="modal-dialog">
          <div class="modal-content">
            
            <div class="modal-body">
              <label for="n_forward">Forward</label>
              <input type="checkbox" name="normal_position" id="n_forward" value="n_forward"/>
              <hr>
              <label for="n_defense">Defense</label>
              <input type="checkbox" name="normal_position" id="n_defense" value="n_defense"/>
              <hr>
              <label for="n_midfield">Midfield</label>
              <input type="checkbox" name="normal_position" id="n_midfield" value="n_midfield"/>
              <hr>
              <label for="n_goalkeeper">Goalkeeper</label>
              <input type="checkbox" name="normal_position" id="n_goalkeeper" value="n_goalkeeper"/>
              <hr>
            </div>
          </div>
        </div>
      </div>
    
      <hr>
      <label for="uniform" class="impinfo">Already Have a Uniform</label>
      <input type="checkbox" name="uniform" id="uniform"/>
    
      <hr>
      <button type="button" class="btn btn-form" data-bs-toggle="modal" data-bs-target="#Jersey">
        Jersey Size
      </button>
      <div class="modal fade" id="Jersey" tabindex="-100">
        <div class="modal-dialog">
          <div class="modal-content">              
            <div class="modal-body">
              <span class="uniformchoice">
                <label for="j_y_small">Youth Small</label>
                <input type="radio" name="jersey_size" id="j_y_small" value="j_y_small"/>
                <hr>
                <label for="j_y_medium">Youth Medium</label>
                <input type="radio" name="jersey_size" id="j_y_medium" value="j_y_medium"/>
                <hr>
                <label for="j_y_large">Youth Large</label>
                <input type="radio" name="jersey_size" id="j_y_large" value="j_y_large"/>
                <hr>
                <label for="j_small">Small</label>
                <input type="radio" name="jersey_size" id="j_small" value="j_small"/>
                <hr>
                <label for="j_medium">Medium</label>
                <input type="radio" name="jersey_size" id="j_medium" value="j_medium"/>
                <hr>
                <label for="j_large">Large</label>
                <input type="radio" name="jersey_size" id="j_large" value="j_large"/>
                <hr>
                <label for="j_x_large">Extra-Large</label>
                <input type="radio" name="jersey_size" id="j_x_large" value="j_x_large"/>
                <hr>
              </span>
            </div>
          </div>
        </div>
      </div>
  
      <hr>
      <button type="button" class="btn btn-form" data-bs-toggle="modal" data-bs-target="#Shorts">
        Shorts Size
      </button>
      <div class="modal fade" id="Shorts" tabindex="-100">
        <div class="modal-dialog">
          <div class="modal-content">              
            <div class="modal-body">
              <span class="uniformchoice">
                <label for="s_y_small">Youth Small</label>
                <input type="radio" name="shorts_size" id="s_y_small" value="s_y_small"/>
                <label for="s_y_medium">Youth Medium</label>
                <input type="radio" name="shorts_size" id="s_y_medium" value="s_y_medium"/>
                <label for="s_y_large">Youth Large</label>
                <input type="radio" name="shorts_size" id="s_y_large" value="s_y_large"/>
                <label for="s_small">Small</label>
                <input type="radio" name="shorts_size" id="s_small" value="s_small"/>
                <label for="s_medium">Medium</label>
                <input type="radio" name="shorts_size" id="s_medium" value="s_medium"/>
                <label for="s_large">Large</label>
                <input type="radio" name="shorts_size" id="s_large" value="s_large"/>
                <label for="s_x_large">Extra-Large</label>
                <input type="radio" name="shorts_size" id="s_x_large" value="s_x_large"/>
              </span>
            </div>
          </div>
        </div>
      </div>    
      <div class="progress mt-2">
        <div class="progress-bar bg-success" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar bg-dark" role="progressbar" style="width: 34%" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
      </div>`;
      });
    
      pag3.addEventListener("click", () => {
        formulario.innerHTML = ``;
        formulario.innerHTML = `      
        <h3>Permission to Play</h3>
        <div class="contract">
          <p>
            I, the parent or guardian of the minor registrant, agree that the registrant and I will abide by all the rules of the Northside Youth Soccer League (NYSL). In recognizing the possibility of physical injury associated with soccer and in consideration for the "League" accepting the registrant for its soccer programs and activities, I hereby release, discharge, and/or otherwise indemnify NYSL, their employees and associated personnel and volunteers, including the facilities used for practices and games, against any claim by or on behalf of the registrant as a result of the registrant's participation in the program and/or being transported to or from NYSL sponsored activities, which transportation.       
          </p>
          <p>
            By entering my name below, I hereby agree and authorize the above. In addition, by entering my name below, I also acknowledge that I have read the cancellation policy and agree to its terms.
          </p>
          <p>
            <label for="signature">Parent/Guardian Signature:</label>
            <input type="text" name="signature" id="signature"/>
            <label for="sig_date">Date:</label>
            <input type="text" name="sig_date" id="sig_date"/>
          </p>
        </div>
        <p><input type="submit"/></p>
      <div class="progress mt-2">
        <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>`;
      });

}

paginacion();

}

$('.open-overlay').click(function() {
  $('.open-overlay').css('pointer-events', 'none');
  var overlay_navigation = $('.overlay-navigation'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    overlay_navigation.velocity('transition.slideLeftIn', {
      duration: 300,
      delay: 0,
      begin: function() {
        $('nav ul li').velocity('transition.perspectiveLeftIn', {
          stagger: 150,
          delay: 0,
          complete: function() {
            $('nav ul li a').velocity({
              opacity: [1, 0],
            }, {
              delay: 10,
              duration: 140
            });
            $('.open-overlay').css('pointer-events', 'auto');
          }
        })
      }
    })

  } else {
    $('.open-overlay').css('pointer-events', 'none');
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    $('nav ul li').velocity('transition.perspectiveRightOut', {
      stagger: 150,
      delay: 0,
      complete: function() {
        overlay_navigation.velocity('transition.fadeOut', {
          delay: 0,
          duration: 300,
          complete: function() {
            $('nav ul li a').velocity({
              opacity: [0, 1],
            }, {
              delay: 0,
              duration: 50
            });
            $('.open-overlay').css('pointer-events', 'auto');
          }
        });
      }
    })
  }
})

function tablasWebMobile () {

  meses[0].teams.forEach(data => {

    

    document.getElementById("tbody").innerHTML += 
    
    `
    <tr>
    <td>` + data.day + `</td>
    <td>`+ data.location + `<br>` + data.vsName + `</td>
    <td>`+ data.times + `</td>
    </tr>
    
    `
  
  });

  meses[1].teams.forEach(data => {

    

    document.getElementById("tbody1").innerHTML += 
    
    `
    <tr>
    <td>` + data.day + `</td>
    <td>`+ data.location + `<br>` + data.vsName + `</td>
    <td>`+ data.times + `</td>
    </tr>
    
    `
  
  });

}

tablasWebMobile()

function tablaTeams () {

  meses[0].teams.forEach((data,indice) => {

    document.getElementById("landscapetbody").innerHTML += 
    
    `
    <tr>
    <td><button onclick="imprimirDatos(meses[0].teams,${indice})">`+ data.vsName +`</button></td>
    </tr>
    
    `
  
  });
  
  meses[1].teams.forEach((data,indice) => {

    document.getElementById("landscapetbody1").innerHTML += 
    
    `
    <tr>
    <td><button onclick="imprimirDatos(meses[0].teams,${indice})">`+ data.vsName +`</button></td>
    </tr>
    
    `
  
  });
  

} 

tablaTeams()

function imprimirDatos (partido,indice) {
 document.getElementById("tableSeptember").innerHTML =     `

 <div class="d-inline-flex">
 <div class="col-5 align-self-center w-50 p-3">
 <p><b>Day</b>: `+ partido[indice].day +`</p>
 <p><b>Location</b>: `+ partido[indice].location + `</p>
 <p><b>Time</b>: `+ partido[indice].times + `</p>
 </div>
 <iframe class="col-5"
     src="${partido[indice].maps}"></iframe>
 <div>    
 `

 document.getElementById("tableOctober").innerHTML =     `

 <div class="d-inline-flex mt-5">
 <div class="col-5 align-self-center mt-5 ml-6 w-50 p-3">
 <p><b>Day</b>: `+ partido[indice].day +`</p>
 <p><b>Location</b>: `+ partido[indice].location + `</p>
 <p><b>Time</b>: `+ partido[indice].times + `</p>
 </div>
 <iframe class="col-5"
     src="${partido[indice].maps}"></iframe>
 <div>    
 `

}

imprimirDatos(meses[0].teams,0)