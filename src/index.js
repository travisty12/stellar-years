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
      $(".wrapper").fadeOut();
      $(".afterOptions").css("display","flex");
      setTimeout(function() {
        $(".output").append(age.convertAge());
      }, 400);
    } else {
      $(".output").append("Please enter a valid birthdate");
    }
  });
  $("#deadForm").submit(function(event) {
    event.preventDefault();
    $(".output").empty();
    const year = parseInt($("#year").val());
    const month = parseInt($("#month").val());
    const day = parseInt($("#day").val());
    const age = new Age(`${year}-${month}-${day}`);
    setTimeout(function() {
      $(".output").append(age.timeLeft());
    }, 400);
  });
  $("#birthdayForm").submit(function(event) {
    event.preventDefault();
    $(".output").empty();
    const year = parseInt($("#year").val());
    const month = parseInt($("#month").val());
    const day = parseInt($("#day").val());
    const age = new Age(`${year}-${month}-${day}`);
    setTimeout(function() {
      $(".output").append(age.toNextBirthday());
    }, 400);
  });
  $("#redo").submit(function(event) {
    event.preventDefault();
    $(".output").empty();
    $(".afterOptions").fadeOut();
    setTimeout(function() {
      $(".wrapper").fadeIn();
    }, 400);
  });
});
