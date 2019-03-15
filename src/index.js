import $ from 'jquery';
import './sass/styles.scss';
import { Age } from './stellar.js';

$(document).ready(function() {
  const age = new Age("1996-11-26");
  $(".output").text(age.convertAge())
});
