$(document).ready(window.setTimeout(track,1000));    

function track () {
    analytics.startTrackerWithId('UA-57562500-2');
    analytics.trackView($("title").text());
    if($("title").text()==="Quiz Pharma"){
        analytics.trackEvent('Question', (($(".choices").length===1)?'Choice':'Answer'), $("h2.title").text());
    }
    admobAd.initBanner("ca-app-pub-4837912223938353/9946559021", admobAd.AD_SIZE.BANNER.width, admobAd.AD_SIZE.BANNER.height);//create admob banner
    admobAd.showBanner(admobAd.AD_POSITION.BOTTOM_CENTER);
}