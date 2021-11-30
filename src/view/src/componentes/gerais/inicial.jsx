import React, {useState} from "react";

export default function Inicial () {

const [img, setImg] = useState('/img/produtos/img1.jpg');

const img1 = ('/img/produtos/img1.jpg');
const img2 = ('/img/produtos/img2.jpg');
const img3 = ('/img/produtos/img3.jpg');
const img4 = ('/img/produtos/img4.jpg');

  return (
    <div>
          <div className="container">
            <div id="carouselMain" className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                      <img src="/img/slides/slide01.jpg" className="d-none d-md-block w-100" alt=""/>
                      <img src="/img/slides/slide01.jpg" className="d-block d-md-none w-100" alt=""/>
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                      <img src="/img/slides/slide02.png" className="d-none d-md-block w-100" alt=""/>
                      <img src="/img/slides/slide02.png" className="d-block d-md-none w-100" alt=""/>
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                      <img src="/img/slides/slide03.png" className="d-none d-md-block w-100" alt=""/>
                      <img src="/img/slides/slide03.png" className="d-block d-md-none w-100" alt=""/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>
            <hr className="mt-3"/>
        </div>
        <main className="flex-fill">
            <div className="container">
                <div className="row g-3">
                    <div className="col-12 col-sm-6">
                        <img src={img} className="img-thumbnail" id="imgProduto" alt=""/>
                        <br className="clearfix"/>
                        <div className="row my-3 gx-3">
                            <div className="col-3">
                                <img src={img1} className="img-thumbnail" onClick={(evt) => setImg(evt.target.src)} alt=""/>
                            </div>
                            <div className="col-3">
                                <img src={img2} className="img-thumbnail" onClick={(evt) => setImg(evt.target.src)} alt=""/>
                            </div>
                            <div className="col-3">
                                <img src={img3} className="img-thumbnail" onClick={(evt) => setImg(evt.target.src)} alt=""/>
                            </div>
                            <div className="col-3">
                                <img src={img4} className="img-thumbnail" onClick={(evt) => setImg(evt.target.src)} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h1> Jajá Car Service </h1>
                        <p>
                            Jajá Car Service é uma empresa do ramo de serviço  de automóvel na região de Contagem e com grande
                            conhecimento na área de manutenção automotiva. 
                            </p>
                                Venha fazer um orçamento sem compromisso com os melhores
                             preços da região.
                            <p>  
                        </p> 
                    </div>
                </div>
            </div>
        </main>
        </div>
  
  )
}