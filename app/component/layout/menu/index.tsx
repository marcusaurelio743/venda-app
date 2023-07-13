export const Menu: React.FC = ()=>{
    return(
        <aside className="colum is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">minhas vendas</p>
            <ul>
                <li>
                    <a href="#">
                        <span className="icon"></span> Home
                    </a>
                    
                </li>

                <li>
                    <a href="#">
                        <span className="icon"></span> Cadastros
                    </a>
                    
                </li>

                <li>
                    <a href="#">
                        <span className="icon"></span>Configurações
                    </a>
                    
                </li>
            </ul>
        </aside>
    )
}