import '../styles/about.css'
import logo from '../img/logo.jpg'

export const About=()=>{
    return(<>

	<div class="container">
		<div class="parallax">
        <div class="text-div">
			{/* <img src={logo}/> */}
			<h1>Dualice</h1>
            <br/>
            <h1>Бизнес с нами - это тренд</h1>
		</div>
        </div>
		<div class="text-div">
			<h1>Мы организация создающая высококачественные приложения и маркетинг по доступной цене для малого бизнеса</h1>
		</div>
		<div class="parallax-2"></div>
	</div>
    </>)
}