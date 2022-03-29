/* eslint-disable */

import '@/vendor';
import '@/less/styles.less';
// import '@/vue/index';
import '@/common.blocks/index';
import '@/assets/svg/svg-sprite';

const popup = document.getElementById('popup')
const closeBtn = document.getElementById('close-btn')
const btnRegister = document.getElementById('register-btn')

btnRegister.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)

function openModal(e) {
    popup.style.display = 'block'
 }
 
 function closeModal(e) {
     popup.style.display = 'none'
 }
