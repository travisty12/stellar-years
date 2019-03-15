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
        $(".output").css("display","flex");
        $(".output").append(age.convertAge());
        $(".output").fadeIn();
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
      $(".output").css("display","flex");
      $(".output").append(age.timeLeft());
      $(".output").fadeIn();
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
      $(".output").css("display","flex");
      $(".output").append(age.toNextBirthday());
      $(".output").fadeIn();
    }, 400);
  });
  $("#redo").submit(function(event) {
    event.preventDefault();
    $(".output").empty();
    $(".output").fadeOut();
    $(".afterOptions").fadeOut();
    setTimeout(function() {
      $(".wrapper").fadeIn();
    }, 400);
  });
  $("#keith").submit(function(event) {
    event.preventDefault();
    const year = parseInt($("#year").val());
    const month = parseInt($("#month").val());
    const day = parseInt($("#day").val());
    const age = new Age(`${year}-${month}-${day}`);
    $(".output").empty();
    setTimeout(function() {
      $(".output").css("display","flex");
      $(".output").append(age.keith());
      $(".output").fadeIn();
    }, 400);
  });
  $("#mayfly").submit(function(event) {
    event.preventDefault();
    const year = parseInt($("#year").val());
    const month = parseInt($("#month").val());
    const day = parseInt($("#day").val());
    const age = new Age(`${year}-${month}-${day}`);
    $(".output").empty();
    setTimeout(function() {
      $(".output").css("display","flex");
      $(".output").append(age.mayfly());
      $(".output").fadeIn();
    }, 400);
  });
});
