// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file. skip-credits

console.log("extension launched");
$(document).ready(function(){
  $('.skip-credits').bind('afterShow', function() {
    console.log("appearedddd");
    $('.skip-credits a').click();
  });
  });
