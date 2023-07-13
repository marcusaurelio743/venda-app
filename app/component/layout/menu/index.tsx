import Link from 'next/link'
export const Menu: React.FC = ()=>{
    return(
        <aside className="colum is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">minhas vendas</p>
           
            <ul>
               <MenuItem href='/' label='Home'/>

               <MenuItem href='/' label='Cadastros'/>

               <MenuItem href='/' label='Configuração'/>
               <MenuItem href='/' label='Sair'/>

            </ul>
        </aside>
    )
}

interface MenuItemProps{
    href:string;
    label:string;
}

const MenuItem: React.FC<MenuItemProps>= (props:MenuItemProps) =>{
    return(
        <li>
            <Link href={props.href}>
            
                <span className="icon"></span>{props.label}
            
            </Link>

        </li>
    )
}