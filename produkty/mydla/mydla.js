class Mydla {
    constructor() {
    }

    render() {
        const mydlaStore = localStorageMydla.getMydla();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, img, category, type, filter, short_description, sizing, full_description}) => {
            let activeClass = '';
            let activeText = '';

            htmlCatalog += `
                <li class="products-element product ${type} ${category} ${filter}"> 
                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${id}">
                    <img class="products-element__img" src="/produkty/product-img/${img}" />
                    <span class="products-element__name">${name}</span>
                </a>    
                </li>


              <div class="portfolio-modal modal fade" id="portfolioModal${id}" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div class="container">
                      <a class="navbar-brand" href="https://sunswan.github.io/bioselect.pl/"><img src="../assets/image/logo-nav.svg" alt="Bioselect" /></a>
                      <div class="navbar-toggler-wrapper">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                          aria-label="Toggle navigation">
                          <a class='menu-trigger'>
                            <span></span>
                          </a>
                        </button>
                      </div>
                      <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav">
                          <li class="nav-item">
                            <a class="nav-link active" href="/bioselect.pl/produkty/">PRODUKTY</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/bioselect.pl/wspolpraca/">WSPÓŁPRACA B2B</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link " href="/bioselect.pl/kontakt/">KONTAKT</a>
                          </li>
                        </ul>
                        <div class="nav-store-wrapper">
                          <a class="nav-app-icon" href="https://www.facebook.com/bioselectpoland" target="_blank">
                            <img src="../assets/image/icon-fb-black.svg" alt="FB"></img>
                          </a>
                          <a class="nav-app-icon" href="https://www.instagram.com/bioselect_poland/" target="_blank">
                            <img src="../assets/image/icon-insta-black.svg" alt="Instagram"></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                  <div class="produkty-page-heading"></div>
                    <!--Start Breadcrumb-->
                    <div class="container">
                      <div class="breadcrumb">
                      <ul>
                      <li><a href="https://sunswan.github.io/bioselect.pl/">HOME </a></li>
                      <li>
                        <div class="prod-vector"></div>
                      </li>
                      <li><a href="/bioselect.pl/produkty/">PRODUKTY</a>
                      </li>
                      <li>
                        <div class="prod-vector"></div>
                      </li>
                      <li class="current"><a href="/bioselect.pl/produkty/mydla/">MYDLA</a>
                      </li>
                    </ul>
                      </div>
                    </div>
                    <div class="close-modal" data-bs-dismiss="modal"><img src="../assets/image/close-icon.png" alt="Close modal" /></div>
                  <div class="container modal-body row">
                <div class="col-lg-5 left-images">
                    <img class="products-element__img" src="/produkty/product-img/${img}" />
                </div>
                <div class="col-lg-7 px-lg-5 right-content">
                  <p class="products-element__name">${name}</p>
                  <p class="products-short_description">${short_description}</p>
                  <p class="products-sizing">${sizing}</p>
                  <div class="products-full_description">
                    ${full_description}
                  </div>
                </div>
                  </div>
                  </div>
              </div>
          </div>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_MYDLA.innerHTML = html;
    }
};

const mydlaPage = new Mydla();