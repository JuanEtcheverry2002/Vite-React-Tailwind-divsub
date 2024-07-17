import React from "react";
import { useNavigate } from "react-router-dom";

const MenuLinks=[
    {
        id:1,
        name:"plataformas",
        link: "/plataformas"
    
    },

    {
        id:2,
        name:"video",
        link: "/video"
    },
    {
        id:3,
        name:"funciona",
        link: "/funciona"
    },
    {
        id:4,
        name:"acerca",
        link: "/acerca"
    }
]

const Navbar = ()=>{
    const navigate= useNavigate();
    const handleRegisterClick=()=>{
        navigate("/register")
    }
    const handleLoginClick=()=>{
        navigate("/login")
    }
    const handleScroll=(id)=>{
        document.getElementById(id).scrollIntoView({behavior: "smooth"})
    }
    return(

      <>
      <nav>
        <div className="container py-3 md:py-2">
            <div className="flex justify-between items-center">
                {/*LOGO SECTION*/}
                <div>
                    <a href="#" className="flex items-center gap-3"> 
                    <img src={Logo} alt="Logo" className="w-5" />
                    <span className="text-2xl sm:text-3xl font-semibold">
                        
                         DivSub
                         </span></a>
                </div>
                {/*NAVLINKS SECTION*/}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-8">{MenuLinks.map(({id,name,link})=>{
                        return(
                            <li key={id} className="cursor-pointer py-4">
                                <a href="#" className="text-lg font-medium 
                                hover:text-primary py-2
                                hover: border-b-2
                                hover: border-primary
                                transition-all duration-300"

                                
                                >{name}</a>
                            </li>
                        )
                    })}
                    <button className="btn-primary bg-primary text-white hover:bg-primary/80
                    durantion-300 rounded-lg py-2 px-4" onClick={handleLoginClick}></button>
                    <button className="btn-primaty" onClick={handleRegisterClick}></button>
                        </ul>


                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3">
                    <li> <a onClick={()=>handleScroll("home")}>Inicio</a></li>
                    <li> <a onClick={()=>handleScroll("plataformas")}>Plataformas</a></li>
                    <li> <a onClick={()=>handleScroll("video")}>Video</a></li>
                    <li> <a onClick={()=>handleScroll("Funcionamiento")}>Como funciona</a></li>
                    <li> <a onClick={()=>handleScroll("Acerca")}>Acerca</a></li>
                    </ul>

                </div>
            </div>
        </div>
      </nav>
      
      
      
      </>
    )
}

export default Navbar