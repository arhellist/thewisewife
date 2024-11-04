 export function loader(){
    document.querySelector('boby').insertAdjacentHTML(`beforebegin`,`
        <section class="loadPage flex flex-column">
      <header class="loadPage_header flex flex-row">
        <span class="loadPage_header_cancel">Cancel</span>
        <div class="loadPage_header_headerTtitle flex flex-column">
          <span class="headerTtitle_text">Мудрая жена</span>
          <span class="headerTtitle_textBot">bot</span>
        </div>
        <div class="loadPage_header_menuIcon flex flex-row">
          <div class="loadPage_header_menuIcon_point"></div>
          <div class="loadPage_header_menuIcon_point"></div>
          <div class="loadPage_header_menuIcon_point"></div>
        </div>
      </header>

               

      <div class="mainLogoWhite img"></div>
      <div class="mainWriteWhite img"></div>


        
    </section>
        `)
    const loader =   document.querySelector('.loadPage');
    return loader;
 }