document.documentElement.style.overflowX = 'hidden';
document.documentElement.style.overflowY = 'hidden';

function closeBanner() {
    var banner = document.querySelector('.warning-banner');
    banner.style.opacity = '0';
    setTimeout(function() {
        banner.style.display = 'none';
    }, 2000); 
}