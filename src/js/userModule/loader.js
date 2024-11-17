 export function loader(){
    document.querySelector('boby').insertAdjacentHTML(`beforebegin`,`
        <section class="loadPage flex flex-column">
     

               

      <div class="mainLogoWhite img"></div>
      <div class="mainWriteWhite img"></div>


        
    </section>
        `)
    const loader =   document.querySelector('.loadPage');
    return loader;
 }