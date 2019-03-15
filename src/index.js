import $ from 'jquery';
import './sass/styles.scss';
import { Age, isValid } from './stellar.js';

$(document).ready(function() {
  $("#ageGrab").submit(function(event) {
    event.preventDefault();
    const year = parseInt($("#year").val());
    const month = parseInt($("#month").val());
    const day = parseInt($("#day").val());

    if (isValid(year, month, day)) {
      const age = new Age(`${year}-${month}-${day}`);
      $(".output").empty();
      $(".output").append(age.convertAge());
      $(".output").append(age.timeLeft());
    } else {
      $(".output").empty();
      $(".output").append("Please enter a valid birthdate");
    }
  });
});
