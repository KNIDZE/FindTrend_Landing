var subscription_state = false;


function changePacketPrice(){

}
function switchSubscription(){
  const toggleBody = document.getElementById('toggle_body');
  const toggleSwitcher = document.getElementById('toggle_switcher');
  const monthlyLabel = document.getElementsByClassName('monthly')[0];
  const yearlyLabel = document.getElementsByClassName('yearly')[0];
  const packetPrices = document.getElementsByClassName('price');
  subscription_state = !subscription_state;

  if (subscription_state){

    toggleBody.classList.add('toggle_switched');
    toggleSwitcher.classList.add('toggle_switcher_active');
    yearlyLabel.classList.add('active_subscription');
    monthlyLabel.classList.remove('active_subscription');
    let prices = ['$86', '$216', '$518'];
    for (let i = 0; i < packetPrices.length; i++) {
      packetPrices[i].innerHTML = `${prices[i]}<span>/Month</span>`
    }
  }else{
    toggleBody.classList.remove('toggle_switched');
    toggleSwitcher.classList.remove('toggle_switcher_active');
    monthlyLabel.classList.add('active_subscription');
    yearlyLabel.classList.remove('active_subscription');
    let prices = ['$8', '$20', '$48'];
    for (let i = 0; i < packetPrices.length; i++) {
      packetPrices[i].innerHTML = `${prices[i]}<span>/Month</span>`
    }
  }
}
