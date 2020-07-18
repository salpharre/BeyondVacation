/* eslint-disable prettier/prettier */
$(document).ready(() => {
  //memberListingsDiv to hold all listings by the member
  const membersListDiv = $("#member-listings");

  //memberReservationsDiv to hold all reservations by the member
  const membersResDiv = $("#member-reservations");

  //Create variables to hold data from database
  let memberListings;
  let memberReservations;

  //Click event for the delete buttons
  $(document).on("click", "button.delete", deleteList);

  // This file just does a GET request to figure out which user is logged in and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $("#email").text(data.email);
    $("#first-name").text(data.firstName.toUpperCase());
    $("#last-name").text(data.lastName.toUpperCase());
    $("#id").text(data.id);

    getMemberListings();
    getMemberReservations();
  });

/////////////////////////// Retrieve Member Listing functions below /////////////////////////

  // This function displays a message when there are no member listings
  function displayListEmpty() {
    membersListDiv.empty();
    const messageH5 = $("<h5>");
    messageH5.css({ "margin-top": "25px" });
    messageH5.html(
      "No listings found, navigate <a href='/list'>here</a> to create a new listing."
    );
    membersListDiv.append(messageH5);
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 359cfbd4d64b25bae2e02d3e0df18128d227bbca

  //function to retrieve listings by member
  function getMemberListings() {
    $.get("/api/user_data").then(userData => {
      console.log("userData: " + userData);
      console.log("userData.id" + userData.id);

      $.get("/api/posts/members/" + userData.id, data => {
        console.log("member listings", data);
        memberListings = data;
        if (!memberListings || !memberListings.length) {
          displayListEmpty();
        } else {
          for (i = 0; i < memberListings.length; i++) {
            //display the member's listings
            createListCard();
          }
        }
      });
    });
  }

<<<<<<< HEAD
  //function to create listing card
  function createListCard(){

    var newListing = $("<div>");
    newListing.addClass("col");

    var locationCol = memberListings[i].location;
    var imgSrc;

    switch(locationCol){
      case "RV":
          imgSrc = "../images/AdobeStock_rv.jpeg";
          break;
      case "Campsites":
          imgSrc = "../images/AdobeStock_default.jpeg";
          break;
      case "Farmland":
          imgSrc = "../images/AdobeStock_farmland.jpeg";
          break;
      case "Waterfront":
          imgSrc = "../images/AdobeStock_waterfront.jpeg";
          break;
      case "Backyard":
          imgSrc = "../images/AdobeStock_backyard.jpeg";
          break;
      default:
          imgSrc = "../images/AdobeStock_campsite.jpeg";      
  };
=======
  /////////////////////////// Retrieve Member Reservations functions below /////////////////////////

  //function to create listing card
  function createListCard() {
    const newListing = $("<div>");
    newListing.addClass("col");

    const locationCol = memberListings[i].location;
    let imgSrc;

    switch (locationCol) {
    case "RV":
      imgSrc = "../images/AdobeStock_rv.jpeg";
      break;
    case "Campsites":
      imgSrc = "../images/AdobeStock_default.jpeg";
      break;
    case "Farmland":
      imgSrc = "../images/AdobeStock_farmland.jpeg";
      break;
    case "Waterfront":
      imgSrc = "../images/AdobeStock_waterfront.jpeg";
      break;
    case "Backyard":
      imgSrc = "../images/AdobeStock_backyard.jpeg";
      break;
    default:
      imgSrc = "../images/AdobeStock_campsite.jpeg";
    }

    newListing.html(
      `<div class="card" style="width: 18rem; padding:0px">
            <img class="card-img-top"
              src=${imgSrc}
              alt="Card image cap">
            <div class="card-body">
              <p class="card-text">${memberListings[i].property_name}</p>
              <button type="button" class="btn btn-outline-success delete">Delete Listing</button>
            </div>
          </div>`
    );
    membersListDiv.append(newListing);
  }
>>>>>>> 359cfbd4d64b25bae2e02d3e0df18128d227bbca

    newListing.html(
      `<div class="card" style="width: 18rem; padding:0px">
          <img class="card-img-top"
            src=${imgSrc}
            alt="Card image cap">
          <div class="card-body">
            <p class="card-text">${memberListings[i].property_name}</p>
            <button type="button" class="btn btn-outline-success delete">Delete Listing</button>
          </div>
        </div>`
    );
    membersListDiv.append(newListing);
};


/////////////////////////// Retrieve Member Reservations functions below /////////////////////////


  //This function displays a message when there are no member reservations
  function displayResEmpty() {
    membersResDiv.empty();
    const messageH5 = $("<h5>");
    messageH5.css({ "margin-top": "25px" });
    messageH5.html(
      "No reservations found, navigate <a href='/browse'>here</a> to make a reservation."
    );
    membersResDiv.append(messageH5);
  }

  //function to retrieve reservations by member
  function getMemberReservations() {
    $.get("/api/user_data").then(userData => {
      console.log("userData: " + userData);
      console.log("userData.id" + userData.id);

      $.get("/api/posts/membersRes/" + userData.id, data => {
        console.log("member reservations", data);
        memberReservations = data;
        if (!memberReservations || !memberReservations.length) {
          displayResEmpty();
        } else {
          for (j = 0; j < memberReservations.length; j++) {
            //Display member's reservations
            createResCard();
          }
        }
      });
    });
  }

  //function to create reservation card
  function createResCard() {
    const newRes = $("<div>");
    newRes.addClass("col");

    const locationCol = memberReservations[j].location;
    let imgSrc;

    switch (locationCol) {
    case "RV":
      imgSrc = "../images/AdobeStock_rv.jpeg";
      break;
    case "Campsites":
      imgSrc = "../images/AdobeStock_default.jpeg";
      break;
    case "Farmland":
      imgSrc = "../images/AdobeStock_farmland.jpeg";
      break;
    case "Waterfront":
      imgSrc = "../images/AdobeStock_waterfront.jpeg";
      break;
    case "Backyard":
      imgSrc = "../images/AdobeStock_backyard.jpeg";
      break;
    default:
      imgSrc = "../images/AdobeStock_campsite.jpeg";
    }

    newRes.html(
      `<div class="card" style="width: 18rem; padding:0px">
            <img class="card-img-top"
              src=${imgSrc}>
            <div class="card-body">
              <p class="card-text">${memberReservations[j].property_name}</p>
              <button type="button" class="btn btn-outline-success delete">Delete Rental</button>
            </div>
          </div>`
    );
    membersResDiv.append(newRes);
  }
});

//can we switch document with delete-reserve?
//$(document).on("click", "button.delete", deleteList);
function deleteList(event) {
  event.stopPropagation();
  const id = $(this).data("id");
  $.ajax({
    method: "DELETE",
    url: "/api/posts/" + id
  }).then(listUser);
}

$(".delete-reserve").on("click", function listUser() {
  //delete list
  const id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/posts/" + id, {
    type: "DELETE"
  }).then(() => {
    console.log("deleted posts", id);
    // Reload the page to get the updated list
    location.reload();
  });
});
