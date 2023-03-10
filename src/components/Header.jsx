import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>

            <div className="container">
                <div className="row">

                    <div className="col-xl-6">
                        <div className="header__chamada">
                            <div className="header__chamada-titulo">
                                <h1>UMA NOVA EXPERIÊNCIA</h1>
                                <h2>Imagine não se preocupar como você vai do aeroporto até a sua casa, não precisar enfrentar longas filas no supermercado e nem se preocupar se algo está com defeito ou sujo na sua casa quando você chegar?</h2>
                            </div>

                            <div className="header__chamada-botao">
                                <a href="#fazemos">VEJA AQUI O QUE FAZEMOS</a>
                            </div>

                            <div className="header__video">
                                <iframe className="header__video-iframe" src="https://www.youtube.com/embed/zqnip-QhSvw?autoplay=0&controls=1&&showinfo=0&loop=1&mute=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="header__comofunciona">
                            <h2>Como funciona</h2>
                            <div className="header__comofunciona-box">

                                <div className="header__comofunciona-timeline">

                                    <div className="header__comofunciona-timeline_box">
                                        <div className="header__comofunciona-timeline_content">
                                            Você nos informa qual dia<br />
                                            e hora você vem e como<br />
                                            quer que tudo esteja<br />
                                            quando chegar em casa<br />
                                            <span>Isso vai ficar salvo pra sempre</span>
                                        </div>

                                        <div className="header__comofunciona-timeline_dot">
                                            1
                                        </div>
                                    </div>

                                    <div className="header__comofunciona-timeline_box">
                                        <div className="header__comofunciona-timeline_content">
                                            Agora é o momento que<br />
                                            entramos em ação, vamos<br />
                                            arrumar tudo e deixar as<br />
                                            coisas da forma que você<br />
                                            nos informou<br />

                                            <div className="header__comofunciona-timeline_content-linha">
                                                <div className="header__comofunciona-timeline_content-botao">

                                                    <a href="#fazemos">
                                                        Veja o que fazemos
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="header__comofunciona-timeline_dot">
                                            2
                                        </div>
                                    </div>

                                    <div className="header__comofunciona-timeline_box">
                                        <div className="header__comofunciona-timeline_content">
                                            Você e a sua família<br />
                                            chegam, apenas para<br />
                                            aproveitar, já fizemos tudo<br />
                                            para a sua experiência ser<br />
                                            incrível<br />
                                        </div>

                                        <div className="header__comofunciona-timeline_dot">
                                            3
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header