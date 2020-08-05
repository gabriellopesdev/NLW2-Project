import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/52892714?s=460&u=be0a8dd37f738306fb95c903165aa08482382767&v=4" alt="Gabriel Lopes"/>
                <div>
                    <strong>Gabriel Lopes</strong> 
                    <span>Teoria musical</span>  
                </div>  
            </header>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                <br /><br />
                Quasi tenetur asperiores veniam incidunt corrupti ad iusto vitae velit sed cupiditate facilis, aliquam dignissimos voluptatum quod? Quia vel sapiente illo itaque?
            </p>
            <footer>  
                <p>
                    Preço por hora                          
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={ whatsappIcon } alt="WhatsApp"/>
                    Entrar em contato
                </button>    
            </footer>        
        </article>
    )
}

export default TeacherItem