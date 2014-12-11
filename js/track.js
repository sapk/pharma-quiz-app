$(document).ready(window.setTimeout(track,500));    

function track () {
    analytics.startTrackerWithId('UA-57562500-2');
    analytics.trackView($("title").text());
    if($("title").text()==="Quiz Pharma"){
        analytics.trackEvent('Question', (($(".choices").length===1)?'Choice':'Answer'), $("h2.title").text());
    }
}